import React, { useState } from "react";
import UserDetails from "../../../components/register-form/UserDetails";
import PersonalDetailsStudent from "../../../components/register-form/PersonalDetailsStudent";
import NextPersonalDetails from "../../../components/register-form/NextPersonalDetails";
import ProfilePicture from "../../../components/register-form/ProfilePicture";
import axios from "../../../api/axios";
import Toast from "../../../components/Toast";

function RegisterStudent() {
  const initialValue = {
    role: "STUDENT",
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    nisn: "",
    majority: "",
    grade: "",
    phoneNumber: "",
    gender: "",
    photo: "",
  };
  const [currentStep, setCurrentStep] = useState(1);
  const [submitState, setSubmitState] = useState(false);
  const [value, setValue] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ display: false });

  function nextStep(e) {
    e.preventDefault();
    setCurrentStep(currentStep + 1);
  }

  function prevStep(e) {
    e.preventDefault();
    setCurrentStep(currentStep - 1);
  }

  async function onSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData();
    formData.append("photo", value.photo);
    formData.append("email", value.email);
    formData.append("password", value.password);
    formData.append("confirmPassword", value.confirmPassword);
    formData.append("name", value.name);
    formData.append("nisn", value.nisn);
    formData.append("majority", value.majority);
    formData.append("grade", value.grade);
    formData.append("phoneNumber", value.phoneNumber);
    formData.append("gender", value.gender);
    formData.append("role", value.role);
    console.log(value);
    axios
      .post(`/auth/signup`, formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setSubmitState(true);
      })
      .catch((err) => {
        if (err.response?.status === 403) {
          setMessage({
            display: true,
            type: "error",
            content: err.response.data.message.errors[0].message,
          });
        } else {
          setMessage({
            display: true,
            type: "error",
            content: "Something is wrong.",
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const RegisterStudentForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <UserDetails value={value} setValue={setValue} nextStep={nextStep} />
        );
      case 2:
        return (
          <PersonalDetailsStudent
            value={value}
            setValue={setValue}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 3:
        return (
          <NextPersonalDetails
            value={value}
            setValue={setValue}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 4:
        return (
          <ProfilePicture
            value={value}
            setValue={setValue}
            onSubmit={onSubmit}
            prevStep={prevStep}
          />
        );
      default:
      // do nothing
    }
  };

  return (
    <section className="bg-white px-[30px] h-full flex items-center">
      <div className="container">
        {message.display && (
          <Toast
            type={message.type}
            content={message.content}
            closeToast={setMessage}
          />
        )}
        {!submitState ? (
          <div className="flex xl:flex-row flex-col xl:space-x-[64px] space-x-[40px] justify-center">
            <div className="xl:flex xl:flex-col xl:space-y-[64px] text-center w-[500px] p-5 hidden lg:mt-0 h-full">
              <div>
                <h2 className="h2">Hi, SEA Student!</h2>
                <p className="subtitle text-neutral-500 mt-3">
                  Fill in the form and let's start our journey towards free
                  education.
                </p>
              </div>
              <img
                src="/images/sign_up_student.png"
                alt="mockup"
                className="w-[500px]"
              />
            </div>
            <h3 className="h3 xl:hidden text-center">Hi, SEA Student!</h3>
            <div className="justify-center max-w-md mx-auto md:max-w-2xl w-[500px] p-12 place-self-center rounded-[24px] shadow-xl">
              {!loading ? (
                <>
                  <p className="xl:h3 small-text text-right mb-5">
                    {currentStep}/4
                  </p>
                  <RegisterStudentForm />
                </>
              ) : (
                <div className="h-[200px] flex flex-col justify-center items-center space-y-10">
                  <div className="loading-spinner"></div>
                  <p className="body">Submitting data...</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center">
            <div className="justify-center max-w-md mx-auto md:max-w-2xl w-[500px] p-12 rounded-[24px] shadow-xl space-y-5 flex flex-col items-center">
              <div className="text-[160px] text-primary-50">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <h3 className="h3 text-center">
                Email Verification Has Been Sent!
              </h3>
              <p className="body text-neutral-500 text-center">{`We have sent you a verification email to ${value.email}. Please check your inbox or spam.`}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default RegisterStudent;
