import { Connection } from 'mongoose';
import { User } from '../users/schemas/user.schema';
import * as bcrypt from 'bcrypt';

export async function seedUsers(connection: Connection) {
  try {
    console.log('Đang lấy User model...');
    const UserModel = connection.model(User.name);
    
    // Kiểm tra xem đã có superadmin chưa
    console.log('Kiểm tra superadmin...');
    const existingSuperAdmin = await UserModel.findOne({ email: 'admin@mystic.vn' });
    
    if (existingSuperAdmin) {
      console.log('✓ Superadmin đã tồn tại, bỏ qua');
      return;
    }
    
    // Hash password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash('admin123', salt);
    
    // Tạo superadmin
    const superAdmin = {
      firstName: 'Super',
      lastName: 'Admin',
      email: 'admin@mystic.vn',
      password: hashedPassword,
      roles: ['admin', 'user'],
      isEmailVerified: true,
      isActive: true
    };
    
    await UserModel.create(superAdmin);
    console.log('✓ Đã tạo superadmin thành công');
    
  } catch (error) {
    console.error('❌ Lỗi trong quá trình tạo superadmin:', error);
    throw error;
  }
} 