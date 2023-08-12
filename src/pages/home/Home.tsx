import { useState, useEffect } from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMail,
  AiFillGithub,
} from "../../../node_modules/react-icons/ai";
// import management_projects from "./management";
// import Image from "next/image";

// import sunset from "../../assets/images/sunset.git";
import avatar from "../../assets/images/dips.png";
import kv_logo from "../../assets/images/Kendriya_Vidyalaya_logo.png";
import ssn_logo from "../../assets/images/ssnlogo.png";
import menu from '../../assets/images/FLM_menu.gif';
import gericare from '../../assets/images/gericare.gif';
import finance from '../../assets/images/financeSimulator.mp4';



function Home() {
  const [darkMode, setDarkMode] = useState(true);

  function switchTheme() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    let darkTheme = true;

    const dark = document.querySelector(".mode1");
    const light = document.querySelector(".mode2");
    dark!.addEventListener("click", () => {
      darkTheme = !darkTheme;
    });
    light!.addEventListener("click", () => {
      darkTheme = !darkTheme;
    });


  }, []);
  return (
    <div className={darkMode ? "dark" : ""}>

      <main className="bg-white  text-black  dark:bg-dark_sky_blue dark:text-slate-400">
        <section className="transition-colors duration-200 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 dark:bg-opacity-30 dark:backdrop-blur-xl dark:bg-clip-padding dark:backdrop-filter z-10 fixed w-full smooth-effect dark:text-gray-100 text-gray-800 shadow-md rounded-b-2xl dark:bg-gray-800 bg-white">
          <div className=" container flex flex-col flex-wrap mx-auto px-2 items-center py-5 lg:py-8 text-xl gap-y-3 justify-between md:flex-row">
            <div className="select-none flex-col md:flex-row  leading-none flex items-center justfy-left gap-2">
              <img
                src={avatar}
                alt=""
                width={"50%"}
                height={"50%"}
                className="w-9 hidden sm:block transform hover:scale-90 transition  duration-500"
              />
              <h1 className="font-burtons ml-0 md:ml-3 text-base lg:text-lg drop-shadow-md">
                #Dipp3r
              </h1>
            </div>
            <ul className="nav-links hidden md:flex space-x-10 lg:space-x-24  font-bold text-sm lg:text-lg">
              <li className="hover:bg-gradient-to-r hover:text-transparent hover:bg-clip-text hover:from-blue-800 hover:via-teal-500 hover:to-cyan-300">
                <a className="duration-1000 " href="#About">
                  About
                </a>
              </li>
              <li className="hover:bg-gradient-to-r hover:text-transparent hover:bg-clip-text hover:from-blue-800 hover:via-teal-500 hover:to-cyan-300">
                <a className="duration-1000" href="#education">
                  Education
                </a>
              </li>
              <li className="hover:bg-gradient-to-r hover:text-transparent hover:bg-clip-text hover:from-blue-800 hover:via-teal-500 hover:to-cyan-300">
                <a className="duration-1000" href="#Projects">
                  Projects
                </a>
              </li>
              <li className="hover:bg-gradient-to-r hover:text-transparent hover:bg-clip-text hover:from-blue-800 hover:via-teal-500 hover:to-cyan-300">
                <a className="duration-1000" href="#Art">
                  Art
                </a>
              </li>
              <li className="hover:bg-gradient-to-r hover:text-transparent hover:bg-clip-text hover:from-blue-800 hover:via-teal-500 hover:to-cyan-300">
                <a className="duration-1000" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
            <div
              id="dark mode button"
              className="dark:bg-gray-700 hover:dark:bg-gray-600 items-center hover:shadow-inner rounded-full w-7 h-7 smooth-effect "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className=" mode1 dark:text-white dark:hidden rounded-full cursor-pointer mx-1.5 my-1"
                viewBox="0 0 16 16"
                onClick={switchTheme}
              >
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                onClick={switchTheme}
                className=" mode2 dark:text-white dark:hover:text-yellow-300 text-white dark:block rounded-full cursor-pointer mx-1.5 my-1.5 hidden"
              >
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
              </svg>

              {/* <ImMenu className='dark:text-white bg-white rounded-full cursor-pointer w-4 md:hidden hidden items-center mx-auto'/> */}
            </div>
            {/* <ul id="menu" className=" hidden bg-custom_dark  absolute left-0 top-0 w-full space-y-10 text-md text-white rounded-b-3xl p-8">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Art</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul> */}
          </div>
        </section>

        {/* <section id="about" className="md:py-0 px-0 dark:text-black dark:bg-slate-900 smooth-effect"> */}
        <section
          id="introduction"
          className="bg-code dark:bg-light-code bg-cover justify-center 2xl:py-40 py-16 sm:py-32 flex px-4 flex-wrap ontent-start w-full h-screen "
        >
          <div className="w-full h-fit p-0 mx-0.5 flex justify-end">
            <div className="backdrop-blur-sm max-w-[1000px] shadow-lg dark:bg-black/20 bg-opacity-20 bg-white rounded-xl mx-8 mt-16 md:mt-0 md:mx-36 p-10 ">
              <h3 className="text-3xl md:py-5 animate-[lightColors_3s_ease-in-out_infinite] dark:animate-[colors_3s_ease-in-out_infinite] text-teal-600 font-medium md:text-6xl">
                Arun
              </h3>
              <h3 className="text-xl py-1 md:text-3xl  text-gray-500">
                Software Development Engineer
              </h3>
              <p className="text-xs md:text-md py-2 leading-6 md:leading-8 dark:text-gray-300 md:text-xl">
                App & Web Developer | Character & animation Designer | Data
                Analyst |
              </p>
              <p className="text-sm md:text-md py-2 leading-6 md:leading-8 dark:text-gray-400 md:text-xl">
                I specialize in design and optimization for all stages of the
                development cycle for dynamic web projects. I am adept and
                proficient at technological activities and working as part of a
                team for successful establishment. I am ready for unexplored
                innovations and challenges.
              </p>
            </div>
          </div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="currentColor" className="bi bi-arrow-down-short" href='about' className="hover:brightness-110 hover:to-light_background hover:dark:text-dark_sky_blue hover:text-gray-600 text-teal-600 dark:text-white bg-gradient-to-b from-yellow_gradient to-slate-100 dark:bg-gradient-to-b rounded-full dark:from-blue-800 dark:via-teal-500 dark:to-cyan-300 mt-4" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
          </svg> */}
          <a href="#Contact" className="hidden md:block">
            <svg
              className=" animate-bounce animation-pulse opacity-60 dark:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
            </svg>
          </a>
        </section>

        <section
          id="About"
          className="lg:py-32 py-10 px-5 dark:bg-dark_sky_blue smooth-effect"
        >
          <div className="max-w-6xl mx-auto bg-gray-50 rounded-xl card-shadow overflow-hidden dark:bg-slate-800 ring-1 ring-slate-900/5 smooth-effect">
            <div className="md:flex">
              <div className="p-8">
                <h1 className="text-3xl font-extrabold font-burtons dark:text-gray-200 smooth-effect">
                  About
                </h1>
                <p className="mt-2 text-lg text-slate-500 dark:text-slate-400 smooth-effect quick-text">
                  Hello!, I'm an undergraduate student, currently pursuing
                  Information Technology at
                  <a
                    href="https://www.ssn.edu.in/"
                    className="text-indigo-400 hover:text-indigo-600 smooth-effect"
                  >
                    {" "}
                    SSNCE
                  </a>
                  , India, graduating in 2024. I'm a Developer, character and
                  animation designer with an involvement in art. I have
                  specialties in data structures and algorithms, and I am
                  well-versed in numerous programming languages, including
                  HTML5, Python, JavaScript, CSS, and MySQL. Always trying to
                  build something unconventional yet professional. Passionate on
                  writing elegant and efficient code to achieve beautiful
                  design. In an act of building interactive websites that run
                  across platforms & devices. My various interests have been
                  stated down below, intrested can check it out.
                  <br />
                  <br />( ◡̀_◡́)ᕤ
                </p>
              </div>
              <div className="md:shrink-0 front-cover">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-72"
                  src="https://user-images.githubusercontent.com/91364256/195618197-04176f72-94f9-4302-b3ff-331e7832c0ef.gif"
                  alt="Man looking at item at a store"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-8" id="education"></section>

        <div className="section-container">
          <section className="md:px-20 lg:px-30 px-10 py-10 h-1/6">
            <div>
              <h3 className="text-3xl font-burtons font-extrabold py-1 text-center dark:text-gray-200">
                Education
              </h3>
            </div>
            <div className="px-4 items-center opacity-80 md:px-14 xl:px-48 2xl:px-96 bg-cover 2xl:py-40 py-8 w-full h-1/2  flex-col gap-y-20 md:flex-row justify-center md:gap-x-20 xl:gap-x-36 flex">

              <div className="relative h-1/2 min-w-[200px] max-w-[500px]">
                <div className="absolute md:h-full -inset-0 bg-school opacity-100 rounded-lg lg:w-full"></div>
                <div className="relative justify-start backdrop-blur-sm  brightness-110  rounded-md w-full shadow-2xl dark:shadow-none md:h-full">
                  <div className=" p-0 w-full h-full rounded-t-md backdrop-blur-md bg-white/60 shadow-xl">
                    <div className="justify-center animate-pulse  flex space-x-4">
                      <div className="py-2 rounded-full h-20 w-20 justify-end-center">
                        <img className="brightness-90" src={kv_logo} />
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex-1 space-y-6 py-3">
                      <div className="h-8 p-1 w-40 bg-white/70 dark:bg-slate-700/70 rounded text-center opacity-100">
                        {" "}
                        <p className="dark:text-white text-black/80 font-bold">
                          {" "}
                          Grade XII - 2020
                        </p>{" "}
                      </div>
                      <div className="space-y-2">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-16 s1:h-13 _3xl:h-9 p-1 text-sm md:text-md bg-white/70 dark:bg-slate-700/70 flex items-center justify-center flex-row text-center rounded col-span-2">
                            <p className="dark:text-white text-black/80  font-bold">
                              {" "}
                              Kendriya Vidyalaya, Chennai{" "}
                            </p>
                          </div>
                          <div className="h-9 p-1  bg-white/70 dark:bg-slate-700/70 text-center rounded col-span-1">
                            <p className="dark:text-white text-black/80 font-bold">
                              {" "}
                              CBSE{" "}
                            </p>
                          </div>
                        </div>
                        <p className="font-bold text-center text-gray-900 drop-shadow-md p-3">
                          476/500 - 95.2%
                        </p>
                        <div className="h-20 s1:h-16 text-sm md:text-md xl:h-9 p-2 justify-center font-mono bg-white/70 dark:bg-slate-700/70 text-center rounded ">
                          <p className="dark:text-white text-black/90 font-bold">
                            Secured 3rd rank in school
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-full min-w-[200px] max-w-[500px]">
                <div className="absolute md:h-full -inset-0 bg-sunset opacity-100 rounded-lg  lg:w-full"></div>
                <div className="relative justify-start backdrop-blur-sm shadow-2xl dark:shadow-none rounded-md w-full md:h-full">
                  <div className="p-0 w-full h-full rounded-t-md backdrop-blur-md bg-white/60 shadow-xl">
                    <div className="justify-center animate-pulse flex space-x-4">
                      <div className="py-5 rounded-full h-20 w-20 justify-end-center">
                        <img src={ssn_logo} />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className=" flex-1 space-y-6 py-3">
                      <div className="h-fit w-fit p-1  bg-white/70 flex flex-col items-center justify-center dark:bg-slate-700/70 text-sm md:text-md rounded text-center opacity-100">
                        {" "}
                        <p className="dark:text-white  text-black/80 font-bold py-2">
                          {" "}
                          B.Tech Information Technology
                        </p>{" "}
                      </div>
                      <div className="space-y-2">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-fit  p-2 text-sm md:text-md bg-white/70 dark:bg-slate-700/70 text-center rounded col-span-2">
                            <p className="dark:text-white text-black/80 font-bold">
                              {" "}
                              Sri Sivasubramaniya Nadar (SSN) College of
                              Engineering, Kalavakkam{" "}
                            </p>
                          </div>
                          <div className="h-9 p-1 bg-white/70 dark:bg-slate-700/70 text-center rounded col-span-1">
                            <p className="dark:text-white text-black/80 font-bold">
                              {" "}
                              2024{" "}
                            </p>
                          </div>
                        </div>
                        <p className="font-bold text-center text-sm  text-white p-2 md:p-4 drop-shadow-lg">
                          CGPA(until 4th semester) - 9.239
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="py-8" id="Projects"></section>

        <div className="section-container">
          <section className="md:px-20 lg:px-30 px-10">
            <div className="py-10">
              <h3 className="text-3xl font-burtons font-extrabold py-1 text-center dark:text-gray-200">
                Projects
              </h3>
            </div>
            <div className="lg:flex gap-10 justify-center">
              <section id="FLMS" className="bg-transparent grid grid-cols-1 md2:grid-cols-2 lg:grid-cols-3 gap-y-12 xl:gap-x-48 md:gap-x-8 smooth-effect">

                <div className="view group hover:scale-110 h-auto justify-center transition transform duration-500 w-auto mx-auto rounded-xl card-shadow overflow-hidden shadow-lg dark:bg-slate-800 bg-white ring-1 ring-slate-900/5 smooth-effect">
                  <div className="flex items-center justify-center">
                    <a className="relative block w-full"
                      href="##">
                      <img className="rounded-t-xl  inset-0 object-cover 
                      group-hover:opacity-100"
                        src={menu} />
                      <div className="relative ">
                        <div className="transition-all transform 
                      translate-y-24 duration-500 px-2 opacity-0 
                      group-hover:opacity-90 
                      group-hover:translate-y-0">
                          <div className="flex flex-row justify-start m-3 mb-0 md:mb-2 space-x-3">
                            <div className="h-auto w-auto flex justify-center items-center p-2 text-xs md:text-md bg-blue-400 dark:bg-opacity-70 bg-opacity-100 text-opacity-100 text-center rounded-lg row-span-1"><p className="text-white opacity-100 font-normal"> Flutter </p></div>
                            <div className="h-auto w-auto flex justify-center items-center p-2 text-xs md:text-md bg-android dark:bg-opacity-70 bg-opacity-100 text-opacity-100 text-center rounded-lg row-span-2"><p className="text-white opacity-100 font-normal"> Android studio </p></div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>


                  <div className="md:flex">
                    <div className="lg:p-4 lg:pt-0 2xl:p-3 p-3">
                      <h1 className="text-md md:text-lg font-extrabold dark:text-gray-200 text-gray-600 smooth-effect">
                        Faculty Leave planner application
                      </h1>
                      <p className="py-1">A mobile application that aims to enable faculties to apply for leave. Allowing admin to see the list of applications, details of each faculty’s previous leave and an option to accept/decline the leave applications. Admin is given the permissions to register new faculties, see the performance of each department and change the timetable of substitution teacher and the faculty taking leave.</p>
                      <p className='my-2 2xl:my-1 justify-center'>
                        <a href='https://github.com/Dipp3r/Faculty-leave-management-app' >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 opacity-50 hover:opacity-100 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                          </svg>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="view group hover:scale-110 h-auto justify-center transition transform duration-500 w-auto mx-auto rounded-xl card-shadow overflow-hidden shadow-lg dark:bg-slate-800 bg-white ring-1 ring-slate-900/5 smooth-effect">

                  <div className="flex items-center justify-center">
                    <a className="relative block w-full"
                      href="##">
                      <img className="rounded-t-xl  inset-0 object-cover 
                      group-hover:opacity-100"
                        src={gericare} />
                      <div className="relative ">
                        <div className="transition-all transform 
                      translate-y-24 duration-500 px-2 opacity-0 
                      group-hover:opacity-90 
                      group-hover:translate-y-0">
                          <div className=" flex flex-row justify-start m-3 mb-0 md:mb-2 space-x-3">
                            <div className="h-auto w-auto flex justify-center items-center p-2 text-xs md:text-md bg-html dark:bg-opacity-70 bg-opacity-100 text-opacity-100 text-center rounded-lg row-span-1"><p className="text-white opacity-100 font-normal"> HTML </p></div>
                            <div className="h-auto w-auto flex justify-center items-center p-2 text-xs md:text-md bg-tailwind dark:bg-opacity-70 bg-opacity-100 text-opacity-100 text-center rounded-lg row-span-2"><p className="text-white opacity-100 font-normal"> Tailwind </p></div>
                            <div className="h-auto w-auto flex justify-center items-center p-2 text-xs md:text-md  bg-black dark:bg-opacity-70 bg-opacity-100 text-opacity-100 text-center rounded-lg row-span-2"><p className="text-white opacity-100 font-normal"> Flask </p></div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>


                  <div className="md:flex">
                    <div className="lg:p-4 lg:pt-0 2xl:p-3 p-3 h-auto">
                      <h1 className="text-md md:text-lg font-extrabold dark:text-gray-200 text-gray-600 smooth-effect">
                        ICOPE Screening tool
                      </h1>
                      <p className="py-1">A Web Interface for Elderly care hospitals that includes several person-centered assessments.This care plan includes multiple interventions to manage declines in intrinsic capacity, provide social care and support, support self-management and support caregivers.The domains of intrinsic capacity include minicog test, MNS (My Nutrition Score) test, GDS (Geriatric Depression Scale) test.</p>
                      <p className='my-2 2xl:my-1 justify-center'>
                        <a href='https://github.com/Dipp3r/Portfolio' >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 opacity-50 hover:opacity-100 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                          </svg>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="view group hover:scale-110 h-auto justify-center transition transform duration-500 w-auto mx-auto rounded-xl card-shadow overflow-hidden shadow-lg dark:bg-slate-800 bg-white ring-1 ring-slate-900/5 smooth-effect">

                  <div className="flex items-center justify-center">
                    <a className="relative block w-full"
                      href="##">
                      <video className="rounded-t-xl inset-0 object-cover group-hover:opacity-100" loop muted autoPlay>
                        <source src={finance} type="video/mp4" />
                      </video>
                      <div className="relative ">
                        <div className="transition-all transform 
                      translate-y-24 duration-500 px-2 opacity-0 
                      group-hover:opacity-90 
                      group-hover:translate-y-0">
                          <div className=" flex flex-row justify-start m-3 mb-0 md:mb-2 space-x-3">
                            <div className="h-auto w-auto flex justify-center items-center p-2 text-xs md:text-md bg-green-300 dark:bg-opacity-70 bg-opacity-100 text-opacity-100 text-center rounded-lg row-span-1"><p className="text-white opacity-100 font-normal"> Websocket </p></div>
                            <div className="h-auto w-auto flex justify-center items-center p-2 text-xs md:text-md bg-blue-300 dark:bg-opacity-70 bg-opacity-100 text-opacity-100 text-center rounded-lg row-span-2"><p className="text-white opacity-100 font-normal"> PostgreSQL </p></div>
                            <div className="h-auto w-auto flex justify-center items-center p-2 text-xs md:text-md bg-teal-400 dark:bg-opacity-70 bg-opacity-100 text-opacity-100 text-center  rounded-lg row-span-2"><p className="text-white opacity-100 font-normal"> React JS </p></div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>


                  <div className="md:flex">
                    <div className="lg:p-4 lg:pt-0 2xl:p-3 p-3">
                      <h1 className="text-md md:text-lg font-extrabold dark:text-gray-200 text-gray-600 smooth-effect">
                        Finance Simulator
                      </h1>
                      <p className="py-1">A Forum to practice trading and investing(no deposit needed) by yourself or join a game with other like-minded investors and compete for the top rank. Practice with Vittae money to sharpen your knowledge of how the stock market works. The Stock Market Simulator will help you gain confidence before risking your own money.</p>
                      <p className='my-2 2xl:my-1 justify-center'>
                        <a href='https://github.com/Dipp3r/Portfolio' >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 opacity-50 hover:opacity-100 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                          </svg>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="view group hover:scale-110 h-auto justify-center transition transform duration-500 w-auto mx-auto rounded-xl card-shadow overflow-hidden shadow-lg dark:bg-slate-800 bg-white ring-1 ring-slate-900/5 smooth-effect">

                  <div className="flex items-center justify-center">
                    <a className="relative block w-full"
                      href="##">
                      <video className="rounded-t-xl inset-0 object-cover group-hover:opacity-100" loop muted autoPlay>
                        <source src={finance} type="video/mp4" />
                      </video>
                      <div className="relative ">
                        <div className="transition-all transform 
                      translate-y-24 duration-500 px-2 opacity-0 
                      group-hover:opacity-90 
                      group-hover:translate-y-0">
                          <div className=" flex flex-row justify-start m-3 mb-0 md:mb-2 space-x-3">
                            <div className="h-auto w-auto flex justify-center items-center p-2 text-xs md:text-md bg-violet-500 dark:bg-opacity-70 bg-opacity-100 text-opacity-100 text-center rounded-lg row-span-1"><p className="text-white opacity-100 font-normal"> Express </p></div>
                            <div className="h-auto w-auto flex justify-center items-center p-2 text-xs md:text-md bg-blue-300 dark:bg-opacity-70 bg-opacity-100 text-opacity-100 text-center rounded-lg row-span-2"><p className="text-white opacity-100 font-normal"> PostgreSQL </p></div>
                            <div className="h-auto w-auto flex justify-center items-center p-2 text-xs md:text-md bg-teal-400 dark:bg-opacity-90 bg-opacity-100 text-opacity-100 text-center  rounded-lg row-span-2"><p className="text-white opacity-100 font-normal"> React JS </p></div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>


                  <div className="md:flex">
                    <div className="lg:p-4 lg:pt-0 2xl:p-3 p-3">
                      <h1 className="text-md md:text-lg font-extrabold dark:text-gray-200 text-gray-600 smooth-effect">
                        Vittae-X
                      </h1>
                      <p className="py-1">Vittae-x an interface that serves as a pivotal tool for its intermediate agents to effectively expand its consumer base. This interface plays a crucial role in facilitating the growth and outreach efforts of Vittae by empowering these intermediaries to engage with potential customers and enhance the platform's presence in the market.</p>
                      <p className='my-2 2xl:my-1 justify-center'>
                        <a href='https://github.com/Dipp3r/Portfolio' >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 opacity-50 hover:opacity-100 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                          </svg>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              {/* <div className="view hover:scale-95 transition transform duration-500 text-center shadow-md dark:hover:shadow-inner dark:hover:shadow-gray-400 bg-opacity-80 h-full hover:shadow-slate-500 bg-white dark:bg-slate-800 p-10 rounded-xl my-20 basis-1/4 flex-1">
                <a href="/design_projects">
                  <img
                    className="hover:scale-125 duration-1000 transition transform object-cover h-24 w-26 m-auto"
                    src="https://user-images.githubusercontent.com/91364256/199675754-4e3db893-c210-49af-a2eb-042589d7a987.png"
                    alt=""
                  />
                  <h3 className="text-lg font-medium pt-8 pb-2">
                    Design and development projects
                  </h3>
                  <div className="text-justify">
                    <h4 className="py-4 text-teal-600 font-bold">Frameworks</h4>
                    <div className="grid grid-cols-3 2xl:grid-cols-3 lg:grid-cols-2 gap-1 text-slate-500 italic text-sm md:text-md">
                      <p>Tailwind</p>
                      <p>Figma</p>
                      <p>Flutter</p>
                      <p>HTML</p>
                      <p>CSS</p>
                      <p>next js</p>
                      <p>Flask</p>
                    </div>

                  </div>
                </a>
              </div>

              <div className="view hover:scale-95 h-full transition transform duration-500 text-center shadow-md dark:hover:shadow-inner dark:hover:shadow-gray-400 bg-opacity-80 hover:shadow-slate-500 bg-white dark:bg-slate-800 p-10 rounded-xl my-20 basis-1/4 flex-1">
                <a href="/research_projects">
                  <img
                    className="hover:scale-125 duration-1000 transition transform object-cover h-24 w-26 m-auto"
                    src="https://user-images.githubusercontent.com/91364256/199675938-7089cc74-6e39-4fff-80e7-c9ac0c11a994.png"
                    alt=""
                  />
                  <h3 className="text-lg font-medium pt-8 pb-2">
                    Research Projects
                  </h3>
                  <div className="text-justify">
                    <h4 className="py-4 text-teal-600 font-bold">Libraries</h4>
                    <div className="grid grid-cols-3 2xl:grid-cols-3 lg:grid-cols-2 gap-1 text-slate-500 italic text-sm md:text-md">
                      <p>SKLearn</p>
                      <p>openCV</p>
                      <p>matplotlib</p>
                      <p>Numpy</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="view hover:scale-95 h-fit transition transform duration-500 text-center dark:hover:shadow-inner dark:hover:shadow-gray-400 shadow-md  bg-opacity-80 hover:shadow-slate-500 bg-white dark:bg-slate-800 p-10 rounded-xl my-20 basis-1/4 flex-1">
                <a href="/management_projects">
                  <img
                    className="hover:scale-125 duration-1000 transition transform object-cover h-24 w-26 m-auto"
                    src="https://user-images.githubusercontent.com/91364256/199676199-75302a0d-45a3-4a23-957a-4c63ddd0032e.png"
                    alt=""
                  />
                  <h3 className="text-lg font-medium pt-8 pb-2">
                    Management Projects
                  </h3>
                  <div className="text-justify">
                    <h4 className="py-4 text-teal-600 font-bold">Tools</h4>
                    <div className="grid grid-cols-3 gap-1 text-slate-500 italic text-sm md:text-md">
                      <p>PyQt5</p>
                      <p>DBMS</p>
                      <p>tkinter</p>
                      <p>SQL</p>
                      <p>sqlite</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="view hover:scale-95 h-full transition transform duration-500 text-center shadow-md dark:hover:shadow-inner dark:hover:shadow-gray-400 bg-opacity-80 hover:shadow-slate-500 bg-white dark:bg-slate-800 p-10 rounded-xl my-20 basis-1/4 flex-1">
                <a href="/blender_designs">
                  <img
                    className="hover:scale-125 duration-1000 transition transform object-cover s1:w-24 m-auto"
                    width="100"
                    src="https://user-images.githubusercontent.com/91364256/199677520-18177946-2029-4830-93e6-0954414100dc.svg"
                    alt=""
                  />
                  <h3 className="text-lg font-medium pt-8 pb-2">
                    {" "}
                    <br />
                    Blender Designs
                  </h3>
                  <div className="text-justify">
                    <h4 className="py-4 text-teal-600 font-bold">Tools</h4>
                    <div className="grid 2xl:grid-cols-3 grid-cols-2 gap-1 text-slate-500 italic text-sm md:text-md">
                      <p>Blender</p>
                      <p>Adobe PS</p>
                    </div>
                  </div>
                </a>
              </div> */}
            </div>
          </section>
        </div>

        <section className="py-8" id="Art"></section>

        <div className="section-container">
          <section className="md:px-20 lg:px-30 px-5">
            <div className="py-8 lg:text-xl xl:text-2xl">
              <h3 className="text-3xl py-1 font-burtons font-extrabold text-center dark:text-gray-200">
                Art
              </h3>
            </div>

            <div className="flex lg:gap-10 gap-10 justify-center lg:flex-row flex-wrap items-center">
              <div
                id="art-card"
                className="basis-1/4 sm:basis-1/5 xl:basis-1/8"
              >
                <div className="dark:bg-gray-800 shadow-lg rounded-2xl py-0.5 mxl:w-[345px]">
                  <div className="card-zoom lg:py-25 lg:px-5 lg:w-80 xl:px-2 transition transform duration-300  object-cover">
                    <div className="card-zoom-image bg-light-code hover:bg-code_gif hover:bg-center "></div>
                    <h1 className="card-zoom-text">Peninsula</h1>
                  </div>
                  <p className="p-3 text-md text-gray-600 dark:text-slate-400 font-semibold transition-all duration-500 opacity-60 hover:opacity-100">
                    A low poly sculpt of an island with a lighthouse
                  </p>
                  <p className="m-3 justify-center">
                    <a href="https://github.com/Dipp3r">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 opacity-50 hover:opacity-100 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>

              <div className="basis-1/4 sm:basis-1/5 xl:basis-1/8">
                <div className="dark:bg-gray-800 shadow-lg rounded-2xl py-0.5 mxl:w-[345px]">
                  <div className="card-zoom lg:py-25 lg:px-5 lg:w-80 transition transform duration-300  object-cover">
                    <div className="card-zoom-image bg-web2 hover:bg-web2_gif bg-center "></div>
                    <h1 className="card-zoom-text ">
                      Lumine
                      <br />
                      -scence
                    </h1>
                  </div>
                  <p className="p-3 text-md text-gray-600 dark:text-slate-400 font-semibold transition-all duration-500 opacity-60 hover:opacity-100">
                    A scenary created with suzanne and semi-spherical bases
                  </p>
                  <p className="m-3 justify-center">
                    <a href="https://github.com/Dipp3r">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 opacity-50 hover:opacity-100 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>

              <div className="basis-1/4 sm:basis-1/5 xl:basis-1/8">
                <div className="dark:bg-gray-800 shadow-lg rounded-2xl py-0.5 mxl:w-[345px]">
                  <div className="card-zoom lg:py-25 lg:px-5 lg:w-80 transition transform duration-300  object-cover">
                    <div className="card-zoom-image bg-web4 hover:bg-web4_gif bg-center "></div>
                    <h1 className="card-zoom-text">wood</h1>
                  </div>
                  <p className="p-3 text-md text-gray-600 dark:text-slate-400 font-semibold transition-all duration-500 opacity-60 hover:opacity-100">
                    Applied Wood texture to spherical object using shaders
                  </p>
                  <p className="m-3 justify-center">
                    <a href="https://github.com/Dipp3r">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 opacity-50 hover:opacity-100 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>

              <div className="basis-1/4 sm:basis-1/5 xl:basis-1/8">
                <div className="dark:bg-gray-800 shadow-lg rounded-2xl py-0.5 mxl:w-[345px]">
                  <div className="card-zoom lg:py-25 lg:px-5 lg:w-80 transition transform duration-300  object-cover">
                    <div className="card-zoom-image bg-web5 hover:bg-web5_gif bg-center "></div>
                    <h1 className="card-zoom-text">Aircraft</h1>
                  </div>
                  <p className="p-3 text-md text-gray-600 dark:text-slate-400 font-semibold transition-all duration-500 opacity-60 hover:opacity-100">
                    A high poly aircraft model created out of a cube
                  </p>
                  <p className="m-3 justify-center">
                    <a href="https://github.com/Dipp3r">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 opacity-50 hover:opacity-100 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>

              <div className="basis-1/4 sm:basis-1/5 xl:basis-1/8">
                <div className="dark:bg-gray-800 shadow-lg rounded-2xl py-0.5 mxl:w-[345px]">
                  <div className="card-zoom lg:py-25 lg:px-5 lg:w-80 transition transform duration-300  object-cover">
                    <div className="card-zoom-image bg-web6 hover:bg-web6_gif bg-center "></div>
                    <h1 className="card-zoom-text">Low light</h1>
                  </div>
                  <p className="p-3 text-md text-gray-600 dark:text-slate-400 font-semibold transition-all duration-500 opacity-60 hover:opacity-100">
                    A scenary created with different colored-objects under low
                    light
                  </p>
                  <p className="m-3 justify-center">
                    <a href="https://github.com/Dipp3r">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 opacity-50 hover:opacity-100 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>

              <div className="basis-1/4 sm:basis-1/5 xl:basis-1/8">
                <div className="dark:bg-gray-800 shadow-lg rounded-2xl py-0.5 mxl:w-[345px]">
                  <div className="card-zoom lg:py-25 lg:px-5 lg:w-80 transition transform duration-300  object-cover">
                    <div className="card-zoom-image bg-grass hover:bg-grass_gif bg-center "></div>
                    <h1 className="card-zoom-text">Grassland</h1>
                  </div>
                  <p className="p-3 text-md text-gray-600 dark:text-slate-400 font-semibold transition-all duration-500 opacity-60 hover:opacity-100">
                    Animation sequence containing a realistic high-poly
                    character
                  </p>
                  <p className="m-3 justify-center">
                    <a href="https://github.com/Dipp3r">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 opacity-50 hover:opacity-100 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>

              <div className="basis-1/4 sm:basis-1/5 xl:basis-1/8">
                <div className="dark:bg-gray-800 shadow-lg rounded-2xl py-0.5 mxl:w-[345px]">
                  <div className="card-zoom lg:py-25 lg:px-5 lg:w-80 transition transform duration-300  object-cover">
                    <div className="card-zoom-image bg-web3 hover:bg-web3_gif bg-center "></div>
                    <h1 className="card-zoom-text">Suzanne</h1>
                  </div>
                  <p className="p-3 text-md text-gray-600 dark:text-slate-400 font-semibold transition-all duration-500 opacity-60 hover:opacity-100">
                    Induced Weathered gold effect in suzanne
                  </p>
                  <p className="m-3 justify-center">
                    <a href="https://github.com/Dipp3r">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 opacity-50 hover:opacity-100 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>

              <div className="basis-1/4 sm:basis-1/5 xl:basis-1/8">
                <div className="dark:bg-gray-800 shadow-lg rounded-2xl py-0.5 mxl:w-[345px]">
                  <div className="card-zoom lg:py-25 lg:px-5 lg:w-80 transition transform duration-300 object-cover">
                    <div className="card-zoom-image bg-web8  hover:bg-web8_gif bg-center"></div>
                    <h1 className="card-zoom-text">Asphalt</h1>
                  </div>
                  <p className="p-3 text-md text-gray-600 dark:text-slate-400 font-semibold transition-all duration-500 opacity-60 hover:opacity-100">
                    Applied asphalt texture to a spherical object using shaders
                  </p>
                  <p className="m-3 justify-center">
                    <a href="https://github.com/Dipp3r">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 opacity-50 hover:opacity-100 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer id="Contact" className="py-16">
          <div className="px-10 lg:text-5xl text-4xl flex gap-8 md:gap-28 justify-center items-center">
            <a
              href=""
              className="bg-gradient-to-tr via-twitter_blue from-twitter_medium_blue to-white text-white dark:text-dark_sky_blue rounded-full shadow-md hover:scale-110 transition transform duration-500"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              className="bg-gradient-to-r  via-yellow-300 from-red-600 to-green-400 text-white  dark:text-dark_sky_blue rounded-md shadow-md hover:scale-110 transition transform duration-500 bg "
              href="mailto:aruneesh4@gmail.com"
            >
              <AiFillMail />
            </a>
            <a
              href=""
              className="text-linkdin_blue dark:text-gray-200 shadow-md hover:scale-110 transition transform duration-500"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="bg-gradient-to-tr via-insta_purple from-insta_yellow to-insta_blue text-white dark:text-dark_sky_blue rounded-xl shadow-md hover:scale-110 transition transform duration-500"
              href="https://www.instagram.com/arun._.432/"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://github.com/Dipp3r"
              className="first-line:rounded-md dark:text-white text-black shadow-md hover:scale-110 transition transform duration-500"
            >
              <AiFillGithub />
            </a>
          </div>
        </footer>
        <p className="text-center py-5 brightness-150 ">
          {" "}
          © 2023 Dipp3r | Privacy Policy
        </p>
      </main>
    </div>
  );
}

export default Home;
