const express = require('express');
const LoanApplication = require('../models/LoanApplication');
const router = express.Router();

// Get all loan applications
router.get('/applications', async (req, res) => {
  try {
    const applications = await LoanApplication.find().populate('userId', 'name email phone');
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Evaluate a loan application
router.post('/evaluate', async (req, res) => {
  const { applicationId, creditworthinessScore, financialStabilityScore } = req.body;
  try {
    const application = await LoanApplication.findById(applicationId);
    application.creditworthinessScore = creditworthinessScore;
    application.financialStabilityScore = financialStabilityScore;
    application.overallDecision = (creditworthinessScore + financialStabilityScore > 80) ? 'Eligible' : 'Not Eligible';
    await application.save();
    res.json({ message: 'Application evaluated', decision: application.overallDecision });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
