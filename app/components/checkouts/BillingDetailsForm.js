import {AppTextArea, FormDropdown, FormInput } from "../shared/Form";

const COUNTRIES = [
        {title: "United States"},
        {title: "United Kingdom"},
        {title: "India"},
        {title: "Others"},
]
        
const BillingDetailsForm = () => {


  return (
    <div>
      <FormInput name="first_name" placeholder="First name"></FormInput>
      <FormInput name="last_name" placeholder="Last name"></FormInput>
      <FormInput
        name="company"
        placeholder="Company name (optional)"
      ></FormInput>
      <FormDropdown name="country" placeholder="Country name"
        items={COUNTRIES}
    
      >

      </FormDropdown>
      <FormInput name="address" placeholder="Street address"></FormInput>
      <FormInput name="city" placeholder="Town / City"></FormInput>
      <FormInput name="state" placeholder="State / Province"></FormInput>
      <FormInput name="zip" placeholder="Zip / Postal code"></FormInput>
      <FormInput name="phone" placeholder="Phone"></FormInput>
      <FormInput
        name="email"
        type="email"
        placeholder="Email address"
      ></FormInput>
      <AppTextArea
        name="notes"
        type="textarea"
        placeholder="Order notes (optional)"
      ></AppTextArea>
    </div>
  );
};

export default BillingDetailsForm;
