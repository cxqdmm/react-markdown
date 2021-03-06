import React, { useContext, useEffect, useRef, useState } from 'react';
import Conclusion, { H1, H2, Panel, Scene } from '../../../components/Common';

const countContext = React.createContext<{ count?: string }>({ count: '' });
countContext.displayName = 'Count';

const First: React.FC = React.memo(function First(props) {
  const [count, setCount] = useState<string>('1');
  const [name, setName] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(e.target.value);
  };
  return (
    <>
      <Scene>
        <countContext.Provider value={{ count }}>
          <H1>场景1: 验证在什么情况接收人会响应更新</H1>
          <div>
            <span>name：</span>
            <input value={name} onChange={handleChange} />
          </div>
          <Panel>
            <H2>context</H2>
            <span>count：</span>
            <input value={count} onChange={handleChangeCount} />
            <Receiver />
          </Panel>
        </countContext.Provider>
      </Scene>
      <Conclusion>context属性的值或者引用变了，接收者才能拿到更新</Conclusion>
    </>
  );
});

export default First;

const Receiver: React.FC = React.memo(function Receiver() {
  const { count } = useContext(countContext);
  const renderCount = useRef<number>(1);
  useEffect(() => {
    renderCount.current += 1;
  });
  return (
    <Panel>
      <H2>我是接收人</H2>
      收到的count：{count}
      <div>收到通知的次数：{renderCount.current}</div>
    </Panel>
  );
});
