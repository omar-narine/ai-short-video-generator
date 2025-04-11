import React from "react";
import DashboardLayout from "./layout";

function DashboardProvider({ children }) {
  return (
    <div>
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
}

export default DashboardProvider;
