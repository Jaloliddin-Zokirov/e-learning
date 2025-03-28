import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="flex items-start h-full">
      <Navbar isOpen={openModal} isClose={setOpenModal} />
      <div className="flex flex-col min-h-screen w-full h-full overflow-x-hidden">
        <div className="flex-grow w-full sm:w-[90%] mx-auto pt-8 px-4 pb-16">
          <Header isOpen={setOpenModal} />
          <main>
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
