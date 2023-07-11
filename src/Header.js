// // import React from "react";
// // import { Link } from "react-router-dom";

// // const Header = () => {
// //   return (
// //     <div>
// //       Header Navbar
// //       <a>
// //         <Link to={"/cart"}>Cart</Link>
// //       </a>
// //     </div>
// //   );
// // };

// // export default Header;
// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <div>
//       <header class="text-gray-600 body-font">
//         <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//             </svg>
//             <span>Pearl</span>
//           </a>
//           <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
//           <Link to={"/cart"}>
//             <svg
//               fill="none"
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               class="w-4 h-4 ml-1"
//               viewBox="0 0 24 24"
//             >
//               cart
//               {/* <path d="M5 12h14M12 5l7 7-7 7"></path> */}
//             </svg>
//           </Link>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      HeaderNavbar
      <Link to={"/cart"}>Cart</Link>
    </div>
  );
};

export default Header;
