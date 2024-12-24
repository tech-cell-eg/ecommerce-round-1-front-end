import { useFormik } from "formik";
import React, { useCallback, useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import fetchlogin from "../../api/Authentication/fechlogin";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { setUser } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [passwordType, setPasswordType] = useState("password");
  const [disableBtn, setDisableBtn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handelPassType = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };
  const validationSchema = yup.object({
    email: yup
      .string()
      .required("email is required")
      .email("write avalid email"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z]).{8,}$/,
        "Min 8 characters with at least one uppercase letter and one lowercase letter"
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      let id;
      setDisableBtn(true);
      try {
        id = toast.loading("Waiting...");
        const log = await fetchlogin({ ...values, rememberMe });
        toast.dismiss(id);
        toast.success("User login successful");
        if (rememberMe) {
          localStorage.setItem("email", values.email);
          localStorage.setItem("password", values.password);
        }
        dispatch(setUser(log.data.user));
        navigate("/");
      } catch (error) {
        toast.dismiss(id);
        toast.error(error.message || "An error occurred during login");
      } finally {
        setDisableBtn(false);
      }
    },
  });

  return (
    <>
      <section className="grid grid-cols-12 gap-2 h-screen ">
        <div className="col-span-12 md:col-span-6 max-h-screen relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/040c/c45a/2d79166cf646d5a5a0119f93bceae506?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q6hPs9hT36ACfh0LKSowN-SPsO83I5laXdhJcS1pq62GlhevlJSj3RrwQSLb1f8h60qQ2osDQZ5Nc362k5Q-u9p2-QA7QUn8evqh8lfJerEhtEtgu7mKNxaGTF1PQhhwqL~XLpW3rE-dzs3aVe9-9v4pRxCTR2blwBS4fbPe9B07mep7GlUXFDclOYwLWDpg11AuB-F0RN5YegM6dFnDfPc5ZfKj-UbOzORG1xcc7RSR-ebaLBgfL7PEJcVrVlLM2kvkmNPlSPFdBGvOzsm6lqszDs9JLCuokuC-Mxwg0w9wVgW37esrfc4yvt5A1DzSUvYz6AlkJUGh3~ji5Kg19g__"
            alt=""
            className="w-full h-full "
          />
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
            className="flex flex-col justify-center items-start space-y-4 w-[85%] m-auto h-full"
            onSubmit={formik.handleSubmit}
          >
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">Welcome🖐</h2>
              <p className="text-gray-400  ">Please login here</p>
            </div>
            <div className="flex flex-col w-full space-y-1">
              <label htmlFor="email" className="max-[766px]:text-white">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="text-red-600 max-[766px]:text-red-500 mt-1 font-semibold text-sm">
                  {formik.errors.email}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className=" flex flex-col w-full space-y-1">
              <label htmlFor="password" className=" max-[766px]:text-white">
                Password{" "}
              </label>
              <div className="relative">
                <input
                  type={passwordType}
                  id="password"
                  className="form-control"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                <div
                  className="absolute right-2 bottom-3 cursor-pointer"
                  onClick={handelPassType}
                >
                  {passwordType === "password" ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
              {formik.errors.password && formik.touched.password ? (
                <div className="text-red-600 max-[766px]:text-red-500  mt-1 font-semibold text-sm ">
                  {formik.errors.password}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex max-[332px]:flex-col justify-between items-center w-full ">
              <div>
                <label
                  htmlFor="checkbox"
                  className="flex items-center space-x-2  max-[766px]:text-white"
                >
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    id=""
                    name=""
                    value=""
                    className="appearance-none focus:ring-0 focus:border-none focus:shadow-none shadow-none relative h-4 w-4 border border-gray-400 rounded bg-gray-200 checked:bg-black checked:text-white checked:before:content-['✓'] checked:before:absolute checked:before:text-sm checked:before:font-semibold  checked:before:text-white flex items-center justify-center "
                  />
                  <span className=""> Remember me</span>
                </label>
              </div>
              <Link to={"/forgetpassword"} className="max-[766px]:text-white">
                Forgot Password?
              </Link>
            </div>

            <div className="w-full  ">
              <button
                type="submit"
                className="btn-primary"
                disabled={disableBtn}
              >
                {disableBtn ? <span>Waiting...</span> : <span>Login</span>}
              </button>
            </div>
            <div className="max-[766px]:text-white m-auto flex text-sm max-[280px]:flex-wrap items-center justify-center">
              <span>Don’t have an account?</span>{" "}
              <Link
                to={"/register"}
                className="text-black font-semibold  border-black border-b-2 max-[766px]:border-white max-[766px]:text-white"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
