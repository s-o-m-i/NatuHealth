"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const Home = () => {
  const [show, setShow] = React.useState(false);
  const [showOne, setShowOne] = React.useState(false);
  const [showTwo, setShowTwo] = React.useState(false);
  const [showThree, setShowThree] = React.useState(false);
  const [showFour, setShowFour] = React.useState(false);
  const [showFive, setShowFive] = React.useState(false);
  const handleFaqClick = () => {
    setShow(!show);
  };
  return (
    <div className="home-container z-10 relative my-bg-color w-full min-h-screen px-2 sm:px-10 text-white">
      <Navbar />
      <div className="roshni hidden sm:block -z-10 w-96 h-96 roshni-color absolute  left-0 top-0"></div>
      <div className="content  z-10  text-center flex items-center flex-col justify-center">
        <h1 className="mt-10 leading-snug sm:l  eading-snug text-4xl sm:text-6xl font-bold">
          Find the best alternative <br /> path to care
        </h1>
        <p className=" sm:text-xl mt-10  ">
          Begin your customized healthcare journey by telling us about yourself.
          We'll <br /> recommend personalized options tailored to your unique
          needs and goals. Choose <br /> between specialized practitioner
          consultations or explore our resource library for <br /> your path to
          a healthier you.
        </p>

        <Link href={"/getstarted"}>
          <button className="text-xl flex items-center justify-between gap-5 btn-bg-gradient px-8 py-2 rounded-full mt-5">
            Get Started
            <img src="/rightarrow.png" alt="" />
          </button>
        </Link>
      </div>

      <div className="brands grid sm:grid-cols-5 gap-y-5 sm:gap-y-0 items-center mt-16">
        <div className="box flex items-center justify-center">
          <img src="/brone.png" alt="" />
        </div>
        <div className="box flex items-center justify-center">
          <img src="/brtwo.svg" alt="" />
        </div>
        <div className="box flex items-center justify-center">
          <img src="/brthree.png" alt="" />
        </div>
        <div className="box flex items-center justify-center">
          <img src="/brfour.png" alt="" />
        </div>
        <div className="box flex items-center justify-center">
          <img src="/brfive.svg" alt="" />
        </div>
      </div>

      <div className="working">
        <h1 className="text-4xl sm:text-5xl mt-10 font-bold">How it Works</h1>
        <div className="mt-5 cards grid gap-4 sm:grid-cols-3">
        <Link href={"/result"}>
          <div className="card rounded-lg pt-7 px-4 py-4  card-bg-color">
            <div className="number text-2xl w-10 h-10 flex items-center justify-center rounded-full btn-bg-gradient">
              1
            </div>
            <h1 className="text-2xl font-bold mt-2">Get Personalized</h1>
            <p className="text-md mt-2">
              Start by telling us a bit about yourself. We'll ask a few
              questions to understand your needs better. This helps us recommend
              options that fit you perfectly.
            </p>
          </div>
          </Link>

          <Link href={"/result"}>
          <div className="card rounded-lg pt-7 px-4 py-4  card-bg-color">
            <div className="number text-2xl w-10 h-10 flex items-center justify-center rounded-full btn-bg-gradient">
              2
            </div>
            <h1 className="text-2xl font-bold mt-2">Choose Your Path</h1>
            <p className="text-md mt-2">
              Whether you prefer seeing a specialist or exploring our helpful
              resources, you're in control. We'll guide you towards what suits
              you best.
            </p>
          </div>
          </Link>
          <Link href={"/result"}>
          <div className="card rounded-lg pt-7 px-4 py-4 card-bg-color ">
            <div className="number text-2xl w-10 h-10 flex items-center justify-center rounded-full btn-bg-gradient">
              3
            </div>
            <h1 className="text-2xl font-bold mt-2">Your Custom Plan</h1>
            <p className="text-md mt-2">
              We will craft a personalized roadmap based on your choices. It's
              all about making your health journey easy and effective.
            </p>
          </div>
          </Link>
        </div>
      </div>

      <div className="mt-10 info-section grid lg:grid-cols-2 ">
        <div className="info">
          <h1 className="text-2xl sm:text-4xl font-bold leading-snug ">
            Access a diverse network of practitioners within the natural
            medicine space, and get care <br /> that’s tailored to your specific
            needs
          </h1>
          <p className="text-md sm:text-lg font-normal mt-10 ">
            Natu’s responsive approach to care supports people across a wide
            <br /> range of needs, interests and goals. Our personalized options
            are backed up bya practitioner network with varying clinical
            expertise and modality to help make access to care easier than ever.
          </p>
        </div>
        <div className="info-img z-10 relative mt-5 lg:mt-0 flex items-center lg:justify-end">
          <div className="roshni hidden lg:block -z-10 w-96 h-96 roshni-color absolute  right-0 top-96"></div>
          <img src="/info-img.png" alt="" />
        </div>
      </div>

      <div className="faq-section mt-10 mb-10 z-30">
        <div className=" flex justify-center z-20">
          <div className="text-center">
            <h1 className="text-2xl sm:text-5xl font-bold z-20">
              Frequently Asked Questions
            </h1>
            <p className="text-sm sm:text-base mt-5 z-20">
              Frequently Asked Questions: Your Queries, Our Answers
            </p>
          </div>
        </div>

        <div className="  flex flex-col items-center justify-center z-10">
          <div
            onClick={handleFaqClick}
            className={`mt-5 transition faq-one ${
              show ? "" : "sm:h-20 h-11"
            } overflow-hidden card-bg-color sm:w-3/4 p-1 sm:px-10 sm:py-8`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h1 className="text-md sm:text-xl font-bold">1.</h1>
                <h1 className="text-md sm:text-xl font-bold">
                  How does this service work?
                </h1>
              </div>
              <img src={show ? "/arrorup.svg" : "/arrowdown.png"} alt="" />
            </div>

            <p className="sm:text-lg mt-5 font-normal">
              You start by completing our comprehensive quiz, which helps us
              understand your health goals and challenges. Based on your
              answers, we provide personalized recommendations for practitioners
              that align with your health journey.
            </p>
          </div>

          <div
            onClick={() => setShowOne(!showOne)}
            className={`mt-5 transition faq-one ${
              showOne ? "" : "sm:h-20 h-14"
            } overflow-hidden card-bg-color sm:w-3/4 p-1 sm:px-10 sm:py-8`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h1 className="text-md sm:text-xl font-bold">2.</h1>
                <h1 className="text-md sm:text-xl font-bold">
                  Is my personal information kept confidential?
                </h1>
              </div>
              <img src={showOne ? "/arrorup.svg" : "/arrowdown.png"} alt="" />
            </div>

            <p className="sm:text-lg mt-5 font-normal">
              Absolutely. We prioritize your privacy and ensure that all
              personal information is encrypted and stored securely. We do not
              share your information with any third parties without your
              explicit consent.
            </p>
          </div>

          <div
            onClick={() => setShowTwo(!showTwo)}
            className={`mt-5 transition faq-one ${
              showTwo ? "" : "sm:h-20 h-14"
            } overflow-hidden card-bg-color sm:w-3/4 p-1 sm:px-10 sm:py-8`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h1 className="text-md sm:text-xl font-bold">3.</h1>
                <h1 className="text-md sm:text-xl font-bold">
                  What if I'm not satisfied with the service?
                </h1>
              </div>
              <img src={showTwo ? "/arrorup.svg" : "/arrowdown.png"} alt="" />
            </div>

            <p className="sm:text-lg mt-5 font-normal">
              We strive for 100% satisfaction, but if you're not happy with the
              service, you can cancel your subscription at any time. We also
              welcome feedback to help us improve.
            </p>
          </div>

          <div
            onClick={() => setShowThree(!showThree)}
            className={`mt-5 transition faq-one ${
              showThree ? "" : "sm:h-20 h-14"
            } overflow-hidden card-bg-color sm:w-3/4 p-1 sm:px-10 sm:py-8`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h1 className="text-md sm:text-xl font-bold">4.</h1>
                <h1 className="text-md sm:text-xl font-bold">
                  Do you offer support or consultations?
                </h1>
              </div>
              <img src={showThree ? "/arrorup.svg" : "/arrowdown.png"} alt="" />
            </div>

            <p className="sm:text-lg mt-5 font-normal">
              We offer ongoing support through our online portal. You can also
              schedule consultations with our health experts to discuss your
              progress and any concerns.
            </p>
          </div>

          <div
            onClick={() => setShowFour(!showFour)}
            className={`mt-5 transition faq-one ${
              showFour ? "" : "sm:h-20 h-14"
            } overflow-hidden card-bg-color sm:w-3/4 p-1 sm:px-10 sm:py-8`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h1 className="text-md sm:text-xl font-bold">5.</h1>
                <h1 className="text-md sm:text-xl font-bold">
                  How are your health experts qualified?
                </h1>
              </div>
              <img src={showFour ? "/arrorup.svg" : "/arrowdown.png"} alt="" />
            </div>

            <p className="sm:text-lg mt-5 font-normal">
              Our team consists of certified professionals with extensive
              experience in their respective fields, including acupuncturists,
              chiropractors, and naturopathic doctors.
            </p>
          </div>

          <div
            onClick={() => setShowFive(!showFive)}
            className={`mt-5 transition faq-one ${
              showFive ? "" : "sm:h-20 h-14"
            } overflow-hidden card-bg-color sm:w-3/4 p-1 sm:px-10 sm:py-8`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h1 className="text-md sm:text-xl font-bold">6.</h1>
                <h1 className="text-md sm:text-xl font-bold">
                  What makes your approach different?
                </h1>
              </div>
              <img src={showFive ? "/arrorup.svg" : "/arrowdown.png"} alt="" />
            </div>

            <p className="sm:text-lg mt-5 font-normal">
              We take a holistic view of health and wellness, considering all
              aspects of your lifestyle and well-being. Our personalized
              approach ensures that you receive care that's tailored
              specifically to you.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
