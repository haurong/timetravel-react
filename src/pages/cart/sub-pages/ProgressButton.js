import React from 'react';
import { Button } from 'react-bootstrap';
function ProgressButton({ prev, next, step, maxSteps }) {
  return (
    <div className="d-flex justify-content-evenly mb-5">
      {step === 1 ? (
        ''
      ) : (
        <button type="button" class="btn btn-primary" onClick={prev}>
          上一步
        </button>
      )}

      {step !== maxSteps ? (
        <button type="button" class="btn btn-primary" onClick={next}>
          下一步
        </button>
      ) : (
        <button type="button" class="btn btn-primary" onClick={prev}>
          確認結帳
        </button>
      )}
    </div>
  );
}

export default ProgressButton;
