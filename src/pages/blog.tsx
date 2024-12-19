import Sidebar from "@/components/Sidebar";

import localFont from "next/font/local";

const hurricane = localFont({
  src: [
    {
      path: "./fonts/Hurricane-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-hurricane",
});
const ebGaramond = localFont({
  src: [
    {
      path: "./fonts/EBGaramond-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ebGaramond",
});

export default function Blog() {
  return (
    <div className="flex h-screen w-full p-6 pt-24 lg:p-0">
      {/* sidebar */}
      <Sidebar
        currentPage="blog"
        font={`${hurricane.variable} font-hurricane`}
        font2={`${ebGaramond.variable} font-ebGaramond`}
      />

      <div
        className={`${ebGaramond.variable} font-ebGaramond w-full lg:max-w-[30rem] xl:max-w-[65rem] lg:p-24`}
      >
        <h1
          className={`${hurricane.variable} font-hurricane text-6xl text-hazel-600 transition mb-6`}
        >
          Blog
        </h1>
        <p className="text">This page is reserved for</p>
        <div className="flex flex-col gap-y-6 max-w-[50rem]">
          <div className="rounded-md border-2 border-hazel-500 px-5 py-4">
            <h3 className="text text-2xl text-hazel-600">
              The Signifiance of Supportive Upbringing
            </h3>
            <h4 className="text text-lg transition fade-text">
              It felt like only yesterday when the boy who went by the name of
              John Reed began to corner me, calling me a dependent, a rat, and
              every other insult he could imagine...
            </h4>
          </div>

          <div className="rounded-md border-2 border-hazel-500 px-5 py-4">
            <h3 className="text text-2xl text-hazel-600">
              A Review of My Time as a Governess
            </h3>
            <h4 className="text text-lg transition fade-text">
              tex text ext etxt text etxtt text tex text ext etxt text etxtt
              text tex text ext etxt text etxtt text tex text ext etxt text
              etxtt text tex text ext etxt text etxtt text tex text ext etxt
              etxtt text tex text ext etxt text etxtt text tex text ext etxt
              etxtt text tex text ext etxt text etxtt text tex text ext etxt
              etxtt text tex text ext etxt text etxtt text tex text ext etxt
            </h4>
          </div>

          <div className="rounded-md border-2 border-hazel-500 px-5 py-4">
            <h3 className="text text-2xl text-hazel-600">
              Exclellent Books for Reading
            </h3>
            <h4 className="text text-lg transition fade-text">
              Gulliver's Travels by Jonathan Swift, Thomas Bewick's A History of
              British Birds, The Bible
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
