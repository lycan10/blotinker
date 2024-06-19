import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

import banner from "../../assets/aboutimg.jpg";
import "./about.css";
import SubscribeBTN from '../../components/navbar/SubscribeBTN';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  useEffect(() => {
    if (window.innerWidth > 960) {
      gsap.to('.about-content-container', {
        scrollTrigger: {
          trigger: '.about-container',
          start: 'top top',
          end: 'bottom 95%',
          scrub: true,
          pin: '.about-image',
        },
      });
    }
  }, []);

  return (
    <div className='About'>
      <Navbar />
      <div className="about-container">
        <div className="about-image">
          <img src={banner} alt="" />
        </div>
        <div className="about-content-container">
          <div className="about-content">
            <h1>The Unburden</h1>
            <div className="about-content-writeup">
              <p>Feeling weighed down by the daily grind? Longing for adventure, delicious discoveries, and a renewed sense of inner peace? Welcome to The Unburden, your one-stop shop for emotional liberation through travel, food, and healthy living. </p>
              <p>Here's the truth: life can get messy. But what if we told you the key to a lighter soul wasn't locked away in a dusty self-help book, but waiting to be unearthed in the vibrant tapestry of experiences around you?</p>
              <h3>Unburdening Through Exploration:</h3>
              <p>We believe that travel isn't just about ticking destinations off a list. It's about pushing beyond your comfort zone, soaking up new cultures, and discovering the world (and yourself) in a whole new light. Imagine the stress melting away as you hike breathtaking landscapes, savor exotic flavors, and connect with inspiring people. It's a journey of self-discovery, one adventure at a time.</p>
              <h3>Nourishing Your Body and Soul:</h3>
              <p>Food is more than just fuel; it's a celebration of life, a way to connect with loved ones, and a source of vibrant energy. We'll guide you on a culinary adventure, from exploring healthy and delicious recipes to uncovering the stories behind global cuisines. It's about nurturing your body with wholesome ingredients while sparking joy with every bite.</p>
              <h3>Cultivating Inner Peace:</h3>
              <p>Life's a balancing act, and sometimes the scales can tip towards stress and anxiety. At The Unburden, we'll share practical tips and mindfulness practices to help you find your center. Whether it's through yoga poses, meditation techniques, or simply connecting with nature, we'll equip you with the tools to cultivate inner peace and well-being in your daily life.</p>
            </div>
          </div>
          <div className="about-subcribe-container">
            <h3>Join the Unburdening Community:</h3>
            <p>The Unburden is more than just a blog – it's a movement. Are you ready to embark on your own adventure towards inner peace? Explore our articles, join the conversation, and experience the transformative power of travel, food, and healthy living. Your journey to a lighter, more joyful you starts here.</p>
            <div className="sub-btn">
              <SubscribeBTN />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
