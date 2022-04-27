import React from "react";

const UserAccount = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-sm-12 mx-auto">
        <form action="" className="mt-4">
          <div className="form-group">
            <input type="text" className="form-control" value={"name"} />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={"email"}
              readOnly
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="new password"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Old password"
            />
          </div>
          <div className="mt-4">
            <button className="btn btn-block btn-primary">
              <strong> Update details</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserAccount;
