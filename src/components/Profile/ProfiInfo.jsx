import { useState } from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";
import updateuserinfo from "../../api/updateuserinfo/updateuserinfo";
import { setUser } from "../../redux/actions/userActions";

export default function ProfiInfo() {
  const user = useSelector((state) => state.user);
  console.log(user.image);
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(
    user?.image ? user.image : "/userProfile.jpg"
  );
  const firstName = user?.first_name ? user.first_name : "Guest";
  const lastName = user?.last_name ? user.last_name : "Guest";
  const email = user?.email ? user.email : "Guest";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validationSchema = yup.object({
    first_name: yup
      .string()
      .min(3, "Min 3 characters")
      .required("First Name is required"),
    last_name: yup
      .string()
      .min(3, "Min 3 characters")
      .required("Last Name is required"),
    email: yup
      .string()
      .matches(emailRegex, "Please enter a valid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      first_name: firstName,
      last_name: lastName,
      email: email,
      image: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      let id;
      try {
        id = toast.loading("Updating profile...");
        const formData = new FormData();
        formData.append("first_name", values.first_name);
        formData.append("last_name", values.last_name);
        formData.append("email", values.email);
        if (selectedImage) {
          formData.append("image", selectedImage);
        }

        const updatedUser = await updateuserinfo(formData);
        localStorage.setItem("first_name", updatedUser.first_name);
        localStorage.setItem("last_name", updatedUser.last_name);
        localStorage.setItem("email", updatedUser.email);
        localStorage.setItem("image", updatedUser.image);
        setPreviewImage(updatedUser.image);
        dispatch(setUser(updatedUser));

        toast.dismiss(id);
        toast.success("Profile updated successfully");
      } catch (error) {
        toast.dismiss(id);
        toast.error(error.message || "An error occurred");
      }
    },
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/gif",
        "image/svg+xml",
      ];
      if (!allowedTypes.includes(file.type)) {
        toast.error(
          "Please upload a valid image file (JPEG, PNG, JPG, GIF, SVG)."
        );
        return;
      }

      const maxSize = 2 * 1024 * 1024;
      if (file.size > maxSize) {
        toast.error("File size must be less than 2MB.");
        return;
      }

      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
      formik.setFieldValue("image", file);
    }
  };
  console.log(previewImage);

  return (
    <section>
      <div className="flex items-center justify-between relative">
        <div className="h-14 w-14 rounded-full relative overflow-hidden">
          <img
            src={previewImage}
            alt="Profile"
            className="h-full w-full"
          />
        </div>
        <input
          type="file"
          accept="image/*"
          className="absolute opacity-0 cursor-pointer"
          style={{ height: "56px", width: "56px" }}
          onChange={handleImageChange}
        />
        <button
          type="submit"
          className="btn-primary w-fit flex items-center"
          onClick={formik.handleSubmit}
        >
          <FaPenToSquare className="inline-block mr-1" /> Update Profile
        </button>
      </div>

      <form className="w-full my-6 space-y-3" onSubmit={formik.handleSubmit}>
        <div className="md:flex gap-4 w-full">
          <div className="flex flex-col md:w-1/2 space-y-1">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              className="form-control w-full"
              placeholder="First Name"
            />
            {formik.touched.first_name && formik.errors.first_name && (
              <div className="text-red-600 font-semibold text-sm">
                {formik.errors.first_name}
              </div>
            )}
          </div>
          <div className="flex flex-col md:w-1/2 space-y-1">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              className="form-control w-full"
              placeholder="Last Name"
            />
            {formik.touched.last_name && formik.errors.last_name && (
              <div className="text-red-600 font-semibold text-sm">
                {formik.errors.last_name}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col md:w-1/2 space-y-1">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="form-control w-full"
            placeholder="Email"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-600 font-semibold text-sm">
              {formik.errors.email}
            </div>
          )}
        </div>
      </form>
    </section>
  );
}
