"use client";

import useIsMounted from "@/hooks/useIsMounted";
import { formatter } from "@/lib/utils";
import React, { FC } from "react";

interface CurrencyProps {
  value?: string | number;
}

const Currency: FC<CurrencyProps> = ({ value }) => {
  const isMounted = useIsMounted();

  if (!isMounted) return null;
  return <div className='font-semibold'>{formatter.format(Number(value))}</div>;
};

export default Currency;
