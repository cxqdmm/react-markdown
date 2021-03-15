import React from 'react';
import cls from 'classnames';
import './index.less';
import Folder from '../Layout/Folder';

const PREFIX = 'MdView';

interface IProps {
  className?: string;
  md?: string;
  view?: React.ReactNode;
}

const MdView: React.FC<IProps> = React.memo(function MdView(props) {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const { className, md, view } = props;
  return (
    <div className={cls(`${PREFIX}`, className)}>
      <Folder className={`${PREFIX}-body`}>{view}</Folder>
      {md && (
        <Folder className={`${PREFIX}-md`}>
          <div dangerouslySetInnerHTML={{ __html: md }}></div>
        </Folder>
      )}
    </div>
  );
});

export default MdView;
