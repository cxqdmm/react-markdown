import React, { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useForceUpdate } from '../../useForceUpdate';
import { transformRange2Time } from '../util';
import { IRange } from '../interface';
import cls from 'classnames';
import './index.less';
import { Slice } from './Slice';
import { map } from 'lodash';
import { Overlap } from './Overlap';

const PREFIX = 'Slider';

interface IProps {
  className?: string;
  value?: IRange;
  overlap?: IRange[];
  steps?: number;
  index: number;
  onChange?: (value: IRange) => void;
  onDelete?: () => void;
}

const Slider: React.FC<IProps> = React.memo(function Slider(props) {
  const { className, steps = 1440, value, onChange, index, overlap, onDelete } = props;
  const wrapRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    if (wrapRef.current) {
      const { width } = wrapRef.current.getBoundingClientRect();
      setWidth(width);
    }
  }, []);
  const handleRangeChange = useCallback(
    (value) => {
      if (value) {
        onChange?.(value);
      }
    },
    [onChange],
  );

  return (
    <div className={cls(`${PREFIX}`, className)}>
      <div className={cls(`${PREFIX}-body`, className)} ref={wrapRef}>
        {value && (
          <Slice value={value} steps={steps} parentWidth={width} onChange={handleRangeChange} />
        )}
        {map(overlap, (item, idx) => (
          <Overlap key={idx} value={item} steps={steps} />
        ))}
      </div>
      <div className={`${PREFIX}-footer`}>
        <span>{index}</span>
        <span className={`${PREFIX}-time`}>{transformRange2Time(value)}</span>
        <span className={`${PREFIX}-delete`} onClick={onDelete}>
          x
        </span>
      </div>
    </div>
  );
});

export default Slider;
