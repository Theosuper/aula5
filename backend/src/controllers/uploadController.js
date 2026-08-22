export function store(req, res) {
  if (!req.file) {
    return res.status(400).json({
      error: "Não recebi nenhum arquivo",
    });
  }
  res.json({
    filename: req.file.filename,
    url: `http://localhost:8080/uploads/${req.file.filename}`,
  });
}
