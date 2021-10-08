import React, { useState, useEffect } from "react";
import Meta from "../components/Meta";
import axios from "axios";
import Home_modal from "./Home_modal";

const Home = () => {
    const pageTitle = 'Home';
    const [kelompok, setKelompok] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [link, setLink] = useState("");

    const handleButton = (linkValue) => {
        setShowModal(true);
        setLink(linkValue);
    };
    
    useEffect(() => {
        axios
            .get("kel26.json")
            .then((data) => {
                console.log(data.data);
                setKelompok(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <Meta title={pageTitle} />
            <div className="py-12 bg-white">
                <Home_modal
                    link={link}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    onHide={() => setShowModal(false)}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                            Tugas Modul 4
                        </h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Kelompok 26
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Putri Rohmawati || Ayunda Mita Aprilia
                        </p>
                        <p>
                        Tugas ini menggunakan React dan telah memenuhi persyaratan dari syarat Tugas Praktikum RPLBK Modul 4 (React Hooks) tahun 2021.
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            {kelompok.map((saya) => (
                                <div key={saya.nama} className="relative" onClick={() => handleButton(saya.link)}>
                                    <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <img className="h-10 w-10" aria-hidden="true" src={saya.foto}/>
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{saya.nama}</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">{saya.moto}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;