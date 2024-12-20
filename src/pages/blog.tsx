import Sidebar from "@/components/Sidebar";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        className={`${ebGaramond.variable} font-ebGaramond w-full xl:max-w-[65rem] lg:p-24`}
      >
        <h1
          className={`${hurricane.variable} font-hurricane text-6xl text-hazel-600 transition mb-6`}
        >
          Blog
        </h1>
        <p className="text">
          This page is reserved for my shorter pieces of writing: smaller
          segments of my life which I care to share with you.
        </p>
        <h2 className="text-3xl text-hazel-600 transition mt-10 mb-6">
          <FontAwesomeIcon icon={faMessage} className="text-2xl mr-3" />
          Posts
        </h2>
        <div className="flex flex-col gap-y-6 max-w-[50rem]">
          <div className="rounded-md border-2 border-hazel-500 px-5 py-4">
            <h3 className="text text-2xl text-hazel-600">
              The Signifiance of A Supportive Upbringing
            </h3>
            <h4 className="text text-lg">February 7th, 1842</h4>
            <h4 className="text text-lg fade-text">
              It felt like only yesterday when the boy who went by the name of
              John Reed began to corner me, calling me a dependent, a rat, and
              every other insult one could imagine...
            </h4>
          </div>

          <div className="rounded-md border-2 border-hazel-500 px-5 py-4">
            <h3 className="text text-2xl text-hazel-600">
              A Review of My Time as a Governess
            </h3>
            <h4 className="text text-lg">December 2nd, 1841</h4>
            <h4 className="text text-lg fade-text">
              My time as a governess began almost immediately after my work as a
              teacher at Lowood. Both employment experiences have been both
              enjoyable for myself and useful for my life in work...
            </h4>
          </div>

          <div className="rounded-md border-2 border-hazel-500 px-5 py-4">
            <h3 className="text text-2xl text-hazel-600">
              Excellent Books for Reading
            </h3>
            <h4 className="text text-lg">September 23rd, 1838</h4>
            <h4 className="text text-lg fade-text">
              I would say I have read a significant number of stories in my
              lifetime, both historical and fantastical. My first choice would
              be Jonathan Swift's novel, Gulliver's Travels...
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
