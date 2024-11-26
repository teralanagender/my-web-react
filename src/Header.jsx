import React, { useState } from "react";
import "./App.css";
import { Contact } from "./Contact";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to control the dropdown's visibility
  const [isAbout, setIsAbout] = useState(false);
  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleAbout = () => {
    setIsAbout(!isAbout);
  };
  const details = [
    {
      name: "M.Kotayaiah",
      contactNumber: 9951773162,
      email: "kmkotesh@gmail.com",
      location: "Vivekanandanagar Colony, Kukatpally, Hyd,Pin Code - 500072",
    },
  ];
  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src="https://www.shutterstock.com/image-vector/symbol-solar-panels-produce-green-260nw-1084011962.jpg"
            alt="Company Logo"
            className="logo-img"
          />
          <span className="company-name">LEO PROJECTS & SERVICES.<p className="cap">© Do The Earth a Favour Be a Power Saver</p></span>
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <div className="dropdown">
                <a href="#" className="alert-link" onClick={toggleDropdown}>
                  Contact Us
                </a>

                {/* Dropdown menu appears if isOpen is true */}
                {isOpen && (
                  <ul className="dropdown-menu">
                    {details.map((detail, index) => (
                      <li key={index}>
                        <p className="ptag">{detail.name}</p>
                        <p className="ptag">{detail.contactNumber}</p>
                        <p className="ptag">{detail.email}</p>
                        <p className="ptag">{detail.location}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
            <li>
              <a href="#" className="alert-link" onClick={toggleAbout}>
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {isAbout && <Contact />}
    </>
  );
}
