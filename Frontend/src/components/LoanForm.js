import React, { useState } from 'react';
import axios from 'axios';

function LoanForm() {
  const [formData, setFormData] = useState({
    age: '',
    address: '',
    monthlyIncome: '',
    requestedLoanAmount: '',
    tenure: '',
    cibilScore: '',
    annualIncome: '',
    employerName: '',
    designation: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/loans/apply', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Loan application submitted successfully');
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div>
      <h2>Loan Application Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Age" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} required />
        <input type="text" placeholder="Address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} required />
        <input type="number" placeholder="Monthly Income" value={formData.monthlyIncome} onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })} required />
        <input type="number" placeholder="Requested Loan Amount" value={formData.requestedLoanAmount} onChange={(e) => setFormData({ ...formData, requestedLoanAmount: e.target.value })} required />
        <input type="number" placeholder="Tenure (Months)" value={formData.tenure} onChange={(e) => setFormData({ ...formData, tenure: e.target.value })} required />
        <input type="number" placeholder="CIBIL Score" value={formData.cibilScore} onChange={(e) => setFormData({ ...formData, cibilScore: e.target.value })} required />
        <input type="number" placeholder="Annual Income" value={formData.annualIncome} onChange={(e) => setFormData({ ...formData, annualIncome: e.target.value })} required />
        <input type="text" placeholder="Employer Name" value={formData.employerName} onChange={(e) => setFormData({ ...formData, employerName: e.target.value })} required />
        <input type="text" placeholder="Designation" value={formData.designation} onChange={(e) => setFormData({ ...formData, designation: e.target.value })} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoanForm;

