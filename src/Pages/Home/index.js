import React, { useState, useEffect, createRef } from "react";
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect'
import './../../App.css';
import imageHeader from './../../assets/images/main/joshua.png'
import { SlArrowDown } from 'react-icons/sl';

import { GoGrabber } from "react-icons/go";
import { tada } from 'react-animations';
import styled, { keyframes } from "styled-components";
import java from './../../assets/images/languages/java.png';
import javascript from './../../assets/images/languages/javascript.png';
import html from './../../assets/images/languages/html.png';
import css from './../../assets/images/languages/css.png';
import figma from './../../assets/images/languages/figma.png';
import vscode from './../../assets/images/languages/vscode.png';
import postman from './../../assets/images/languages/postman.png';
import atom from './../../assets/images/languages/atom.png';
import eclipse from './../../assets/images/languages/eclipse.png';
import android from './../../assets/images/languages/android.png';
import bubble from './../../assets/images/languages/bubble.png';
import git from './../../assets/images/languages/git.png';
import react from './../../assets/images/languages/react.png';
import node from './../../assets/images/languages/node.png';
import firebase from './../../assets/images/languages/firebase.png';
import express from './../../assets/images/languages/express.png';
import mongodb from './../../assets/images/languages/mongodb.png';
import mysql from './../../assets/images/languages/mysql.png';

import ilmo from './../../assets/images/project-headers/ilmo.png';
import snb from './../../assets/images/project-headers/snb.png';
import kalzada from './../../assets/images/project-headers/kalzada.png';
import sbs from './../../assets/images/project-headers/sbs.png';
import php from './../../assets/images/languages/php.png';
import Animatedbg from "../../components/Animatedbg";
import freelance from './../../assets/images/experiences/freelance.png';
import yux from './../../assets/images/experiences/yux.png';
import norima from './../../assets/images/experiences/norima.png';
import CustomSlider from "../../components/CustomSlider";


const Home = () => {

    const [vnavVisible, setvNavVisible] = useState(false);


    const verticalNavRef = createRef();

    const hideVNav = () => {

        setvNavVisible(!vnavVisible);

        if (vnavVisible === false) {
            verticalNavRef.current.style.display = 'none';
        } else {
            verticalNavRef.current.style.display = 'unset';

        }

    }


    // useEffect(()=>{




    // },[vnavVisible, verticalNavRef])

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    const bubbleImages = [
        { name: 'Mongo', img: mongodb }, { name: 'Express', img: express }, { name: 'Node', img: node }, { name: 'React', img: react },
    ]




    const freelanceStack = [
        {
            img: php,
            title: '',
            desc: 'php'
        },
        {
            img: mysql,
            title: '',
            desc: 'mysql'
        },
        {
            img: mongodb,
            title: '',
            desc: 'mongodb'
        },
        {
            img: express,
            title: '',
            desc: 'express'
        },
        {
            img: react,
            title: '',
            desc: 'react'
        },
        {
            img: node,
            title: '',
            desc: 'node'
        },

    ]




    function unEscape(htmlStr) {
        htmlStr = htmlStr.replace(/&lt;/g, "<");
        htmlStr = htmlStr.replace(/&gt;/g, ">");
        htmlStr = htmlStr.replace(/&quot;/g, "\"");
        htmlStr = htmlStr.replace(/&#39;/g, "'");
        htmlStr = htmlStr.replace(/&amp;/g, "&");
        return htmlStr;
    }



    const messages = [


        {
            message: unEscape("&lt; I am a mobile app developer /&gt;"),
        },
        {
            message: unEscape("&lt; I am a web  developer /&gt;"),
        },
        {
            message: unEscape("&lt; I am a java developer /&gt;"),
        }
    ];

    const images = [
        {
            img: ilmo,
            title: 'SCHOOL LABORATORY MANAGEMENT OFFICE WEBSITE',
            desc: "School laboratory management system is a project I made for a group of students. It is made for the school laboratory which allows students to reserve school rooms for the subject they select, borrow items for/from the room they reserve, borrow items. The system also allows the laboratory admins to approve pending requests from students, view the inventory, generate pdf and excel data of inventory.",
            link: "https://njvspfl.000webhostapp.com/login.php"
        },
        {
            img: kalzada,
            title: 'KALZADA : SPARE PARTS E-COMMERCE',
            desc: "Kalzada is a typical C-2-C E-commerce with common functionalities such as item browsing, item bookmarking, item buying, selling, and transaction records. KALZADA only displays items that are closest to the buyer. Client transactions happen through the transaction tab and Chat between a buyer and seller.",
            link: "https://njvspfl.000webhostapp.com/login.php"
        },
        {
            img: snb,
            title: 'SEEK N BOOK',
            desc: "Seek and book is a social media site based on facebook, but it is dedicated to music lovers. All the contents are about music.",
            link: "https://njvspfl.000webhostapp.com/login.php"
        },
        {
            img: sbs,
            title: 'SIMPLE ITEM LENDING WEBSITE',
            desc: "Simple Item Lending Website was made with bubble platform. It is very simple, A lender uploads an item he wishes to lend while a borrower can borrow as much as he can.",
            link: "https://njvspfl.000webhostapp.com/login.php"
        }

    ];

    const BouncyDiv = styled.div`animation:2s ${keyframes`${tada}`} infinite`;


    const { ref: skillsetView, inView: skillSetIsVisible } = useInView();
    const { ref: projectView, inView: projectVisible } = useInView();
    const { ref: resumeView, inView: resumeVisible } = useInView();
    const { ref: contactView, inView: contactVisible } = useInView();
    // const {ref : skillsetView , inView: skillSetIsVisible} = useInView();


    const scrollToSection = (section, color) => {
        document.body.style.backgroundColor = color;
        document.getElementById(section).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        });
    };




    return (



        <>
            <div style={{ position: 'absolute', height: 100, width: 100 }}>
                {

                    <h2>Width: {windowSize.innerWidth}</h2>


                }
            </div>


            <div className="head-cont">

                <div className="section" id="headlight" style={{ flexDirection: 'column', overflow: 'hidden' }}>
                    <Animatedbg images={bubbleImages} />
                    <div className="head-cont-image-cont">
                        <img src={imageHeader} className="header-img" alt="" />
                    </div>

                    <div className="header-highlight-info">
                        <h1>Hi there, I am Nino Joshua</h1>
                        <div className="ttw">
                            <Typewriter
                                onInit={(typewriter) => {
                                    messages.map((data) => {
                                        typewriter
                                            .typeString(data.message)
                                            .pauseFor(1000)
                                            .typeString("<br>")
                                            .start();
                                        return messages;
                                    })

                                }}
                            />
                        </div>
                    </div>

                    {!skillSetIsVisible &&

                        <div className="down-div" onClick={() => scrollToSection('skillset')}>
                            <BouncyDiv style={{ alignSelf: 'end' }}>
                                <SlArrowDown size={windowSize.innerWidth >= 1280 ? 40 : 20} />
                            </BouncyDiv>
                        </div>
                    }

                </div>
            </div>
            <div style={{ height: 'auto', width: 'auto' }}>

                {
                    windowSize.innerWidth <= 1280 ?
                        <div className="vertical-nav-base" ref={verticalNavRef}>
                            <div className="vertical-mini-nav" >
                                <ul className="vertical-mini-nav-list-cont">
                                    <li onClick={() => scrollToSection('skillset')}><p style={{ borderBottom: skillSetIsVisible ? '1px solid black' : 'white' }}>Skills</p></li>
                                    <li onClick={() => scrollToSection('recent-work')}><p style={{ borderBottom: projectVisible ? '1px solid black' : 'white' }}>Projects</p></li>
                                    <li onClick={() => scrollToSection('resume')}><p style={{ borderBottom: resumeVisible ? '1px solid black' : 'white' }}>Experience</p></li>
                                    <li onClick={() => scrollToSection('contact')}><p style={{ borderBottom: contactVisible ? '1px solid black' : 'white' }} >Contact</p></li>
                                </ul>
                            </div>
                            <div className="vertical-nav-hide-container">
                                <GoGrabber size='100%' color='#ffa31a' />
                            </div>

                        </div>

                        :

                        <div className="mini-nav">
                            <ul className="mini-nav-list-cont">
                                <li onClick={() => scrollToSection('skillset')}><p style={{ borderBottom: skillSetIsVisible ? '1px solid #ffa31a' : 'white' }}>Skills</p></li>
                                <li onClick={() => scrollToSection('recent-work')}><p style={{ borderBottom: projectVisible ? '1px solid #ffa31a' : 'white' }}>Projects</p></li>
                                <li onClick={() => scrollToSection('resume')}><p style={{ borderBottom: resumeVisible ? '1px solid #ffa31a' : 'white' }}>Experience</p></li>
                                <li onClick={() => scrollToSection('contact')}><p style={{ borderBottom: contactVisible ? '1px solid #ffa31a' : 'white' }} >Contact</p></li>
                            </ul>

                        </div>
                }






                <div ref={skillsetView} id="skillset">
                    <div id="skillset-content-container">


                        <div id="skillset-content">

                            <div className="skillset-content-header">
                                <h1>LANGUAGE</h1>
                            </div>

                            <div className="skillset-content-body">

                                <div className="skillset-body-content-cont" ><img src={java} alt="java" />{windowSize.innerWidth <= 640 && <p style={{ fontSize: '3vw' }}>Java</p>}</div>
                                <div className="skillset-body-content-cont" ><img src={javascript} alt="javascript" />{windowSize.innerWidth <= 640 && <p style={{ fontSize: '3vw' }}>Javascript</p>}</div>
                            </div>

                            

                            <div className="skillset-content-body-list">
                                <div className="skill"><div className="skillBar" style={{ backgroundColor: 'green', width: '60%' }}></div><p>Java</p></div>
                                <div className="skill"><div className="skillBar" style={{ backgroundColor: 'green', width: '100%' }}></div><p>Javascript</p></div>
                            </div>


                        </div>


                        <div id="skillset-content">

                            <div className="skillset-content-header">
                                <h1>TOOLS</h1>
                            </div>

                            <div className="skillset-content-body">
                                <div className="skillset-body-content-cont"><img src={figma} alt="figma" />{windowSize.innerWidth <= 640 && <p style={{ fontSize: '3vw' }}>Figma</p>}</div>
                                <div className="skillset-body-content-cont"><img src={vscode} alt="vscode" />{windowSize.innerWidth <= 640 && <p style={{ fontSize: '3vw' }}>vscode</p>}</div>
                                <div className="skillset-body-content-cont"><img src={postman} alt="postman" />{windowSize.innerWidth <= 640 && <p style={{ fontSize: '3vw' }}>postman</p>}</div>
                                <div className="skillset-body-content-cont"><img src={atom} alt="atom" />{windowSize.innerWidth <= 640 && <p style={{ fontSize: '3vw' }}>atom</p>}</div>
                                <div className="skillset-body-content-cont"><img src={eclipse} alt="eclipse" />{windowSize.innerWidth <= 640 && <p style={{ fontSize: '3vw' }}>eclipse</p>}</div>
                                <div className="skillset-body-content-cont"><img src={android} alt="android" />{windowSize.innerWidth <= 640 && <p style={{ fontSize: '3vw' }}>android</p>}</div>
                                <div className="skillset-body-content-cont"><img src={bubble} alt="bubble" />{windowSize.innerWidth <= 640 && <p style={{ fontSize: '3vw' }}>bubble</p>}</div>
                                <div className="skillset-body-content-cont"><img src={git} alt="git" />{windowSize.innerWidth <= 640 && <p style={{ fontSize: '3vw' }}>git</p>}</div>
                            </div>


                           
                                <div className="skillset-content-body-list">
                                    <div className="skill"><div className="skillBar" style={{ backgroundColor: 'red', width: '10%' }}></div><p>Figma</p></div>
                                    <div className="skill"><div className="skillBar" style={{ backgroundColor: 'green', width: '80%' }}></div><p>vscode</p></div>
                                    <div className="skill"><div className="skillBar" style={{ backgroundColor: 'orange', width: '40%' }}></div><p>postman</p></div>
                                    <div className="skill"><div className="skillBar" style={{ backgroundColor: 'green', width: '80%' }}></div><p>atom</p></div>
                                    <div className="skill"><div className="skillBar" style={{ backgroundColor: 'green', width: '80%' }}></div><p>eclipse</p></div>
                                    <div className="skill"><div className="skillBar" style={{ backgroundColor: 'orange', width: '30%' }}></div><p>android</p></div>
                                    <div className="skill"><div className="skillBar" style={{ backgroundColor: 'red', width: '10%' }}></div><p>bubble</p></div>
                                    <div className="skill"><div className="skillBar" style={{ backgroundColor: 'red', width: '10%' }}></div><p>git</p></div>


                                </div>


                       

                        </div>


                        <div id="skillset-content">

                            <div className="skillset-content-header">
                                <h1>FRONT END</h1>
                            </div>

                            <div className="skillset-content-body">
                                <div className="skillset-body-content-cont"><img src={react} alt="react" />{windowSize.innerWidth <= 640 && <p style={{ fontSize: '3vw' }}>React</p>}</div>
                                <div className="skillset-body-content-cont"><img src={html} alt="html" />{windowSize.innerWidth <= 640 && <p style={{ fontSize: '3vw' }}>Html</p>}</div>
                                <div className="skillset-body-content-cont"><img src={css} alt="css" />{windowSize.innerWidth <= 640 && <p style={{ fontSize: '3vw' }}>Css</p>}</div>
                            </div>


                 

                                <div className="skillset-content-body-list">
                                    <div className="skill"><div className="skillBar" style={{ backgroundColor: 'yellow', width: '50%' }}></div><p>React</p></div>
                                    <div className="skill"><div className="skillBar" style={{ backgroundColor: 'green', width: '60%' }}></div><p>Html</p></div>
                                    <div className="skill"><div className="skillBar" style={{ backgroundColor: 'yellow', width: '50%' }}></div><p>Css</p></div>

                                </div>

                          


                        </div>


                        <div id="skillset-content">

                            <div className="skillset-content-header">
                                <h1>BACKEND</h1>
                            </div>

                            <div className="skillset-content-body">
                                <div className="skillset-body-content-cont"><img src={php} alt="php" />{windowSize.innerWidth <= 640 && <p style={{ fontSize: '3vw' }}>PHP</p>}</div>
                                <div className="skillset-body-content-cont"><img src={node} alt="node" />{windowSize.innerWidth <= 640 && <p style={{ fontSize: '3vw' }}>Node</p>}</div>
                                <div className="skillset-body-content-cont"><img src={firebase} alt="firebase" />{windowSize.innerWidth <= 640 && <p style={{ fontSize: '3vw' }}>Firebase</p>}</div>
                                <div className="skillset-body-content-cont"><img src={express} alt="express" />{windowSize.innerWidth <= 640 && <p style={{ fontSize: '3vw' }}>Express</p>}</div>
                            </div>


                            <div className="skillset-content-body-list">
                                <div className="skill"><div className="skillBar" style={{ backgroundColor: 'yellow', width: '50%' }}></div><p>Php</p></div>
                                <div className="skill"><div className="skillBar" style={{ backgroundColor: 'red', width: '10%' }}></div><p>Node</p></div>
                                <div className="skill"><div className="skillBar" style={{ backgroundColor: 'green', width: '60%' }}></div><p>Firebase</p></div>
                                <div className="skill"><div className="skillBar" style={{ backgroundColor: 'orange', width: '30%' }}></div><p>Express</p></div>
                            </div>

                        </div>


                        <div id="skillset-content">


                            <div className="skillset-content-header">
                                <h1>DATABASE</h1>
                            </div>

                            <div className="skillset-content-body">
                                <div className="skillset-body-content-cont"><img src={mongodb} alt="mongo" />{windowSize.innerWidth <= 640 && <p style={{ fontSize: '3vw' }}>MongoDB</p>}</div>
                                <div className="skillset-body-content-cont"><img src={firebase} alt="firebase" />{windowSize.innerWidth <= 640 && <p style={{ fontSize: '3vw' }}>Firebase</p>}</div>
                                <div className="skillset-body-content-cont"><img src={mysql} alt="express" />{windowSize.innerWidth <= 640 && <p style={{ fontSize: '3vw' }}>MySQL</p>}</div>
                            </div>


                            <div className="skillset-content-body-list">
                                <div className="skill"><div className="skillBar" style={{ backgroundColor: 'yellow', width: '10%' }}></div><p>MongoDB</p></div>
                                <div className="skill"><div className="skillBar" style={{ backgroundColor: '#9ACD32', width: '60%' }}></div><p>Firebase</p></div>
                                <div className="skill"><div className="skillBar" style={{ backgroundColor: 'orange', width: '40%' }}></div><p>MySQL</p></div>

                            </div>

                        </div>





                    </div>

                    {!projectVisible &&
                        <div className="down-div" onClick={() => scrollToSection('recent-work')}>
                            <BouncyDiv style={{ alignSelf: 'end' }}>
                                <SlArrowDown size={windowSize.innerWidth >= 1280 ? 40 : 20} />
                            </BouncyDiv>
                        </div>
                    }
                </div>


                <div ref={projectView} id="recent-work" className="section" >




                    {windowSize.innerWidth >= 960 &&
                        <div className="experience-content-cont">
                            <div className="experience-content">
                                <CustomSlider size={'big'} data={images} detailed={true} countToShow={1} />
                            </div>

                        </div>


                    }


                    {!resumeVisible &&
                        <div className="down-div" onClick={() => scrollToSection('resume')}>
                            <BouncyDiv style={{ alignSelf: 'end' }}>
                                <SlArrowDown size={windowSize.innerWidth >= 1280 ? 40 : 20} />
                            </BouncyDiv>
                        </div>
                    }

                </div>

                <div ref={resumeView} id="resume" style={{ flexDirection: 'column' }}>


                    <div className="resume-content-container">

                        <div className="resume-content">

                            <div className="resume-content-image-container">
                                <img src={freelance} alt="" />
                            </div>

                            <div className="resume-content-body">
                                {/* <div className="gradient-border" id="box" style={{ position: 'absolute', top: 0 }}></div> */}

                                <div className="header">
                                    <h2>Dec 2021 - Present</h2>
                                </div>
                                <div className="content">

                                    <p>Develop website and mobile applications mostly for students who really need to finish their research-based thesis/capstone</p>

                                </div>

                                <div className="foot">

                                    <CustomSlider data={freelanceStack} size="small" detailed={false} countToShow={4} />

                                </div>

                            </div>
                        </div>


                        <div className="resume-content">

                            <div className="resume-content-image-container">
                                <img src={yux} alt="" />
                            </div>

                            <div className="resume-content-body">


                                <div className="header">
                                    <h2>Dec 2021 - Feb 2022</h2>
                                </div>
                                <div className="content">

                                    <p>Web Frontend and Backend</p>
                                    <p>Payment Portal / Gateway API Integration</p>
                                    <p>API Management</p>

                                </div>

                                <div className="foot">

                                    <CustomSlider data={freelanceStack} size="small" detailed={false} countToShow={4} />

                                </div>


                            </div>
                        </div>



                        <div className="resume-content">

                            <div className="resume-content-image-container">
                                <img src={norima} alt="" />
                            </div>

                            <div className="resume-content-body">
                                {/* <div className="gradient-border" id="box" style={{ position: 'absolute', top: 0 }}></div> */}

                                <div className="header">
                                    <h2>Apr 2022 - Present</h2>
                                </div>
                                <div className="content">

                                    <p>Web Frontend and Backend</p>
                                    <p>Payment Portal / Gateway API Integration</p>
                                    <p>API Management</p>

                                </div>

                                <div className="foot">

                                    <CustomSlider data={freelanceStack} size="small" detailed={false} countToShow={4} />

                                </div>

                            </div>


                        </div>
                    </div>


                    {!contactVisible &&
                        <div className="down-div" onClick={() => scrollToSection('contact')}>
                            <BouncyDiv style={{ alignSelf: 'end' }}>
                                <SlArrowDown size={windowSize.innerWidth >= 1280 ? 40 : 20} />
                            </BouncyDiv>
                        </div>
                    }

                </div>



                <div id="contact" className="section" style={{ flexDirection: 'column' }}>

                    <div className="section-header" >
                        <h1 ref={contactView} style={{ fontWeight: 'bold', fontSize: 50 }}>Contact</h1>
                    </div>

                    <div style={{height:'50%',width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <h1>LinkedIn : <a href ="https://www.linkedin.com/in/jshslmb/ "> Nino S.</a> </h1>
                    <h1>Email : salimbaojoshua@gmail.com </h1>
                    </div>
               

                </div>


            </div>

        </ >



    )
}




export default Home;