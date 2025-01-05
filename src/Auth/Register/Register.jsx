import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import fetchregister from "../../api/Authentication/register";
import { useDispatch } from "react-redux";

export default function Register() {
  const [errorMsg, setErrorMessage] = useState(null);
  const [disableBtn, setDisableBtn] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();

  const handelPassType = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };
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
      .required("Email is required")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Write a valid email (e.g., example@domain.com)"
      ),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z]).{8,}$/,
        "Min 8 characters with at least one uppercase letter and one lowercase letter"
      ),
    terms_agreed: yup
      .boolean()
      .oneOf([true], "You must agree to the terms and conditions")
      .required("You must agree to the terms and conditions"),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      terms_agreed: 0,
    },
    validationSchema,
    onSubmit: async (values) => {
      let id;
      setDisableBtn(true);
      try {
        id = toast.loading("Waiting...");
        const log = await fetchregister({
          ...values,
          terms_agreed: values.terms_agreed ? 1 : 0,
        });
        toast.dismiss(id);
        toast.success("User signup successful");
        navigate("/login");
      } catch (error) {
        toast.dismiss(id);
        toast.error(error.message || "An error occurred during signup");
      } finally {
        setDisableBtn(false);
      }
    },
  });

  return (
    <>
      <section className="grid grid-cols-12 gap-2 h-screen ">
        <div className="col-span-12 md:col-span-6 max-h-screen relative">
          <img src="/Group-1.png" alt="" className="w-full h-full " />
          <div className="flex items-center  absolute top-8 left-10 max-[280px]:left-6">
            <img
              src="/logo.svg"
              alt="logo"
              className="w-8 h-8 max-[280px]:w-6   max-[280px]:h-6 "
            />
            <h1 className="text-2xl max-[280px]:text-lg font-semibold">
              Kirst
            </h1>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 md:bg-white   bg-black bg-opacity-50 py-6 max-[766px]:absolute w-full h-full">
          <form
            className="flex flex-col justify-center items-start space-y-2 w-[85%] m-auto h-full"
            onSubmit={formik.handleSubmit}
          >
            <div className="space-y-1">
              <h2 className="text-2xl font-bold max-[278px]:text-xl max-[766px]:text-white">
                Create new account
              </h2>
              <p className="text-gray-400 ">Please enter details</p>
            </div>

            <div className="flex flex-col w-full space-y-1">
              <label htmlFor=" first_name" className="max-[766px]:text-white">
                First Name{" "}
              </label>
              <input
                type="text"
                id=" first_name"
                name="first_name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.first_name}
                className="form-control"
              />
              <span>
                {formik.errors.first_name && formik.touched.first_name ? (
                  <div className="text-red-600 max-[766px]:text-red-500  font-semibold text-sm">
                    {formik.errors.first_name}
                  </div>
                ) : (
                  ""
                )}
              </span>
            </div>

            <div className="flex flex-col w-full space-y-1">
              <label htmlFor="last_name" className="max-[766px]:text-white">
                Last Name{" "}
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.last_name}
                className="form-control"
              />
              <span>
                {formik.errors.last_name && formik.touched.last_name ? (
                  <div className="text-red-600  max-[766px]:text-red-500 font-semibold text-sm">
                    {formik.errors.last_name}
                  </div>
                ) : (
                  ""
                )}
              </span>
            </div>

            <div className="flex flex-col w-full space-y-1">
              <label htmlFor="email" className="max-[766px]:text-white">
                Email Address{" "}
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <span>
                {formik.errors.email && formik.touched.email ? (
                  <div className="text-red-600 max-[766px]:text-red-500  font-semibold text-sm">
                    {formik.errors.email}
                  </div>
                ) : (
                  ""
                )}
              </span>
            </div>
            <div className="flex flex-col w-full space-y-1">
              <label htmlFor="password" className="max-[766px]:text-white">
                password{" "}
              </label>
              <div className="relative">
                <input
                  type={passwordType}
                  id="password"
                  className="form-control"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <div
                  className="absolute right-2 bottom-3 cursor-pointer"
                  onClick={handelPassType}
                >
                  {passwordType === "password" ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
              <span>
                {formik.errors.password && formik.touched.password ? (
                  <div className="text-red-600 max-[766px]:text-red-500  font-semibold text-sm">
                    {formik.errors.password}
                  </div>
                ) : (
                  ""
                )}
              </span>
            </div>

            <div>
              <label
                htmlFor="checkbox"
                className="flex items-center space-x-2 "
              >
                <input
                  type="checkbox"
                  id="terms_agreed"
                  name="terms_agreed"
                  onBlur={formik.handleBlur}
                  onChange={(e) =>
                    formik.setFieldValue("terms_agreed", e.target.checked)
                  }
                  checked={formik.values.terms_agreed}
                  className="focus:ring-0 focus:border-black appearance-none relative h-4 w-4 border border-gray-400 rounded bg-gray-200 checked:bg-black checked:text-white checked:before:content-['✓'] checked:before:absolute checked:before:text-sm checked:before:font-semibold  checked:before:text-white flex items-center justify-center "
                />
                <span className="max-[766px]:text-white ">
                  I agree to the{" "}
                  <span className="font-bold max-[766px]:text-white">
                    Terms & Conditions
                  </span>
                </span>
              </label>
              {formik.errors.terms_agreed && formik.touched.terms_agreed ? (
                <div className="text-red-600 max-[766px]:text-red-500  font-semibold text-sm">
                  {formik.errors.terms_agreed}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="w-full  ">
              <button
                type="submit"
                className="btn-primary"
                disabled={disableBtn}
              >
                {" "}
                {disableBtn ? <span>Waiting...</span> : <span>Signup</span>}
              </button>
            </div>

            <div className="max-[766px]:text-white m-auto flex text-sm max-[280px]:flex-wrap items-center justify-center">
              <span>Have an account?</span>{" "}
              <Link
                to={"/login"}
                className="text-black font-semibold  border-black border-b-2 max-[766px]:border-white max-[766px]:text-white"
              >
                Log in
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
