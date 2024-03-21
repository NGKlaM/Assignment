import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Sidebar } from "./Sidebar";
// import Admin from "./Admin";

export default function AdminLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/admin");
  });
  return (
    <>
      <main>
        <div className="flex flex-row">
          <Sidebar />
          <div className="p-6">
            <Outlet />
          </div>
        </div>
        <ToastContainer />
      </main>
    </>
  );
}
