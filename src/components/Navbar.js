import { Link } from "react-router-dom";
import React, { useState, createRef, useContext, createContext } from "react";
import { createPopper } from "@popperjs/core";

const warna = { 
    merah: {
        bg: "relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-red-500",
        bgdropdown: "text-white font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-red-500",
        bglist: "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-red-500",
        text: "Ubah Warna",
        bgsend: "text-white bg-red-500 pt-2 font-sans text-xl font-bold pb-4 text-center",
    },
    pink: {
        bg: "relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-pink-500",
        bgdropdown: "text-white font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-pink-500",
        bglist: "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-pink-500",
        text: "Ubah Warna",
        bgsend: "text-white bg-pink-500 pt-2 font-sans text-xl font-bold pb-4 text-center",
    },
};

const UbahWarna = createContext(); 

const Navbar = () => { 
    const [valueWarna, setValueWarna] = useState(warna.merah);
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
        <UbahWarna.Provider value={valueWarna}>
            <nav className={valueWarna.bg}>
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
                                <button className={valueWarna.bgdropdown}
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
                                    (valueWarna.bglist)
                                }
                                style={{ minWidth: "12rem" }}
                                >
                                <a className= {"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"}
                                    
                                >
                                    <Link to="/wardah">
                                        Wardah
                                    </Link>
                                </a>
                                <a className= {"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"}>
                                    <Link to="/emina">
                                        Emina
                                    </Link>
                                </a>
                                <a className= {"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"}>
                                    <Link to="/scarlett">
                                        Scarlett
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
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                onClick = {() => setValueWarna(valueWarna === warna.merah ? warna.pink : warna.merah)} 
                            >
                                <Content isi={valueWarna} />
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </UbahWarna.Provider>
    )
}

export default Navbar;

function Content(props) { //function
    return (
        <a>
            <Text isi={props.isi} />
        </a>
    )
}

function Text(props) {
    const color = useContext(UbahWarna);
    return (
        <button className="items-center text-xs uppercase font-bold text-white hover:opacity-75">
            {color.text}
        </button>
    )
}