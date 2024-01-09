const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Obtener la lista de trabajos
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener detalles de un trabajo por ID
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Otras rutas para el panel de empleador, el panel del candidato, etc.

module.exports = router;
