import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import toast from "react-hot-toast";
import { useToken } from "../../Hook/useToken";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [createUserEmail, setCreateUserEmail] = useState('')
  const [token] = useToken(createUserEmail)

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const account_category = form.account_category.value;
    const password = form.password.value;

    console.log(name, email, password, account_category);

    createUser(email, password)
      .then((res) => {
        // const user = res.user;
        userName(name, account_category, email);

      })
      .catch((err) => console.error(err));
    form.reset();
  };

  const userName = (name, account_category, email) => {
    const profile = {
      displayName: name,
      account_category: account_category,
    };
    updateUserProfile(profile)
      .then(() => {
        saveUser(name, email, account_category)
      })
      .catch((err) => console.error(err));
  };

  const saveUser = (name, email, account_category) => {
    const user = { name, email, account_category }
    fetch('https://bicyle-server-side-indrajit98.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        setCreateUserEmail(email)
        // console.log(data)
        toast.success("Sign Up Successfully");
        navigate(from, { replace: true })

      })
  }

  return (
    <div>
      <div className="hero w-full" data-aos="fade-down">
        <div className="hero-content w-full">
          <div className="card md:w-96  bg-base-100  py-20 ">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="lg:text-3xl text-xl font-bold text-center">Sign UP</h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Account Category</span>
                </label>
                <select name="account_category" className="select select-bordered w-full" required>
                  <option>User</option>
                  <option>Seller</option>
                </select>
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
                <input
                  className="btn btn-outline"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center">
              Already have an account?
              <Link className="text-orange-600 font-bold text-base" to="/login">
                {" "}
                Login
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
