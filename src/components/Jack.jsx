import React, { useEffect, useState } from "react";
import "./Preview.css";
import { ExportOutlined } from "@ant-design/icons";
import {  Slider } from "antd";



function Jack() {

  
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery2.jpg.webp",
    "https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery1.jpg",
    "https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery3.jpg.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); 
    return () => clearInterval(interval); 
  }, [slides.length]);

  const [disabled, setDisabled] = useState(false);
  const onChange = (checked) => 
    setDisabled(checked);


  return (
    <div className="">
      <nav
        className="dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b 
       border-gray-200 dark:border-gray-600"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8 text-2xl">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center font-semibold whitespace-nowrap dark:text-white text-4xl">
              Jack Co.
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div
              className="one items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul
                className="flex flex-col p-4 md:p-0 mt-5 font-medium border 
            border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse
             md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
              >
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white bg-red-700 h-full rounded md:bg-transparent md:text-blue-700 md:p-0 
                  md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
                   md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 
                   dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                  md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 
                  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                  md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 
                  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                  md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 
                  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                  md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 
                  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Fire Me An Email
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden 
              hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
              dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className="bg-green-400">
        <div className="flex">
          <div className="hero">
            <h1 className="">
              Visual Design <br />& Art Director
            </h1>
          </div>
          <div>
            <img
              className=""
              src="https://preview.colorlib.com/theme/jackco/assets/img/hero/hero_right.png.webp"
              alt="Hero"
            />
          </div>
        </div>
      </div>

      <div className="flex row">
        <img
          className="absolute"
          src="https://preview.colorlib.com/theme/jackco/assets/img/gallery/section-bg.jpg"
          alt="Background"
        />
        <div className="container h-96 j bg-white ml-24 mt-12">
          <h1 className="te mt-12">ABOUT MYSELF</h1>
          <h1 className="te1 mt-8">
            I’m a Creative director based on New
            <br />
            York, who loves clean, simple &<br /> unique design. I also enjoy
            crafting..
          </h1>
          <div className="flex justify-center mt-8">
            <a href="#" className="bg-green-500 text-white py-2 px-4 rounded">
              DOWNLOAD RESUME
            </a>
          </div>
          <hr className="mt-6 w-4/5 m-auto" />
          <div className="flex box mt-8">
            <div className="grid grid-rows-4 grid-flow-col gap-4">
              <div>
                <h1>USER RESEARCH</h1>
                <Slider defaultValue={50} disabled={disabled} className="w-80" />
              </div>
              <div>
                <h1>UI DESIGN</h1>
                <Slider defaultValue={80} disabled={disabled} className="w-80" />
              </div>
            </div>
            <div className="grid grid-rows-4 grid-flow-col gap-4">
              <div>
                <h1>WEB DESIGN</h1>
                <Slider defaultValue={50} disabled={disabled} className="w-80" />
              </div>
              <div>
                <h1>ILLUSTRATION</h1>
             <Slider defaultValue={80} disabled={disabled} className="w-80" />
              </div>
            </div>
          </div>

          <div className="">
            <p className="box1 -mt-32">
              Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec.
              Fusce eget urna ante. Donec
              <br />
              massa velit, varius a accumsan ac, tempor iaculis massa. Sed
              placerat justo sed libero varius
              <br />
              vulputate.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white mt-48">
        <div className="third flex flex-col items-center justify-center">
          <p className="mt-24 text-center" style={{ fontSize: "xxx-large" }} >
            My Expertise
          </p>
          <div className="flex box12">
            <div className="box-item" style={{ backgroundColor: "#01FF56" }}>
              <p className="text-slate-900 text-4xl py-4">
                User Experience Design
              </p>
              <p className="text-slate-200 text-4xl py-8">
                User Interface Design
              </p>
              <p className="text-slate-100 text-4xl">Web Design</p>
            </div>
            <div
              className="box-item text-slate-400 leading-relaxed text-lg font-semibold"
              style={{ color: "gray" }}
            >
              <p>
                Proin laoreet elementum ligula, ac tincidunt
                <br /> lorem accumsan nec. Fusce eget urna ante.
                <br /> Donec massa velit, varius a accumsan ac,
                <br />
                tempor iaculis massa. Sed
                <br /> placerat justo sed libero varius vulputate.
                <br /> Proin laoreet elementum ligula, ac tincidunt
                <br /> lorem accumsan nec. Fusce eget urna ante.
                <br /> Donec massa velit, varius a accumsan ac,
                <br /> tempor iaculis massa. Sed
                <br /> placerat justo sed libero varius vulputate.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
  className="flex  w-full mt-96"
  style={{ position: "relative", bottom: "-8.3em" }}
>
  <div className="flex flex-col bg-white w-4/5 m-auto p-4">
    <p className="text-5xl">Experience</p>
    <hr className="flex bg-blue-300 w-4/5 m-auto mt-8" />
    <div className="flex flex-col bg-blue-300 w-4/5 m-auto p-7 mt-4">
      <div className="flex w-full justify-between">
        <div className="one">
          <h1 className="text-4xl">User Experience Designer</h1>
          <p className="mt-8">March 2020 - Present</p>
        </div>
        <div className="two mt-8 flex items-center">
          at
          <a className="phot ml-1 flex items-center gap-1 font-bold" href="#">
            Colorlib
            <ExportOutlined className="font-larger" />
          </a>
        </div>
      </div>
      <p className="three mt-4">
        Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec.
        Fusce eget urna ante. Donec massa velit, varius a accumsan ac,
        tempor iaculis massa. Sed placerat justo sed libero varius
        vulputate.
      </p>
    </div>

    <hr className="flex bg-blue-300 w-4/5 m-auto mt-8" />
    <div className="flex flex-col bg-blue-300 w-4/5 m-auto p-7 mt-4">
      <div className="flex w-full justify-between">
        <div className="one">
          <h1 className="text-4xl">UI Designer</h1>
          <p className="mt-8">March 2020 - Present</p>
        </div>
        <div className="two mt-8 flex items-center">
          at
          <a className="phot ml-1 flex items-center gap-1 font-bold" href="#">
            Colorlib
            <ExportOutlined className="font-larger" />
          </a>
        </div>
      </div>
      <p className="three mt-4">
        Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec.
        Fusce eget urna ante. Donec massa velit, varius a accumsan ac,
        tempor iaculis massa. Sed placerat justo sed libero varius
        vulputate.
      </p>
    </div>

    <hr className="flex bg-blue-300 w-4/5 m-auto mt-8" />
    <div className="flex flex-col bg-blue-300 w-4/5 m-auto p-7 mt-4">
      <div className="flex w-full justify-between">
        <div className="one">
          <h1 className="text-4xl">Illustration Artist</h1>
          <p className="mt-8">March 2020 - Present</p>
        </div>
        <div className="two mt-8 flex items-center">
          at
          <a className="phot ml-1 flex items-center gap-1 font-bold" href="#">
            Colorlib
            <ExportOutlined className="font-larger" />
          </a>
        </div>
      </div>
      <p className="three mt-4">
        Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec.
        Fusce eget urna ante. Donec massa velit, varius a accumsan ac,
        tempor iaculis massa. Sed placerat justo sed libero varius
        vulputate.
      </p>
    </div>

    <hr className="flex bg-blue-300 w-4/5 m-auto mt-8" />
    <div className="flex flex-col bg-blue-300 w-4/5 m-auto p-7 mt-4">
      <div className="flex w-full justify-between">
        <div className="one">
          <h1 className="text-4xl">Graphic Designer</h1>
          <p className="mt-8">March 2020 - Present</p>
        </div>
        <div className="two mt-8 flex items-center">
          at
          <a className="phot ml-1 flex items-center gap-1 font-bold" href="#">
            Colorlib
            <ExportOutlined className="font-larger" />
          </a>
        </div>
      </div>
      <p className="three mt-4">
        Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec.
        Fusce eget urna ante. Donec massa velit, varius a accumsan ac,
        tempor iaculis massa. Sed placerat justo sed libero varius
        vulputate.
      </p>
    </div>
    <hr className="flex bg-blue-300 w-4/5 m-auto mt-8" />
  </div>
</div>
<div className="flex bg-green-700 w-full" style={{ position: "relative",bottom: "-7.9em ",backgroundColor: "#01FF56" }}>
  <div className="mt-24 flex flex-wrap w-full">
    <div style={{ maxWidth: "60%" }}>
      <img src="https://preview.colorlib.com/theme/jackco/assets/img/gallery/visit.jpg" alt="" />
    </div>
    <div className="w-1/2 p-4" style={{ maxWidth: "40%" }}>
      <p className="mt-20 text-3xl ml-8 leading-relaxed">"I help creative<br/> entrepreneurs build better<br/> businesses, maximize<br/> productivity, and cultivate<br/> an engaged community.</p>
    </div>
  </div>
</div>

<div className="flex  w-full mt-28">
  <div className="flex flex-col bg-white w-4/5 m-auto p-4">
    <p className="text-5xl">Education</p>
    <hr className="flex bg-blue-300 w-4/5 m-auto mt-8" />
    <div className="flex flex-col bg-blue-300 w-4/5 m-auto p-7 mt-4">
      <div className="flex w-full justify-between">
        <div className="one">
          <h1 className="text-4xl">User Experience Designer</h1>
          <p className="mt-8">March 2020 - Present</p>
        </div>
        <div className="two mt-8 flex items-center">
          at
          <a className="phot ml-1 flex items-center gap-1 font-bold" href="#">
            Dalian Universitey
            <ExportOutlined className="font-larger" />
          </a>
        </div>
      </div>
      <p className="three mt-4">
        Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec.
        Fusce eget urna ante. Donec massa velit, varius a accumsan ac,
        tempor iaculis massa. Sed placerat justo sed libero varius
        vulputate.
      </p>
    </div>

    <hr className="flex bg-blue-300 w-4/5 m-auto mt-8" />
    <div className="flex flex-col bg-blue-300 w-4/5 m-auto p-7 mt-4">
      <div className="flex w-full justify-between">
        <div className="one">
          <h1 className="text-4xl">UI Designer</h1>
          <p className="mt-8">March 2020 - Present</p>
        </div>
        <div className="two mt-8 flex items-center">
          at
          <a className="phot ml-1 flex items-center gap-1 font-bold" href="#">
            School of California
            <ExportOutlined className="font-larger" />
          </a>
        </div>
      </div>
      <p className="three mt-4">
        Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec.
        Fusce eget urna ante. Donec massa velit, varius a accumsan ac,
        tempor iaculis massa. Sed placerat justo sed libero varius
        vulputate.
      </p>
    </div>
    <hr className="flex bg-blue-300 w-4/5 m-auto mt-8" />
  </div>
</div>

      <div className="mt-12 bg-blue-700 relative h-96 flex items-center justify-center">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide}`}
        />
      </div>

      <div className="flex bg-green-700 w-full" style={{ position: "relative", bottom: "0.1em", backgroundColor: "#01FF56", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
  
  <div className="text-4xl flex mt-24" style={{ textAlign: "center" }}>
    <p>I’m a designer, based in San Francisco.<br/> Currently a freelancer. You can see my hobbies<br/> on @Jack-Co and some photos on me too.</p>
  </div>
  <hr className="flex bg-blue-300 w-4/5 m-auto mt-8"/>
  <div className="flex w-full mt-8">
  <div className="flex flex-row  w-4/5 m-auto p-4 mb-12">
  <div className="w-1/2" style={{ height: "auto", maxWidth: "70% "}}>
  <h2 className="text-2xl">DROP A LINE</h2>
  <div className="flex flex-col gap-5 mt-8 mb-4">

  <input type="text" class="styled-input" placeholder="Your Name"/>

  <input type="email" class="styled-input" placeholder="Email"/>

  <input type="text" class="styled-input" placeholder="Subject"/>

  <textarea type="text" class="styled-input " placeholder="Message"/>

 <div class="flex justify-end">
 <button className=" p-4 text-2xl mr-8"style={{border:"2px solid black ",backgroundColor:"black",color:"white"}}>Send Message</button>
 </div>

  </div>
</div>

    <div className="w-1/2" style={{ height: "auto" }}>
  <div className="ml-12">
  <h2 className="text-2xl ml-8">CONTACT ME</h2>
    <p className=" ml-8 mt-4">4657 Franklin Avenue, ARCH CAPE</p>
    <p className=" ml-8 mt-4">+361-883-3218</p>
    <p className=" ml-8 mt-4">Atul123@gmail.com</p>
    <div class="flex mt-6 ml-8">
 <button className=" p-4 text-2xl mr-8"style={{border:"2px solid black ",color:"white"}}>DOWNLOAD RESUME</button>
 </div>

  </div>  
    </div>
  </div>

</div>
<p>Copyright ©2025 All rights reserved | This template is made with  by Colorlib</p>
  
</div>


    </div>
  );
}

export default Jack;
