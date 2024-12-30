import React, { useRef, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import VerifypassSucc from '../../components/verifypassSucc/VerifypassSucc'
import { useFormik } from 'formik'
import * as yup from 'yup'
import resetpassword from '../../api/Authentication/resetpassword'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import toast from 'react-hot-toast'

export default function VerifyOtp() {
  const [disableBtn,setDisableBtn] =useState(false)
  const[viewsuccess,setviewsuccess] = useState(false)
   const [ passwordType, setPasswordType]=useState("password")
   const [ confirmPasswordType, setconfirmPasswordType]=useState("password")
   
  const otpRefs = useRef([]);
  const location = useLocation();
  const email = location.state?.email || 'No email provided';
  const handelPassType = ()=>{
    setPasswordType(passwordType === "password"? "text" : "password")
  }
  const handelconfirmPassType = ()=>{
    setconfirmPasswordType(confirmPasswordType === "password"? "text" : "password")
  }

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
  
    if (!/^\d$/.test(value) && value !== '') return;
  
    formik.setFieldValue(`token[${index}]`, value);
  
    if (value && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1].focus();
    } else if (!value && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  }

  const validationSchema =  yup.object({
          token: yup
          .array()
          .of(yup.string().matches(/^\d$/,'Each OTP digit must be a number').required('OTP is required')),
          password:yup
                .string()
                .required("password is required")
                .matches(
                 /^(?=.*[A-Z])(?=.*[a-z]).{8,}$/, 
                "Min 8 characters with at least one uppercase letter and one lowercase letter"
                ),
                password_confirmation: yup
                .string()
                .required("confirm password is required")
                .oneOf([yup.ref("password")],"password and repassword mast be same")
           })

           const formik = useFormik({
            initialValues: {
                token: Array(5).fill(''),
                password: '',
                password_confirmation: '',
                
            },
            validationSchema,
            onSubmit: async (values) => {
                let id;
          setDisableBtn(true); 
          try {
            id = toast.loading("Waiting...");
            const token = values.token.join(''); 
            const log = await resetpassword({ ...values, token });
            toast.dismiss(id);
            setviewsuccess(true)
          } catch (error) {
            toast.dismiss(id);
            toast.error(error.message || "An error occurred during reset password");
          } finally {
            setDisableBtn(false);
            }}
        })

  return <>
  <section className='grid grid-cols-12 gap-2 h-screen '>
    
    <div className='col-span-12 md:col-span-6 max-h-screen'>
        
        <img src='https://s3-alpha-sig.figma.com/img/17a9/80ed/1381b6c12a4843ef7f71eb0311fdbf2d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OAtumO9d6Cu7cv9va4AwBmMeDJqU3RJ2a-4qR8lfqA5Y7hrO6NjQupcGoB~bVgb8QBOnRgABbrC4M0dpluqPKRX68k-LXDF09sILVj3VJvf2ipNTIbpqTyYZYcw-pbbjpDjXgj9c6QIwLksLVvt~CTOJXd0PzMXsaH3vNawzeCaGFI8yrjg3GCKD9yDyZ1rVde0MwWVqJsgJYMb~gLWb2teZ-dbkKbsmlz-RE~KsAN2xIWNeWEvG5Jx2L4nHJ0zVlVaTJSgIUi0HydR5g3-rpRouyMxUMGh31UNhPox0sS1EX83oeCSY7fJ5M~7PA9QArkcbv~hR1ssx-OCvk4dJiA' alt='' className='w-full h-full '/>
    </div>

    <div className='col-span-12 md:col-span-5  md:bg-white   bg-black bg-opacity-50 py-6 max-[766px]:absolute w-full h-full'>
    
        <form className='flex flex-col justify-center items-start space-y-4 w-[85%] m-auto h-full' onSubmit={formik.handleSubmit}>
        <div className='space-y-1'>
        <Link to={"/forgetpassword"} className='text-lg flex items-center w-fit max-[766px]:text-white' ><IoIosArrowBack className='mr-2 '/> Back</Link>
        <h2 className='text-2xl font-bold'>Enter OTP</h2>
        <p className='text-gray-600 md:text-gray-400  text-lg max-[260px]:text-sm max-[766px]:text-white'>we have share a code of your register email address <br/><span>{email}</span></p>
    </div>
    <div className="flex items-center justify-start w-full">
  {[...Array(5)].map((_, index) => (
    <input
      key={index}
      type="text"
      maxLength="1"
      ref={(el) => (otpRefs.current[index] = el)}
      value={formik.values.token[index]} 
      onChange={(e) => handleOtpChange(e, index)}
      className="focus:ring-0  max-[766px]:text-white  max-[766px]:border-white w-[15%] h-full  bg-transparent  mr-2 text-center text-xl font-semibold border-2 border-gray-600 md:border-gray-200 rounded-lg focus:outline-none focus:border-black"
    />
  ))} 
</div>
{formik.touched.token && formik.errors.token && (
  <div className="text-red-600 max-[766px]:text-red-500 font-semibold text-sm">
    {Array.isArray(formik.errors.token) 
      ? formik.errors.token[0] 
      : formik.errors.token} 
  </div>
)}

            {/* password and confirmpassword */}
          
           <div className='flex flex-col w-full space-y-1'>
                          <label htmlFor='password' className='max-[766px]:text-white'>New password  </label>
                          <div className='relative'>
                          <input type={passwordType} id='password' className='form-control max-[766px]:border-white' name='password'  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password}/>
                          <div className="absolute right-2 bottom-3 cursor-pointer max-[766px]:text-white" onClick={handelPassType}>{passwordType === "password"?<FaEye />:<FaEyeSlash  />}</div>
          
                          </div>
                          <span>{formik.errors.password && formik.touched.password ? (<div className='text-red-600 max-[766px]:text-red-500  font-semibold text-sm'>{formik.errors.password}</div>):('')}</span>
                      </div>

                      <div className='flex flex-col w-full space-y-1'>
                          <label htmlFor='password_confirmation' className='max-[766px]:text-white'>Confirm New password</label>
                          <div className='relative'>
                          <input type={confirmPasswordType} id='password_confirmation' className='form-control max-[766px]:border-white' name='password_confirmation'  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password_confirmation}/>
                          <div className="absolute right-2 bottom-3 cursor-pointer max-[766px]:text-white" onClick={handelconfirmPassType}>{confirmPasswordType === "password"?<FaEye />:<FaEyeSlash  />}</div>
          
                          </div>
                          <span>{formik.errors.password_confirmation && formik.touched.password_confirmation ? (<div className='text-red-600 max-[766px]:text-red-500  font-semibold text-sm'>{formik.errors.password_confirmation}</div>):('')}</span>
                      </div>
            {/* button */}
            <div className='w-full  '>
                <button type='submit' className='btn-primary '>{disableBtn ? "waiting..." : "verify"}</button>
               
                
            </div>
        </form>
    </div>
  </section>
    {viewsuccess && <VerifypassSucc />}
  </>
}
