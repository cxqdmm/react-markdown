import React, { useContext, useEffect, useRef, useState } from 'react';
import Conclusion, { H1, H2, Panel, Scene } from '../../../components/Common';

const countContext = React.createContext<{ fish?: number; fruit?: number }>({});

const Third: React.FC = React.memo(function Third(props) {
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
          <H1>
            场景3: 当context其中一个属性变化时，所有接收者是否都会触发re-render 即使没有使用该属性？
          </H1>

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
        当context其中一个属性变化时，所有接收者是否都会触发re-render 即使没有使用该属性。
        <div>有没有破解之法？</div>
      </Conclusion>
    </>
  );
});

export default Third;

const FishReceiver: React.FC = React.memo(function Receiver(props) {
  const { fish } = useContext(countContext);
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
});

const FruitReceiver: React.FC = React.memo(function Receiver(props) {
  const { fruit } = useContext(countContext);
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
});
