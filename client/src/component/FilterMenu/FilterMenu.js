import React from 'react'

//icons and components
import { IoClose } from "react-icons/io5";
import { Checkbox, Label } from "flowbite-react";

const FilterMenu = (props) => {

    const closeMenuHandler = ()=>{
        props.filterMenuToggle();
    }
  return (
    <div className=''>
        <div  className="h-[100%] w-[85%] sm:w-[70%] md:w-[45%] lg:w-[25%]   fixed z-[999] top-0 left-0   flex flex-col bg-white  overflow-y-scroll ">
        {/* Top Section  */}
        <div className="p-4 flex justify-between">
          <div className="uppercase tracking-wider font-nato-sans font-semibold">
            Filter
          </div>
          <IoClose onClick={closeMenuHandler} />
        </div>

        {/* Availability */}
        <div className="px-4 py-6 border-t-[1px] ">
          <h2 className="text-[1rem]  font-semibold tracking-wide w-fit  text-center  text-black ">
            <div>Availability</div>
            <div className="w-[68%] border-b-2 border-b-black  "></div>
          </h2>
          <div>
            <div className="flex mt-2 items-center">
              <Checkbox id="Available" className="rounded-none bg-white"/>
              <Label htmlFor="remember " className="ml-1 text-base font-normal">Available</Label>
              <Label htmlFor="remember " className="ml-1 text-base font-normal">(120)</Label>
            </div>
            <div className="flex mt-2 items-center">
              <Checkbox id="Available" className="rounded-none bg-white" />
              <Label htmlFor="remember " className="ml-1 text-base font-normal">Out Of Stock</Label>
              <Label htmlFor="remember " className="ml-1 text-base font-normal">(10)</Label>
            </div>
            
          </div>
        </div>

        {/* price */}
        <div className="px-4 py-6 border-t-[1px] ">
          <h2 className="text-[1rem]  font-semibold tracking-wide w-fit  text-center  text-black ">
            <div>Price</div>
            <div className="w-[68%] border-b-2 border-b-black  "></div>
          </h2>
          <div>
            <div className="flex mt-2 items-center">
              <Checkbox id="Available" className="rounded-none bg-white"/>
              <Label htmlFor="remember " className="ml-1 text-base font-normal">Available</Label>
              <Label htmlFor="remember " className="ml-1 text-base font-normal">(120)</Label>
            </div>
            <div className="flex mt-2 items-center">
              <Checkbox id="Available" className="rounded-none bg-white" />
              <Label htmlFor="remember " className="ml-1 text-base font-normal">Out Of Stock</Label>
              <Label htmlFor="remember " className="ml-1 text-base font-normal">(10)</Label>
            </div>
            
          </div>
        </div>

        {/* Author */}
        <div className="px-4 py-6 border-t-[1px] ">
          <h2 className="text-[1rem]  font-semibold tracking-wide  w-fit  text-center  text-black ">
            <div>Author</div>
            <div className="w-[68%] border-b-2 border-b-black  "></div>
          </h2>
          <div>
            <div className="flex mt-2 items-center">
              <Checkbox id="Available" className="rounded-none bg-white"/>
              <Label htmlFor="remember " className="ml-1 text-base font-normal">Virat Reddy</Label>
              <Label htmlFor="remember " className="ml-1 text-base font-normal">(8)</Label>
            </div>
            <div className="flex mt-2 items-center">
              <Checkbox id="Available" className="rounded-none bg-white" />
              <Label htmlFor="remember " className="ml-1 text-base font-normal">Anil Vishnu Mc</Label>
              <Label htmlFor="remember " className="ml-1 text-base font-normal">(4)</Label>
            </div>
            
          </div>
        </div>

        {/* Publisher */}
        <div className="px-4 py-6 border-t-[1px] ">
          <h2 className="text-[1rem]  font-semibold tracking-wide  w-fit  text-center  text-black ">
            <div>Publisher</div>
            <div className="w-[68%] border-b-2 border-b-black  "></div>
          </h2>
          <div>
            <div className="flex mt-2 items-center">
              <Checkbox id="Available" className="rounded-none bg-white"/>
              <Label htmlFor="remember " className="ml-1 text-base font-normal">Ar Publisher</Label>
              <Label htmlFor="remember " className="ml-1 text-base font-normal">(20)</Label>
            </div>
            <div className="flex mt-2 items-center">
              <Checkbox id="Available" className="rounded-none bg-white" />
              <Label htmlFor="remember " className="ml-1 text-base font-normal">Indian Publishers</Label>
              <Label htmlFor="remember " className="ml-1 text-base font-normal">(50)</Label>
            </div>
            
          </div>
        </div>

       
        {/* Binding */}
        <div className="px-4 py-6 border-t-[1px] ">
          <h2 className="text-[1rem]  font-semibold tracking-wide  w-fit  text-center  text-black ">
            <div>Binding</div>
            <div className="w-[68%] border-b-2 border-b-black  "></div>
          </h2>
          <div>
            <div className="flex mt-2 items-center">
              <Checkbox id="Available" className="rounded-none bg-white"/>
              <Label htmlFor="remember " className="ml-1 text-base font-normal">Paper Back</Label>
              <Label htmlFor="remember " className="ml-1 text-base font-normal">(300)</Label>
            </div>
            <div className="flex mt-2 items-center">
              <Checkbox id="Available" className="rounded-none bg-white" />
              <Label htmlFor="remember " className="ml-1 text-base font-normal">Hard Cover</Label>
              <Label htmlFor="remember " className="ml-1 text-base font-normal">(200)</Label>
            </div>
            
          </div>
        </div>
        {/* Language */}
        <div className="px-4 py-6 border-t-[1px] ">
          <h2 className="text-[1rem]  font-semibold tracking-wide  w-fit  text-center  text-black ">
            <div>language</div>
            <div className="w-[68%] border-b-2 border-b-black  "></div>
          </h2>
          <div>
            <div className="flex mt-2 items-center">
              <Checkbox id="Available" className="rounded-none bg-white"/>
              <Label htmlFor="remember " className="ml-1 text-base font-normal">English</Label>
              <Label htmlFor="remember " className="ml-1 text-base font-normal">(210)</Label>
            </div>
            <div className="flex mt-2 items-center">
              <Checkbox id="Available" className="rounded-none bg-white" />
              <Label htmlFor="remember " className="ml-1 text-base font-normal">Hindi</Label>
              <Label htmlFor="remember " className="ml-1 text-base font-normal">(340)</Label>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterMenu