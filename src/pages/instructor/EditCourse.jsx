import React, { useRef,useState,useEffect } from "react";
import axios from "../../api/axios";
import Toast from "../../components/Toast";
import { useParams,useNavigate } from "react-router-dom";

function AddCourse() {

  const navigate = useNavigate();
  const { courseId } = useParams();
  const [message, setMessage] = useState({ display: false });
  const [courseData, setCourseData] = useState({
      title: '',
      description: ''
    });
  const image = useRef();
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    })
  }

  useEffect(() => {
    axios
      .get(`/courses/instructor/${courseId}`)
      .then((res) => {
        setCourseData(res.data.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          // UNAUTHORIZED
          navigate("/login");
        } else {
          // PAGE NOT FOUND
          navigate(`/instructor/dashboard`);
        }
      })
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData();
    formData.append("image", image.current.value);
    axios
      .put(`/courses/${courseId}`, {
        title: courseData.title,
        description: courseData.description,
        image: image.current.files[0],
      }, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("PWA_LMS_AT")}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        setMessage({
          display: true,
          type: "success",
          content: "Success Update Course",
        });
        setTimeout(() => {
          navigate(`/instructor/course/${courseId}`);
        }, 2000);
      })
      .catch((err) => {
        if (err.response?.status === 403) {
          setMessage({
            display: true,
            type: "error",
            content: "Failed Update Course",
          });
        }
      }).finally(() => {

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
          <div>
            <h1 className="h2 text-center mb-10">Edit Course</h1>
            <div className="flex flex-wrap justify-center">
              <div className="shadow-card w-[400px] p-[20px] rounded-[24px]">
                  <> 
                <form onSubmit={handleSubmit}>
                  <label className="label-form">Title</label>
                  <input className="text-input mb-4" 
                    type={"text"}
                    required
                    minLength={5}
                    onChange={handleInputChange}
                    value={courseData.title}
                    name={"title"}
                  />
                  <label className="label-form">Description</label>
                  <textarea
                    className="text-input mb-4"
                    rows={5}
                    value={courseData.description}
                    onChange={handleInputChange}
                    name={"description"}
                  ></textarea>
                  <label className="label-form">Picture (optional)</label>
                  <input
                    className="file-input mb-5"
                    type={"file"}
                    accept="image/png, image/jpg, image/jpeg"
                    encType="multipart/form-data"
                    ref={image}
                  />
                  <button
                    className="btn-primary mb-5 w-[100%]"
                    type="submit"
                  >
                    UPDATE COURSE
                  </button>
                </form>
                </>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

export default AddCourse;
