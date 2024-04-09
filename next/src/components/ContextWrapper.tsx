"use client";

import React from "react";
import { RecoilRoot } from "recoil";

const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default ContextWrapper;
