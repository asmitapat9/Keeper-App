import React from "react";

function Footer(){
    const currentYear= new Date().getFullYear();
    return <footer><p>
        Copyright © {currentYear} asmitapathare
    </p></footer>
}

export default Footer;