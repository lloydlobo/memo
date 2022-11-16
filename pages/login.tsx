import React from "react";

export default function login() {
  return (
    <div>
      <div className="card">
        <div className="card-title">Sign In</div>
        <div className="card-body">
          <form action="submit">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="Email" />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="text" id="password" placeholder="Password" />
            </div>

            <input type="submit" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
}
