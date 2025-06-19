import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

// import { useEffect, useState } from "react";
// import { appleImg, bagImg, searchImg } from "../utils";
// import { navLists } from "../constants";

// const Navbar = () => {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     const prefersDark = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;

//     if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
//       setTheme("dark");
//       document.documentElement.classList.add("dark");
//     } else {
//       setTheme("light");
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (theme === "dark") {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setTheme("light");
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setTheme("dark");
//     }
//   };

//   return (
//     <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
//       <nav className="flex w-full screen-max-width">
//         <img src={appleImg} alt="Apple" width={14} height={18} />

//         <div className="flex flex-1 justify-center max-sm:hidden">
//           {navLists.map((nav) => (
//             <div
//               key={nav}
//               className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
//             >
//               {nav}
//             </div>
//           ))}
//         </div>

//         <div className="flex items-baseline gap-5 max-sm:justify-end max-sm:flex-1">
//           <img src={searchImg} alt="search" width={18} height={18} />
//           <img src={bagImg} alt="bag" width={18} height={18} />

//           {/* 🌗 Theme Toggle Button */}
//           <button
//             onClick={toggleTheme}
//             className="px-3 py-1 text-sm rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition-colors"
//           >
//             {theme === "dark" ? "Light Mode" : "Dark Mode"}
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
