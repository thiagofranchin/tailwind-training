import { Section } from "../core/Section";

import { Button } from "../core/Button";

interface HeroProps {
  bgColorSection?: string;
  bgImageSection?: string;
  bgOpacitySection?: number;
  classSection?: string;
  zebra?: boolean;

  eyebrow?: string;
  title?: string;
  description?: string; // Torne a descrição opcional
  buttons?: ButtonProps[]; // Torne os botões opcionais
  backgroundImage?: string; // Adicione uma prop para a imagem de fundo
}

interface ButtonProps {
  textButton?: string;
  urlButton?: string;
}

export function Hero({
  bgColorSection,
  bgImageSection = "./image-02.jpg",
  bgOpacitySection,
  classSection,
  zebra,

  eyebrow = "eyebrow",
  title = "Title",
  description = "Description",
  buttons,
}: HeroProps) {
  return (
    <Section
      classSection={`hero-card ${classSection ? classSection : ""}`}
      zebra={zebra}
      bgColor={bgColorSection}
      bgImage={bgImageSection}
      bgOpacity={bgOpacitySection}
    >
      <div className="container mx-auto flex h-[500px] flex-col justify-center">
        <div className="content-body flex flex-col gap-4 px-4">
          {eyebrow && (
            <small className="text-sm font-semibold">{eyebrow}</small>
          )}
          {title && <h1 className="text-6xl font-bold">{title}</h1>}
          {description && <p>{description}</p>}
          <div className="flex flex-col gap-2 sm:flex-row">
            {buttons &&
              buttons.map((button, index) => (
                <Button
                  key={index}
                  urlButton={button.urlButton}
                  text={button.textButton}
                ></Button>
              ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
