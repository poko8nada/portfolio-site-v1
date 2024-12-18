import express from 'express';
import path from 'node:path';
import fs from 'node:fs';
import chokidar from 'chokidar';

const app = express();

app.listen(4000, () => {
  console.log('http://localhost:4000');
  let isUpdating = false;
  const postTs = path.join(process.cwd(), '/src/lib/post.ts');
  console.log(postTs);

  const onChangePost = () => {
    if (isUpdating) return;
    isUpdating = true;
    const content = fs.readFileSync(postTs, 'utf-8');
    // libファイルにコードを書き加えて強制的にHMRを起こす
    fs.writeFileSync(
      postTs,
      `${content}\nconsole.log('updatedAt: ${new Date().toISOString()}')`,
    );

    // 1秒後に元に戻す
    setTimeout(() => {
      fs.writeFileSync(postTs, content);
      isUpdating = false;
    }, 1000);
  };

  chokidar
    .watch(path.join(process.cwd(), '/src/posts'), { ignoreInitial: true })
    .on('add', onChangePost)
    .on('change', onChangePost);
});
