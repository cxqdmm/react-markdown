import React, { CSSProperties, useMemo } from 'react';
import { IRange } from '../../interface';
import './index.less';

const PREFIX = 'Overlap';

interface IItems {
  className?: string;
  value: IRange;
  steps: number;
}

export const Overlap: React.FC<IItems> = React.memo(function Slice(props) {
  const { steps, value } = props;
  const [start, end] = value;

  const styles = useMemo(() => {
    return {
      left: `${(start / steps) * 100}%`,
      right: `${(1 - end / steps) * 100}%`,
    } as CSSProperties;
  }, [end, start, steps]);

  return <div style={styles} className={PREFIX}></div>;
});
