import React from 'react';
import First from './scene/first';
import Second from './scene/second';
import Third from './scene/third';

const UseContext: React.FC = React.memo(function UseContext(props) {
  return (
    <div>
      <First />
      <Second />
      <Third />
    </div>
  );
});

export default UseContext;
