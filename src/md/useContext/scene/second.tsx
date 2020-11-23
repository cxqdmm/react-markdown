import React, { useContext, useEffect, useState } from 'react';
import Conclusion, { H1, H2, Panel, Scene } from '../../../components/Common';

const countContext = React.createContext<{ count: number }>({ count: 0 });

const Second: React.FC = React.memo(function Second(props) {
  return (
    <>
      <Scene>
        <H1>场景2: 同一个context提供多个嵌套的provider，接收者接收到的是哪个provider的数据？</H1>
        <Panel>
          <H2>context: {`${'{count: 0}'}`}</H2>
          <countContext.Provider value={{ count: 1 }}>
            <Panel>
              <H2>provider1: {`${'{count: 1}'}`}</H2>
              <countContext.Provider value={{ count: 2 }}>
                <Panel>
                  <H2>provider2: {`${'{count: 2}'}`}</H2>
                  <Receiver />
                </Panel>
              </countContext.Provider>

              <Receiver />
            </Panel>
          </countContext.Provider>
          <Receiver />
        </Panel>
      </Scene>
      <Conclusion>就近原则</Conclusion>
    </>
  );
});

export default Second;

const Receiver: React.FC = React.memo(function Receiver(props) {
  const { count } = useContext(countContext);
  return (
    <Panel>
      <H2>我是接收人</H2>
      收到的count：{count}
    </Panel>
  );
});
