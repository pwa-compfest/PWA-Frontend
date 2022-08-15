import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function CardHomePage(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems.map((item) => {
        return (
            <div className="bg-white rounded-[24px] shadow-md w-[300px] h-[350px] grid grid-rows-2 mb-3 mt-12">
            <div className="overflow-hidden relative">
              <img className="object-contain" src={item.url} alt={item.title} />
            </div>
            <div className="p-5 relative">
              <p className="subtitle">Course</p>
              <p className="body text-neutral-500">Prof. Dr. Something</p>
              <div className="mt-5 flex justify-center">
                    <button className="btn-reject">REJECT</button>
                    <button className="btn-primary">VERIFY</button>
                </div>
            </div>
          </div>
        );
      })}

      <ReactPaginate
        breakLabel="..."
        nextLabel="NEXT"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="PREV"
        renderOnZeroPageCount={null}
        containerClassName="list-none flex w-[100%] button-text text-primary-500 justify-center items-center my-5 gap-1"
        pageLinkClassName="px-[15px] py-[10px] hover:text-primary-700"
        nextLinkClassName="hover:text-primary-700"
        previousLinkClassName="hover:text-primary-700"
        activeLinkClassName="btn-icon-primary"
      />
    </>
  );
}
export default CardHomePage;
