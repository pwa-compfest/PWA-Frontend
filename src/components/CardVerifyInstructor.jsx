import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function CardVerifyInstructor(props) {
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
    <div className="bg-bright max-w-md mx-auto md:max-w-2xl w-[300px] pt-12 h-[442px] place-self-center rounded-[24px] shadow-xl mt-12">
        <div className="mb-10 flex justify-center">
            <img src="/images/user.png" alt="" />
        </div>
        <div className="text-left font-work px-8">
            <span className="text-xl font-medium">Prof. Dr. Something</span>
            <div className="text-sm leading-6 text-gray-500 mt-3">
                <p>Email: your@email.com</p>
                <p>NIP: 12345</p>
                <p>Expertise: </p>
                <p>Phone Number: </p>
                <p>Gender: </p>
            </div>
            <div className="mt-5 flex items-start">
                <button className="btn-reject" src={item.id}>REJECT</button>
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
    activeLinkClassName="btn-icon-primary" />
</>
);
}
export default CardVerifyInstructor;