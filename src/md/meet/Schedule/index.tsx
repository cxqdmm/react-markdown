import { IRange } from './interface';
import React, { useCallback, useState } from 'react';
import Scale from './Scale';
import Slide from './Slider';
import cls from 'classnames';
import './index.less';
import VirtualizedList from './VirtualizedList';
import { ListOnItemsRenderedProps } from 'react-window';
import { intersect, mergeRanges } from './util';
import { forEach } from 'lodash';

const PREFIX = 'SchedulePanel';

interface IProps {
  className?: string;
  onChange?: (value: Array<IRange>) => void;
}

let initList: ISlice[] = [];
for (let i = 0; i < 1000; i++) {
  initList.push({
    overlap: [],
    value: [0, 480],
  });
}

function createDefaultSlice() {
  return {
    overlap: [],
    value: [0, 480],
  } as ISlice;
}
interface ISlice {
  overlap: IRange[];
  value: IRange;
}

const SchedulePanel: React.FC<IProps> = React.memo(function TimePeriod(props) {
  const { className, onChange } = props;
  const [list, setList] = useState<ISlice[]>([]);
  const [visibleRange, setVisibleRange] = useState<[number, number]>([0, 0]);

  const updateOverlap = useCallback(
    (visibleStartIndex: number, visibleStopIndex: number) => {
      //开始计算重叠区域;
      const ranges = [];
      for (let i = 0; i < visibleStartIndex; i++) {
        ranges.push(list[i].value);
      }
      for (let j = visibleStopIndex + 1; j < list.length; j++) {
        ranges.push(list[j].value);
      }
      // 合并可视区域外的时间段
      const merged = mergeRanges(ranges);
      // 更新可视区时间段的overlap
      for (let i = visibleStartIndex; i <= visibleStopIndex; i++) {
        let intersections: IRange[] = [];
        // 计算与可视区其他时间段的交集
        for (let j = visibleStartIndex; j <= visibleStopIndex; j++) {
          if (j === i) continue;
          const intersection = intersect(list[i].value, list[j].value);
          intersection && intersections.push(intersection);
        }
        // 计算与非可视区的交集
        forEach(merged, (item) => {
          const intersection = intersect(list[i].value, item);
          intersection && intersections.push(intersection);
        });
        const overlap = mergeRanges(intersections);
        list[i].overlap = overlap;
      }
      setList([...list]);
    },
    [list],
  );

  const handleRendered = useCallback(
    ({ visibleStartIndex, visibleStopIndex }: ListOnItemsRenderedProps) => {
      setVisibleRange([visibleStartIndex, visibleStopIndex]);
      updateOverlap(visibleStartIndex, visibleStopIndex);
    },
    [updateOverlap],
  );

  const handleChange = useCallback(
    (item: IRange, index: number) => {
      setList((list) => {
        list[index].value = item;
        return [...list];
      });
      updateOverlap(visibleRange[0], visibleRange[1]);
    },
    [updateOverlap, visibleRange],
  );

  const handleDelete = useCallback((index: number) => {
    setList((list) => {
      list.splice(index, 1);
      return [...list];
    });
  }, []);

  const renderSlider = useCallback(
    (item: ISlice, index: number) => {
      return (
        <Slide
          className={`${PREFIX}-slide`}
          onChange={(value: IRange) => handleChange(value, index)}
          onDelete={() => handleDelete(index)}
          value={item.value}
          overlap={item.overlap}
          steps={1440}
        />
      );
    },
    [handleChange, handleDelete],
  );

  const handleAdd = useCallback(() => {
    setList((list) => [...list, createDefaultSlice()]);
  }, []);

  return (
    <div className={cls(`${PREFIX}`, className)}>
      <div>
        <div className={`${PREFIX}-header`}>
          <Scale className={`${PREFIX}-scale`} max={24} min={0} step={1} />
          <div className={`${PREFIX}-footer`}>
            <div className={`${PREFIX}-add`} onClick={handleAdd}>
              +
            </div>
          </div>
        </div>
      </div>
      <VirtualizedList height={600} list={list} render={renderSlider} onRendered={handleRendered} />
    </div>
  );
});

export default SchedulePanel;
