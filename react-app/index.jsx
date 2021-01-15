import React from 'react';
import ReactDOM from 'react-dom';
import ReportContext from './ReportContext';
import Report from './components/Report';

window.renderReport = (report) => {
  ReactDOM.render(
    <React.StrictMode>
      <ReportContext.Provider value={report}>
        <Report />
      </ReportContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
