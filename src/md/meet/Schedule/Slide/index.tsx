import React, { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useForceUpdate } from '../../useForceUpdate';
import { transformRange2Time } from '../util';
import { IRange } from '../interface';
import cls from 'classnames';
import './index.less';

const PREFIX = 'Slide';

interface IProps {
  className?: string;
  value?: IRange;
  steps?: number;
  onChange?: (value: IRange) => void;
}

const width = 1440;

function setDocumentCursor(cursor: string) {
  document.body.style.cursor = cursor;
}
const Slide: React.FC<IProps> = React.memo(function Slide(props) {
  const { className, steps = 1440, value: slice, onChange } = props;
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);
  const handleRangeChange = useCallback(
    (value) => {
      if (value) {
        onChange?.(value);
      }
    },
    [onChange],
  );

  return (
    <div className={cls(`${PREFIX}`, className)} ref={wrapRef}>
      {slice && (
        <Slice value={slice} steps={steps} wrapWidth={width} onChange={handleRangeChange} />
      )}
    </div>
  );
});

export default Slide;

/**
 * value: [start, end]     0 < start < end < steps;
 */
interface IItems {
  className?: string;
  value: IRange;
  steps: number;
  wrapWidth: number;
  onChange?: (value: IRange | undefined) => void;
}

const Slice: React.FC<IItems> = React.memo(function Slice(props) {
  const { className, steps, value, wrapWidth, onChange } = props;
  const forceUpdate = useForceUpdate();

  const cache = useRef<IRange>(value);
  const [isActive, setIsActive] = useState<boolean>(false);
  useMemo(() => {
    cache.current = value;
  }, [value]);

  const [start, end] = cache.current;

  const styles = useMemo(() => {
    return {
      left: `${(start / steps) * 100}%`,
      right: `${(1 - end / steps) * 100}%`,
    } as CSSProperties;
  }, [end, start, steps]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsActive((prev) => !prev);
  }, []);

  const handleDrag = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      // @ts-ignore
      const type = e.currentTarget.dataset.type;
      // 起点
      const startX = e.clientX;
      function moveMove(e: MouseEvent) {
        let currentX = e.clientX,
          offset = (Math.floor(currentX - startX) / wrapWidth) * steps,
          nextLeft = cache.current[0],
          nextRight = cache.current[1];

        if (type === 'left') {
          nextLeft += offset;
          nextLeft = Math.min(Math.max(0, nextLeft), nextRight);
        } else {
          nextRight += offset;
          nextRight = Math.min(steps, Math.max(nextRight, nextLeft));
        }
        setDocumentCursor('w-resize');
        cache.current = [nextLeft, nextRight];

        forceUpdate();
      }

      function moveUp() {
        onChange?.(cache.current);
        document.removeEventListener('mousemove', moveMove);
        document.removeEventListener('mouseup', moveUp);
        setDocumentCursor('initial');
      }
      document.addEventListener('mousemove', moveMove);
      document.addEventListener('mouseup', moveUp);
    },
    [forceUpdate, onChange, steps, wrapWidth],
  );

  return (
    <div style={styles} className={`${PREFIX}-sliceBox`}>
      <div
        className={cls(`${PREFIX}-slice`, className, { 'is-active': isActive })}
        onMouseDown={handleClick}
      >
        <span
          className={cls(`${PREFIX}-sliceLeftDrag`, { 'is-visible': isActive })}
          data-type="left"
          onMouseDown={handleDrag}
        ></span>
        <span
          className={cls(`${PREFIX}-sliceRightDrag`, { 'is-visible': isActive })}
          data-type="right"
          onMouseDown={handleDrag}
        ></span>
        <div className={cls(`${PREFIX}-sliceTip`, { 'is-visible': isActive })}>
          {transformRange2Time(cache.current)}
        </div>
      </div>
    </div>
  );
});
