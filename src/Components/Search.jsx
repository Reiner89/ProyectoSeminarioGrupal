import { IconoBuscar } from "../Icons/Iconos";

export const Search = ({ placeHolder, searchTerm, handleSearch }) => {
  return (
    <div className="relative">
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
          <IconoBuscar className="relative text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="text"
          id="table-search"
          className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[rgb(26,32,53)] dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
          placeholder={placeHolder}
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};
