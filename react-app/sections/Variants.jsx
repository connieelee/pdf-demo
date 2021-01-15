import React, { useContext } from 'react';
import ReportContext from '../ReportContext';

const Variants = () => {
  const { variants } = useContext(ReportContext);
  return (
    <div className="section">
      <h2>Genomic Variants</h2>
      {!variants || !variants.length
        ? <p>No variants to report.</p>
        : (
          <ul>
            {variants.map(variant => <li>{variant}</li>)}
          </ul>
        )}
    </div>
  );
};

export default Variants;
