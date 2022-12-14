import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import Modal from "../Modal";
import Toast from "../Toast";
import DeleteLectureModal from "./DeleteLectureModal";
function LectureCardInstructor(props) {
  const [modalDisplay, setModalDisplay] = useState({ display: false });
  const [item, setitem] = useState({
    id: props.item.id,
    title: props.item.title,
    url: props.item.url,
  });
  const [toastState, setToastState] = useState({ display: false });
  let { courseId } = useParams();
  function handleChange(e) {
    const { name, value } = e.target;
    setitem((prevItem) => {
      return {
        ...prevItem,
        [name]: value,
      };
    });
  }
  function submitChange(e) {
    props.onEdit(item, props.idx);
    const req = { courseId: courseId, title: item.title, url: item.url };

    axios
      .put(`/lectures/${props.item.id}`, req)
      .then((res) => console.log(res));
    setitem({ title: "", url: "" });
    setModalDisplay({ display: false });
    setToastState({
      display: true,
      type: "success",
      content: "Lecture updated",
    });
  }

  return (
    <section>
      {toastState.display && (
        <Toast {...toastState} closeToast={setToastState} />
      )}
      {modalDisplay.content === "edit-lecture" && (
        <Modal closeModal={() => setModalDisplay({ display: false })}>
          <div>
            <h1 className="h2 text-center mb-10">Edit Lecture</h1>
            <div className="flex flex-wrap justify-center">
              <div className="w-[400px] p-[20px] rounded-[24px]">
                <label className="label-form">Name</label>
                <input
                  className="text-input mb-4"
                  placeholder="current lecture name"
                  name="title"
                  value={item.title}
                  onChange={handleChange}
                />
                <label className="label-form">URL</label>
                <input
                  className="text-input mb-6"
                  placeholder="current URL "
                  name="url"
                  value={item.url}
                  onChange={handleChange}
                />
                <button
                  className="btn-primary mb-5 w-[100%]"
                  onClick={submitChange}
                >
                  SAVE CHANGES
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
      {modalDisplay.content === "delete-lecture" && (
        <DeleteLectureModal
          setModalDisplay={setModalDisplay}
          setMessage={setToastState}
          lectureId={props.item.id}
          onDelete={props.onDelete}
          setLoadContent={props.setLoadContent}
        />
      )}
      <div className="relative shadow-md px-[40px] py-[20px] rounded-[24px] space-y-[40px] w-full">
        <div className="text-neutral-100 space-x-2 absolute top-4 right-[80px]">
          <button
            onClick={() =>
              setModalDisplay({ display: true, content: "edit-lecture" })
            }
          >
            <i class="fa-solid fa-pencil"></i>
          </button>
          <button
            onClick={() =>
              setModalDisplay({ display: true, content: "delete-lecture" })
            }
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
        <p className="subtitle text-neutral-500">{props.item.title}</p>
        <div className="flex justify-end">
          <button
            onClick={() => window.open(props.item.url)}
            className="btn-text md:w-fit w-full"
          >
            Preview
          </button>
        </div>
      </div>
    </section>
  );
}

export default LectureCardInstructor;
