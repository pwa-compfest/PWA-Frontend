import React, { useState } from "react";

function Dropdown({ placeholder, data, reference, value }) {
    const [ openSelection, setOpenSelection ] = useState(false);
    const [ selected, setSelected ] = useState(value);

    return (
        <section className="w-full relative">
            <button onClick={(e) => {e.preventDefault();setOpenSelection(!openSelection);}} className={"dropdown flex justify-between items-center w-full relative z-[2]"}>
                <p className="body">{selected !== "" ? selected : placeholder}</p>
                <i className={`fa-solid fa-chevron-${openSelection ? 'up' : 'down'}`}></i>
            </button>
            <input className="opacity-0 w-full absolute bottom-0" value={selected} onChange={() => null} required/>
            {openSelection &&
            <ul className="selection-container w-full absolute z-[4] top-[50px]">
                {data.map((item, index) => {
                    return (
                        <li onClick={() => {setSelected(item);setOpenSelection(false);reference.current = item.toString()}} key={index} className="selection-label body">
                            {item}
                        </li>
                    )
                })}
            </ul>}
        </section>
    );
}

export default Dropdown;