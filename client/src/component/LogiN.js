import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useDispatch } from "react-redux";
import { isLoginOpen } from "../redux/Slices/login";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div className="px-8">
      <form className="flex mx-auto max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          {/* <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label> */}
          <div className="flex justify-between w-full text-sm font-medium text-gray-500 dark:text-gray-300">
            Dont Have Account?&nbsp;
            <a
              href="#"
              className="text-cyan-700 hover:underline dark:text-cyan-500"
              onClick={() => dispatch(isLoginOpen())}
            >
              Create Account
            </a>
          </div>
        </div>
        <Link to={"/"}>
          <Button type="submit">Submit</Button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
