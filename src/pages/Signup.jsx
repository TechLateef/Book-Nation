import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "../api/signUp";
import { Header } from "../components";

const SignUp = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const mutation = useMutation({
    mutationFn: signUp,
  });
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.prevsentDefault();
    mutation.mutate({ email, password, username });
  };

  if (mutation.isSuccess) {
    navigate("/dashboard");
  }

  return (
    <>
      <Header />
      <div className="h-screen flex mt-[10rem] justify-center gap-10">
        <form onSubmit={handleSignUp} className="flex flex-col items-center">
          <h1 className="text-2xl">Register </h1>
          <input
            type="username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-[200px] border-2 p-3 border-gray-400 w-[20rem] rounded-md h-[30px] m-[10px]"
          />
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-[200px] rounded-md p-3 border-2 border-gray-400 w-[20rem] h-[30px] m-[10px]"
          />
          <input
            type="password"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-[200px] rounded-md p-3 border-2 border-gray-400 w-[20rem] h-[30px] m-[10px]"
          />
          <button
            type="submit"
            className="w-[20rem] rounded-md h-[30px] mt-3 border-none text-[#fff] font-md cursor-pointer bg-[#1b7bca]"
          >
            Submit
          </button>
          {/* {error && <span>Wrong email or password!</span>} */}
        </form>
      </div>
    </>
  );
};

export default SignUp;
