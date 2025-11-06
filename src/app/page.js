import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[rgba(168,168,168,0.24)] w-[90%] mt-30 rounded-2xl px-5 py-6 flex justify-center space-x-10 items-center select-none">
      <section className="w-[40%] flex flex-col items-center space-y-6">
        <div className="text-3xl font-normal">
          SnapURL - A URL shortner.
        </div>
        <div className="text-lg text-center font-light leading-6 ">
          SnapURL is a simple and reliable URL shortener built to make sharing links effortless. It transforms long, cluttered URLs into short, clean, and memorable ones in seconds. Whether you&apos;re sharing on social media, sending emails, or tracking campaigns, SnapURL keeps your links neat, fast, and easy to manage - all for free.
        </div>
        
        <Link href={'/shortner'}>
        <button className="text-xl bg-[rgb(37,37,37)] text-white px-40 py-2 rounded-3xl font-light">
          Wanna Try?
        </button>
        </Link>
      </section>
      <section className="w-[40%] flex flex-col items-center space-y-4">
        <Image width={600} height={100} src={'/vector.jpg'} className="mix-blend-darken" alt="Vector"/>
      </section>
    </main>
  );
}
