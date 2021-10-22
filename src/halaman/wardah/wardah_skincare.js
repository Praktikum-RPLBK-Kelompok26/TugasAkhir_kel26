import React, { useState, useEffect } from "react";
import Meta from "../../components/Meta";
import axios from "axios";
import Modal_skincare from "./Modal_skincare";

const Wardah_skincare = () => {
    const pageTitle = 'Wardah - Skincare';
    const [wardahs, setWardahs] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [deskripsi, setDeskripsi] = useState("");

    const handleButton = (deskripsiValue) => {
        setShowModal(true);
        setDeskripsi(deskripsiValue);
    };

    useEffect(() => {
        axios
            .get("Wardah_skincare.json")
            .then((data) => {
                console.log(data.data);
                setWardahs(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <Meta title={pageTitle}/>
            <div className="shadow pb-10">
                <Modal_skincare
                    deskripsi={deskripsi}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    onHide={() => setShowModal(false)}
                />
                <h2 className="text-white bg-red-500 pt-2 font-sans text-xl font-bold pb-4 text-center">
                    Skincare
                </h2>
                <div className="bg-white">
                    <div className="max-w-2xl mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {wardahs.map((produk) => (
                            <div key={produk.id} className="group relative" onClick={() => handleButton(produk.deskripsi)}>
                                    <div className="relative w-full h-90 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-2 sm:h-64 sm:w-64 lg:aspect-w-1 lg:aspect-h-1">
                                        <img
                                        src={produk.foto}
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full bg-contain"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {produk.nama}
                                            </a>
                                        </h3>
                                        <p className="text-sm font-medium text-gray-900">{produk.harga}</p>
                                        </div>
                                    </div>
                                
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wardah_skincare;