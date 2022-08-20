import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import CircleProgressBar from "./CircleProgressBar";

function CardDashboardStudent(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;
  const navigate = useNavigate();

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
          <div className="bg-white rounded-[24px] shadow-md w-[300px] h-[450px] grid grid-rows-2 mb-3">
            <div className="overflow-hidden relative rounded-t-[24px]">
              <img
                className="object-contain"
                src={item.getSignedUrl}
                alt="courses-img"
              />
              <div className="bg-neutral-50 px-3 py-1 body text-neutral-500 rounded-[20px] absolute right-5 top-5">
                {item.totalStudent} Students
              </div>
            </div>
            <div className="p-5 relative">
              <div className="w-[40px] mb-2">
                {/* progress bar msh ngawur */}
                <CircleProgressBar value={item.id} />
              </div>
              <p className="subtitle">{item.course.title}</p>
              <p className="body text-neutral-500">
                Prof. Dr. {item.course.instructors.name}
              </p>
              <button
                className="btn-primary shadow-glow absolute bottom-5 right-5"
                onClick={() => navigate(`/student/course/${item.courseId}`)}
              >
                VIEW COURSE
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
export default CardDashboardStudent;
