import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import Toast from "../components/Toast";

function SignIn() {
  const initialValue = { email: "", password: "" };
  const navigate = useNavigate();
  const [value, setValue] = useState(initialValue);
  const [message, setMessage] = useState({ display: false });

  function handleChange(e) {
    const { name, value } = e.target;

    setValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", value.email);
    formData.append("password", value.password);
    setValue({ password: "" });

    axios
      .post(`/auth/signin`, formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        navigate(`/home`);
      })
      .catch((err) => {
        if (err.response?.status === 403) {
          setMessage({
            display: true,
            type: "error",
            content: "Wrong Email or Password",
          });
        } else {
          setMessage({
            display: true,
            type: "error",
            content: "Something is wrong.",
          });
        }
      });
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
        <div className="grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
          <div className="justify-center text-center p-5 hidden lg:mt-0 xl:block">
            <h2 className="h2">Welcome Back!</h2>
            <p className="subtitle text-neutral-500 mt-3">
              Sign in and let's continue our journey towards free education.
            </p>
            <img src="/images/sign_in.png" alt="mockup" />
          </div>
          <div className="justify-center max-w-md mx-auto md:max-w-2xl w-[500px] p-12 place-self-center rounded-[24px] shadow-xl ">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="label-form block">Email</label>
                <input
                  className="text-input mx-auto focus:outline-none"
                  type={"email"}
                  placeholder="example@email.com"
                  name="email"
                  value={value.email}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="mb-5">
                <label className="label-form block">Password</label>
                <input
                  className="text-input mx-auto focus:outline-none"
                  type={"password"}
                  placeholder="enter password"
                  name="password"
                  value={value.password}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="flex justify-end">
                <a
                  href="/forgot-password"
                  className="link text-primary-300 text-[14px] no-underline"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                className="btn-primary block w-[100%] mt-12"
                type="submit"
              >
                SIGN IN
              </button>
            </form>
            <p className="body mt-8 text-neutral-500 flex justify-center">
              Don't have an account yet?
              <a
                href="/register"
                className="link text-primary-300 ml-2 no-underline"
              >
                Create One
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
