import api, { handleError } from "../axiosConfig";

const deletefromwhishlist = async (id) => {
    const token = localStorage.getItem("token");
  try {
    const response = await api.delete(`favorites/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        }});
        console.log(response.data);
        
    return response.data.data;
  } catch (error) {
    handleError(error);
  }
};

export default deletefromwhishlist;