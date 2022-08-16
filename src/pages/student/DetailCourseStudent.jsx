import React, { useState } from "react";
import CircleProgressBar from "../../components/CircleProgressBar";
import { ViewedLectureCard, UnviewedLectureCard } from "../../components/course-detail/LectureCardStudent";
import { AttemptedQuizCard, UnAttemptedQuizCard } from "../../components/course-detail/QuizCardStudent";
import Tabs from "../../components/Tabs";
function DetailCourseStudent() {
    const [content, setContent] = useState("lecture")

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
                        <ViewedLectureCard name="Lecture 1" url="/" />
                        <UnviewedLectureCard name="Lecture 2" url="/" />
                    </div> }
                    { content === "quiz" && <div className="space-y-5 mt-[64px]">
                        <AttemptedQuizCard name="Calculus IIA" score={90} total_question={12} description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur" />
                        <UnAttemptedQuizCard name="Calculus IIA" total_question={12} description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur" />
                    </div> }
                </div>
            </div>
        </section>
    )
}

export default DetailCourseStudent;