import express from 'express'

const app = express();

app.listen(3000, () => {
  console.log('app is running on 3000 port');
})

// 把服务器public文件夹作为静态资源文件夹，可直接访问
app.use(express.static('public'));

export default app;