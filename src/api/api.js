import axios from "axios";

function getCatagories() {
	var config = {
		method: "get",
		url: `https://61cc13f9198df60017aebe6f.mockapi.io/api/v1/catagories`,
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
		url: `http://127.0.0.1:8000/rest-auth/login/`,
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
		url: "http://127.0.0.1:8000/products/",
		// headers: {
		// 	"Content-Type": "application/json",
		// },
	};
	return axios(config);
}

export { getCatagories, userLogin, getAllProducts };
