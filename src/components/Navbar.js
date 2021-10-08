import { Link } from "react-router-dom";
import React, { useState, createRef } from "react";
import { createPopper } from "@popperjs/core";

const Navbar = () => {
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    const btnDropdownRef = createRef();
    const popoverDropdownRef = createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-500 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                    <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                        <Link to="/home">
                            Toko Kosmetik
                        </Link>
                    </a>
                    <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                    </button>
                    </div>
                    <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                    <ul className="flex flex-col lg:flex-row list-none ml-auto">
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                            <Link to="/home">
                                Home
                            </Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <div className="relative inline-flex align-middle w-full">
                                <button
                                className={
                                    "text-white font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-red-500"
                                }
                                type="button"
                                ref={btnDropdownRef}
                                onClick={() => {
                                    dropdownPopoverShow
                                    ? closeDropdownPopover()
                                    : openDropdownPopover();
                                }}
                                >
                                Katalog Kosmetik
                                </button>
                                <div
                                ref={popoverDropdownRef}
                                className={
                                    (dropdownPopoverShow ? "block " : "hidden ") +
                                    "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-red-500"
                                }
                                style={{ minWidth: "12rem" }}
                                >
                                <a className= {"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"}>
                                    <Link to="/wardah">
                                        Wardah
                                    </Link>
                                </a>
                                <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
                                <a className={"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"}>
                                    <Link to="/home">
                                        Home
                                    </Link>
                                </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </>
    )
}

export default Navbar;