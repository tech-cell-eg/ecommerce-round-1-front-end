import { useFormik } from 'formik'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import forgetpasssword from '../../api/Authentication/forgitPassword'

export default function ForgetPass() {
    const [errorMsg,setErrorMsg] = useState(null)
     const [disableBtn,setDisableBtn] =useState(false)
    const navigate = useNavigate()
    
    
    const validationSchema = yup.object({
        email:yup.string().required('email is required').email("write a valid email"),
    })

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            let id;
      setDisableBtn(true); 
      try {
        id = toast.loading("Waiting...");
        const log = await forgetpasssword(values,);
        toast.dismiss(id);
        toast.success("OTP send to your email");
        navigate("/verifyotp",{ state: { email: values.email } });
      } catch (error) {
        toast.dismiss(id);
        toast.error(error.message );
      } finally {
        setDisableBtn(false);
        }}
    })

  return <>
  <section className='grid grid-cols-12 gap-2 h-screen '>
    
    <div className='col-span-12 md:col-span-6 max-h-screen'>
        
        <img src='https://s3-alpha-sig.figma.com/img/3818/95e7/243068f4aa1e91ad714c8fc6f108c2f4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g4tqa6W8Kn8SeqvljfvN-eyI7pp7ObBj3lHUDjpEKIyiXnVIgmI1nXXZPnRHJEiTmUIKDZRz~7LKHorq1IUbq1eRw7cQRceBuaEXPFxL80hPaecUm0bxgu1Gehl51hC6ugB8mbcFf05RXi6zTXCUlT-x5OG0ukZv21wzohOsTVu31aY~mWDIVt-Q2sOt2msOscvzyiDJNdx-sOFC-I6GIx2s645fo15atPycyrEPVjvMMrKWnhSb90nj2oR2EIuF9~KiMXxwkVT1LwdEisAWlVJdA~V2sFlrweHzL-o8syczAAHWUsrLXCXZ11AMz8EAzzP698yfZSojlvYS39~g0g' alt='' className='w-full h-full object-cover'/>
    </div>

    <div className='col-span-12 md:col-span-5  md:bg-white   bg-black bg-opacity-50 py-6 max-[766px]:absolute w-full h-full'>
    
        <form className='flex flex-col justify-center items-start space-y-4 w-[85%] m-auto h-full' onSubmit={formik.handleSubmit}>
        <div className='space-y-1'>
        <Link to={"/login"} className='text-lg flex items-center w-fit max-[766px]:text-white' ><IoIosArrowBack className='mr-2'/> Back</Link>
        <h2 className='text-2xl font-bold '>Forgot Password</h2>
        <p className='text-gray-400 text-lg max-[766px]:text-white'>Enter your register email address. we will send you a code to reset your password</p>
    </div>
            <div className='flex flex-col w-full space-y-1'>
                <label htmlFor='email' className=' max-[766px]:text-white'>Email Address </label>
                <input type='email' id='email' name='email' className='form-control' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
                <span>{formik.errors.email && formik.touched.email ? (<div className='text-red-600 mt-1 font-semibold text-sm'>{formik.errors.email}</div>):('')}</span>
            </div>
            <div className='w-full  '>
                <button type='submit' className='bg-black text-white py-2 rounded-lg w-full inline-block hover:bg-gray-800 transition-all duration-200' disabled={disableBtn}>{disableBtn ? "Please wait..." : "Send OTP"}</button>
            </div>
        </form>
    </div>
  </section>
  
  </>
}