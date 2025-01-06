import api, { handleError } from "../axiosConfig";

const updateuserinfo = async (formData) => {
  try {
    formData.append("_method", "patch");

    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    const response = await api.post("user", formData, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "multipart/form-data",
      },
    });

    // console.log(response.data.data.user);
    return response.data.data.user;
  } catch (error) {
    handleError(error);
  }
};

export default updateuserinfo;
