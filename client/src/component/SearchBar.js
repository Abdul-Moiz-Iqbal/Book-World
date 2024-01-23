import React from 'react'
import { FaSearchengin } from 'react-icons/fa6'

const SearchBar = () => {
  return (
    <div>
        
           <form className=''>
            <div className="flex w-full items-center bg-white rounded-lg overflow-hidden px-1 py-1 justify-between">
              <input
                className=" border-none text-base text-gray-400 flex-grow outline-none px-2  "
                type="text"
                placeholder="Search your Books"
              />
              <div className="ms:flex items-center px-2 rounded-lg  space-x-2 md:space-x-4 mx-auto ">
                <select
                  id="Com"
                  className="text-base text-gray-800  outline-none border-2 px-2 py-2 rounded-lg"
                >
                  <option value="com" selected>
                    All
                  </option>
                  <option value="net">Ficton</option>
                  <option value="org">Science</option>
                  <option value="io">Culture</option>
                </select>
                {/* bg-indigo-500 */}
                <button className=" bg-blue-700 text-white text-base rounded-lg  px-2 py-2 font-thin">
                  <FaSearchengin/>
                </button>
              </div>
            </div>
          </form>
    </div>
  )
}

export default SearchBar