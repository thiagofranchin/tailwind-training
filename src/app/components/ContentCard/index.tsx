import { ReactNode } from "react";
import Image from "next/image";

import { Section } from "../core/Section";
import { Button } from "../core/Button";

interface ContentCardProps {
  altImage?: string;
  bgColorSection?: string;
  bgImageSection?: string;
  bgOpacitySection?: number;
  textBody: ReactNode;
  classSection?: string;
  eyebrow?: string;
  textButton?: string;
  title?: string;
  urlImage?: string;
  zebra?: boolean;
}

export function ContentCard({
  altImage = "",
  bgColorSection,
  bgImageSection,
  bgOpacitySection,
  textBody,
  classSection,
  eyebrow,
  textButton,
  title,
  urlImage,
  zebra,
}: ContentCardProps) {
  return (
    <Section
      classSection={`content-card ${classSection ? classSection : ""}`}
      zebra={zebra}
      bgColor={bgColorSection}
      bgImage={bgImageSection}
      bgOpacity={bgOpacitySection}
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row">
        <div className="flex w-full flex-col justify-center gap-4 pt-10 md:w-[50%] md:pr-3 md:pt-0">
          {eyebrow && (
            <small className="text-base font-semibold">{eyebrow}</small>
          )}
          {title && <h2 className="text-6xl font-bold">{title}</h2>}
          {textBody && (
            <div dangerouslySetInnerHTML={{ __html: textBody }}></div>
          )}
          {textButton && <Button text={textButton} urlButton="#" />}
        </div>
        <div className="flex w-full items-center justify-center md:w-[50%]">
          {urlImage && (
            <Image
              src={urlImage}
              width={500}
              height={500}
              alt={altImage}
              style={{
                width: "100%",
                height: "max-content",
              }}
            />
          )}
        </div>
      </div>
    </Section>
  );
}
