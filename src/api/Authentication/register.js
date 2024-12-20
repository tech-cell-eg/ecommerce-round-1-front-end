import api, { handleError } from "../axiosConfig";

const fetchregister = async (values) => {
  try {
    const response = await api.post("register", {
      first_name:values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
      terms_agreed: values.terms_agreed
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export default fetchregister;
