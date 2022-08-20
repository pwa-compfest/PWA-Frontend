import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "../../api/axios";
import Toast from "../Toast";

function CardVerifyInstructor() {
  const [data, setData] = useState([]);
  const [toastState, setToastState] = useState({ display: false });
  useEffect(() => {
    axios.get(`/instructor`).then((res) => {
      setData(res.data.data);
    });
  }, []);

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

  function handleReject(id, idx) {
    axios
      .put(`/instructor/reject/${id}`)
      .then((res) => {
        setCurrentItems((prevItems) => {
          return prevItems.filter((item, index) => {
            return index !== idx;
          });
        });
        setToastState({
          display: true,
          type: "success",
          content: "Success reject instructor",
        });
      })
      .catch((err) => {});
  }

  function handleVerify(id, idx) {
    axios
      .put(`/instructor/verify/${id}`)
      .then((res) => {
        setCurrentItems((prevItems) => {
          return prevItems.filter((item, index) => {
            return index !== idx;
          });
        });
        setToastState({
          display: true,
          type: "success",
          content: "Success verify instructor",
        });
      })
      .catch((err) => {});
  }

  return (
    <>
      {toastState.display && (
        <Toast {...toastState} closeToast={setToastState} />
      )}
      {currentItems.map((item, idx) => {
        return (
          <div className="bg-bright max-w-md mx-auto md:max-w-2xl w-[300px] pt-12 h-[450px] place-self-center rounded-[24px] shadow-xl mt-12">
            <div className="mb-10 flex justify-center">
              <img src="/images/user.png" alt="instructor-img" />
            </div>
            <div className="text-left font-work px-8">
              <span className="text-xl font-medium">Prof. Dr. {item.name}</span>
              <div className="text-sm leading-6 text-gray-500 mt-3">
                <p>NIP: {item.nip}</p>
                <p>Expertise: {item.expertise}</p>
                <p>Phone Number: {item.phone_number}</p>
                <p>Gender: {item.gender}</p>
              </div>
              <div className="mt-5 flex items-start">
                <button
                  className="btn-reject"
                  onClick={() => handleReject(item.id, idx)}
                >
                  REJECT
                </button>
                <button
                  className="btn-primary"
                  onClick={() => handleVerify(item.id, idx)}
                >
                  VERIFY
                </button>
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

export default CardVerifyInstructor;
