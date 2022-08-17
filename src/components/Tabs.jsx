import React from "react";
import { useState } from "react";

function Tabs({ data, setContent }) {
    const [ selected, setSelected ] = useState(data[0].value);

    function handleClick(e) {
        setSelected(e.target.value)
        setContent(e.target.value)
    }

    return (
        <div className="bg-neutral-50 rounded-[14px] flex flex-row md:w-[400px] w-[200px]">
            {data.map((item) => {
                return (
                    <button key={item.value} value={item.value} onClick={handleClick} className={selected === item.value? "tab-selected" : "tab"}>
                        {item.label}
                    </button>
                )
            })}
        </div>
    )
}

export default Tabs;