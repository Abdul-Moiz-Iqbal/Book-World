import React from "react";
import {
  Button,
  Modal,
  Select,
  Label,
  TextInput,
  Checkbox,
} from "flowbite-react";
import { useDispatch } from "react-redux";
import { isLoginOpen } from "../redux/Slices/login";
import { Link } from "react-router-dom";
import SelectCountry from "./SelectCountry";

const Register = () => {
  const dispatch = useDispatch();

  return (
    <div className=" px-8 md:px-0 ">
      <form className="flex  mx-auto max-w-md flex-col gap-4">
        <h1 className="text-3xl font-bold font-Poppins">Create Your Account</h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@flowbite.com"
            required
            shadow
          />

          <div className="mb-2 mt-2 block">
            <Label htmlFor="name" value="Your name" />
          </div>
          <TextInput id="name" type="text" placeholder="John" required shadow />

          <div className="mb-2 mt-2 block">
            <Label htmlFor="number" value="Your phone number" />
          </div>

          <input
            id="number"
            type="number"
            placeholder="Phone number"
            required
            className="bg-gray-50 border py-2 border-gray-300 text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput id="password2" type="password" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput id="repeat-password" type="password" required shadow />
        </div>
        <SelectCountry />
        <div className="flex items-center gap-2">
          {/* <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
          </Label> */}
          <div className="flex justify-between w-full text-sm font-medium text-gray-500 dark:text-gray-300">
            Already Have Account?&nbsp;
            <a
              href="#"
              className="text-cyan-700 hover:underline dark:text-cyan-500"
              onClick={() => dispatch(isLoginOpen())}
            >
              Login Account
            </a>
          </div>
        </div>

        <Button type="submit">Register new account</Button>
      </form>
    </div>
  );
};

export default Register;
