import React from 'react';
import { Button } from 'react-bootstrap';
function ProgressButton() {
  return (
    <div className="d-flex justify-content-evenly mb-5">
      <Button className="signin-btn" variant="primary" type="button">
        上一步
      </Button>
      <Button className="signin-btn" variant="primary" type="button">
        下一步
      </Button>
    </div>
  );
}

export default ProgressButton;
