import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import RegisteredPage from "./RegisteredPage";

function VerificationPage() {
  const { token, userId } = useParams();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .post(`/auth/account/verify`, JSON.stringify({ token, userId }), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        navigate("/", { replace: true });
      })
      .finally(() => setLoading(false));
  }, [token, userId]);

  return (
    <>
      {!loading ? (
        <RegisteredPage role="instructor" />
      ) : (
        <section className="bg-white md:h-[77.4vh] md:relative sm:px-[100px] px-[30px]">
          <div className="h-full w-full flex flex-col justify-center items-center">
            <div className="loading-spinner"></div>
          </div>
        </section>
      )}
    </>
  );
}

export default VerificationPage;
