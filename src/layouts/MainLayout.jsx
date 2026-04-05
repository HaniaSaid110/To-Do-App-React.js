import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="pt-10 flex flex-col bg-gray-100 min-h-dvh">
      <Navbar />
      <main className="flex flex-col flex-1 px-4 md:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
