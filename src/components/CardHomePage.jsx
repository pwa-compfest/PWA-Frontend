import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "../api/axios";
import Toast from "../components/Toast";

function CardHomePage(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [message, setMessage] = useState({ display: false });
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

  function handleClick(id) {
    axios
      .post(`/courses/enroll/${id}`)
      .then((res) => {
        setToastState({
          display: true,
          type: "success",
          content: "Success enroll course",
        });
      })
      .catch((err) => {
        setToastState({
          display: true,
          type: "error",
          content: "Already enroll course",
        });
      });
  }

  return (
    <>
      {message.display && (
          <Toast
            type={message.type}
            content={message.content}
            closeToast={setMessage}
          />
      )}
      {currentItems.map((item) => {
        return (
          <div className="bg-white rounded-[24px] shadow-md w-[300px] h-[400px] grid grid-rows-2 mb-3">
            <div className="overflow-hidden relative rounded-t-[24px]">
              <img
                className="object-contain"
                src={item.getSignedUrl}
                alt="course-img"
              />
              <div className="bg-neutral-50 px-3 py-1 body text-neutral-500 rounded-[20px] absolute right-5 top-5">
                {item.totalStudent} Students
              </div>
            </div>
            <div className="p-5 relative">
              <p className="subtitle">{item.title}</p>
              <p className="body text-neutral-500">
                Prof. Dr. {item.instructors.name}
              </p>
              <button
                className="btn-primary shadow-glow absolute bottom-5 right-5"
                onClick={() => handleClick(item.id)}
              >
                ENROLL
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
export default CardHomePage;
