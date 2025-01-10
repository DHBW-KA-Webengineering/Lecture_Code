import express from "express";

const app = express();
app.get(
  "/",
  (request, response, next) => {
    response.locals.responseText = "Antwort von erstem Handler\n";
    next();
  },
  (request, response) => {
    setTimeout(() => {
      response.locals.responseText += "Antwort von zweitem Handler";
      response.send(response.locals.responseText);
    }, 1000);
  }
);
app.listen(80, () => {
  console.log("Server gestartet");
});
