import Image from "next/image";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { ContentCard } from "./components/ContentCard";
import { Button } from "./components/core/Button";

export default function Home() {
  return (
    <div className="bg-slate-100">
      <header className="bg-slate-700">
        <div className="container mx-auto grid md:grid-cols-[300px_1fr]">
          <Logo />
          <Menu />
        </div>
      </header>
      <main className="">
        <ContentCard />

        <section className="cards-row">
          <div className="container mx-auto grid px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-0 lg:py-20">
            <div className="card mb-5 bg-slate-500 lg:mb-0">
              <div className="card-header">
                <Image
                  src="/image-02.jpg"
                  width={500}
                  height={500}
                  alt={"Ocean"}
                  style={{ width: "100%" }}
                />
              </div>
              <div className="card-body p-4">
                <h3 className="mb-3 text-3xl font-semibold">Title</h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore, quod? Magni nisi deleniti dicta! Magnam asperiores
                  dolor beatae unde earum ratione velit saepe pariatur sed
                  obcaecati iure nesciunt, itaque repudiandae.
                </p>
              </div>
              <div className="card-footer p-4 pb-6">
                <Button text="See more" />
              </div>
            </div>
            <div className="card bg-blue-400">Card 2</div>
            <div className="card bg-red-400">Card 3</div>
            <div className="card bg-green-500">Card 4</div>
          </div>
        </section>
        <section className="hero">Hero</section>
      </main>
      <footer>
        <nav>Menu</nav>
        <div className="copyright">Copyright</div>
      </footer>
    </div>
  );
}
