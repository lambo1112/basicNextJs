import fs from "fs";
import path from "path";
function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email Address." });
      return;
    }
    res.status(201).json({ message: "Signed up!" });
  }
  const filepath = path.join(process.cwd(), "data", "lettler.json");
  const fileData = fs.readFileSync(filepath);
}

export default handler;
