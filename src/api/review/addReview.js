import { useSelector } from "react-redux";
import api, { handleError } from "../axiosConfig";

const addReview = async (values) => {
    const token = localStorage.getItem("token");
    const user_id = useSelector(state => state.user.id);

  try {
    const response = await api.post("reviews", {
        msg: values.msg,
        stars: values.stars,
        product_id: values.productId,
        user_id: user_id,
        user_role: 1
    },
    {
        headers: {
          Authorization: `Bearer ${token}`
        },
    }
);
    return response.data;
  } catch (error) {
    handleError(error);
    console.log(error);
    
  }
};

export default addReview;
