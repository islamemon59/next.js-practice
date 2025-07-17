import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="cols-span-3">
          <ul>
            <li>UserDashboard</li>
          </ul>
        </div>
        {/* main content */}
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
};

export default layout;
