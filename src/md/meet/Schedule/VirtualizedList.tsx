import { ListOnItemsRenderedProps, VariableSizeList as List } from 'react-window';
import React, { useCallback } from 'react';
import cls from 'classnames';
import memoize from 'memoize-one';

const PREFIX = 'VirtualizedList';

interface IProps {
  className?: string;
  render: (item: any, index: number) => React.ReactNode;
  height: number;
  onRendered: (data: ListOnItemsRenderedProps) => void;
  list: any[];
}

const createStepData = memoize((list: any[], render: IProps['render']) => ({
  list,
  render,
}));

const Row = React.memo(
  ({
    data: rowData,
    index,
    style,
  }: {
    data: ReturnType<typeof createStepData>;
    index: number;
    style: any;
  }) => {
    const { list, render } = rowData;
    const data = list[index];

    return (
      <div style={style} key={index}>
        {render(data, index)}
      </div>
    );
  },
);

const VirtualizedList: React.FC<IProps> = React.memo(function VirtualizedList(props) {
  const { className, list, render, height, onRendered } = props;
  const data = createStepData(list, render);

  const itemKey = (index: number) => {
    return index;
  };
  const itemSize = () => {
    return 40;
  };

  const handleRenderer = useCallback(
    (props: ListOnItemsRenderedProps) => {
      onRendered(props);
    },
    [onRendered],
  );
  return (
    <div className={cls(`${PREFIX}`, className)}>
      <List
        style={{ overflow: 'overlay' }}
        className={`${PREFIX}-list`}
        height={height}
        itemCount={list.length}
        onItemsRendered={handleRenderer}
        itemData={data}
        itemKey={itemKey}
        itemSize={itemSize}
        width="100%"
      >
        {Row}
      </List>
    </div>
  );
});

export default VirtualizedList;
