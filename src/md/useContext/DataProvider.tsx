import React, { PropsWithChildren } from 'react';

export default function DataProvider<T extends Record<string, any>, P>(
  params: () => T,
  Component: React.FC<P & T>,
) {
  return React.memo((props: PropsWithChildren<P>) => {
    return (<Component as {...props} {...params()} />) as React.ReactElement<P & T>;
  });
}
