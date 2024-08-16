const Footer = () => {
  return (
    <footer>
      <p className="rounded-md bg-slate-800 p-1 px-4 text-[5px] text-white md:text-[10px]">
        &copy;{" "}
        <span>
          {" "}
          <a
            className="underline"
            href="https://www.boboyier.com/"
            target="blank"
          >
            Bob Oyier
          </a>
        </span>
        , {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
