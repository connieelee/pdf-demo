import React, { useContext } from 'react';
import ReportContext from '../ReportContext';

const PatientInfo = () => {
  const { patientInfo } = useContext(ReportContext);
  const { fullName, birthDate } = patientInfo;
  return (
    <div className="section">
      <h2>Patient Info</h2>
      <p>Full name: {fullName || 'Unknown'}</p>
      <p>Date of birth: {birthDate || 'Unknown'}</p>
    </div>
  );
};

export default PatientInfo;
