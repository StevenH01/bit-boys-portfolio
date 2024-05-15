import React from "react";

const ContactSteven = () => {
  return (
    <div className="max-w-[1200px] mx-auto sm:py-20">
      <div className="max-w-[800px] mx-auto">
        <div className="bg-[#161616] rounded-xl">
          <div className="p-10">
            <form action="https://getform.io/f/lbkmyekb" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Your Name"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400
                                  border border-gray-700 rounded-md focus:outline-none focus:outline-green-500"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id=""
                      placeholder="Your Email"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400
                                  border border-gray-700 rounded-md focus:outline-none focus:outline-green-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id=""
                      placeholder="Your Message"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400
                                  border border-gray-700 rounded-md focus:outline-none focus:outline-green-500"
                      rows="4"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="text-xl w-full p-4 mt-2 relative hover:text-green-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-green-500 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-green-500 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSteven;
