import Image from "next/image";

import { Button } from "../core/Button";

export function ContentCard() {
  return (
    <section className="content-card bg-slate-400">
      <div className="container mx-auto flex flex-col-reverse px-4 py-14 md:flex-row md:px-0 md:py-20">
        <div className="flex w-full flex-col justify-center gap-4 py-10 md:w-[50%] md:pr-3">
          <h2 className="text-6xl font-bold">Title</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            aperiam numquam maiores quidem quisquam voluptates dolorem qui quis,
            fugit rerum deserunt. Qui vitae illo quae, veniam quo tempora
            temporibus cum.
          </p>
          <Button text="See more" />
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
  );
}
