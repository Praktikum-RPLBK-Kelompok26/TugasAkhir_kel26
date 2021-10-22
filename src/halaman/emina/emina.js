import React from "react";
import Meta from "../../components/Meta";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import emina_makeup from "./emina_makeup";
import emina_skincare from "./emina_skincare";

const Emina = () => {
    const pageTitle = 'Emina';

    return (
        <BrowserRouter>
            <Meta title={pageTitle}/>
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-8 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block text-4xl font-extrabold">Emina</span>
                    <span className="block text-xl font-normal text-indigo-600">Pilih salah satu untuk melihat katalog!</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                        <Link to="/emina_makeup">
                            Makeup
                        </Link>
                        </a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <a
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                        <Link to="/emina_skincare">
                            Skincare
                        </Link>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
            <Switch>
                <Route path="/emina_makeup" exact component={emina_makeup}/>
                <Route path="/emina_skincare" exact component={emina_skincare}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Emina;

