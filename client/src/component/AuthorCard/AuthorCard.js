import React from 'react'

const AuthorCard = () => {
    return (
        <div className="">
          <div className="  ">
            <div className=" bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition duration-500 ease-in-out hover:shadow-xl">
              <div className="">
                <img
                  src="http://dkprintworld.com/wp-content/uploads/2019/07/Andre-Couture.jpg"
                  alt="profile one"
                //   className="w-full h-full object-cover "
                />
              </div>
              
              <div className=" w-full  bg-white  p-2">
                <h2 className="text-lg text-center">
                  Abhinav <br />
                  {/* <span className="job-title">UI Developer</span> */}
                </h2>
              </div>
            </div>
          </div>
        </div>  
      );
}

export default AuthorCard