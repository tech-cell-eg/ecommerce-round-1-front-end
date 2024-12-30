import api, { handleError } from "../axiosConfig";

const contact = async (values) => {
   
  try {
    const response = await api.post("contact", {
        name: values.name,
        email: values.email,
        text: values.text,
    },
   
);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export default contact;
