import { useEffect, useState } from "react";

import Sidebar from "@/components/Sidebar";

import localFont from "next/font/local";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
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

export default function Home() {
  const [seconds, setSeconds] = useState(136);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className="flex h-screen w-full p-6 pt-24 lg:p-0">
      {/* sidebar */}
      <Sidebar
        currentPage="home"
        font={`${hurricane.variable} font-hurricane`}
        font2={`${ebGaramond.variable} font-ebGaramond`}
      />

      <div
        className={`${ebGaramond.variable} font-ebGaramond w-full xl:max-w-[65rem] lg:p-24`}
      >
        <h1
          className={`${hurricane.variable} font-hurricane text-6xl text-hazel-600 transition mb-6`}
        >
          Welcome
        </h1>
        <p className="text">
          I am currently located at Thornfield Hall as a governess for the
          daughter of Edward Rochester in England, Adèle Varens.
        </p>
        <p className="text">
          I hope to present to you, the reader, on this website all about my
          personality, my past work, and my life experiences, in order for you
          to gain a good sense of who I am.
        </p>

        <h2 className="text-3xl text-hazel-600 transition mt-10 mb-6">
          <FontAwesomeIcon icon={faMusic} className="text-2xl mr-3" />
          Currently listening to...
        </h2>
        <div className="rounded-md border-2 border-hazel-500 px-5 py-4">
          <h3 className="text text-hazel-600">
            The singing voice of Mr. Rochester
          </h3>
          <h4 className="text-lg">
            For the last{" "}
            {seconds > 59 ? Math.floor(seconds / 60) + " minutes" : ""}{" "}
            {seconds == 0 || seconds % 60 == 0
              ? ""
              : seconds > 59
              ? "and " + (seconds % 60)
              : "and " + seconds}{" "}
            {seconds == 0 || seconds % 60 == 0
              ? ""
              : seconds == 1 || seconds % 60 == 1
              ? "second"
              : "seconds"}
          </h4>
        </div>

        <h2 className="text-3xl text-hazel-600 transition mt-10 mb-6">
          <FontAwesomeIcon icon={faBookmark} className="text-2xl mr-3" />
          Currently reading...
        </h2>
        <div className="rounded-md border-2 border-hazel-500 px-5 py-4">
          <h3 className="text text-hazel-600">Othello</h3>
          <h4 className="text-lg">By William Shakespeare</h4>
          <h4 className="text-lg">For the last 12 days</h4>
        </div>
      </div>
    </div>
  );
}
