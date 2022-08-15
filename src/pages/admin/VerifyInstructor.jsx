import React, { useEffect, useState } from "react";
import CardVerifyInstructor from "../../components/CardVerifyInstructor";
import HeaderAdmin from "../../components/HeaderAdmin";
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
    <HeaderAdmin />  
    <section className="bg-gray-100 h-auto mt-12">
        <div className="flex flex-wrap gap-5 md:relative sm:px-[100px] justify-center">
            <CardVerifyInstructor data={items} />
        </div>
        <div className="h-12"></div>
    </section>
</div>
);
}
export default VerifyInstructor;