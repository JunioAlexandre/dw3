const mdlCursos = require('../model/mdlCursos');

// Controller handlers that call model functions
exports.GetAllCursos = async (req, res) => {
  try {
    const rows = await mdlCursos.GetAllCursos();
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.GetCursoByID = async (req, res) => {
  try {
    const cursoid = req.params.cursoid;
    const rows = await mdlCursos.GetCursoByID(cursoid);
    if (rows && rows.length > 0) res.status(200).json(rows[0]);
    else res.status(404).json({ message: 'Curso não encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.InsertCurso = async (req, res) => {
  try {
    const resultado = await mdlCursos.InsertCurso(req.body);
    if (resultado.linhasAfetadas && resultado.linhasAfetadas > 0)
      res.status(201).json({ message: 'Inserido', resultado });
    else res.status(400).json({ message: 'Erro ao inserir', resultado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.UpdateCurso = async (req, res) => {
  try {
    const cursoid = req.params.cursoid;
    const resultado = await mdlCursos.UpdateCurso(cursoid, req.body);
    if (resultado.linhasAfetadas && resultado.linhasAfetadas > 0)
      res.status(200).json({ message: 'Atualizado', resultado });
    else res.status(400).json({ message: 'Erro ao atualizar', resultado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.DeleteCurso = async (req, res) => {
  try {
    const cursoid = req.params.cursoid;
    const resultado = await mdlCursos.DeleteCurso(cursoid);
    if (resultado.linhasAfetadas && resultado.linhasAfetadas > 0)
      res.status(200).json({ message: 'Removido', resultado });
    else res.status(400).json({ message: 'Erro ao remover', resultado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = exports;
