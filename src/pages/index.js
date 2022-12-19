import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section, Homebanner } from "../styles/GlobalComponents";


const Home = () => {

  return (
    // <Layout>
    //   <Homebanner grid>
    //     <Hero />
    //     <BgAnimation />
    //   </Homebanner>
    //   <Projects />
    //   <Technologies />
    //   <Timeline />
    //   <Acomplishments />
    // </Layout>

    <div>
      <style jsx>{`
        h1 {
          font-size: 50px;
          text-align: center;
          position: relative;
          top: 250px;
          padding: 15px;
        }
      `}</style>
      <h1>Website Coming soon</h1>
    </div >
  );
};

export default Home;
