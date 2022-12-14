import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import CardDashboardStudent from "../components/CardDashboardStudent";

function DashboardStudent() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get(`/courses/me`).then((res) => {
      setItems(res.data.data);
    });
  }, []);
  const totalCourse = items.length;
  return (
    <section className="bg-white md:h-[77.4vh] md:relative sm:px-[100px] px-[30px]">
      <div className="container">
        <h1 className="h1 text-center mb-10">My Course</h1>
        <div className="flex justify-between mb-5 px-14">
          <p className="body">Total course: {totalCourse}</p>
          <a href="/home" className="link no-underline text-primary-500">
            SEE ALL COURSE
          </a>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          <CardDashboardStudent data={items} />
        </div>
      </div>
    </section>
  );
}

export default DashboardStudent;
