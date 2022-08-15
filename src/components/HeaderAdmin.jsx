import React from "react"
function HeaderAdmin (){
    return(
        <div className="bg-whit emd:relative sm:px-[100px]">
            <div className="flex justify-center mb-12">
                <h2 className="h2">Dashboard</h2>
            </div>
            <div className="grid grid-rows-2 grid-flow-col sm:px-[100px] px-[30px] ">
                <h3 className="h3">Verify</h3>
                <div className="flex md:justify-start"> 
                    <a href="/admin/verify-instructor" className="btn-deactive items-center justify-center sm:mr-10">
                        Instructor
                    </a>
                    <a href="/admin/verify-course" className="btn-primary items-center justify-center ml-8 lg:ml-0">
                        Course
                    </a>
                </div>
            </div>
        </div>
    )
}
export default HeaderAdmin