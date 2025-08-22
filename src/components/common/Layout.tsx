import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="max-w-[850px] mx-auto px-4">
      <Header />
      <main className="mt-28 max-w-[800px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
