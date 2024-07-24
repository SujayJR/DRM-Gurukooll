import React, { ReactNode } from "react";

export function GridSmallBackground({ children }: { children: ReactNode }) {
  return (
    <div className="h-full w-full dark:bg-black bg-black relative">
      <div className="absolute pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
          { children }
    </div>
  );
}
