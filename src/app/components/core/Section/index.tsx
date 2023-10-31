import { ReactNode } from "react";

import { getBackgroundColor } from "@/app/utils/getBackgroundColor";

interface SectionProps {
  bgColor?: string;
  bgImage?: string;
  children: ReactNode;
  classSection?: string;
  zebra?: boolean;
  bgOpacity?: number;
}

export function Section({
  children,
  classSection,
  zebra,
  bgColor,
  bgImage,
  bgOpacity = 1,
}: SectionProps) {
  const bgSectionStyles = {
    backgroundColor: getBackgroundColor(bgColor, bgOpacity),
    background:
      bgImage &&
      `rgba(0, 0, 0, ${bgOpacity}) url(${bgImage}) no-repeat center/cover`,
  };

  return (
    <section
      className={`${classSection} ${zebra ? "bg-gray-100" : "bg-white"}`}
      {...(Object.keys(bgSectionStyles).length > 0
        ? { style: bgSectionStyles }
        : {})}
    >
      {children}
    </section>
  );
}
