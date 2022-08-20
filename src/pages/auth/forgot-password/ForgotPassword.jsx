import React,{useState} from "react";
import axios from "../../../api/axios";
import Toast from "../../../components/Toast";


function ForgotPassword() {

    const [value,setValue] = useState({email: ""})
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ display: false });
    const [submitState, setSubmitState] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
    
        setValue((prevValue) => {
          return {
            ...prevValue,
            [name]: value,
          };
        });
    }

    async function handleSubmit(e){
        e.preventDefault()
        setLoading(true);
        axios
            .post(`/auth/password/send`, value, {
                headers:{ "content-type": "application/json" }
            })
            .then((res) => {
                setSubmitState(true);
            })
            .catch((err) => {
                if (err.response?.status === 403) {
                  setValue({ email: ""});
                  setMessage({
                    display: true,
                    type: "error",
                    content: "User does not exist",
                  });
                } else {
                  setValue({ email: "" });
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
        {!submitState ? (
        <div className="grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
            <div className="justify-center text-center p-5 hidden lg:mt-0 xl:block">
                <h2 className="h2">Forgot Your Password</h2>
                <p className="subtitle text-neutral-500 mt-3">Dont worry, we'll help you out!</p>
                <img src="/images/sign_in.png" className="mt-5" alt="" />
            </div>
            <div className="justify-center max-w-md mx-auto md:max-w-2xl w-[500px] p-12 place-self-center rounded-[24px] shadow-xl ">
                {!loading ? (
                    <> 
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="label-form block">Email</label>
                            <input className="text-input mx-auto focus:outline-none" 
                                type={"email"}
                                placeholder="example@email.com"
                                value={value.email}
                                onChange={handleChange}
                                autoComplete="off"
                                required
                                name="email"
                            ></input>
                        </div>
                        <button className="btn-primary block w-[100%] mt-12" type="submit">
                            FORGOT PASSWORD
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
        ) : (
            <div className="h-full flex items-center">
                <div className="justify-center max-w-md mx-auto md:max-w-2xl w-[500px] p-12 rounded-[24px] shadow-xl space-y-5 flex flex-col items-center">
                <div className="text-[160px] text-primary-50">
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <h3 className="h3 text-center">
                    Change Password Verification Has Been Sent!
                </h3>
                <p className="body text-neutral-500 text-center">{`We have sent you a email to ${value.email}. Please check your inbox or spam folder to reset your password.`}</p>
                </div>
            </div>
        )}
    </div>
</section>
);
}

export default ForgotPassword;