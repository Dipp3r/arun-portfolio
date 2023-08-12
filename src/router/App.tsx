// import React from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "../pages/home/Home.tsx";
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const cursor = document.querySelector(".custom-cursor");
        const navLinks = document.querySelectorAll(".nav-links");
        const projComp = document.querySelectorAll(".view");
        const view = document.querySelector(".view-content");
        const handleMouseMove = (event: { clientX: unknown; clientY: unknown; }) => {
            // console.log(cursor);
            const { clientX, clientY } = event;
            // console.log(clientX, clientY);
            (cursor as HTMLElement).style.left = `${clientX}px`;
            (cursor as HTMLElement).style.top = `${clientY}px`;
        };
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("click", () => {
            cursor!.classList.remove("custom-cursor");
            (cursor as HTMLElement).classList.add("click");
            setTimeout(() => {
                cursor!.classList.remove("click");
                cursor!.classList.add("custom-cursor");
            }, 200);
        });

        navLinks.forEach((link) => {
            link.addEventListener("mouseover", () => {
                cursor!.classList.add("link-grow");
            });
            link.addEventListener("mouseleave", () => {
                cursor!.classList.remove("link-grow");
            });
        });

        projComp.forEach((comp) => {
            comp.addEventListener("mouseover", () => {
                (cursor as HTMLElement).classList.remove("custom-cursor");
                (cursor as HTMLElement).classList.add("view-cursor");
                if(Number.parseInt(String(window.innerWidth)) > 480){
                    (view as HTMLElement).style.display = "block";
                }
            });
            comp.addEventListener("mouseleave", () => {
                // (cursor as HTMLElement).classList.add('light');
                cursor!.classList.add("custom-cursor");
                cursor!.classList.remove("view-cursor");
                (view as HTMLElement).style.display = "none";
            });
        });
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return (
        <Router>
            <div className="custom-cursor hidden md:flex">
                <p className="view-content">View</p>
            </div>
            <Routes>
                {/* Define your routes using Route components */}
                <Route path="/arun-portfolio" element={<Home />} />
                {/* Additional routes */}
            </Routes>
        </Router>
    )
}

export default App;