import React from 'react';

export default function Capabilities() {
  const capabilities = [
    'WEB DEVELOPMENT',
    'APP DEVELOPMENT',
    'UI/UX DESIGN',
    'Responsive Design',
    'DIGITAL SOLUTIONS'
  ];

  return (
    <div className="capabilities-strip" id="capabilities-strip">
      <div className="container">
        <div className="capabilities-track" id="capabilities-track">
          {capabilities.map((item, index) => (
            <React.Fragment key={item}>
              <div className="capability-item" id={`capability-item-${index + 1}`}>
                <span>{item}</span>
              </div>
              {index < capabilities.length - 1 && (
                <span className="capability-separator" aria-hidden="true">
                  •
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
