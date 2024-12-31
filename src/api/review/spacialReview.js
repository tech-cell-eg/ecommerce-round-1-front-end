import api, { handleError } from "../axiosConfig";

const getspicialreview = async (id) => {
    const token = localStorage.getItem("token");
  try {
    const response = await api.get(`reviews/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        }});
        
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export default getspicialreview;