import Image from "next/image";

import { Section } from "../core/Section";
import { Button } from "../core/Button";

interface CardsRowProps {
  bgColorSection?: string;
  bgImageSection?: string;
  bgOpacitySection?: number;
  cards: CardProps[];
  classSection?: string;
  zebra?: boolean;
}

export function CardsRow({
  cards,
  bgColorSection,
  bgImageSection,
  bgOpacitySection,
  classSection,
  zebra,
}: CardsRowProps) {
  return (
    <Section
      classSection={`cards-row ${classSection ? classSection : ""}`}
      zebra={zebra}
      bgColor={bgColorSection}
      bgImage={bgImageSection}
      bgOpacity={bgOpacitySection}
    >
      <div className="container mx-auto grid gap-5 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-0 lg:py-20">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            text={card.text}
            urlImage={card.urlImage}
            altImage={card.altImage}
            textButton={card.textButton}
          />
        ))}
      </div>
    </Section>
  );
}

interface CardProps {
  title?: string;
  text?: string;
  urlImage?: string;
  altImage?: string;
  textButton?: string;
}

function Card({ altImage = "", text, textButton, title, urlImage }: CardProps) {
  return (
    <div className="card flex flex-col shadow-md">
      {urlImage && (
        <div className="card-header">
          <Image
            src={urlImage}
            width={500}
            height={500}
            alt={altImage}
            style={{ width: "100%" }}
          />
        </div>
      )}

      {(title || text) && (
        <div className="card-body p-4">
          {title && <h3 className="mb-3 text-3xl font-semibold">{title}</h3>}
          {text && <p className="">{text}</p>}
        </div>
      )}
      {textButton && (
        <div className="card-footer mt-auto p-4 pb-6">
          <Button text={textButton} />
        </div>
      )}
    </div>
  );
}
