"use client";

import { useRef } from "react";
import { Provider } from "react-redux";

import { makeStore, type AppStore } from "@/lib/store";

interface ChildrenProp {
  children: React.ReactNode;
}

export default function StoreProvider({ children }: ChildrenProp) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
