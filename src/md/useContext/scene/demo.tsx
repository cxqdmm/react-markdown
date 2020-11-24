import React, { useContext, useState } from 'react';

const countContext = React.createContext<{ count?: number }>({});
countContext.displayName = 'Count';

const Demo: React.FC = function Demo(props) {
  const [count, setCount] = useState<number>();
  const [name, setName] = useState<number>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(~~e.target.value);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(~~e.target.value);
  };

  return (
    <countContext.Provider value={{ count }}>
      <input type="text" value={count} onChange={handleChange} />
      <input type="text" value={name} onChange={handleNameChange} />
      <Receiver />
    </countContext.Provider>
  );
};

const Receiver: React.FC = function Receiver() {
  const { count } = useContext(countContext);
  console.log('renderer');
  return <div>{count}</div>;
};

export default Demo;
