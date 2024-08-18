import { BiSearch } from "react-icons/bi";
import { useSearchContext } from "../../contexts/search-context/SearchContextProvider";

const Search = () => {
  const { search, handleSearch } = useSearchContext();

  return (
    <div className="group flex size-8 items-center overflow-hidden rounded-full bg-slate-900 p-5 shadow-[2px_2px_20px_rgba(0,0,0,0.08)] duration-300 hover:w-72 hover:duration-300 lg:size-14">
      <div className="">
        <BiSearch className="size-5 animate-pulse fill-white lg:size-7" />
      </div>
      <input
        placeholder="Search for a tutorial..."
        type="text"
        className="w-full bg-transparent px-4 text-base font-normal text-white outline-none md:text-xl"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
