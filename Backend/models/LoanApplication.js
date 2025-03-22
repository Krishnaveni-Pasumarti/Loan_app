const mongoose = require('mongoose');

const loanApplicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  personalDetails: {
    age: { type: Number, required: true },
    address: { type: String, required: true },
  },
  financialDetails: {
    monthlyIncome: { type: Number, required: true },
    requestedLoanAmount: { type: Number, required: true },
    tenure: { type: Number, required: true }, // In months
  },
  cibilData: {
    score: { type: Number, required: true },
    debtToIncomeRatio: { type: Number, required: true },
  },
  bankData: {
    annualIncome: { type: Number, required: true },
    employerName: { type: String, required: true },
    designation: { type: String, required: true },
  },
  creditworthinessScore: { type: Number, default: 0 },
  financialStabilityScore: { type: Number, default: 0 },
  overallDecision: { type: String, enum: ['Eligible', 'Not Eligible', 'Pending'], default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('LoanApplication', loanApplicationSchema);

