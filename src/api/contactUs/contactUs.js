import api, { handleError } from "../axiosConfig";

const contact = async (values) => {
    const token = localStorage.getItem("token");
    
  try {
    const response = await api.post("login", {
        name: values.name,
        email: values.email,
        msg: values.msg,
        password: values.password
    },
    {
      headers: {
       Authorization: "Bearer " + token
      },
    }
);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export default contact;
