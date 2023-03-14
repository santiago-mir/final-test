import * as express from "express";

const app = express();
const PORT = 3000;

app.get("/hola", (req, res) => {
  res.json({
    message: "hola mundo desde el servidor",
  });
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto", PORT);
});
