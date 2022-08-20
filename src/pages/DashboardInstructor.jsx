import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import CardDashboardInstructor from "../components/CardDashboardInstructor";
function DashboardInstructor() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`/courses/instructor`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("PWA_LMS_AT")}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        setItems(res.data.data);
      })
    }, []);  
  
  return (
    <section className="bg-white md:h-[77.4vh] md:relative sm:px-[100px] px-[30px]">
      <div className="container">
        <h1 className="h1 text-center mb-10">My Course Program</h1>
        <div className="flex justify-between mb-5 px-14">
          <p className="body">Total course: {items.totalRow}</p>
          <a
            href="/instructor/add-course"
            className="link no-underline text-primary-500"
          >
            + ADD COURSE
          </a>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
            <CardDashboardInstructor data={items} />    
        </div>
      </div>
    </section>
  );
}

export default DashboardInstructor;
