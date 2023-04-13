import { connectDatabase, insertDocument } from "@/helpers/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email Address." });
      return;
    }
    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed!" });
      return;
    }
    try {
      const result = await insertDocument(client, "newsletter", {
        email: userEmail,
      });
      res.status(201).json({ message: "Signed up!" });
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
    }

    client.close();
  }
}

export default handler;
