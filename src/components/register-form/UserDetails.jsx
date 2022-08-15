import React from "react";

function UserDetails({ nextStep }) {
    return (
        <form>
        <div className="mb-5">
          <label className="label-form block">Email</label>
          <input className="text-input mx-auto focus:outline-none" type={"email"}
            placeholder="example@email.com"></input>
        </div>
        <div className="mb-5">
          <label className="label-form block">Password</label>
          <input className="text-input mx-auto focus:outline-none" type={"password"}
            placeholder="enter password"></input>
        </div>
        <div className="mb-5">
          <label className="label-form block">Confirm Password</label>
          <input className="text-input mx-auto focus:outline-none" type={"password"}
            placeholder="enter password"></input>
        </div>
        <div className="w-full flex justify-end">
            <button onClick={nextStep} className="btn-primary block mt-12">
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