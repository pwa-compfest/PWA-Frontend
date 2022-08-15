import React, { useEffect, useState } from "react";
import CardVerifyInstructor from "../../components/CardVerifyInstructor";
function VerifyInstructor() {
    const [items, setItems] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(
        (response) =>
          response.json().then((data) => {
            setItems(data);
          })
      );
    }, []);
return (
<div className="mt-12">
    <div className="bg-whit md:relative sm:px-[100px]">
        <div className="flex justify-center mb-12">
            <h2 className="h2">Dashboard</h2>
        </div>
        <div className="grid grid-rows-2 grid-flow-col sm:px-[100px] px-[30px] ">
            <h3 className="h3">Verify</h3>
            <div className="flex md:justify-start"> 
                <a href="/" className="btn-primary items-center justify-center sm:mr-10">
                    Instructor
                </a>
                <a href="/" className="btn-deactive items-center justify-center ml-8 lg:ml-0">
                    Course
                </a>
            </div>
        </div>
    </div>

    <section className="bg-gray-100 h-auto mt-12">
        <div className="flex flex-wrap gap-5 md:relative sm:px-[100px] justify-center">

            <CardVerifyInstructor data={items} />
        </div>
    </section>

</div>
);
}
export default VerifyInstructor;