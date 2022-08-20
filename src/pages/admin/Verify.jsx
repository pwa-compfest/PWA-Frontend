import React, { useState } from "react";
import CardVerifyInstructor from "../../components/verify/CardVerifyInstructor";
import CardVerifyCourse from "../../components/verify/CardVerifyCourse";
import Tabs from "../../components/Tabs";
function VerifyInstructor() {
  const [content, setContent] = useState("instructor")
  return (
  <div className="mt-12">
    <div className="bg-white md:relative sm:px-[100px]">
      <div className="flex justify-center mb-12">
        <h2 className="h2">Dashboard</h2>
      </div>
    </div>
    <div className="flex flex-wrap sm:px-[100px] px-[30px] ">
        <h3 className="h3 mr-12 mt-2">Verify</h3>
        <Tabs data={[{value: "instructor" , label: "Instructor" }, {value: "course" , label: "Course" }]}
      setContent={setContent} />
    </div>
        { content === "instructor" && 
            <section className="bg-gray-100 h-full mt-12">
              <div className="flex flex-wrap gap-5 md:relative sm:px-[100px] justify-center">
                  <CardVerifyInstructor /> 
              </div>
            </section>
        } 
        { content === "course" && 
            <section className="bg-gray-100 h-full mt-12">
              <div className="flex flex-wrap gap-5 md:relative sm:px-[100px] justify-center">
                <CardVerifyCourse /> 
              </div>
            </section>
        }
    <div className="h-12"></div>
  </div>
  );
}
export default VerifyInstructor;