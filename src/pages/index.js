import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Homebanner, BgAnimations } from "../styles/GlobalComponents";

import styled from "styled-components";

const Home = () => {

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
