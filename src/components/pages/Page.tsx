import React from "react";

export default function Page({ children }: { children: React.ReactNode }) {
  return <div className="px-4 pt-4 lg:pt-2 pb-4">{children}</div>;
}
