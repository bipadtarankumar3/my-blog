// src/app/admin/layout.js
import "@/styles/admin.css";
import Sidebar from "@/components/layout/Sidebar";

export const metadata = {
  title: "Admin Panel",
};

export default function AdminLayout({ children }) {
  return (
    <div className="admin-wrapper">
      <Sidebar />
      <main className="admin-main">{children}</main>
    </div>
  );
}
