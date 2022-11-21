import { StepContext } from '@mui/material';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
function ProgressButton({ prev, next, step, maxSteps }) {
  return (
    <div className="d-flex justify-content-evenly mb-5">
      <Button
        className="signin-btn"
        variant="primary"
        type="button"
        onClick={prev}
        disabled={step === 1}
      >
        上一步
      </Button>
      <Button
        className="signin-btn"
        variant="primary"
        type="button"
        onClick={next}
      >
        下一步
      </Button>
    </div>
  );
}

export default ProgressButton;
