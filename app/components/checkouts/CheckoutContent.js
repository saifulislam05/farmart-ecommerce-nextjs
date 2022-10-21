import React from "react";
import { AppForm } from "../shared/Form";
import BillingInfo from "./BillingInfo";
import YourOrder from "./YourOrder";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().max(25).required().label("First name"),
  last_name: Yup.string().max(25).required().label("Last name"),
  company: Yup.string().label("Company name"),
  country: Yup.string().required().label("Country / Region"),
  address: Yup.string().required().label("Address"),
  city: Yup.string().required().label("City"),
  state: Yup.string().required().label("State / Province"),
  zip: Yup.string().required().label("ZIP / Postal code"),
  phone: Yup.string().required().label("Phone"),
  email: Yup.string().email().required().label("Email"),
  notes: Yup.string().max(500).label("Order notes"),
});

const CheckoutContent = () => {
  const placeholder = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap">
        <AppForm
          initialValues={{
            first_name: "",
            last_name: "",
            company: "",
            country: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            phone: "",
            email: "",
            note: "",
          }}
          onSubmit={placeholder}
          validationSchema={validationSchema}
        >
          <div className="w-full md:w-[60%]">
            <BillingInfo />
          </div>
          <div className="w-full md:w-[40%]">
            <YourOrder placeOrder={placeholder} />
          </div>
        </AppForm>
      </div>
    </>
  );
};

export default CheckoutContent;
