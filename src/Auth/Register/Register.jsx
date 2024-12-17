import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

export default function Register() {
    const [errorMsg,setErrorMessage] = useState(null)
     
    const validationSchema =  yup.object({
        firstName: yup.string().min(7,"min 7 characters").required("required"),
        lastName: yup.string().min(7,"min 7 characters").required("required"),
        email:yup.string().required('required').email("write avalid email"),
        password:yup.string().required('required').matches(/^(?=.*[A-Z]).{8,}$/,'Min 8 characters with at least one uppercase letter'),
         })


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: (values) => {
            setErrorMessage(error)
            console.log(values)
        },
    })

  return <>
  <section className='grid grid-cols-12 gap-2 h-screen '>
    
    <div className='col-span-12 md:col-span-6 max-h-screen relative'>
        
        <img src='https://s3-alpha-sig.figma.com/img/2ac9/2eca/bfbbc6d8300995990bb423eb6b3c1ace?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T3CXyCC4BFsc80i8hwimXaPoPzlzgteoQ9AaEQYtoo0b-jFy1Da0O9x~-xzptNkBkLlLlZiM7-3-RadieUCPToCsioVPM44TffaCR6Xf4MyjyARsHtelZNxXnEvJdkX0GgHIjY~NqoSR7oY7JScplAJFBUPUyEPRrI5FxFeFse1S5-zzCo36LK6~quOzpHnAlF-muT5j8JbrCiUT9YnIy41MamOG7MtcwhouhX~SUTLKXqW4YBtESVoKZm-N49~IUNP3KWonyv8f5qA-anfFsEj5pmCoQosD1oHJmubg66ExZoLtmheFpPa3tfvy~cY7LFIpwFRH7E6o99u6csathw' 
        alt='' className='w-full h-full '/>
        <div className='flex items-center  absolute top-8 left-10 max-[280px]:left-6'>
       <img src='/logo.svg' alt='logo' className='w-8 h-8 max-[280px]:w-6   max-[280px]:h-6 ' />
       <h1 className='text-2xl max-[280px]:text-lg font-semibold'>Kirst</h1>
       </div>
    </div>
    <div className='col-span-12 md:col-span-5 md:bg-white bg-gray-100 bg-opacity-80 py-6 max-[766px]:absolute w-full h-full'>
    
        <form className='flex flex-col justify-center items-start space-y-4 w-[85%] m-auto h-full' onSubmit={formik.handleSubmit}>
        <div className='space-y-1'>
        <h2 className='text-2xl font-bold max-[278px]:text-xl'>Create new account</h2>
        <p className='text-gray-400 '>Please enter details</p>
    </div>

            <div className='flex flex-col w-full space-y-1'>
                <label htmlFor='firstName' className='flex items-center justify-between space-x-2'><span>First Name</span> <span>{formik.errors.firstName && formik.touched.firstName ? (<div className='text-red-600 mt-1 font-semibold text-sm'>{formik.errors.firstName}</div>):('')}</span></label>
                <input type='text' id='firstName' name='firstName' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.firstName} className='rounded-lg border-2 bg-transparent border-gray-600 py-2 px-2'/>
            </div>

            <div className='flex flex-col w-full space-y-1'>
                <label htmlFor='LastName' className='flex items-center justify-between space-x-2'><span>Last Name</span> <span>{formik.errors.lastName && formik.touched.lastName ? (<div className='text-red-600 mt-1 font-semibold text-sm'>{formik.errors.lastName}</div>):('')}</span></label>
                <input type='text' id='LastName' name='lastName'  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.lastName} className='rounded-lg border-2 bg-transparent border-gray-600 py-2 px-2'/>
            </div>

            <div className='flex flex-col w-full space-y-1'>
                <label htmlFor='email' className='flex items-center justify-between space-x-2'><span className='text-nowrap'>Email Address</span> <span>{formik.errors.email && formik.touched.email ? (<div className='text-red-600 mt-1 font-semibold text-sm'>{formik.errors.email}</div>):('')}</span></label>
                <input type='email' id='email' className='rounded-lg border-2 bg-transparent border-gray-600 py-2 px-2' name='email'  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
            </div>
            <div className='flex flex-col w-full space-y-1'>
                <label htmlFor='password' className='flex items-center justify-between space-x-2'><span>password</span> <span>{formik.errors.password && formik.touched.password ? (<div className='text-red-600 mt-1 font-semibold text-sm'>{formik.errors.password}</div>):('')}</span> </label>
                <input type='password' id='password' className='rounded-lg border-2 bg-transparent border-gray-600 py-2 px-2' name='password'  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password}/>
            </div>
    
  <div>
   <label htmlFor='checkbox' className='flex items-center space-x-2 '>   
    <input type="checkbox" id="" name="" value=""   className="appearance-none relative h-4 w-4 border border-gray-400 rounded bg-gray-200 checked:bg-black checked:text-white checked:before:content-['✓'] checked:before:absolute checked:before:text-sm checked:before:font-semibold  checked:before:text-white flex items-center justify-center " />
   <span className="">I agree to the <span className='font-bold'>Terms & Conditions</span></span>
   </label>
  </div>
     


            <div className='w-full  '>
                <button type='submit' className='bg-black text-white py-2 rounded-lg w-full  hover:bg-gray-800 transition-all duration-200'>Signup</button>
            </div>
        </form>
    </div>
  </section>
  </>
}
