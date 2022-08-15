import React, { useState } from "react";

function Dropdown({ placeholder, data }) {
    const [ openSelection, setOpenSelection ] = useState(false)
    const [ selectedItem, setSelectedItem ] = useState(null)

    return (
        <section className="w-full relative">
            <button onClick={(e) => {e.preventDefault();setOpenSelection(!openSelection)}} className="dropdown flex justify-between items-center w-full relative z-[2]">
                <p className="body">{selectedItem ? selectedItem.label : placeholder}</p>
                <i className={`fa-solid fa-chevron-${openSelection ? 'up' : 'down'}`}></i>
            </button>
            {openSelection &&
            <ul className="selection-container w-full absolute z-[1]">
                {data.map((item, index) => {
                    return (
                        <li onClick={() => {setSelectedItem(item);setOpenSelection(false)}} key={index} value={item.value} className="selection-label body">
                            {item.label}
                        </li>
                    )
                })}
            </ul>}
        </section>
    );
}

export default Dropdown;