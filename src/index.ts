import { createExpressServer } from 'routing-controllers';

const port = 3000;
const baseDir = __dirname;
const app = createExpressServer({
  controllers: [`${baseDir}/controllers/{*.js,*.ts}`],
  middlewares: [`${baseDir}/middlewares/{*.js,*.ts}`],
});

app.listen(port, () => console.log(`Express is listening at http://localhost:${port}`));
