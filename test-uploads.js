const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

// Thay thế bằng JWT token của bạn
const JWT_TOKEN = 'YOUR_JWT_TOKEN';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Authorization': `Bearer ${JWT_TOKEN}`
  }
});

async function testUploads() {
  try {
    // 1. Tạo thư mục mới
    console.log('1. Tạo thư mục mới...');
    await api.post('/uploads/folders', {
      folderPath: 'test-folder'
    });
    console.log('✅ Tạo thư mục thành công');

    // 2. Tạo file test
    console.log('\n2. Tạo file test...');
    fs.writeFileSync('test.txt', 'This is a test file');
    
    // 3. Upload file vào thư mục
    console.log('\n3. Upload file...');
    const formData = new FormData();
    formData.append('file', fs.createReadStream('test.txt'));
    
    const response = await api.post('/uploads?folder=test-folder', formData, {
      headers: {
        ...formData.getHeaders()
      }
    });
    console.log('✅ Upload thành công:', response.data);

    // 4. Kiểm tra nội dung thư mục
    console.log('\n4. Kiểm tra nội dung thư mục...');
    const files = await api.get('/uploads?prefix=test-folder');
    console.log('Danh sách files:', files.data);

    // 5. Dọn dẹp
    fs.unlinkSync('test.txt');
    
  } catch (error) {
    console.error('❌ Lỗi:', error.response?.data || error.message);
  }
}

testUploads(); 