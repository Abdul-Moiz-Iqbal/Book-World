import { Label } from "flowbite-react";
import { useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const SelectCountry = () => {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  return (
    <div className="">
      <Label htmlFor="number" value="Country" />

      <CountrySelect
        onChange={(e) => {
          setCountryid(e.id);
        }}
        // defaultValue={"india"}
        inputClassName="  bg-gray-50 border py-2 border-gray-300 text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        placeHolder="Select Country"
      />
      <div className="mb-2 mt-2 block">
        <Label htmlFor="state" value="State/Province" />
      </div>

      <StateSelect
        countryid={countryid}
        onChange={(e) => {
          setstateid(e.id);
        }}
        inputClassName="  bg-gray-50 border py-2 border-gray-300 text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        placeHolder="Select State"
      />
      <div className="mb-2 mt-2 block">
        <Label htmlFor="city" value="City" />
      </div>

      <CitySelect
        countryid={countryid}
        stateid={stateid}
        onChange={(e) => {
          console.log(e);
        }}
        inputClassName="  bg-gray-50 border py-2 border-gray-300 text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        placeHolder="Select City"
      />
    </div>
  );
};

export default SelectCountry;
