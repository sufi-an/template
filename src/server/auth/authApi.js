import api from "../../boot/axios";

// configure this file based on your API structure
const ENDPOINT = "SalesTraceAuth/api/";
export default class AuthApi {
  //login
  loginApi = async (loginData) => {
    console.log(loginData);
    const response = await api
      .post(ENDPOINT + "Auth/login", loginData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res, "login api hit");
        if (res.status === 200 && res.data.user.role === "Company") {
          // const resData = res.data;
          // console.log(resData);
          // api.defaults.headers.common[
          //   "Authorization"
          // ] = `Bearer ${resData.access_token}`;
          // localStorage.setItem("jwt", resData.access_token);
          // localStorage.setItem("r_token", resData.refresh_token);
          // localStorage.setItem("user", resData.user.id);
          // localStorage.setItem("company", resData.user.company);
          // localStorage.setItem("role", resData.user.role);
          // localStorage.setItem(
          //   "fullname",
          //   resData.user.first_name + " " + resData.user.last_name
          // );
          // localStorage.setItem("avatar", resData.user.avatar);
          // return true;
        } else {
          alert("wrong cred");
          return false;
        }
      });
    return response;
  };
  // logoutApi '/auth/logout/'
  logoutApi = async () => {
    console.log("logout");
    const response = await api.post("/auth/logout/", {});
    api.defaults.headers.common["Authorization"] = "";
    localStorage.clear();
    return true;
  };
  //user-validate /token/verify/

  validateUser = async () => {
    if (!localStorage.getItem("jwt")) {
      return false;
    }
    const token = {
      token: localStorage.getItem("jwt"),
    };
    const response = await api
      .post("/auth/token/verify/", token, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) return true;

        return false;
      });
    return response;
  };
}
