import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ step }) => {
  return (
    <div className="progress-wrapper">
      <div className="progress-steps">
        {[1, 2, 3].map((s, i) => (
          <React.Fragment key={s}>
            <div className={`circle ${step >= s ? "active" : ""}`}>{s}</div>
            {i < 2 && <div className={`bar ${step > s ? "filled" : ""}`}></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
