const express = require('express');
const app = express();
const path = require('path');

// 设置静态文件目录
app.use(express.static(__dirname));

// 设置路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'about-me.html'));
});

app.get('/interest', (req, res) => {
    res.sendFile(path.join(__dirname, 'interest.html'));
});

app.get('/hobby', (req, res) => {
    res.sendFile(path.join(__dirname, 'hobby.html'));
});

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
