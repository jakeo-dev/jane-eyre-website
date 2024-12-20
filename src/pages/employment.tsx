import Sidebar from "@/components/Sidebar";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
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

export default function Employment() {
  return (
    <div className="flex h-screen w-full p-6 pt-24 lg:p-0">
      {/* sidebar */}
      <Sidebar
        currentPage="employment"
        font={`${hurricane.variable} font-hurricane`}
        font2={`${ebGaramond.variable} font-ebGaramond`}
      />

      <div
        className={`${ebGaramond.variable} font-ebGaramond w-full xl:max-w-[65rem] lg:p-24`}
      >
        <h1
          className={`${hurricane.variable} font-hurricane text-6xl text-hazel-600 transition mb-6`}
        >
          Employment
        </h1>
        <p className="text">
          This page presents previous employment positions I have held and other
          significant experiences.
        </p>
        <p className="text">
          If you would be interested in providing me with employment and
          shelter, you may send a letter to me by delivering it to Thornfield
          Hall.
        </p>
        <h2 className="text-3xl text-hazel-600 transition mt-10 mb-6">
          <FontAwesomeIcon icon={faBuilding} className="text-2xl mr-3" />
          Previous experience
        </h2>
        <div className="grid lg:grid-cols-2 gap-6 max-w-[50rem]">
          <div className="rounded-md border-2 border-hazel-500 px-5 py-4">
            <h3 className="text text-hazel-600">
              Governess at Thornfield Hall
            </h3>
            <h4 className="text-lg">August 1839 — present</h4>
            <h4 className="text-lg text-gray-600">
              This is my current position: a governess at Thornfield Hall for
              the daughter of Edward Rochester. I serve as both her teacher and
              caretaker.
            </h4>
          </div>

          <div className="rounded-md border-2 border-hazel-500 px-5 py-4">
            <h3 className="text text-hazel-600">Teacher at Lowood</h3>
            <h4 className="text-lg">July 1837 — June 1839</h4>
            <h4 className="text-lg text-gray-600">
              For two years I served as a teacher at the school in which I grew
              up, teaching young girls reading, writing, arithmetic, and othre
              practical skills.
            </h4>
          </div>

          <div className="rounded-md border-2 border-hazel-500 px-5 py-4">
            <h3 className="text text-hazel-600">Education at Lowood</h3>
            <h4 className="text-lg leading-8">June 1831 — July 1837</h4>
            <h4 className="text-lg text-gray-600">
              I not only received an excellent education from Lowood, but
              additionally had the opportunity to meet many brilliant pupils and
              professors, who I cherish greatly.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
