import { createServer } from "http";

createServer((request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/html",
  });
  response.write(
    "<!DOCTYPE html>\n<html>\n<head>\n<title>Test</title>\n</head>\n<body>\n<h1>Test</h1>\n</body>\n</html>\n"
  );
  response.end();
}).listen(80);
