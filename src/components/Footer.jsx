import React from "react";

const Footer = () => (
  <footer className="bg-dark text-white text-center py-3 mt-5">
    <div>
      <i className="bi bi-trophy-fill mx-2" title="Trophy"></i>
      <i className="bi bi-emoji-sunglasses-fill mx-2" title="Cool"></i>
      <i className="bi bi-dribbble mx-2" title="Dribbble"></i>
      <i className="bi bi-joystick mx-2" title="Joystick"></i>
      <i className="bi bi-shield-fill-check mx-2" title="Shield"></i>
    </div>
    <div className="mt-2">&copy; {new Date().getFullYear()} Football App</div>
  </footer>
);

export default Footer;
