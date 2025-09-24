// import Post1 from "../../assets/images/Post.svg";
// import Post2 from "../../assets/images/Post-1.svg";
// import Post3 from "../../assets/images/Post-2.svg";
// import Post4 from "../../assets/images/Post-3.svg";
// import Insta from "../../assets/images/Group-826-1.svg";

// function SocialInfo() {
//   return (
//     <section className="flex flex-col items-center mb-44 px-5">
//       {/* Header */}
//       <div className="flex flex-col items-center text-center mb-12">
//         <h1 className="text-[45px] font-bold mb-4">
//           Check out @foodieland on Instagram
//         </h1>
//         <p className="opacity-50 mb-1">
//           Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore
//         </p>
//         <p className="opacity-50">magna aliqut enim ad minim</p>
//       </div>

//       {/* Posts Row */}
//       <div className="relative flex flex-wrap justify-center gap-10 p-10 bg-gradient-to-t from-[#E7FAFE] to-white rounded-[20px]">
//         <img
//           src={Post1}
//           alt="post1"
//           className="w-[250px] h-[250px] object-cover rounded-[20px]"
//         />
//         <img
//           src={Post2}
//           alt="post2"
//           className="w-[250px] h-[250px] object-cover rounded-[20px]"
//         />
//         <img
//           src={Post3}
//           alt="post3"
//           className="w-[250px] h-[250px] object-cover rounded-[20px]"
//         />
//         <img
//           src={Post4}
//           alt="post4"
//           className="w-[250px] h-[250px] object-cover rounded-[20px]"
//         />

//         {/* Instagram Icon */}
//         <img
//           src={Insta}
//           alt="Instagram"
//           className="absolute bottom-[-60px] w-16 h-16 cursor-pointer"
//         />
//       </div>
//     </section>
//   );
// }

// export default SocialInfo;

import Post1 from "../../assets/images/Post.svg";
import Post2 from "../../assets/images/Post-1.svg";
import Post3 from "../../assets/images/Post-2.svg";
import Post4 from "../../assets/images/Post-3.svg";
import Insta from "../../assets/images/Group-826-1.svg";

function SocialInfo() {
  return (
    <section className="flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12 px-5 lg:px-20">
        <h1 className="text-[45px] font-bold mb-4">
          Check out @foodieland on Instagram
        </h1>
        <p className="opacity-50 mb-0">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore
        </p>
        <p className="opacity-50 mt-0">magna aliqut enim ad minim</p>
      </div>

      {/* Instagram Posts */}
      <div className="relative flex flex-col items-center bg-gradient-to-t from-[#E7FAFE] to-white px-5 lg:px-20 py-10 mb-44 rounded-[30px] w-full max-w-[1400px]">
        {/* Posts row */}
        <div className="flex justify-center items-center gap-6 lg:gap-10 flex-wrap lg:flex-nowrap mb-10">
          <img
            src={Post1}
            alt="post1"
            className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[250px]"
          />
          <img
            src={Post2}
            alt="post2"
            className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[250px]"
          />
          <img
            src={Post3}
            alt="post3"
            className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[250px]"
          />
          <img
            src={Post4}
            alt="post4"
            className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[250px]"
          />
        </div>

        {/* Visit Instagram using Insta image */}
        <img
          src={Insta}
          alt="Visit Instagram"
          className="cursor-pointer w-16 h-16 lg:w-20 lg:h-20 hover:scale-105 transition-transform"
        />
      </div>
    </section>
  );
}

export default SocialInfo;
