import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

const paths = path.join(__dirname);

const port = 4000;

app.use(express.static(paths));
const handleListening = () => {
  console.log(`http://localhost:${port}`);
};
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, handleListening);
