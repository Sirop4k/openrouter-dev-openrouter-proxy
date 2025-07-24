export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const clientSecret = req.headers["authorization"];
  if (clientSecret !== `Bearer ${process.env.ACCESS_SECRET}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { messages } = req.body;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1-0528:free",
        messages,
      }),
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: "Proxy failed" });
  }
}
