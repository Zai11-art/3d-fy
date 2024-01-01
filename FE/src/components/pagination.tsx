import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import useMode from "../hooks/state";
import { PaginationProps } from "../types/types";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}: PaginationProps) => {
  const mode = useMode((state) => state.isDarkMode);

  let pages = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const maxPagesToShow = 4; // Number of nearest pages to show

  let startPage = currentPage - Math.floor(maxPagesToShow / 2);

  if (startPage < 1) {
    startPage = 1;
  }

  let endPage = startPage + maxPagesToShow - 1;
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = endPage - maxPagesToShow + 1;
    if (startPage < 1) {
      startPage = 1;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination my-2 flex flex-row flex-wrap items-center justify-center">
      {currentPage > 1 && (
        <button
          aria-label="back button"
          className={`p-1 ${
            mode
              ? "newscard-filter-light text-[#054569]"
              : "bg-amber-700 text-[#ced7e0]"
          } mx-[2px] my-[2px] rounded-md px-2 text-[15px] duration-200  hover:scale-[1.1] md:mx-[5px] md:text-[12px] lg:mx-[5px] lg:text-[15px]`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <MdChevronLeft className="text-lg" />
        </button>
      )}
      {startPage > 1 && (
        <button
          className={`p-1 ${
            mode
              ? "newscard-filter-light text-[#080e11]"
              : "bg-amber-700 text-[#ced7e0] "
          } mx-[2px] my-[2px] rounded-md px-2 text-[15px] duration-200  hover:scale-[1.1] md:mx-[5px] md:text-[12px] lg:mx-[5px] lg:text-[15px]`}
          onClick={() => setCurrentPage(1)}
        >
          First
        </button>
      )}
      {pages.map((page, index) => (
        <button
          className={`p-1 ${
            mode
              ? "newscard-filter-light text-[#054569]"
              : "bg-amber-700 text-[#ced7e0]"
          } mx-[2px] my-[2px] rounded-md px-2 text-[15px] duration-200  hover:scale-[1.1] md:mx-[5px] md:text-[12px] lg:mx-[5px] lg:text-[15px] ${
            page === currentPage ? "shadow-amber-700 shadow-xl" : " "
          }`}
          key={index}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      {endPage < totalPages && (
        <button
          className={`p-1 ${
            mode
              ? "newscard-filter-light text-[#054569]"
              : "bg-amber-700 text-[#ced7e0] "
          } mx-[2px] my-[2px] rounded-md px-2 text-[15px] duration-200  hover:scale-[1.1] md:mx-[5px] md:text-[12px] lg:mx-[5px] lg:text-[15px]`}
          onClick={() => setCurrentPage(totalPages)}
        >
          Last
        </button>
      )}
      {currentPage < totalPages && (
        <button
          aria-label="next button"
          className={`p-1 ${
            mode
              ? "newscard-filter-light text-[#054569]"
              : "bg-amber-700 text-[#ced7e0]"
          } mx-[2px] my-[2px] rounded-md px-2 text-[15px] duration-200  hover:scale-[1.1] md:mx-[5px] md:text-[12px] lg:mx-[5px] lg:text-[15px]`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <MdChevronRight className="text-lg" />
        </button>
      )}
    </div>
  );
};

export default Pagination;

// HEX CODES:
// #062c43
// #054569
// #5591a9
// #9ccddc
// #ced7e0
