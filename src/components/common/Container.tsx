import { FC, ReactNode } from "react";

interface IContainer {
  children: ReactNode;
  className?: string;
}

const Container: FC<IContainer> = (props) => {
  const { children, className } = props;

  return (
    <div className={`w-full px-8 mx-auto max-w-7xl ${className}`}>
      {children}
    </div>
  )
}

export default Container;