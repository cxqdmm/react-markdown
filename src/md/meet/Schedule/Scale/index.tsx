import React, { useMemo } from 'react';
import cls from 'classnames';
import './index.less';

const PREFIX = 'TimePeriodScale';
const Scale: React.FC<{ max: number; min: number; step: number; className?: string }> = React.memo(
  function Scale(props) {
    const { max, min, step, className } = props;

    const scales = useMemo(() => {
      let data: Array<{ value: number; length: number; text: number; textVisible: boolean }> = [];
      let cursor = min;
      let index = 0;
      while (cursor <= max) {
        data.push({
          value: cursor,
          length: cursor / max,
          text: cursor,
          textVisible: !(index % 2),
        });
        index++;
        cursor += step;
      }
      return data;
    }, [max, min, step]);
    return (
      <div className={cls(className, `${PREFIX}`)}>
        {scales.map((scale) => (
          <div
            className={`${PREFIX}-pin`}
            style={{
              position: 'absolute',
              left: `${scale.length * 100}%`,
              top: 0,
            }}
          >
            <span className={cls(`${PREFIX}-pinText`, { 'is-visible': scale.textVisible })}>
              {scale.text}
            </span>
          </div>
        ))}
      </div>
    );
  },
);

export default Scale;
