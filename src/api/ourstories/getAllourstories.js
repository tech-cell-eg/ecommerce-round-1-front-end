import api, { handleError } from "../axiosConfig";

const getAllNotstories = async () => {
    const token = localStorage.getItem("token");
  try {
    const response = await api.get("our-stories");
        
        
    return response.data.data;
  } catch (error) {
    handleError(error);
  }
};

export default getAllNotstories;
