import api, { handleError } from "../axiosConfig";

const fetchlogin = async (values) => {
  try {
    const response = await api.post("login", {
      email: values.email,
      password: values.password,
    });
    return response.data.data;
  } catch (error) {
    console.log(error.response, "Failed to fetch login");
    handleError(error);
  }
};

export default fetchlogin;
