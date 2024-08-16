import { BiSearch } from "react-icons/bi";
import { useSearchContextProvider } from "../../contexts/search-context/SearchContextProvider";

const Search = () => {
  const { search, handleSearch } = useSearchContextProvider();

  return (
    <div className="group flex size-14 items-center overflow-hidden rounded-full bg-[#4070f4] p-5 shadow-[2px_2px_20px_rgba(0,0,0,0.08)] duration-300 hover:w-72 hover:duration-300">
      <div className="">
        <BiSearch className="flex size-6 items-center justify-center fill-white" />
      </div>
      <input
        placeholder="Search for a video..."
        type="text"
        className="w-full bg-transparent px-4 text-[20px] font-normal text-white outline-none"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
