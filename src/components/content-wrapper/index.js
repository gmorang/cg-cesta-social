import React from 'react';
import './index.css';

const ContentWrapper = ({ align, form, children }) => {
  const className = align === 'top' ? 'content-outer top' : 'content-outer';
  const maxWidth = form ? 768 : 1200;

  return (
    <div className={className}>
      <div className="content-inner" style={{ maxWidth }}>
        {children}
      </div>
    </div>
  );
};

export default ContentWrapper;
