export interface PaginationProps {
  page: number;
  handleChangePage: (page: number) => void;
}

const Pagination = ({ page, handleChangePage }: PaginationProps) => {
  const changePage = (type: string) => {
    let pageNumber = page;
    if (type === 'PREV') {
      pageNumber = pageNumber - 1;
    } else {
      pageNumber = pageNumber + 1;
    }
    handleChangePage(pageNumber);
  };

  return (
    <div className="flex mt-20 justify-end mx-20">
      <button
        disabled={page === 0}
        onClick={() => changePage('PREV')}
        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Previous
      </button>
      <button
        onClick={() => changePage('NEXT')}
        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
