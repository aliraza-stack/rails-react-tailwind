import React from "react";
// import { get } from "../../services/api.js";
// import { API_URLS } from "../../services/urls.js";
// import Table from "../../components/table.js";
import Header from "../../components/header.js";
import rock from "../../assets/rock-n-roll.png";
import hero from "../../assets/aliraza.jpg";
import hand from "../../assets/hand.svg";
import headphone from "../../assets/headphone.svg";


function Dashboard() {

    // const [data, setData] = useState([]);

    // const fetchData = async () => {
    //     try {
    //         const response = await get(API_URLS.dashboard);
    //         setData(response);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (
        <>
            <Header />
            <header className="bg-center bg-cover bg-no-repeat bg-fixed relative flex items-center justify-center h-screen pb-12" style={{ backgroundImage: `url(${hero})` }}>
                <div className="absolute inset-0 bg-backdrop opacity-60 z-10"></div>
                <div className="relative z-20 w-full max-w-screen-xl mx-auto">
                    <div className="flex w-full">
                        <div className="w-1/2 gap-6 text-white text-5xl flex flex-col">
                            <h1 className="font-[600] text-6xl font-poppins flex gap-6">Hello! <img src={hand} alt="Hand" className="w-12" /></h1>
                            <h1 className="font-[600] text-6xl font-poppins ">I'm <span className="text-blue-600 font-extrabold">Ali Raza</span></h1>
                            <h1 className="font-[600] text-6xl font-poppins text-headings">Software Engineer.</h1>
                            <div className="flex gap-6">
                                <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z" clip-rule="evenodd"/>
                                </svg>

                                <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
                                    <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
                                </svg>

                                <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z" clip-rule="evenodd"/>
                                </svg>

                                <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17 20v-5h2v7H3v-7h2v5h12Z"/>
                                    <path d="m6.8 14.5 8.8 1.8.3-1.7-8.7-1.8-.4 1.7ZM8 10.2l8 3.8.8-1.7-8-3.7-.8 1.6Zm3.4-5.5-1.2 1.4 6.9 5.7 1.1-1.4-6.8-5.7ZM15.6 17h-9v2h9v-2ZM12.9 3.1 19 9.5l1.4-1.4L14 2l-1 1.1Z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="w-1/2 text-white text-6xl flex flex-col justify-center gap-8">
                            <div className="absolute end-[-50px] text-[12rem] font-black text-stroke opacity-50 text-transparent">01</div>
                            <div className="gap-6 flex items-center">
                                <span className="border-t-4 border-white opacity-50 w-8"></span>
                                <div className="text-xl text-white opacity-50 font-extrabold">INTRODUCTION</div>
                            </div>
                            <div className="text-4xl font-semibold">I'm Professional Freelancer</div>
                            <div class="text-4xl font-bold w-fit">
                                <span class="typing-effect">Full Stack Software Engineer.</span>
                            </div>
                            <div className="text-lg text-white opacity-50">
                                I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user.
                            </div>
                        </div>
                    </div>
                </div>

            </header>
            
            {/* About me section start */}
            <section className="bg-black">
                <div className="container py-12 mx-auto px-4">
                    <div className="flex justify-center">
                        <span className="absolute font-extrabold opacity-40 -z-[1px] tracking-widest text-stroke-heading text-5xl text-transparent">About Me</span>
                        <h1 className="text-5xl font-bold mb-2 z-10 text-headings">About Me</h1>
                    </div>
                    <div className="flex justify-between flex-wrap -mx-1 lg:-mx-4">
                        <div className="w-1/3 flex md:flex-col">
                            <div className="flex text-center content-center">
                                <img src={rock} alt="Your headshot" className="bg-white rounded-full shadow-md w-14 h-14 md:w-14 md:h-14" />
                                <span className="absolute font-extrabold mt-3 ml-16 opacity-40 -z-[1px] tracking-widest text-stroke-heading text-4xl text-transparent">I Love</span>
                                <span className="text-white font-bold my-auto ml-3 text-4xl">I Love</span>
                            </div>
                            <div className="flex flex-wrap mt-4">
                                <div className="flex mr-2 mb-2 px-5 gap-2 py-2 text-2xl font-medium bg-gray-100 text-gray-700 rounded-full ">
                                    <img src={headphone} className="w-8 h-8 shadow-md" alt="Headphone" />
                                    Badge1
                                </div>
                                <div className="flex mr-2 mb-2 px-5 gap-2 py-2 text-2xl font-medium bg-gray-100 text-gray-700 rounded-full ">
                                    <img src={headphone} className="w-8 h-8 shadow-md" alt="Headphone" />
                                    Badge2
                                </div>
                                <div className="flex mr-2 mb-2 px-5 gap-2 py-2 text-2xl font-medium bg-gray-100 text-gray-700 rounded-full ">
                                    <img src={headphone} className="w-8 h-8 shadow-md" alt="Headphone" />
                                    Badge3
                                </div>
                                <div className="flex mr-2 mb-2 px-5 gap-2 py-2 text-2xl font-medium bg-gray-100 text-gray-700 rounded-full ">
                                    <img src={headphone} className="w-8 h-8 shadow-md" alt="Headphone" />
                                    Badge4
                                </div>
                                <div className="flex mr-2 mb-2 px-5 gap-2 py-2 text-2xl font-medium bg-gray-100 text-gray-700 rounded-full ">
                                    <img src={headphone} className="w-8 h-8 shadow-md" alt="Headphone" />
                                    Badge5
                                </div>
                            </div>
                        </div>
                        <div className="w-1/3 flex md:flex-col">
                        </div>
                        <div className="mt-8 w-1/3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                                <div className="py-14 px-6 bg-slate-800 h-full rounded-[4rem] shadow-md relative">
                                    <div className="flex justify-center">
                                        <span className="absolute font-black opacity-40 ml-1 -z-[1px] tracking-widest text-stroke-heading text-5xl text-transparent">3.9+</span>
                                        <p className="text-center font-extrabold text-5xl opacity-80 text-headings">3.9+</p>
                                    </div>
                                    <span className="absolute font-bold opacity-40 mt-1 text-center -ml-4 -z-[1px] mb-2 tracking-widest text-stroke-heading text-4xl text-transparent">Years of Experience</span>
                                    <h3 className="text-center text-white mt-2 text-4xl font-bold mb-2 z-30">Years of Experience</h3>
                                </div>
                                <div className="py-14 px-6 bg-slate-800 h-full rounded-[4rem] shadow-md relative">
                                    <div className="flex justify-center">
                                        <span className="absolute font-black opacity-40 ml-1 -z-[1px] tracking-widest text-stroke-heading text-5xl text-transparent">20+</span>
                                        <p className="text-center font-extrabold text-5xl opacity-80 text-headings">20+</p>
                                    </div>
                                    <div className="absolute inset-0 bg-backdrop opacity-20 rounded-[2rem] top-[6rem] h-1/2"></div>
                                    <span className="absolute font-bold opacity-40 mt-1 text-center -ml-4 -z-[1px] mb-2 tracking-widest text-stroke-heading text-4xl text-transparent">Project Completed</span>
                                    <h3 className="text-center text-white mt-2 text-4xl font-bold mb-2">Projects Completed</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-800 rounded-3xl w-full md:w-full mt-10 p-4 md:p-8">
                        <p className="text-white opacity-70 ">I am a passionate Front End Developer with a Master's in Computer Application and over 3.9 years of experience in crafting captivating digital experiences. My expertise lies in leveraging cutting-edge technologies such as ReactJS, NextJS, Apollo GraphQL, Redux, React Query, and various UI frameworks including Material UI, NextUI, SCSS, Tailwind CSS, Chakra UI, and Bootstrap.</p>
                    </div>
                    <div className="flex justify-center flex-wrap -mx-1 lg:-mx-4 mt-10">
                        <button className="flex mr-2 mb-2 px-5 gap-2 py-2 text-2xl bg-orange-400 text-white rounded-full ">Contact Me</button>
                    </div>
                </div>
            </section>
            {/* About me section end */}

            {/* Skills section start */}
            <section className="bg-gray-900 ">

            </section>
            {/* Skills section end */}

        </>
    );
}

export default Dashboard;
