import React, { useContext } from 'react';
import ReportContext from '../ReportContext';

const Therapies = () => {
  const { therapies } = useContext(ReportContext);
  return (
    <div className="section">
      <h2>Treatment Options</h2>
      {!therapies || !therapies.length
        ? <p>No treatment options to recommend.</p>
        : (
          <ul>
            {therapies.map(therapy => <li>{therapy}</li>)}
          </ul>
        )}
    </div>
  );
};

export default Therapies;
