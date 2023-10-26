import Image from "next/image";
import { Button } from "../core/Button";

interface CardRowProps {
  cards: CardProps[];
}

export function CardRow({ cards }: CardRowProps) {
  return (
    <section className="cards-row">
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
    </section>
  );
}

interface CardProps {
  title?: string;
  text?: string;
  urlImage?: string;
  altImage?: string;
  textButton?: string;
}

function Card({ title, text, urlImage, altImage = "", textButton }: CardProps) {
  return (
    <div className="card bg-slate-500 shadow-lg">
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
        <div className="card-footer p-4 pb-6">
          <Button text={textButton} />
        </div>
      )}
    </div>
  );
}
