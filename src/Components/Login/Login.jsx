import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { useToken } from "../../Hook/useToken";

const Login = () => {
  const { logIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const [createUserEmail, setCreateUserEmail] = useState("");
  const [token] = useToken(createUserEmail);
  // 
  // console.log(createUserEmail);

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((res) => {
        // const user = res.user;
        toast.success("login successfully");
        setCreateUserEmail(email);
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
    form.reset();
  };

  const handelGoogleSignIn = () => {
    googleSignIn(googleProvider).then((res) => {
      const user = res.user;
      const email = user.email;
      // console.log(email);
      setCreateUserEmail(email);
      toast.success("login successfully");
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="hero min-h-screen" data-aos="fade-down">
      <div className="hero-content flex-col">
        <div className="card md:w-96 py-20 ">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="lg:text-3xl text-xl text-center font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn btn-outline">Login</button>
            </div>
          </form>
          <p className="text-center">
            New to Dream_Wedding{" "}
            <Link className="text-orange-600 font-bold text-base" to="/signup">
              Sign UP
            </Link>
          </p>
          <button
            onClick={handelGoogleSignIn}
            className="flex items-center m-auto mt-3 btn btn-outline"
          >
            <FaGoogle className="mr-2"></FaGoogle>Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
