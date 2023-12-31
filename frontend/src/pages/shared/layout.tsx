import { useState, useEffect, Fragment } from "react";
import SideBar from './sidebar'
import TopBar from './topbar'
import { Transition } from "@headlessui/react";
import { Outlet } from "react-router-dom";
import { useRouter } from 'next/router';

  const Layout = ({children}:any) => {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter()

  function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }
    if (!localStorage.getItem('TokenNext')){
      router.push('/login')
    }

    const tokenExpiration = localStorage.getItem("TokenExpiration");
    const currentTime = new Date().getTime();

    if (tokenExpiration && currentTime > parseInt(tokenExpiration)) {
      // Clear token and perform logout actions
      localStorage.removeItem("TokenNext");
      // Redirect user to login page
      router.push("/login");
    }

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <TopBar showNav={showNav} setShowNav={setShowNav} />
      <Transition
        as={Fragment}
        show={showNav}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <SideBar  />
      </Transition>
      <main
        className={`pt-16 transition-all duration-[400ms] ${
          showNav && !isMobile ? "pl-56" : ""
        }`}
      >
        <div className="px-4 md:px-16">{children}</div>
      </main>
    </>
  );
}

export default Layout