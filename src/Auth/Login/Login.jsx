import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return <>
  <section className='grid grid-cols-12 gap-2 h-screen '>
    
    <div className='col-span-12 md:col-span-6 max-h-screen'>
        
        <img src='https://s3-alpha-sig.figma.com/img/040c/c45a/2d79166cf646d5a5a0119f93bceae506?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q6hPs9hT36ACfh0LKSowN-SPsO83I5laXdhJcS1pq62GlhevlJSj3RrwQSLb1f8h60qQ2osDQZ5Nc362k5Q-u9p2-QA7QUn8evqh8lfJerEhtEtgu7mKNxaGTF1PQhhwqL~XLpW3rE-dzs3aVe9-9v4pRxCTR2blwBS4fbPe9B07mep7GlUXFDclOYwLWDpg11AuB-F0RN5YegM6dFnDfPc5ZfKj-UbOzORG1xcc7RSR-ebaLBgfL7PEJcVrVlLM2kvkmNPlSPFdBGvOzsm6lqszDs9JLCuokuC-Mxwg0w9wVgW37esrfc4yvt5A1DzSUvYz6AlkJUGh3~ji5Kg19g__' alt='' className='w-full h-full '/>
    </div>

    <div className='col-span-12 md:col-span-5 py-6'>
    
        <form className='flex flex-col justify-center items-start space-y-4 w-[85%] m-auto h-full'>
        <div className='space-y-1'>
        <h2 className='text-2xl font-bold'>Welcome🖐</h2>
        <p className='text-gray-400 '>Please login here</p>
    </div>
            <div className='flex flex-col w-full space-y-1'>
                <label htmlFor='email'>Email Address</label>
                <input type='email' id='email' className='rounded-lg border-2 border-gray-600 py-2 px-2' required/>
            </div>
            <div className='flex flex-col w-full space-y-1'>
                <label htmlFor='password'>password </label>
                <input type='password' id='password' className='rounded-lg border-2 border-gray-600 py-2 px-2' required/>
            </div>
     <div className='flex max-[332px]:flex-col justify-between items-center w-full '>
  <div>
   <label htmlFor='checkbox' className='flex items-center space-x-2 '>   
    <input type="checkbox" id="remember-me" name="remember-me" value="remember-me"   className="appearance-none relative h-4 w-4 border border-gray-400 rounded bg-gray-200 checked:bg-black checked:text-white checked:before:content-['✓'] checked:before:absolute checked:before:text-sm checked:before:font-semibold  checked:before:text-white flex items-center justify-center " />
    <span className="">Remember me</span>
   </label>
  </div>
    <Link to={"/forgetpassword"} className=''>Forgot Password?</Link>
     </div>



            <div className='w-full  '>
                <button type='submit' className='bg-black text-white py-2 rounded-lg w-full '>Login</button>
            </div>
        </form>
    </div>
  </section>
  </>
}
