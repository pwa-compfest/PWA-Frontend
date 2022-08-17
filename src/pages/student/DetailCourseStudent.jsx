import React, { useState } from "react";
import CircleProgressBar from "../../components/CircleProgressBar";
import LectureCardStudent from "../../components/course-detail/LectureCardStudent";
import QuizCardStudent from "../../components/course-detail/QuizCardStudent";
import Tabs from "../../components/Tabs";
function DetailCourseStudent() {
    const [content, setContent] = useState("lecture")
    const itemLecture = [
        { name: "Lecture 1", url: "/", viewed: true },
        { name: "Lecture 2", url: "/", viewed: true },
        { name: "Lecture 3", url: "/", viewed: false },
      ];
      const itemQuiz = [
        { name: "Quiz 1", url: "/", total_question: 20, score: 90, description: "calculus", attempted: true },
        { name: "Quiz 2", url: "/", total_question: 20, description: "calculus", attempted: false },
        { name: "Quiz 3", url: "/", total_question: 20, description: "calculus", attempted: false },
      ];

    return (
        <section className="bg-white h-full w-full flex justify-center px-[35px] sm:px-[70px]">
            <div className="container relative">
                <img src="/images/placeholder.png" alt="course" className="w-full h-[200px] rounded-[24px]"/>
                <div className="px-[80px] py-[80px] rounded-[24px] absolute top-36 bg-bright w-full">
                    <div className="flex flex-row flex-wrap justify-between items-center xl:space-y-0 space-y-[40px] mb-[40px]">
                        <div className="space-y-4 w-[800px]">
                            <p className="xl:h2 h3">Course Name</p>
                            <div className="xl:subtitle body text-neutral-500 space-y-1">
                                <p>Instructor: Prof. Dr. Something</p>
                                <p>Students: 1234</p>
                                <p className="body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
                            </div>
                        </div>
                        <div className="min-w-[100px] max-w-[100px]">
                            <CircleProgressBar value={50}/>
                        </div>
                    </div>
                    <Tabs data={[{value: "lecture", label: "Lecture"}, {value: "quiz", label: "Quiz"}]} setContent={setContent}/>
                    { content === "lecture" && 
                    <div className="space-y-5 mt-[64px]">
                        {itemLecture.map((item, index) => {
                        return (
                        <LectureCardStudent
                            key={index}
                            id={index}
                            item={item}
                        />
                        );
                    })}
                    </div> }
                    { content === "quiz" && <div className="space-y-5 mt-[64px]">
                        {itemQuiz.map((item, index) => {
                            return (
                            <QuizCardStudent
                                key={index}
                                id={index}
                                item={item}
                            />
                            );
                        })}
                    </div> }
                </div>
            </div>
        </section>
    )
}

export default DetailCourseStudent;