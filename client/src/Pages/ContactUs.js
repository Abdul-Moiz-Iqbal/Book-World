import React, { useState } from "react";

//flow bite
import { Label, TextInput, Textarea } from "flowbite-react";
import { HiOutlineMail,HiOutlinePhone,HiOutlineClock, HiOutlineHome, } from "react-icons/hi";

const ContactUs = () => {
  const [isDropOpen, setDropOpen] = useState(false);

  const dropDownHandler = () => {
    setDropOpen(!isDropOpen);
  };
  return (
    <div className="pt-5 pb-28 ">
      <div>
        <iframe
          className="w-[100%] h-[450px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.988339065395!2d72.82927877497356!3d18.93191028224326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1dccf79931d%3A0x5a05e56a48173e2a!2sKitab%20Khana!5e0!3m2!1sen!2s!4v1703767163240!5m2!1sen!2s"

          // style="border:0;"
          // allowfullscreen=""
          // loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* email Us section */}
      {/* <div className="px-24 w-full flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center"> */}
      <div className="px-5 md:px-24 w-[100%vw] grid md:grid-flow-row md:grid-cols-2 ">
        <div className="md:px-5 w-full  mt-10">
          <h1 className="font-semibold text-3xl">Email Us</h1>

          {/* //Name */}
          <div className=" mt-5  ">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name (required)" />
            </div>
            <TextInput id="name" type="text" placeholder="John doe" required />
          </div>
          {/* //email address */}
          <div className="mt-5">
            <div className="mb-2 block">
              <Label htmlFor="email4" value="Your email (required)" />
            </div>
            <TextInput
              id="email4"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          {/* //Phone Number */}
          <div className="mt-5">
            <div className="mb-2 block">
              <Label htmlFor="number" value="Your Phone Number (optional)" />
            </div>
            <TextInput id="number" type="number" placeholder="" required />
          </div>
          <div className=" mt-5">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Your message" />
            </div>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required
              rows={4}
            />
          </div>
        </div>
        {/* Contact Information section */}
        <div className="mt-10 text-slate-700">
          <h1 className="font-semibold text-3xl"> Contact Information</h1>
          <h6 className="mt-5 ">
            We love to hear from you on our customer service, merchandise,
            website or any topics you want to share with us. Your comments and
            suggestions will be appreciated. Please complete the form below.
          </h6>
          <h6 className="flex items-center mt-5"> <HiOutlineHome className="mr-1" ></HiOutlineHome> Street 11 Plot No. C1, Basement, baber Commercial Area Defence Phase 5, Goa,75500</h6>
          <h6 className="flex items-center mt-5">  <HiOutlinePhone className="mr-1" ></HiOutlinePhone > +912138921593 / +913431216771 </h6>
          <h6 className="flex items-center mt-5"> <HiOutlineMail className="mr-1"></HiOutlineMail> info@BookWorld.com.pk</h6>
          <h6 className="flex items-center mt-5"> <HiOutlineClock className="mr-1"></HiOutlineClock> Mon-Sat 11:00-20:00</h6>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
