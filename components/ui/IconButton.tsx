import { cn } from "@/lib/utils";
import React, { FC, MouseEventHandler, ReactElement } from "react";

interface IconButtonProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon: ReactElement;
}

const IconButton: FC<IconButtonProps> = ({ onClick, className, icon }) => {
  return (
    <button
      onClick={onClick}
      className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition", className)}>
      {icon}
    </button>
  );
};

export default IconButton;
