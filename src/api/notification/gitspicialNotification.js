import api, { handleError } from "../axiosConfig";

const getspicialNotification = async (id) => {
    const token = localStorage.getItem("token");
  try {
    const response = await api.get(`notifications/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        }});
        console.log(response.data);
        
    return response.data.data;
  } catch (error) {
    handleError(error);
  }
};

export default getspicialNotification;