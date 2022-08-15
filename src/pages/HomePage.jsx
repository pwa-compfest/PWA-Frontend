import React from "react";
import Card from "../components/Card";

function HomePage() {
  return (
    <section className="bg-white px-[30px]">
      <div className="container">
        <h1 className="h1 text-center mb-10">All Course</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center">
          <Card students="10" />
          <Card students="10" />
          <Card students="10" />
          <Card students="10" />
          <Card students="10" />
          <Card students="10" />
          <Card students="10" />
        </div>
        
      </div>
    </section>
  );
}

export default HomePage;
