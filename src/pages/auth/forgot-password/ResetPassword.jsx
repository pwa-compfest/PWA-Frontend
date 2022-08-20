import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import Toast from "../../../components/Toast";

function ResetPassword() {
  const { token, userId } = useParams();
  const [message, setMessage] = useState({ display: false });
  const [value, setValue] = useState({
    token: token,
    userId: parseInt(userId),
    password: "",
    confirmPassword: ""
  });
  
  function handleChange(e) {
    const { name, value } = e.target;

    setValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault()
    if (value.password !== value.confirmPassword) {
        setMessage({
            display: true,
            type: "error",
            content: "Password do not match",
        });
      return
    }
    axios
      .post(`/auth/password/verify`,JSON.stringify(value),{
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setMessage({
            display: true,
            type: "success",
            content: "Success Reset Password",
        });
        setTimeout(() => {
            navigate(`/login`)
        }, 2000);
      })
      .catch((err) => {
        if (err.response?.status === 403) {
            setValue({ password: "", confirmPassword: "" });
            setMessage({
              display: true,
              type: "error",
              content: "Failed Reset Password",
            });
          } else {
            setValue({ password: "", confirmPassword: "" });
            setMessage({
              display: true,
              type: "error",
              content: "Something is wrong.",
            });
          }
      })
  }
return (
<section className="bg-white md:h-[77.4vh] md:relative sm:px-[100px] px-[30px]">
    <div className="container">
        <div className="grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
            <div className="justify-center text-center p-5 hidden lg:mt-0 xl:block">
                <h2 className="h2">Forgot Your Password</h2>
                <p className="subtitle text-neutral-500 mt-3">Dont worry, we'll help you out!</p>
                <img src="/images/sign_in.png" className="mt-5" alt="" />
            </div>
            <div className="justify-center max-w-md mx-auto md:max-w-2xl w-[500px] p-12 place-self-center rounded-[24px] shadow-xl ">
            <form onSubmit={handleSubmit}>
                {message.display && (
                    <Toast
                        type={message.type}
                        content={message.content}
                        closeToast={setMessage}
                    />
                )}
                <div className="mb-5">
                    <label className="label-form block">New Password</label>
                    <input className="text-input mx-auto focus:outline-none" 
                        type={"password"} 
                        minLength={8}
                        placeholder="Enter New Password" 
                        required
                        value={value.password}
                        onChange={handleChange}
                        name="password"
                    ></input>
                </div>
                <div className="mb-5">
                    <label className="label-form block">Confirm Password</label>
                    <input className="text-input mx-auto focus:outline-none" 
                        type={"password"}
                        placeholder="Enter Confirm Password" 
                        required
                        value={value.confirmPassword}
                        onChange={handleChange}
                        name="confirmPassword"
                    ></input>
                </div>
                <button className="btn-primary block w-[100%] mt-12" type="submit">
                    RESET PASSWORD
                </button>
            </form>
            </div>
        </div>
    </div>
</section>
);
}

export default ResetPassword;