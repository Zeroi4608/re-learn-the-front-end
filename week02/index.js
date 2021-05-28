const http = require("http");

http
  .createServer((request, response) => {
    let body = [];
    request
      .on("error", (err) => {
        console.error(err);
      })
      .on("data", (chunk) => {
        body.push(chunk.toString());
      })
      .on("end", () => {
        body = Buffer.concat([Buffer.from(body.toString())]).toString();
        console.log("body:", body);
        response.writeHead(200, {
          "Content-Type": "text/html",
        });
        response.end(
`<html maaa="a" lang="en">
  <head>
    <title>cool</title>
    <style>
      body div {
        width: 100px;
        background-color: cyan;
      }
      body div img {
        width: 30px;
        background-color: #999999;
      }
    </style>
  </head>
  <body>
    <div>
      <img src="a" style="margin: 10px;" />
    </div>
  </body>
</html>`
        );
      });
  })
  .listen(8088);

console.log("server started");
