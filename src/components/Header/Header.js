import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <img src="/logo.jpeg" height={40} width={40} />{" "}
          <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }}>
            Zeeshan
          </span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <Link href="#">
        <NavLink>Home</NavLink>
      </Link>

      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>

      <Link href="#skills">
        <NavLink>Skills</NavLink>
      </Link>

      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/zeeshankhalid2422">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/zeeshan-khalid-0a90ba113/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="https://www.instagram.com/lordarcadius">
        <AiFillInstagram size="3rem" />
      </SocialIcons> */}
      <SocialIcons href="https://wa.me/03015332422">
        <AiOutlineWhatsApp size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
