import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: { key: "9db710e9635f45838cab5fa3d25dc1a0" },
});
