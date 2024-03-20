import React from "react";
import { FC } from "react";

const Form :FC=()=>{
    return(
        <>
      <div className="flex justify-center bg-[#0077b6] p-4">
  {/* <!-- Form Section --> */}
  <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 bg-white p-6 shadow-lg rounded-lg">
    <h2 className="text-2xl font-bold text-center mb-4">CONTACT US</h2>
    <form action="#" method="post" className="space-y-4">
      <div className="flex flex-wrap -mx-2">
        <div className="w-1/2 px-2">
          <input type="text" placeholder="First Name*" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400"/>
        </div>
        <div className="w-1/2 px-2">
          <input type="text" placeholder="Last Name*" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400"/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full px-2">
          <input type="email" placeholder="Business Email*" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400"/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full px-2">
          <input type="email" placeholder="Alternative Email" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400"/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full px-2">
          <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400"/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full px-2">
          <input type="text" placeholder="Company" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400"/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full px-2">
          <textarea placeholder="Tell us about your project*" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400"></textarea>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full px-2">
          <input type="file" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400"/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2 items-center">
        <div className="w-full px-2">
          <input type="checkbox" id="privacy-policy" className="mr-2"/>
          <label  className="text-sm text-gray-600">By sending this form I confirm that I have read and accept Intellectsoft Privacy Policy</label>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full px-2">
          <button type="submit" className="w-full bg-[#0077b6] text-white rounded-md px-4 py-2 hover:bg-blue-700 transition duration-300">SEND</button>
        </div>
      </div>
    </form>
  </div>

  {/* <!-- What's Next Section --> */}
  <div className="hidden md:block md:w-1/3 lg:w-1/3 xl:w-1/4 bg-[#0077b6] p-8 rounded-lg text-white ml-4">
    <h2 className="text-2xl font-bold mb-4">WHAT’S NEXT?</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>We will send a short email notifying you that we successfully received your request and started working on it.</li>
      <li>Our solution advisor analyzes your requirements and will reach back to you within 3 business days.</li>
      <li>We may sign an optional mutual NDA within 1-2 business days to make sure you get the highest confidentiality level.</li>
      <li>Our business development manager presents you an initial project estimation, ballpark figures, or our project recommendations within approximately 3-5 days.</li>
    </ul>
  </div>
</div>

        
        
        </>
    )
}
export default Form;