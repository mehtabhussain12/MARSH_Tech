import React from "react";
import { FC } from "react";

import Image from "next/image";

const Cards: FC = () => {
  return (
    <>
      <div className="bg-slate-100 ">
        <h1 className="text-4xl font-bold  flex justify-center  mb-4   mt-20 ml-4">
          WEB DEVELOPMENT SERVICES WE OFFER
        </h1>
        <p className="  text-center text-xl mt-4 text-gray-400 ml-4">
          Our web development team combines years of experience with an
          understanding of the most up-to-date
          <br /> programming skills and approaches. When we build your app,
          we'll leverage the latest development innovations.
          <br /> The entire process is built around your precise specifications
          and requirements.
        </p>

        <div className="flex justify-center p-4 gap-3 flex-col md:flex-row">
          <div className="max-w-xs rounded overflow-hidden mt-14 bg-white relative cursor-pointer hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center">
              <Image
                src="/web.png"
                alt="Logo"
                width={250}
                height={225}
                className="hover:scale-110 flex justify-center"
              />
            </div>
            <div className="px-4 py-2 text-center">
              <div className="text-sm font-semibold mb-1">
                Websites Application{" "}
              </div>
            </div>
            <div className="absolute inset-0 bg-[#9cc3d5ff] opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <div className="px-4 py-2 text-center">
                <p className="text-gray-600 text-sm">
                  Custom web development, responsive design, e-commerce
                  solutions, CMS, web applications, SEO-friendly, experienced
                  team, timely delivery, excellent support.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-xs rounded overflow-hidden mt-14 bg-white relative cursor-pointer hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center">
              <Image
                src="/ecom.png"
                alt="Logo"
                width={250}
                height={225}
                className="hover:scale-110 flex justify-center"
              />
            </div>
            <div className="px-4 py-2 text-center">
              <div className="font-semibold text-sm mb-1">
                eCommerce Websites
              </div>
            </div>
            <div className="absolute inset-0 bg-[#9cc3d5ff] opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <div className="px-4 py-2 text-center">
                <p className="text-gray-600 text-sm">
                  Custom web development, responsive design, e-commerce
                  solutions, CMS, web applications, SEO-friendly, experienced
                  team, timely delivery, excellent support.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-xs rounded overflow-hidden mt-14 bg-white relative cursor-pointer hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center">
              <Image
                src="/mob.png"
                alt="Logo"
                width={200}
                height={225}
                className="hover:scale-110 flex justify-center"
              />
            </div>
            <div className="px-4 py-2 text-center">
              <div className="font-semibold text-sm mb-1">
                Mobile Applications
              </div>
            </div>
            <div className="absolute inset-0 bg-[#9cc3d5ff] opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <div className="px-4 py-2 text-center">
                <p className="text-gray-600 text-sm">
                  Our mobile solutions are meticulously designed to deliver
                  seamless user experiences while adeptly addressing the
                  distinctive requirements of your business.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-xs rounded overflow-hidden mt-14 bg-white relative cursor-pointer hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center">
              <Image
                src="/graphic.png"
                alt="Logo"
                width={250}
                height={225}
                className="hover:scale-110 flex justify-center"
              />
            </div>
            <div className="px-4 py-2 text-center">
              <div className="font-semibold text-sm mb-1">
                Graphic design & UI/UX
              </div>
            </div>
            <div className="absolute inset-0 bg-[#9cc3d5ff] opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <div className="px-4 py-2 text-center">
                <p className="text-gray-600 text-sm">
                  we offer comprehensive Graphic Design & UI/UX solutions aimed
                  at elevating your digital presence and enhancing user
                  engagement.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-xs rounded overflow-hidden mt-14 bg-white relative cursor-pointer hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center">
              <Image
                src="/soft.png"
                alt="Logo"
                width={230}
                height={225}
                className="hover:scale-110 flex justify-center"
              />
            </div>
            <div className="px-4 py-2 text-center">
              <div className="font-semibold text-sm mb-1">
                software development
              </div>
            </div>
            <div className="absolute inset-0 bg-[#9cc3d5ff] opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <div className="px-4 py-2 text-center">
                <p className="text-gray-600 text-sm">
                  we specialize in delivering bespoke software solutions
                  tailored to meet the diverse needs and challenges of modern
                  businesses. With a dedicated team of experienced developers
                  and engineers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
