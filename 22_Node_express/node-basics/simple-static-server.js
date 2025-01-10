// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2024 Lukas Panni
import { createServer } from "http";
import { readFile } from "fs";

createServer((request, response) => {
  const fileName = request.url.substring(1);

  readFile(fileName, (error, data) => {
    console.log(error, data);
    if (error != null) {
      console.error(error);
      response.writeHead(404);
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(String(data));
    }
    response.end();
  });
}).listen(80);
