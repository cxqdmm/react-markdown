import React from 'react';
import cls from 'classnames';
import './index.less';
import SchedulePanel from './Schedule';

const PREFIX = 'MeetPage';

interface IProps {
  className?: string;
}

const MeetPage: React.FC<IProps> = React.memo(function MeetPage(props) {
  const { className } = props;
  return (
    <div className={cls(`${PREFIX}`, className)}>
      <SchedulePanel />
    </div>
  );
});

export default MeetPage;
