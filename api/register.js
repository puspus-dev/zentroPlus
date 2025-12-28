let users = [];

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { username, email, password } = req.body;

  users.push({ username, email, password });

  res.status(200).json({ success: true });
}
