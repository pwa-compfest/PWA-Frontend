import React, { useState } from "react";
import UserDetails from "../../components/register-form/UserDetails";
import PersonalDetailsStudent from "../../components/register-form/PersonalDetailsStudent";
import NextPersonalDetails from "../../components/register-form/NextPersonalDetails";
import ProfilePicture from "../../components/register-form/ProfilePicture";
import RequestSent from "../../components/RequestSent";


function RegisterStudent(){
  const initialValue = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    nis: "",
    major: "",
    phoneNumber: "",
    gender: "",
    profilePicture: "" 
  }
  const [currentStep, setCurrentStep] = useState(1);
  const [submitState, setSubmitState] = useState(false);
  const [value, setValue] = useState(initialValue);
  

  function nextStep(e) {
    e.preventDefault()
    setCurrentStep(currentStep + 1)
  }

  function prevStep(e) {
    e.preventDefault()
    setCurrentStep(currentStep - 1)
  }

  function onSubmit(e) {
    e.preventDefault();
    setSubmitState(true);
    console.log(value);
  }

  const RegisterStudentForm = () => {
    switch(currentStep) {
      case 1:
        return <UserDetails value={value} setValue={setValue} nextStep={nextStep} />
      case 2:
        return <PersonalDetailsStudent value={value} setValue={setValue} prevStep={prevStep} nextStep={nextStep} />
      case 3:
        return <NextPersonalDetails value={value} setValue={setValue} prevStep={prevStep} nextStep={nextStep} />
      case 4:
        return <ProfilePicture value={value} setValue={setValue} onSubmit={onSubmit} prevStep={prevStep}/>
      default:
        // do nothing
    }
  }

return (
<section className="bg-white px-[30px] h-full flex items-center">
  <div className="container">
    {!submitState ? 
    <div className="flex xl:flex-row flex-col xl:space-x-[64px] space-x-[40px] justify-center">
      <div className="xl:flex xl:flex-col xl:space-y-[64px] text-center w-[500px] p-5 hidden lg:mt-0 h-full">
        <div>
          <h2 className="h2">Hi, SEA Student!</h2>
          <p className="subtitle text-neutral-500 mt-3">
              Fill in the form and let's start our journey towards free education.
          </p>
        </div>
        <img src="/images/sign_up_student.png" alt="mockup" className="w-[500px]"/>
      </div>
      <h3 className="h3 xl:hidden text-center">Hi, SEA Student!</h3>
      <div
        className="justify-center max-w-md mx-auto md:max-w-2xl w-[500px] p-12 place-self-center rounded-[24px] shadow-xl">
        <p className="xl:h3 small-text text-right mb-5">
          {currentStep}/4
        </p>
        <RegisterStudentForm />
      </div>
    </div>
    :
    <RequestSent />
  }
  </div>
</section>
    )
}

export default RegisterStudent;