import api, { handleError } from "../axiosConfig";

const forgetpasssword = async (values) => {
  try {
    const response = await api.post("forgot-password", {
      email: values.email,
    });
      console.log(response.data);
      console.log(response.data.data.token);
      
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export default forgetpasssword;