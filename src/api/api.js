import axios from "axios";

function getCatagories() {
	var config = {
		method: "get",
		url: `https://61cc13f9198df60017aebe6f.mockapi.io/api/v1/catagories`,
	};

	return axios(config);
	// return new
}

// function loginUser(username, password) {
function userLogin() {
	var config = {
		method: "post",
		url: `http://127.0.0.1:8000/rest-auth/login/`,
		data: {
			username: "teyouale",
			password: "teyouale",
		},
	};
	return axios(config);
}

export { getCatagories, userLogin };
