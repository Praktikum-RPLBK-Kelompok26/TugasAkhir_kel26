import { BrowserRouter as Router } from "react-router-dom";

import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
    return (
        <Router>
            <Navbar />
            <main>{children}</main>
        </Router>
    )
};

export default Layout;