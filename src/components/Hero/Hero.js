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
          <br />I am a well-established Senior Front End Developer with 5+ years
          of experience in working in the field of web and application
          development. Having experience in both Solo Projects and the fastpaced
          Team Oriented web agency environment I knows how to operate in Both
          Environments and gets the job done.
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
