import api, { handleError } from "../axiosConfig";

const resetpassword = async (values) => {
  try {
    const response = await api.post("reset-password", {
      token:values.token,
      password:values.password,
      password_confirmation:values.password_confirmation
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export default resetpassword;