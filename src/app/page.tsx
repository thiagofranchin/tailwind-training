import Image from "next/image";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { ContentCard } from "./components/ContentCard";
import { CardsRow } from "./components/CardsRow";

export default function Home() {
  return (
    <div className="bg-slate-100">
      <header className="bg-slate-700">
        <div className="container mx-auto grid md:grid-cols-[300px_1fr]">
          <Logo />
          <Menu />
        </div>
      </header>
      <main>
        <ContentCard
          eyebrow="eyebrow"
          title="Title"
          textBody="<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit distinctio iste aliquam dignissimos voluptas praesentium labore, laboriosam similique ullam quidem dolorum impedit tempora nisi porro autem. Nemo dolores minus corporis?</p>"
          textButton="See more"
          urlImage="/image-02.jpg"
          bgImageSection="/image-04.jpg"
        />
        <CardsRow
          cards={[
            {
              title: "Title 01",
              text: "Texto do Card 01",
              urlImage: "/image-02.jpg",
              altImage: "Radio",
              textButton: "See more",
            },
            {
              text: "Texto do Card 01",
              urlImage: "/image-03.jpg",
              altImage: "Radio",
              textButton: "See more",
            },
            {
              title: "Title 01",
              urlImage: "/image-04.jpg",
              altImage: "Radio",
              textButton: "See more",
            },
            {
              title: "Title 01",
              text: "Texto do Card 01",
              urlImage: "/image-05.jpg",
              altImage: "Radio",
            },
            {
              title: "Title 01",
              text: "Texto do Card 01",
              altImage: "Radio",
              textButton: "See more",
            },
          ]}
        />
        <section className="hero">Hero</section>
      </main>
      <footer>
        <nav>Menu</nav>
        <div className="copyright">Copyright</div>
      </footer>
    </div>
  );
}
