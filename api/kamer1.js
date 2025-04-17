export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // <<< DIT LAAT ALLES TOE
  res.status(200).json({
    kamer: 1,
    welkom: "Welkom in Kamer 1 van de Tempel van Transformatie",
    status: "actief"
  });
}
