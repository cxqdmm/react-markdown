import React, { useContext, useEffect, useRef, useState } from 'react';
import Conclusion, { H1, H2, Panel, Scene } from '../../../components/Common';
import DataProvider from '../DataProvider';

const countContext = React.createContext<{ fish?: number; fruit?: number }>({});

const Fourth: React.FC = React.memo(function Third(props) {
  const [fish, setFish] = useState<number>();
  const [fruit, setFruit] = useState<number>();

  const handleChangeFish = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFish(~~e.target.value);
  };
  const handleChangeFruit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFruit(~~e.target.value);
  };
  return (
    <>
      <Scene>
        <countContext.Provider value={{ fish, fruit }}>
          <H1>场景4: 尝试用props传入的方式破解场景3中遇到的问题</H1>

          <Panel>
            <H2>批发市场（context）</H2>
            <div>
              <span>鱼：</span>
              <input value={fish} onChange={handleChangeFish} />
            </div>
            <div>
              <span>水果：</span>
              <input value={fruit} onChange={handleChangeFruit} />
            </div>
            <FishReceiver />
            <FruitReceiver />
          </Panel>
        </countContext.Provider>
      </Scene>
      <Conclusion>
        用props传入的方式可以在一定程度上解决这个问题。 QA: 这个方法有啥优缺点？
      </Conclusion>
    </>
  );
});

export default Fourth;

const FishReceiver: React.FC = DataProvider(
  () => {
    const { fish } = useContext(countContext);
    return { fish };
  },
  React.memo(function Receiver({ fish }) {
    const renderCount = useRef<number>(1);
    useEffect(() => {
      renderCount.current += 1;
    });

    return (
      <Panel>
        <H2>水产商人：</H2>
        当前鱼总数：{fish}
        <div>收到通知的次数：{renderCount.current}</div>
      </Panel>
    );
  }),
);

const FruitReceiver: React.FC = DataProvider(
  () => {
    const { fruit } = useContext(countContext);
    return { fruit };
  },
  React.memo(function Receiver({ fruit }) {
    const renderCount = useRef<number>(1);
    useEffect(() => {
      renderCount.current += 1;
    });
    return (
      <Panel>
        <H2>水果商人：</H2>
        当前水果总数：{fruit}
        <div>收到通知的次数：{renderCount.current}</div>
      </Panel>
    );
  }),
);
