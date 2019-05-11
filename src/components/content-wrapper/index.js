import React from 'react';
import './index.css';

const ContentWrapper = ({ align, form, children }) => {

  const className = (align === 'top') ? 'sg-content-outer top' : 'sg-content-outer';
  const maxWidth = form ? 768 : 1200;

  return (
    <div className={className}>
      <div className="sg-content-inner" style={{ maxWidth }}>
        { children }
      </div>
    </div>
  );
  
};

export default ContentWrapper;
