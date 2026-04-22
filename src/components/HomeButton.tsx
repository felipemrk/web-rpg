import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

export default function HomeButton(){
    const location = useLocation();
    if (location.pathname === '/' ) {
        return null;
    }
    return (
        <Link to="/">
            <button type="button" className="homeButton">Menu</button>
        </Link>
    )
}