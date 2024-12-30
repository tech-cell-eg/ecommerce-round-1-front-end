import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { BsTelephone } from 'react-icons/bs'
import { CiInstagram, CiLocationOn, CiMail } from 'react-icons/ci'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import * as yup from "yup";
import contact from '../../api/contactUs/contactUs'
import toast from 'react-hot-toast'

export default function ContactUs() {
  const [disableBtn,setDisableBtn] =useState(false)
  const validationSchema = yup.object({
    name: yup
    .string()
    .required("name is required"),
    email: yup
      .string()
      .required("email is required")
      .email("write avalid email"),
      text: yup
      .string()
      .required("message is required"),
     
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: "",
      text: "",
      
    },
    validationSchema,
    onSubmit: async (values,{resetForm}) => {
      let id;
      setDisableBtn(true); 
      
      try {
        id = toast.loading("Waiting...");
        const contactus = await contact(values) ;
        toast.dismiss(id);
        toast.success("message send successfully");
        resetForm()
      } catch (error) {
        toast.dismiss(id);
        toast.error(error.message || "An error occurred during login");
      } finally {
        setDisableBtn(false);
        }
    }
})

  return <>
  <Helmet>
    <title>Contact Us</title>
    <meta name="description" content="Contact us for any questions"/>
  </Helmet>
  <section className='min-h-screen pt-4 pb-24 flex flex-col items-center justify-center bg-[#F5F5F8] relative overflow-hidden'>
  <div className="container-main w-full space-y-4 py-12 bg-white shadow-xl rounded-lg flex flex-col items-center justify-center relative z-10  ">
  <h2 className='text-bold text-3xl py-2 border-b w-fit border-black  '>Get in touch</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10  px-4 w-full py-6 ">
        {/* form */}
        <form className='space-y-4' onSubmit={formik.handleSubmit}>
       <div className='relative'>
       <label htmlFor='name' className='absolute -top-4 left-4 text-lg bg-white'>Name</label>
       <input type="text" id='name' name="name" placeholder="FIRST_NAME LAST_NAME" className='form-control' onChange={formik.handleChange} value={formik.values.name}  />
       {formik.touched.name && formik.errors.name && <p className='text-red-500'>{formik.errors.name}</p>}
       </div>
      
       <div>
       <input type="email" id='email' name="email" placeholder="Email Address" className='form-control' onChange={formik.handleChange} value={formik.values.email} />
       {formik.touched.email && formik.errors.email && <p className='text-red-500'>{formik.errors.email}</p>}
       </div>

       <div>
        <textarea id='text' name="text" placeholder="Your Message" className='form-control' rows="6"  onChange={formik.handleChange} value={formik.values.text}></textarea>
        {formik.touched.text && formik.errors.text && <p className='text-red-500'>{formik.errors.text}</p>}
       </div>

       <button className='btn-primary ' type='submit'>
        Send Message
       </button>
        </form>

        {/* information */}
        <div className='space-y-4 h-full flex flex-col justify-between'>
         
           <div className=''>
            <Link to="https://www.google.com/maps" ><CiLocationOn className='inline-block mr-2  text-xl' />Infomation technologies building, Victoria Island, Lagos, Nigeria.</Link>
            </div>
       <div>
       <Link to={"tel:01044566666"} target='_blank'><BsTelephone className='inline-block mr-2 text-xl' />01044566666 </Link>
       </div>
       <div>
       <Link to={"mailto:krist@example.com"} className=''><CiMail className='inline-block mr-2 text-xl ' />krist@example.com</Link>
       </div>

       <div className='flex items-center gap-4 text-xl'>
        <Link to={"#"}><FaYoutube /> </Link>
        <Link to={"#"}><CiInstagram /></Link>
        <Link to={"#"}><FaFacebookF /></Link>
        <Link to={"#"}><FaTwitter /></Link>
       </div>
           
       {/* map */}
       <div className='h-[50%] bg-rud-300'>
       <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12096.995586362455!2d-74.000396!3d40.712537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1705840870375!5m2!1sen!2sus"
                loading="lazy"
                className='w-full h-full '
                ></iframe>
       </div>
        </div>
    </div>
    
   </div>
      <div className='w-[70px] h-[70px] border-4 border-gray-500 absolute -bottom-[2%] -right-[1%]  after:content-[""] after:absolute after:border-4 after:border-gray-500 after:bottom-[45%] after:-left-[50%] after:w-[70px] after:h-[70px] '>
    <div className='w-[70px] h-[70px] border-4 border-gray-500 absolute bottom-[15%] right-[55%]'>
    </div>
      </div>
    <div className='w-[70px] h-[70px] border-4 border-gray-400 absolute -bottom-[2%] -left-[1%]  after:content-[""] after:absolute after:border-4 after:border-gray-500 after:bottom-[45%] after:-right-[50%] after:w-[70px] after:h-[70px] '>
    <div className='w-[70px] h-[70px] border-4 border-gray-500 absolute bottom-[15%] left-[55%]'>
    </div>
 </div>
 
    </section>
  </>
}
