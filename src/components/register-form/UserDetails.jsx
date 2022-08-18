import React, { useRef, useState } from "react";
import Toast from "../Toast"

function UserDetails({ value, setValue, nextStep }) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [ toastState, setToastState ] = useState({ display: false });

    function handleNextStep(e) {
      e.preventDefault()
      value.email = emailRef.current.value ? emailRef.current.value : value.email;

      if (passwordRef.current.value !== confirmPasswordRef.current.value) {
        setToastState({ display: true, type: "error", content: "Password do not match." });
        console.log("Password do not match")
        return
      }

      value.password = passwordRef.current.value ? passwordRef.current.value : value.password;
      value.confirmPassword = confirmPasswordRef.current.value ? confirmPasswordRef.current.value : value.confirmPassword;

      setValue(value);
      nextStep(e);
    }
    return (
        <form onSubmit={handleNextStep}>
          {toastState.display && (
        <Toast {...toastState} closeToast={setToastState} />
      )}
        <div className="mb-5">
          <label className="label-form block">Email</label>
          <input required className="text-input mx-auto focus:outline-none" type={"email"}
            placeholder="example@email.com" defaultValue={value.email} ref={emailRef}></input>
        </div>
        <div className="mb-5">
          <label className="label-form block">Password</label>
          <input required className="text-input mx-auto focus:outline-none" type={"password"} minLength={8}
            placeholder="enter password" ref={passwordRef}></input>
        </div>
        <div className="mb-5">
          <label className="label-form block">Confirm Password</label>
          <input required className="text-input mx-auto focus:outline-none" type={"password"}
            placeholder="enter password" ref={confirmPasswordRef}></input>
        </div>
        <div className="w-full flex justify-end">
            <button type="submit" className="btn-primary block mt-12">
            Next
            </button>
        </div>
        <p className="body mt-8 text-neutral-500 flex justify-center">
          Already have an account?
          <a href="/login" className="link text-primary-300 ml-2 no-underline">
            Sign in
          </a>
        </p>
      </form>
    );
}

export default UserDetails;