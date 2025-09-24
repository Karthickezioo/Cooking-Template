import Foodieland from "../../assets/images/Foodieland..svg";
import Facebook from "../../assets/images/001-facebook.svg";
import Twitter from "../../assets/images/003-twitter.svg";
import Instagram from "../../assets/images/004-instagram.svg";

function Footer() {
  const navItems = ["Recipes", "Blog", "Contact", "About Us"];
  const socialIcons = [
    { src: Facebook, alt: "Facebook" },
    { src: Twitter, alt: "Twitter" },
    { src: Instagram, alt: "Instagram" },
  ];

  return (
    <footer className="bg-white">
      <div className="flex justify-center">
        <div className="w-full max-w-[1280px] flex flex-col p-5">
          {/* Top Section: Logo + Nav */}
          <div className="flex justify-between items-start mb-5">
            <div>
              <img src={Foodieland} alt="Foodieland" className="mb-2" />
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetuipisicing elit,
              </p>
            </div>

            <ul className="flex gap-16 font-medium">
              {navItems.map((item, idx) => (
                <li key={idx} className="cursor-pointer hover:text-blue-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <hr className="border-t border-gray-200 my-5" />

          {/* Bottom Section: Copyright + Social */}
          <div className="flex justify-between items-center">
            <div className="flex-1 text-center text-lg text-gray-600">
              <p className="opacity-70">
                © 2020 Flowbase. Powered by{" "}
                <span className="text-[#e53e3e]">Webflow</span>
              </p>
            </div>

            <div className="flex gap-5">
              {socialIcons.map((icon, idx) => (
                <img
                  key={idx}
                  src={icon.src}
                  alt={icon.alt}
                  className="h-6 w-6 cursor-pointer hover:opacity-70"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
