import React from "react";
import { PanFlip } from "../../animations/pan-animated";
import { color_scheme } from "../../constants";
const Login = () => {
  return (
    <div className="w-100 wrapper d-flex align-items-center">
      <div className="w-100 px-2 px-md-0">
        <div className="col-md-4 col-sm-11 mx-auto card px-4 pb-4">
          <div className="my-3 w-100 d-flex justify-content-center">
            <PanFlip size={180} />
          </div>
          <h4 className="mb-3" style={{ color: color_scheme.primary }}>
            <strong> Momos - Login</strong>
          </h4>

          <form action="">
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email address"
                required
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">
                Password{" "}
                <i className="ml-1">
                  forgot password?{" "}
                  <a href="/auth/reset">
                    <b>Reset</b>
                  </a>
                </i>
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="password"
                name="password"
              />
            </div>
            <div className="mt-5">
              <button className="btn btn-primary btn-block">
                <b>Login</b>
              </button>
            </div>
          </form>
          <br />
          <br className="d-none d-md-block" />
          <div>
            <label htmlFor="" className="">
              If you don not have account.{" "}
              <a href="/auth/register" style={{ color: color_scheme.primary }}>
                Signup
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
