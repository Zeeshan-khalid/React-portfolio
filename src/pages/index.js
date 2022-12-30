import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Homebanner, BgAnimations } from "../styles/GlobalComponents";
import { useState, useEffect } from "react";


const Home = () => {

  useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await fetch(`https://ipinfo.io/?token=40bdeb367b7535`);
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    callAPI();
  }, []);

  return (
    <Layout>
      <Homebanner grid>
        <Hero />
        <BgAnimations>
          <BgAnimation />
        </BgAnimations>

      </Homebanner>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
