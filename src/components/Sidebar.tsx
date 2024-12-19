import Link from "next/link";
import Image from "next/image";

export default function Sidebar(props: {
  currentPage: string;
  font: string;
  font2: string;
}) {
  return (
    <>
      {/* sidebar */}
      <div
        className={`${props.font2} hidden lg:block lg:h-full lg:w-[26rem] bg-gradient-to-r from-hazel-500/10 via-hazel-500/10 to-hazel-600/20 px-12 py-24`}
      >
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
              className={`${props.font} text-6xl font-bold drop-shadow-md transition`}
            >
              Jane Eyre
            </h1>
            <h2 className="text-xl mt-1.5">English Governess</h2>
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
          <Link
            href="about-me"
            className={`${
              props.currentPage == "about"
                ? "text-white bg-hazel-500/80 hover:bg-hazel-400/80 active:bg-hazel-500/80"
                : "hover:border-hazel-500/80 active:bg-gray-500/10"
            } text-2xl rounded-md border-2 border-transparent px-3 py-1 transition mr-1.5`}
          >
            <span>About Me</span>
          </Link>
        </div>
      </div>
    </>
  );
}
