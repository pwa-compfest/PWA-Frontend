import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "../api/axios";
function CardDashboardInstructor(items) {
  const {data} = items;
  const [image, setImage] = useState("/images/placeholder.png");
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  function getImage(file) {
    axios
      .get(`/image/courses/${file}`)
      .then((res) => {
        console.log(res.url);
        setImage(res.url);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getImage(data[0].image)
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
          <div className="bg-white rounded-[24px] shadow-md w-[300px] h-[380px] grid grid-rows-2 mb-3">
            <div className="overflow-hidden relative rounded-t-[24px]">
              <img className="object-contain" src={image} alt={item.title} />
              <div className="bg-neutral-50 px-3 py-1 body text-neutral-500 rounded-[20px] absolute right-5 top-5">
                {item.totalStudent} Students
              </div>
            </div>
            <div className="p-5 relative">
              <div className="flex justify-between">
                <p className="subtitle">Course</p>
                {item.id % 2 === 1 && (
                  <i className="fa-solid fa-lock text-error-500"></i>
                )}
                {item.id % 2 === 0 && (
                  <i className="fa-solid fa-earth-americas text-secondary-500"></i>
                )}
              </div>

              <p className="body text-neutral-500">Prof. Dr. Something</p>
              <button className="btn-primary shadow-glow absolute bottom-5 right-5">
                Detail
              </button>
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
export default CardDashboardInstructor;
