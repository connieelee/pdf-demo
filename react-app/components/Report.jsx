import React from 'react';
import Page from './Page';
import {
  PatientInfo,
  Variants,
  Therapies,
} from '../sections';

const Report = () => {
  /**
   * Note: the actual pdf-service has complex and dynamic
   * paginating logic, which I've omitted from this demo.
   * Instead, I'm statically defining contents for each page.
   */
  const pages = [
    <div>
        <PatientInfo />
        <Variants />
    </div>,
    <div>
      <Therapies />
    </div>,
  ];

  return pages.map((contents, idx) => (
    <Page
      pageNumber={idx + 1}
      totalPages={pages.length}
    >
      {contents}
    </Page>
  ));
};

export default Report;
