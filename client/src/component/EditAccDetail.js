import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import SelectCountry from "./SelectCountry";

const EditAccDetail = (props) => {
  return (
    <div className="w-full py-10 px-5 bg-white rounded-lg shadow-md">
      <form>
        <div className=" md:flex justify-between">
          <div className="mb-2 md:mb-0">
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your Email" />
            </div>
            <input
              id="email"
              type="email"
              value={props.email || "user@bookworld.com"}
              className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            />
          </div>
          <div>
            <div className="mb-2  ">
              <Label htmlFor="email2" value="Your Name" />
            </div>
            <input
              id="name"
              type="text"
              value={props.name || "Akash"}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mt-2  md:mt-5 md:flex justify-between mb-5">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your Address" />
            </div>
            <input
              id="Address"
              type="text"
              value={
                props.address ||
                "Street 11 Plot No. C1, Basement, baber Commercial Area Defence Phase 5, Goa,75500"
              }
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your Phone Nunmber" />
            </div>

            <input
              type="number"
              value={911230}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
        </div>
        <SelectCountry />
        <div className="flex justify-between">
          <Button className="mt-5 " type="submit">
            Save Changes
          </Button>
          <Button onClick={() => {props.onCloseEditHandler()}} className="mt-5">Back</Button>
        </div>
      </form>
    </div>
  );
};

export default EditAccDetail;
