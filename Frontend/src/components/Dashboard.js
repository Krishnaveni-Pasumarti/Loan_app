import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to the User Dashboard</h2>
      <button onClick={() => navigate('/apply-loan')}>Apply for Loan</button>
    </div>
  );
}

export default Dashboard;

