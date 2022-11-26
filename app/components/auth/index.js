import React from 'react'
import { AppForm,FormBtn,FormInput } from '../shared/Form';
import * as Yup from "yup";



const validationSchema = Yup.object().shape({

  phone: Yup.string().required().label("Phone"),
  email: Yup.string().email().required().label("Email"),

});



const Auth = () => {
const [isLogin, setIsLogin] = React.useState(true)
  const handleLoginSignup = (values) => {
    console.log(values);
  }

  return (
    <div className="p-5">
      <div
        className="mx-auto max-w-[300px] bg-gray-200 my-10
       p-5"
      >
        <div className="flex items-center gap-5 font-semibold justify-center text-2xl uppercase pb-4 border-b border-b-gray-500">
          <h1
            className={`${
              isLogin ? "text-gray-700" : "text-gray-400"
            } cursor-pointer`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </h1>
          <h1
            className={`${
              isLogin ? "text-gray-400" : "text-gray-700"
            } cursor-pointer`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </h1>
        </div>
        <div className="py-5">
          <p className="text-center mb-5">
            {isLogin ? "Log in to your account" : "Create an Account"}
          </p>
          <AppForm
            initialValues={{
              phone: "",
              email: "",
            }}
            onSubmit={handleLoginSignup}
            validationSchema={validationSchema}
          >
            <FormInput
              name="email"
              placeholder="Email"
              type="email"
            ></FormInput>
            <FormInput
              name="password"
              placeholder="Password"
              type="password"
            ></FormInput>
            <FormBtn
              title={isLogin ? "Login" : "Register"}
            />
          </AppForm>

          <div className="">
            <p className="text-center my-5">Or</p>
            <div className="flex items-center justify-center gap-5">
              <button className="bg-[#DB4437] text-white px-4 py-2 rounded-md">
                Google
              </button>
              <button className="bg-[#4267b2] text-white px-4 py-2 rounded-md">
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth