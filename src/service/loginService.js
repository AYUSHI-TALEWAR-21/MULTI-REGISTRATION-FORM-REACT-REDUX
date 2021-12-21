import { Global_var } from "../global/global_var";
import RestDataSource from "../resetDatasource/restDataSource";

export const loginService = {
  login,
  logout,
  getMacAddress,
  TokenUser,
};

function login(userData, fn) {
  // 
  loginService.TokenUser((res) => {
    //  
    if (res.status === "success") {
      localStorage.setItem("jwt-token", res.responseObject);
      var url = Global_var.BASEURL + Global_var.URL_LOGIN;
      return new RestDataSource(url, null, fn).Store(userData, (res) => fn(res));
    }
  }, console.log("Token Error"));
}

function getMacAddress(userName, isFirstTimeLogin, fn) {
  var url =
    Global_var.BASEURL +
    Global_var.URL_GET_MACID +
    "?userName=" +
    userName +
    "&isFirstTimeLogin=1";
  return new RestDataSource(url, null, fn).GetData((res) => fn(res));
}

function logout(username, fn) {
  // remove user from local storage to log user out
  //alert("logging out")
  localStorage.removeItem("userData");
  localStorage.removeItem("userAuthenticated");
  var url = Global_var.BASEURL + Global_var.URL_LOGOUT;
  var userData = username;
  return new RestDataSource(url, null, fn).Store(userData, (res) => fn(res));
}

function TokenUser(fn) {
  let url = Global_var.BASEURL + Global_var.URL_JWT_TRUST;
  return new RestDataSource(url).GetData((res) => fn(res.data));
}
