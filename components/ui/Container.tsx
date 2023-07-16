import React, { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className='mx-auto max-w-7xl'>{children}</div>;
};

export default Container;
