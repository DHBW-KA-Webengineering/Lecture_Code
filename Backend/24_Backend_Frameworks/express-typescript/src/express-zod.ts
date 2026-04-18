import { z } from "zod";
import express from "express";

const app = express();
app.use(express.json());

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

app.post("/users", (request, response) => {
  const { success, data, error } = userSchema.safeParse(request.body);
  if (!success) {
    return response.status(400).json({ error: error.issues });
  }
  // Weiterverarbeitung von validierten Daten in `data`
  console.log(data);
});
