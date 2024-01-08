import { FormEvent, useState } from "react";
import { adminData } from "../Services/Constants";
import { showErrorToast, showSuccessToast } from "./ToastMessage/Toasts";
import { AdminDataType } from "../Types";
import { useNavigate } from "react-router-dom";
import { BsEyeFill,BsEyeSlashFill } from "react-icons/bs"; 

export default function LoginForm() {
  const navigate = useNavigate();
  const [show,setShow] = useState<boolean>(false)
  const [adminDetails, setAdminDetails] = useState<AdminDataType>({
    email: "",
    password: "",
  });

  // Input handle function
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setAdminDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form submitting function
  function formHandler(e: FormEvent) {
    e.preventDefault();
    if (adminData?.email !== adminDetails.email) {
      return showErrorToast("Email Not Matching");
    }
    if (adminData?.password !== adminDetails?.password) {
      return showErrorToast("Password is Incorrect");
    }

    showSuccessToast("Login Success")
    setTimeout(()=>{
      navigate("/dashboard");
    },1000)
  }

  return (
    <form
      className="w-full md:w-[70%] h-72 bg-slate-300 bg-opacity-20 rounded-2xl flex flex-col items-center justify-center p-5 gap-3"
      onSubmit={(e) => formHandler(e)}
    >
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="bg-slate-300 bg-opacity-20  rounded-xl w-[90%] h-12 ps-4 text-sm focus:outline-none text-slate-400"
        onChange={handleInputChange}
        required
      />
      <div className="bg-slate-300 bg-opacity-20  rounded-xl w-[90%] h-12  text-sm mb-4 flex pe-4">
        <input
          type={`${show?"text":"password"}`}
          name="password"
          placeholder="Password"
          className="w-full h-full ps-4 rounded-xl bg-transparent  focus:outline-none text-slate-400"
          onChange={handleInputChange}
          required
        />
        <button type="button" className="text-slate-400" onClick={()=>setShow(!show)}>
          {
            !show? <BsEyeSlashFill size={15}/>
            :<BsEyeFill size={15}/>
          }
        </button>
      </div>
      <button
        type="submit"
        className="bg-black text-sm md:text-base text-white font-bold w-[90%] h-12 rounded-2xl mb-4"
      >
        Login
      </button>
      <p className=" bg-transparent text-slate-400 text-center text-xs">
        By continuing. you agree to (name)'s{" "}
        <b className="bg-transparent">terms of service</b> and{" "}
        <b className="bg-transparent"> Privacy policy</b>
      </p>
    
    </form>
  );
}
