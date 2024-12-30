import api, { handleError } from "../axiosConfig";

const updateuserinfo = async (values) => {
  try {
    const response = await api.patch("user", {
      first_name: values.first_name,
      mobile_number: values.mobile_number,
      address: values.address,
    },
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }

);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export default updateuserinfo;