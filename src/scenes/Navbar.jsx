import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import greenLogo from "../assets/green-logo.png"
import blackLogo from "../assets/black-logo.png"
import menuIcon from "../assets/menu-icon.svg"
import closeIcon from "../assets/close-icon.svg"
import '../index.css';

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
      <AnchorLink
        className={`${
          selectedPage === lowerCasePage ? "text-pale-blue" : ""
        } md:hover:text-pale-pink  hover:text-pale-green transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page}
      </AnchorLink>
    );
  };

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}) => {
    const[isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-pale-green";
    const logo = isTopOfPage ? blackLogo : greenLogo;
    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-1.5`}>
            <div className=" flex items-center justify-between mx-auto w-[90%]">
            <img width={65}  alt="logo-icon" src={logo}></img>
        
            {/* DESKTOP */}
            {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-dangrek text-md ">
                        <Link
                            page="HOME"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="EXPERIENCE"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />

                    </div>
                    
                ) : (<button 
                        className="rounded-full bg-pale-pink p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <img alt="menu-icon" src={menuIcon}></img>
                    </button>)}
                    {!isAboveSmallScreens && isMenuToggled && (
                        <div className="fixed right-0 bottom-0 h-full bg-pale-pink w-[300px] font-dangrek">
                            <div className="flex justify-end p-12">
                                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <img alt="close-icon" src={closeIcon}></img>
                                </button>
                            </div>
                            <div className="flex flex-col gap-10 ml-[33%] text-2xl">
                            <Link
                                page="HOME"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="EXPERIENCE"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            </div>
                        </div>
                    )}    
            </div>
        </nav>
    );
}

export default Navbar;