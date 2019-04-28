import React from "react";

const Spinner = props => (
  <div className="d-flex text-primary justify-content-center">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default Spinner;
