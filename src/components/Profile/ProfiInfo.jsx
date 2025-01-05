import { FaPenToSquare } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import updateuserinfo from "../../api/updateuserinfo/updateuserinfo";
import { useFormik } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";
import { setUser } from "../../redux/actions/userActions";

export default function ProfiInfo() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // const addressRegex = /^[a-zA-Z0-9\s,]+, [a-zA-Z\s]+, [a-zA-Z\s]+, [a-zA-Z\s]+, \d{5}$/;

  const firstName =
    localStorage.getItem("first_name") || user?.first_name || "Guest";
  const lastName =
    localStorage.getItem("last_name") || user?.last_name || "Guest";
  const email = localStorage.getItem("email") || user?.email || "Guest";

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
    // mobile_number: yup
    //   .string()
    //   .required('Mobile Number is required')
    //   .min(11, 'Phone number must be exactly 11 digits'),
    // address: yup
    //   .string()
    //   .matches(addressRegex, 'Please enter the address in the format(Consider the spaces): address, Area, City, State, Pin Code')
    //   .required('Address is required'),
  });

  const formik = useFormik({
    initialValues: {
      first_name: firstName,
      last_name: lastName,
      email: email,
      // mobile_number: '',
      // address: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      let id;
      try {
        id = toast.loading("Waiting...");
        await updateuserinfo(values);
        localStorage.setItem("first_name", values.first_name);
        localStorage.setItem("last_name", values.last_name);
        localStorage.setItem("email", values.email);
        dispatch(setUser(values));

        toast.dismiss(id);
        toast.success("Information updated successfully");
      } catch (error) {
        toast.dismiss(id);
        toast.error(error.message || "An error occurred during update");
      }
    },
  });

  return (
    <section>
      <div className="flex items-center justify-between relative">
        <div className="h-14 w-14 rounded-full relative overflow-hidden">
          <img src="/image.png" alt="" />
        </div>
        <div>
          <button
            type="submit"
            className="btn-primary w-fit flex items-center"
            onClick={formik.handleSubmit}
          >
            <FaPenToSquare className="inline-block mr-1" />{" "}
            <span>Update Profile</span>
          </button>
        </div>
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

        <div className="md:flex gap-4 w-full">
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
        </div>

        {/* Phone Number (commented out) */}
        {/* <div className="md:flex gap-4 w-full">
          <div className="flex flex-col md:w-1/2 space-y-1">
            <label htmlFor="mobile_number">Phone Number</label>
            <input
              type="text"
              id="mobile_number"
              name="mobile_number"
              value={formik.values.mobile_number}
              onChange={formik.handleChange}
              className="form-control w-full"
              placeholder="Phone"
            />
            {formik.touched.mobile_number && formik.errors.mobile_number && (
              <div className="text-red-600 font-semibold text-sm">
                {formik.errors.mobile_number}
              </div>
            )}
          </div>
        </div> */}

        {/* Address (commented out) */}
        {/* <div className="flex flex-col space-y-1">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            className="form-control w-full"
            placeholder="Address"
          />
          {formik.touched.address && formik.errors.address && (
            <div className="text-red-600 font-semibold text-sm">
              {formik.errors.address}
            </div>
          )}
        </div> */}
      </form>
    </section>
  );
}
