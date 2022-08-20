import React, { useRef,useState } from "react";
import axios from "../../api/axios";
import Toast from "../../components/Toast";

function AddCourse() {
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ display: false });
  const description = useRef();
  const title = useRef();
  const image = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true);
    let formData = new FormData();
    formData.append("image", image.current.value);
    axios
      .post(`/courses`, {
        title: title.current.value,
        description: description.current.value,
        image: image.current.files[0],
      }, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("PWA_LMS_AT")}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        setSubmit(true);
      })
      .catch((err) => {
        if (err.response?.status === 403) {
          setMessage({
            display: true,
            type: "error",
            content: "Failed Add Course",
          });
        }
      }).finally(() => {
        setLoading(false);
      })

  }

  return (
    <section className="bg-white md:h-[77.4vh] md:relative sm:px-[100px] px-[30px]">
      <div className="container">
        {message.display && (
          <Toast
            type={message.type}
            content={message.content}
            closeToast={setMessage}
          />
        )}
        {!submit ? (
          <div>
            <h1 className="h2 text-center mb-10">Add Course</h1>
            <div className="flex flex-wrap justify-center">
              <div className="shadow-card w-[400px] p-[20px] rounded-[24px]">
                {!loading ? (
                  <> 
                <form onSubmit={handleSubmit}>
                  <label className="label-form">Title</label>
                  <input className="text-input mb-4" 
                    placeholder="course name" 
                    ref={title}
                    required
                    minLength={5}
                  />
                  <label className="label-form">Description</label>
                  <textarea
                    className="text-input mb-4"
                    rows={5}
                    placeholder="course description"
                    ref={description}
                  />
                  <label className="label-form">Picture (optional)</label>
                  <input
                    className="file-input mb-5"
                    type={"file"}
                    accept="image/png, image/jpg, image/jpeg"
                    ref={image}
                    encType="multipart/form-data"
                  />
                  <button
                    className="btn-primary mb-5 w-[100%]"
                    type="submit"
                  >
                    SUBMIT COURSE
                  </button>
                </form>
                </>
              ) : (  
                <div className="h-[200px] flex flex-col justify-center items-center space-y-10">
                    <div className="loading-spinner"></div>
                    <p className="body">Submitting data...</p>
                </div>
              )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-wrap justify-center">
              <div className="shadow-card w-[400px] p-[20px] rounded-[24px] text-center">
                <div className="flex justify-center mb-5">
                  <img src="/images/checklist.png" alt="checklist" />
                </div>

                <h1 className="h3 mb-3">Your Request Has Been Sent!</h1>
                <p className="body text-neutral-500 mb-10">
                  We are reviewing your submission now. Please wait for further
                  information.
                </p>
                <div className="btn-primary">
                  <a href="/instructor/dashboard">GO TO DASHBOARD</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default AddCourse;
