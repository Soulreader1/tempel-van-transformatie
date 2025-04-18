// /api/kamer1.js
export default function handler(req, res) {
  res.status(200).json({
    kamer: 1,
    welkom: "Welkom in Kamer 1 van de Tempel van Transformatie",
    status: "actief"
  });
}
