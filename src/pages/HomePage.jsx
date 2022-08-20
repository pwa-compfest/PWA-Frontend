import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import CardHomePage from "../components/CardHomePage";

function HomePage() {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const { items } = await axios.get(`/courses`);
    setItems(items);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <section className="bg-white px-[30px]">
      <div className="container">
        <h1 className="h1 text-center mb-10">All Course</h1>
        <div className="flex flex-wrap gap-5 justify-center">
          <CardHomePage data={items} />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
