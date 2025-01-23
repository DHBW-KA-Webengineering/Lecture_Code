// Beispieldaten
const users = [
    { id: 1, username: "user1", name: "Max", birthdate: "1990-01-01" },
    { id: 2, username: "user2", name: "Erika", birthdate: "1985-05-15" },
    { id: 3, username: "user3", name: "Hannelore", birthdate: "2013-12-24" },
    { id: 4, username: "user4", name: "Chris", birthdate: "1901-12-25" },
  ];
  
  var express = require("express");
  
  var app = express();
  app.use(express.json());
  
  app.listen(8080, () => console.log("Listening on port 8080"));
  
  // 1. /users: Gibt eine Liste von Benutzerobjekten mit Benutzername, Name, Id und Geburtsdatum zurück.
  app.get("/users", (_, res) => res.status(200).json(users));
  
  // 2. /users: Fügt einen neuen Benutzer hinzu. Die erforderlichen Daten sollen aus dem Request übermittelt werden.
  app.post("/users", (req, res) => {
    users.push(req.body);
    res.status(201).json(users[users.length - 1]);
  });
  
  // 3. /users/:id: Gibt die Details eines Benutzers basierend auf der ID zurück.
  app.get("/users/:id", (req, res) =>
    res.status(200).json(users.find((u) => u.id == req.params.id))
  );
  
  // 4.  /users/:id: Aktualisiert die Informationen eines Benutzers basierend auf der ID.
  // Die erforderlichen Daten sollen aus dem Request übermittelt werden.
  app.put("/users/:id", (req, res) => {
    const user = users.find((u) => u.id == req.params.id);
  
    user.username = req.body.username;
    user.name = req.body.name;
    user.birthdate = req.body.birthdate;
  
    res.status(200).json(user);
  });
  
  // 5. PATCH /users/:id: Aktualisiert einen Teil der Informationen eines Benutzers
  app.patch("/users/:id", (req, res) => {
    const user = users.find((u) => u.id == req.params.id);
  
    if (req.body.username) user.username = req.body.username;
    if (req.body.name) user.name = req.body.name;
    if (req.body.birthdate) user.birthdate = req.body.birthdate;
  
    res.status(200).json(user);
  });
  
  // 6. DELETE /users/:id: Löscht einen Benutzer basierend auf der ID
  app.delete("/users/:id", (req, res) => {
    const userIndex = users.findIndex((u) => u.id == req.params.id);
    users.splice(userIndex, 1);
    res.status(204).send();
  });
  