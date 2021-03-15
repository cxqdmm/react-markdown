import { IRange } from './interface';
import React from 'react';
import Scale from './Scale';
import Slide from './Slide';
import cls from 'classnames';
import './index.less';

const PREFIX = 'SchedulePanel';

interface IProps {
  className?: string;
  onChange?: (value: Array<IRange>) => void;
}

const SchedulePanel: React.FC<IProps> = React.memo(function TimePeriod(props) {
  const { className, onChange } = props;
  return (
    <div className={cls(`${PREFIX}`, className)}>
      <Scale className={`${PREFIX}-scale`} max={24} min={0} step={1} />
      <Slide value={[0, 8]} steps={1440} />
    </div>
  );
});

export default SchedulePanel;
