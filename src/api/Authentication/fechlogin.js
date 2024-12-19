import api ,{handleError}from "../axiosConfig";

export const fetchlogin = async(values)=>{
    try {
        const response = await api.post("login",values);
        return response.data.data;
      } catch (error) {
        console.log(error.response, "Failed to fetch login");
        handleError(error)  
      }
}