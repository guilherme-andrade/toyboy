import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-white text-black min-h-100vh px-8 py-4 flex items-center justify-between fixed bottom-0 left-0 right-0 z-10  motion-opacity-in-0 motion-duration-[3000ms]">
      <div className="text-4xl uppercase flex motion-opacity-in-0 motion-duration-[3000ms]">
        <h1 className="text-4xl uppercase font-[1000]">Toyboy</h1>
        <span className="mx-4">·</span>
        <Link className="hover:underline" href="/">
          Work
        </Link>
      </div>
      {/* <span className="absolute left-[calc(50%-1px)]">···</span> */}
      <div className="text-4xl flex motion-opacity-in-0 motion-duration-[3000ms]">
        <Link className="leading-[0.9] uppercase hover:underline" href="/about">
          About
        </Link>
        <span className="mx-4">·</span>
        <Link
          className="leading-[0.9] uppercase motion-opacity-in-0 motion-duration-[3000ms] hover:underline"
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
