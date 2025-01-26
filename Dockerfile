FROM node:20-alpine

WORKDIR /app

# Cài đặt các dependencies cần thiết cho bcrypt
RUN apk add --no-cache make gcc g++ python3

COPY package*.json ./

# Xóa node_modules nếu có
RUN rm -rf node_modules

# Cài đặt dependencies và rebuild bcrypt
RUN npm install
RUN npm rebuild bcrypt --build-from-source

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start:dev"] 