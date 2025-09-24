// import React from "react";
// import Foodieland from "../../assets/images/Foodieland..svg";
// import Facebook from "../../assets/images/001-facebook.svg";
// import Twitter from "../../assets/images/003-twitter.svg";
// import Instagram from "../../assets/images/004-instagram.svg";

// function Header() {
//   const navItems = ["Home", "Recipes", "Blog", "Contact", "About Us"];
//   const socialIcons = [
//     { src: Facebook, alt: "Facebook" },
//     { src: Twitter, alt: "Twitter" },
//     { src: Instagram, alt: "Instagram" },
//   ];

//   return (
//     <header className="relative border-b border-gray-300">
//       <div className="flex items-center px-8 py-4">
//         <img
//           src={Foodieland}
//           alt="Title Logo"
//           draggable={false}
//           className="cursor-pointer pr-8"
//         />

//         <ul className="flex flex-1 justify-center gap-20 font-medium">
//           {navItems.map((item, index) => (
//             <li key={index} className="cursor-pointer hover:text-blue-500">
//               {item}
//             </li>
//           ))}
//         </ul>

//         <div className="flex gap-10 ml-auto">
//           {socialIcons.map((icon, index) => (
//             <img
//               key={index}
//               src={icon.src}
//               alt={icon.alt}
//               draggable={false}
//               className="cursor-pointer hover:opacity-70"
//             />
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React from "react";
import Foodieland from "../../assets/images/Foodieland..svg";
import Facebook from "../../assets/images/001-facebook.svg";
import Twitter from "../../assets/images/003-twitter.svg";
import Instagram from "../../assets/images/004-instagram.svg";

function Header() {
  const navStyle =
    "list-none flex gap-[80px] items-center absolute left-1/2 -translate-x-1/2 font-medium";

  return (
    <header className="relative">
      <div className="flex items-center">
        {/* Logo */}
        <img
          src={Foodieland}
          alt="Title Logo"
          draggable={false}
          className="flex p-[35px] ml-7 cursor-pointer"
        />

        {/* Navigation */}
        <ul className={navStyle}>
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Recipes</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">About Us</li>
        </ul>

        {/* Social Icons */}
        <div className="ml-auto mr-20 flex gap-10">
          <img
            src={Facebook}
            alt="Facebook"
            draggable={false}
            className="cursor-pointer"
          />
          <img
            src={Twitter}
            alt="Twitter"
            draggable={false}
            className="cursor-pointer"
          />
          <img
            src={Instagram}
            alt="Instagram"
            draggable={false}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Divider */}
      <hr className="opacity-30" />
    </header>
  );
}

export default Header;
