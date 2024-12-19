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

export default function Employment() {
  return (
    <div className="flex h-screen">
      {/* sidebar */}
      <Sidebar
        currentPage="employment"
        font={`${hurricane.variable} font-hurricane`}
        font2={`${ebGaramond.variable} font-ebGaramond`}
      />

      <div
        className={`${ebGaramond.variable} font-ebGaramond max-w-[15rem] md:max-w-[30rem] xl:max-w-[65rem] p-24`}
      >
        <h1
          className={`${hurricane.variable} font-hurricane text-6xl text-hazel-600 transition mb-6`}
        >
          Employment
        </h1>
        <p className="text">
          If you would be interested in providing me with employment and
          shelter, you may send a letter to me by delivering it to Thornfield
          Hall.
        </p>
        <h2 className="text-3xl text-hazel-600 transition mt-10 mb-6">
          Previous experience
        </h2>
        <div className="grid grid-cols-3 gap-6 max-w-[50rem]">
          <div className="rounded-md border-2 border-hazel-500 px-5 py-4">
            <h3 className="text text-hazel-600">
              Governess at Thornfield Hall
            </h3>
            <h4 className="text-lg">descriptiopn</h4>
            <h4 className="text-lg">references???</h4>
          </div>

          <div className="rounded-md border-2 border-hazel-500 px-5 py-4">
            <h3 className="text text-hazel-600">Teacher at Lowood</h3>
            <h4 className="text-lg">descriptiopn</h4>
            <h4 className="text-lg">references???</h4>
          </div>

          <div className="rounded-md border-2 border-hazel-500 px-5 py-4">
            <h3 className="text text-hazel-600">Teacher at Lowood</h3>
            <h4 className="text-lg">July 1837 — June 1839</h4>
            <h4 className="text-lg">I served as a teacher </h4>
            <h4 className="text-lg">References: Miss Temple</h4>
          </div>

          <div className="rounded-md border-2 border-hazel-500 px-5 py-4">
            <h3 className="text text-hazel-600">Education at Lowood</h3>
            <h4 className="text-lg leading-8">June 1831 — July 1837</h4>
            <h4 className="text-lg">
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
