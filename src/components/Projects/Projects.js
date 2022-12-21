import React, { useEffect } from "react";
import Pagination from "./Pagination";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { useState } from "react";

const Projects = () => {
  const [posts, setPosts] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  // Get current posts
  const indexOfLastPost = currentpage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setPosts(projects);
  });

  return (
    <Section id="projects">
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {currentPosts.map((p, i) => {
          return (
            <BlogCard key={i}>
              <Img src={p.image} />

              <HeaderThree title={p.title}>{p.title}</HeaderThree>
              <Hr />

              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent>Tech Stack</TitleContent>
                <Hr />
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                {/* <ExternalLinks href={p.visit} target="_blank">
                  Live Preview
                </ExternalLinks> */}
                <ExternalLinks href={p.source} target="_blank">
                  Source Code
                </ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </Section>
  );
};

export default Projects;
