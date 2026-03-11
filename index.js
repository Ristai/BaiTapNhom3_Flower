const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Cấu hình Express để phục vụ các tệp tĩnh (như css, hình ảnh, js) từ thư mục hiện tại
app.use(express.static(__dirname));

// Route '/' sẽ trả file index.html khi truy cập web
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Chạy server ở cổng 3000
app.listen(port, () => {
    console.log(`Server Node.js đang chạy tại: http://localhost:${port}`);
});
