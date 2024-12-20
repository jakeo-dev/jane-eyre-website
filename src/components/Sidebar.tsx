import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Sidebar(props: {
  currentPage: string;
  font: string;
  font2: string;
}) {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <div className={`${props.font2} absolute top-6 left-6 z-10 lg:static`}>
      {/* sidebar */}
      <button
        className="lg:hidden bg-stone-200 text-2xl flex items-center rounded-lg px-3 py-1.5"
        onClick={() => {
          if (sidebarVisible) setSidebarVisible(false);
          else setSidebarVisible(true);
        }}
      >
        <FontAwesomeIcon icon={faEllipsis} className="text-3xl mr-3" />
        Menu
      </button>

      <div
        className={`${props.font2} ${
          sidebarVisible ? "fadeOut" : "fadeIn"
        } lg:fadeOut lg:h-full lg:w-[26rem] bg-stone-200 rounded-xl lg:rounded-l-none shadow-lg lg:bg-gradient-to-r from-hazel-400/10 via-hazel-400/10 to-hazel-500/20 px-8 lg:px-12 py-12 lg:py-24 mt-2 lg:mt-0`}
      >
        <div className="lg:h-full mb-12 lg:mb-0">
          <div className="flex items-start">
            <Image
              src="/jane-eyre.png"
              alt="A picture of Jane Eyre"
              className="rounded-full shadow-md mr-2.5"
              width={55}
              height={55}
            ></Image>
            <div>
              <h1
                className={`${props.font} text-5xl lg:text-6xl font-bold drop-shadow-md transition`}
              >
                Jane Eyre
              </h1>
              <h2 className="text-lg lg:text-xl mt-1.5">English Governess</h2>
            </div>
          </div>
          <div className="text-gray-600 flex flex-col gap-y-2 pt-3 mt-6">
            <Link
              href="/"
              className={`${
                props.currentPage == "home"
                  ? "text-white bg-hazel-500/80 hover:bg-hazel-400/80 active:bg-hazel-500/80"
                  : "hover:border-hazel-500/80 active:bg-gray-500/10"
              } text-2xl rounded-md border-2 border-transparent px-3 py-1 transition mr-1.5`}
            >
              <span>Home</span>
            </Link>
            <Link
              href="/blog"
              className={`${
                props.currentPage == "blog"
                  ? "text-white bg-hazel-500/80 hover:bg-hazel-400/80 active:bg-hazel-500/80"
                  : "hover:border-hazel-500/80 active:bg-gray-500/10"
              } text-2xl rounded-md border-2 border-transparent px-3 py-1 transition mr-1.5`}
            >
              <span>Blog</span>
            </Link>
            <Link
              href="/employment"
              className={`${
                props.currentPage == "employment"
                  ? "text-white bg-hazel-500/80 hover:bg-hazel-400/80 active:bg-hazel-500/80"
                  : "hover:border-hazel-500/80 active:bg-gray-500/10"
              } text-2xl rounded-md border-2 border-transparent px-3 py-1 transition mr-1.5`}
            >
              <span>Employment</span>
            </Link>
          </div>
        </div>

        <div className="lg:-mt-24">
          <h6 className="text">
            <FontAwesomeIcon icon={faBuilding} className="mr-2" />
            20000 Thornfield Hall, ——shire, England
          </h6>
          <h6 className="text my-3">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            eyre@jane.eyre
          </h6>
          <a
            href="https://github.com/jakeo-dev/jane-eyre-website"
            target="_blank"
            className="text text-hazel-600 hover:underline"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
