import React from 'react';
import cls from 'classnames';
import First from './scene/first';

const UseContext: React.FC = React.memo(function UseContext(props) {
  return (
    <div>
      <First />
    </div>
  );
});

export default UseContext;
