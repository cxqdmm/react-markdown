import React from 'react';
import cls from 'classnames';

const PREFIX = 'MdView';

interface IProps {
  className?: string;
  md: string;
}

const MdView: React.FC<IProps> = React.memo(function MdView(props) {
  const { className, md } = props;
  return (
    <div className={cls(`${PREFIX}`, className)}>
      <div dangerouslySetInnerHTML={{ __html: md }}></div>
    </div>
  );
});

export default MdView;
