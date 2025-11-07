import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[rgba(168,168,168,0.24)] w-[90%] mt-30 max-xl:mt-25 max-lg:mt-20 max-md:mt-15 max-sm:mt-10 max rounded-2xl px-5 py-6 max-xl:pb-0 flex max-xl:flex-col justify-center space-x-10 max-xl:space-x-0 items-center select-none">
      <section className="w-[40%] max-xl:w-[90%] flex flex-col items-center space-y-6 max-xl:space-y-5 max-sm:space-y-4">
        <div className="text-3xl font-normal max-md:text-2xl max-sm:text-[22px]">
          SnapURL - A URL shortner.
        </div>
        <div className="text-lg text-center font-light leading-6  max-md:text-[17px] max-sm:text-[16px] max-sm:leading-5 max-sm:pb-2">
          SnapURL is a simple and reliable URL shortener built to make sharing links effortless. It transforms long, cluttered URLs into short, clean, and memorable ones in seconds. Whether you&apos;re sharing on social media, sending emails, or tracking campaigns, SnapURL keeps your links neat, fast, and easy to manage - all for free.
        </div>
        
        <Link href={'/shortner'}>
        <button className="text-xl bg-[rgb(37,37,37)] text-white px-40 py-2 rounded-3xl font-light max-sm:text-lg max-sm:px-20">
          Wanna Try?
        </button>
        </Link>
      </section>
      <section className="w-[40%] max-lg:w-[80%] max-sm:w-full max-xl:w-[60%] flex flex-col items-center ">
        <Image width={600} height={100} src={'/vector.jpg'} className="mix-blend-darken" alt="Vector"/>
      </section>
    </main>
  );
}
