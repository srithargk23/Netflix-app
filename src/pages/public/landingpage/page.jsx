import React, { useState } from "react";
import "./landingPage.css";
import { IoIosArrowForward } from "react-icons/io";
import Banner from "../../../components/banner/Banner";
import Content from "../../../components/heading/Content";
import Heading from "../../../components/heading/Heading";
import Footer from "../../../components/footer/Footer";
// image imports
import ImgOne from "../../../assets/images/ban-tv.png";
import ImgTwo from "../../../assets/images/ban-mobile.jpg";
import ImgThree from "../../../assets/images/banner-3.png";
import ImgFour from "../../../assets/images/banner-4.png";

// video imports
import VideoOne from "../../../assets/videos/video-1.m4v";
import VideoTwo from "../../../assets/videos/video-2.m4v";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import Navbar from "../../../components/navbar/Navbar";
import Accordion from "../../../components/accordion/Accordion";

const LandingPage = () => {
    const [email, setEmail] = useState("");

    console.log(email);
    return (
        <>
            <div className="main-banner">
                <Navbar />
                <div className="main-title">
                    <Heading
                        size="bold"
                        color="white"
                        title="Unlimited movies, TV shows and more"
                    />
                    <Content color="white" content="Watch anywhere. Cancel anytime." />
                    <Content
                        color="white"
                        content="Ready to watch? Enter your email to create or restart your membership."
                    />

                    <div className="content-box">
                        <Input
                            bg="bg-transparent"
                            label="Email Address"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <Button
                            size="large"
                            rounded="rounded"
                            color="white"
                            bg="bg-2"
                            iconProp="rightarrow"
                            icon={<IoIosArrowForward />}
                            value="Get Started"
                        />
                    </div>
                </div>
            </div>
            <Banner video={VideoOne} vidSize="small-video" img={ImgOne}>
                <Heading
                    align="bottom"
                    className="heading"
                    color="white"
                    size="bold"
                    title="Enjoy on your TV"
                />
                <Content
                    className="content"
                    color="white"
                    content="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
                />
            </Banner>

            <Banner img={ImgTwo}>
                <Heading
                    align="bottom"
                    className="heading"
                    color="white"
                    size="bold"
                    title="Enjoy on your TV"
                />
                <Content
                    className="content"
                    color="white"
                    content="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
                />
            </Banner>

            <Banner video={VideoTwo} vidSize="large-video" img={ImgThree}>
                <Heading
                    align="bottom"
                    className="heading"
                    color="white"
                    size="bold"
                    title="Enjoy on your TV"
                />
                <Content
                    className="content"
                    color="white"
                    content="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
                />
            </Banner>

            <Banner img={ImgFour}>
                <Heading
                    align="bottom"
                    className="heading"
                    color="white"
                    size="bold"
                    title="Enjoy on your TV"
                />
                <Content
                    className="content"
                    color="white"
                    content="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
                />
            </Banner>
            <div className="accordian-section">
                <Heading align="faq-heading" title="Frequently Asked Questions" />
                <Accordion />

                <Content
                    color="white"
                    className="center"
                    content="Ready to watch? Enter your email to create or restart your membership."
                />
                <div className="content-box">
                    <Input
                        bg="bg-transparent"
                        label="Email Address"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Button
                        size="large"
                        rounded="rounded"
                        color="white"
                        bg="bg-2"
                        iconProp="rightarrow"
                        icon={<IoIosArrowForward />}
                        value="Get Started"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LandingPage;