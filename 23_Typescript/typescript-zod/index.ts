// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2024 Lukas Panni
import express from "express";
import { z } from "zod";

const todoSchema = z.object({
  id: z.string(),
  title: z.string().min(1), // mindestens ein Zeichen
  completed: z.boolean().optional(), // optional => T | undefined
});

/**
 * type Todo = {
 *   id: string;
 *   title: string;
 *   completed?: boolean;
 * }
 *
 * wird hier nicht benötigt, infer erzeugt den Typ auf basis des Schemas
 */

type Todo = z.infer<typeof todoSchema>;

const data: Todo[] = [];

const app = express();

app.get("/todos", (req, res) => {
  res.json(data);
});

app.post("/todos", express.json(), (req, res) => {
  try {
    const todo = todoSchema.parse(req.body); // parse wirft einen Fehler, wenn das Schema nicht erfüllt ist
    data.push(todo);
    res.status(201).json(todo);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
});

app.put("/todos/:id", express.json(), (req, res) => {
  const { id } = req.params;
  const optionalTodoSchema = todoSchema
    .partial() // alle felder optional
    .extend({
      id: z.string(),
    }); // id als required hinzufügen

  const { success, data: parsedData, error } = optionalTodoSchema.safeParse(req.body); // safeParse gibt ein Objekt zurück, kein Fehler wird geworfen

  if (!success) {
    res.status(400).json({ errors: error.errors });
    return;
  }

  const todoIndex = data.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) {
    res.status(404).json({ message: "Todo not found" });
    return;
  }

  const todo = data[todoIndex];
  if (parsedData.title) {
    todo.title = parsedData.title;
  }
  if (parsedData.completed !== undefined) {
    todo.completed = parsedData.completed;
  }
  data[todoIndex] = todo;

  res.status(200).json(todo);
});

app.listen(80);
