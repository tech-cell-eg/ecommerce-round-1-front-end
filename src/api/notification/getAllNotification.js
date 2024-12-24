import api, { handleError } from "../axiosConfig";

const getAllNotification = async () => {
    const token = localStorage.getItem("token");
  try {
    const response = await api.get("notifications",{
        headers: {
          Authorization: `Bearer ${token}`, 
        }});
        console.log(response.data);
        
    return response.data.data;
  } catch (error) {
    handleError(error);
  }
};

export default getAllNotification;
