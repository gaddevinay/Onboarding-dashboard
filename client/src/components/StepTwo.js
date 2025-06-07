import React from 'react';
import '../App.css';
import ProgressBar from './ProgressBar';

export default function StepTwo({ nextStep, prevStep, handleChange, formData, errors }) {
  return (
    <div className="container">
      <ProgressBar step={2} />
      <h2>Step 2: Business Info</h2>

      <input name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} />
      {errors.company && <span className="error">{errors.company}</span>}

      <input name="industry" placeholder="Industry" value={formData.industry} onChange={handleChange} />
      {errors.industry && <span className="error">{errors.industry}</span>}

      <input name="size" placeholder="Company Size" value={formData.size} onChange={handleChange} />
      {errors.size && <span className="error">{errors.size}</span>}

      <div className="buttons">
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
}
