import api, { handleError } from "../axiosConfig";

const deleteNotification = async (id) => {
    const token = localStorage.getItem("token");
  try {
    const response = await api.delete(`notifications/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        }});
        console.log(response.data);
        
    return response.data.data;
  } catch (error) {
    handleError(error);
  }
};

export default deleteNotification;