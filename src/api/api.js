import axios from "axios";

const requestUrl = "https://gagarianrest.herokuapp.com/";

function getCatagories() {
  var config = {
    method: "get",
    url: `${requestUrl}catagories/`,
  };

  return axios(config);
  // return new
}

function userLogin(username, password) {
  var data = JSON.stringify({
    username: username,
    password: password,
  });

  var config = {
    method: "post",
    url: `${requestUrl}rest-auth/login/`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  return axios(config);
}

function getAllProducts() {
  var config = {
    method: "get",
    url: `${requestUrl}products/`,
    // headers: {
    // 	"Content-Type": "application/json",
    // },
  };
  return axios(config);
}

export { getCatagories, userLogin, getAllProducts };
