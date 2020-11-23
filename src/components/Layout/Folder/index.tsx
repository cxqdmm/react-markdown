import React, { useState } from 'react';
import cls from 'classnames';
import './index.less';

const PREFIX = 'Folder';

interface IProps {
  className?: string;
}

const Folder: React.FC<IProps> = React.memo(function Folder(props) {
  const { className, children } = props;
  const [fold, setFold] = useState<boolean>(false);
  const handleFold = () => {
    setFold((prev) => !prev);
  };
  return (
    <div className={cls(`${PREFIX}`, className)}>
      <div className={`${PREFIX}-foldBtn`} onClick={handleFold}>
        {fold ? '展开' : '收起'}
      </div>
      {!fold ? <div className={`${PREFIX}-body`}>{children}</div> : null}
    </div>
  );
});

export default Folder;
