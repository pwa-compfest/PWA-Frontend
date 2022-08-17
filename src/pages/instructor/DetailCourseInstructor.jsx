import React, { useState } from "react";
import LectureCardInstructor from "../../components/course-detail/LectureCardInstructor";
import QuizCardInstructor from "../../components/course-detail/QuizCardInstructor";
import Tabs from "../../components/Tabs";
import Modal from "../../components/Modal";
import Toast from "../../components/Toast";
function DetailCourseInstructor() {
    const [modalDisplay, setModalDisplay] = useState(false);
    const [toastState, setToastState] = useState({ display: false })
    const [isPublic, setIsPublic] = useState(false);
    const [content, setContent] = useState("lecture");

    const contentTotal = 1 // cuman buat cek
    
    function throwToast (type, content) {
        console.log("toast thrown")
        setToastState({ display: true, type: type, content: content })
    }

    return (
        <section className="bg-white h-full w-full flex justify-center px-[35px] sm:px-[70px]">
            {toastState.display && <Toast {...toastState} closeToast={setToastState}/>}
            {modalDisplay && 
            <Modal closeModal={() => setModalDisplay(false)}>
                {contentTotal > 0 ?
                <>
                <div className="space-y-[10px] text-center">
                    {isPublic ? 
                    <>
                    <p className="h3">Change Your Course to Private?</p>
                    <p className="body">This means students can't enroll to the course and can't access all contents in the course.</p>                   
                    </>
                    :
                    <>
                    <p className="h3">Change Your Course to Public?</p>
                    <p className="body">This means students can enroll to the course and access all contents in the course.</p>                   
                    </>}
                </div>
                <div className="flex flex-row justify-between mt-[40px]">
                    <button onClick={() => setModalDisplay(false)} className="btn-text text-error-500 enabled:hover:bg-error-50 enabled:focus:bg-error-50 enabled:active:bg-error-300">Cancel</button>
                    <button onClick={() => {setIsPublic(!isPublic);setModalDisplay(false);throwToast("success", "success message")}} className="btn-primary">Yes</button>
                </div>
                </> 
                :
                <>
                <div className="space-y-[10px] text-center">
                    <p className="h3">The Course Currently Have Zero Content</p>
                    <p className="body">Add a lecture or quiz before you change the course to public.</p>                   
                </div>
                <div className="mt-[40px]">
                    <button onClick={() => setModalDisplay(false)} className="btn-text w-full">I Understand</button>
                </div>
                </>
                }
            </Modal>}
            <div className="container relative">
                <img src="/images/placeholder.png" alt="course" className="w-full h-[200px] rounded-[24px]"/>
                <div className="px-[80px] py-[80px] rounded-[24px] absolute top-36 bg-bright w-full">
                    <div className="flex flex-row flex-wrap justify-between items-center xl:space-y-0 space-y-[40px] mb-[40px]">
                        <div className="space-y-4 w-[800px]">
                            <div className="flex flex-row items-center space-x-4">
                                <p className="xl:h2 h3">Course Name</p>
                                <button onClick={() => setModalDisplay(true)} className="xl:h3 body text-error-500">
                                    {isPublic ? <div className="text-secondary-500"><i class="fa-solid fa-globe" /></div> : <i class="fa-solid fa-lock"></i>}
                                </button>
                            </div>
                            <div className="text-neutral-100 space-x-2 absolute top-4 right-[80px]">
                            <button>
                                <i class="fa-solid fa-pencil"></i>
                            </button>
                            <button>
                                <i class="fa-solid fa-trash"></i>
                            </button>
                            </div>
                            <div className="xl:subtitle body text-neutral-500 space-y-1">
                                <p>Instructor: Prof. Dr. Something</p>
                                <p>Students: 1234</p>
                                <p className="body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center space-x-4">
                        <Tabs data={[{value: "lecture", label: "Lecture"}, {value: "quiz", label: "Quiz"}]} setContent={setContent}/>
                        <button className="btn-icon-primary text-[30px] px-[10px] py-[6px] flex justify-center"><i class="fa-solid fa-plus"></i></button>
                    </div>
                    { content === "lecture" &&
                    <div className="space-y-5 mt-[64px]">
                        <LectureCardInstructor name="Lecture 1" url="/" />
                        <LectureCardInstructor name="Lecture 2" url="/" />
                    </div>}
                    { content === "quiz" && 
                    <div className="space-y-5 mt-[64px]">
                        <QuizCardInstructor name="Calculus IIA" score={90} total_question={12} description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur" />
                        <QuizCardInstructor name="Calculus IIA" total_question={12} description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur" />
                    </div>}
                </div>
            </div>
        </section>
    )
}

export default DetailCourseInstructor;