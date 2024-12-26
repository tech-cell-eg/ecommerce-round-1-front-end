import api, { handleError } from "../axiosConfig";

const getspicialstory = async (id) => {
  try {
    const response = await api.get(`our-stories/${id}`);
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    handleError(error);
  }
};

export default getspicialstory