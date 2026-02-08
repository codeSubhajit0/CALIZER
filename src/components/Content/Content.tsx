"use client";

import { useviewport } from "@/hooks/useviewport.hook";

export const Content: React.FC = () => {
  const viewport = useviewport();

  return (
    <div>
      <div>Index</div>
    </div>
  );
};

export default Content;
