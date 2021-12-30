import axios from "axios";

function getCatagories() {
	var config = {
		method: "get",
		url: `https://61cc13f9198df60017aebe6f.mockapi.io/api/v1/catagories`,
	};

	return axios(config);
	// return new
}

export { getCatagories };
