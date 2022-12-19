import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, MainSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <MainSection row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          This is Zeeshan Khalid. I am an Senior Front End Developer
          <br />
          <br />
          Coding is my passion, coding is fun, coding is frustrating, coding is
          rewarding and most importantly coding is my life.
        </SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/files/resume.pdf";
          }}
        >
          My Resume
        </Button>
      </LeftSection>
    </MainSection>
  </>
);

export default Hero;
