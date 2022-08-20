import axios from "axios";
export default axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("PWA_LMS_AT")}`,
  },
  withCredentials: true,
<<<<<<< HEAD
});
=======
});
>>>>>>> 415e815 (fix student progress bugs and add routing)
