import Image from "next/image";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

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
        <section className="content-card bg-slate-400">
          <div className="container mx-auto flex flex-col-reverse px-4 py-14 md:flex-row md:px-0 md:py-20">
            <div className="flex w-full flex-col justify-between py-10 md:w-[50%]">
              <h2 className="text-6xl font-bold">Title</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique aperiam numquam maiores quidem quisquam voluptates
                dolorem qui quis, fugit rerum deserunt. Qui vitae illo quae,
                veniam quo tempora temporibus cum.
              </p>
              <button className="w-[200px] rounded-md bg-red-500 p-2">
                Link to
              </button>
            </div>
            <div className="flex w-full justify-center md:w-[50%]">
              <Image
                src="/image-01.png"
                width={500}
                height={500}
                alt={"Ocean"}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </section>

        <section className="hero">Hero</section>
        <section className="cards-row">Cards Row</section>
      </main>
      <footer>
        <nav>Menu</nav>
        <div className="copyright">Copyright</div>
      </footer>
    </div>
  );
}
