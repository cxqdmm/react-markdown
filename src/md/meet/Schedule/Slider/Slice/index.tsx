import React, { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useForceUpdate } from '../../../useForceUpdate';
import { transformRange2Time } from '../../util';
import { IRange } from '../../interface';
import cls from 'classnames';
import './index.less';

const PREFIX = 'Slice';

function setDocumentCursor(cursor: string) {
  document.body.style.cursor = cursor;
}

/**
 * value: [start, end]     0 < start < end < steps;
 */

interface IItems {
  className?: string;
  value: IRange;
  steps: number;
  parentWidth: number;
  onChange?: (value: IRange | undefined) => void;
}

export const Slice: React.FC<IItems> = React.memo(function Slice(props) {
  const { className, steps, value, parentWidth, onChange } = props;
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

  const handleExtrude = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      // @ts-ignore
      const type = e.currentTarget.dataset.type;
      // 起点
      let startX = e.clientX;
      function moveMove(e: MouseEvent) {
        let currentX = e.clientX,
          offset = Math.floor(((currentX - startX) / parentWidth) * steps),
          nextLeft = cache.current[0],
          nextRight = cache.current[1];
        startX = currentX;
        if (type === 'left') {
          nextLeft += offset;
          nextLeft = Math.min(Math.max(0, nextLeft), nextRight);
        } else {
          nextRight += offset;
          nextRight = Math.min(steps, Math.max(nextRight, nextLeft));
        }
        setDocumentCursor('w-resize');
        cache.current = [nextLeft, nextRight];
        onChange?.(cache.current);
        // forceUpdate();
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
    [onChange, steps, parentWidth],
  );

  const handleDrag = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      // 起点
      let startX = e.clientX;
      function moveMove(e: MouseEvent) {
        let currentX = e.clientX,
          offset = Math.floor(((currentX - startX) / parentWidth) * steps),
          nextLeft = cache.current[0],
          nextRight = cache.current[1];
        startX = currentX;

        nextLeft += offset;
        nextRight += offset;
        let makeUp = 0;
        if (nextLeft < 0) {
          makeUp = Math.abs(nextLeft);
        }
        if (nextRight > steps) {
          makeUp = steps - nextRight;
        }
        nextLeft += makeUp;
        nextRight += makeUp;
        cache.current = [nextLeft, nextRight];
        onChange?.(cache.current);
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
    [onChange, parentWidth, steps],
  );

  return (
    <div
      style={styles}
      className={cls(`${PREFIX}`, className, { 'is-active': isActive })}
      onMouseDown={handleDrag}
      onClick={handleClick}
    >
      <span
        className={cls(`${PREFIX}-leftDrag`, { 'is-visible': isActive })}
        data-type="left"
        onMouseDown={handleExtrude}
      ></span>
      <span
        className={cls(`${PREFIX}-rightDrag`, { 'is-visible': isActive })}
        data-type="right"
        onMouseDown={handleExtrude}
      ></span>
    </div>
  );
});
