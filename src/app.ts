import express, { Request, Response } from "express";
import http from "http";

const app = express();
const port = 3000;

export var sum = (x: number, y: number) => {
    return x + y;
}

let server: http.Server;
beforeAll((done) => {
  const app = express();
  app.get('/', (req: Request, res: Response) => {
    res.send(`Hello world! 5 + 3 = ${sum(5, 3)}`);
  });

  server = http.createServer(app);
  server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

