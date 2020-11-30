import React, { PropsWithChildren, useContext, useState } from 'react';

const countContext = React.createContext<{ count?: number; height?: number }>({});
countContext.displayName = 'Count';

const Demo: React.FC = function Demo(props) {
  const [count, setCount] = useState<number>();
  const [height, setHeight] = useState<number>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(~~e.target.value);
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(~~e.target.value);
  };

  return (
    <countContext.Provider value={{ count, height }}>
      <input type="text" value={count} onChange={handleChange} />
      <input type="text" value={height} onChange={handleHeightChange} />
      <Receiver />
    </countContext.Provider>
  );
};
export default Demo;
const Receiver: React.FC = React.memo(function Receiver() {
  const { count } = useContext(countContext);
  console.log('render');
  return <div>{count}</div>;
});
