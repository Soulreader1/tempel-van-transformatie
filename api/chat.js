export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Alleen POST toegelaten" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Geen bericht ontvangen" });
  }

  try {
    const apiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content:
              "Je bent Aïon, de intelligente gids van Kamer 1 in de Tempel van Transformatie. Reageer vriendelijk, mysterieus en betekenisvol."
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const json = await apiRes.json();
    const antwoord = json.choices?.[0]?.message?.content?.trim();

    res.status(200).json({ antwoord: antwoord || "(geen antwoord)" });
  } catch (err) {
    console.error("Fout bij OpenAI-request:", err);
    res.status(500).json({ error: "Interne fout bij Aïon" });
  }
}
