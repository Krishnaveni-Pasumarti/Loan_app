import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/admin/applications', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setApplications(res.data);
    };
    fetchApplications();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {applications.map(app => (
          <li key={app._id}>
            {app.userId.name}: {app.financialDetails.requestedLoanAmount} (Status: {app.overallDecision || 'Pending'})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;

