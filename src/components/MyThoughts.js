import React from 'react';
import styled from 'styled-components';
import blogPic from './assets/blog-pic.png';
import { OuterWrapper, InnerWrapper, MainHeading } from './GlobalStyles';

export const MyThoughts = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <MyThoughtsContainer>
          <MainHeading>MY THOUGHTS ABOUT CODE</MainHeading>
          <AllMyThoughtsCards>
            <div className="MyThoughtsCard">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
                alt="bild">
                <img src={blogPic} lang="eng" alt="Github project" />
                <DateTitle>DEC 2022</DateTitle>
                <BlogTitle>Blog title</BlogTitle>
                <BlogText>Blog Text</BlogText>
                <EndingArrows>{'>>'}</EndingArrows>
              </a>
            </div>
            <div className="MyThoughtsCard">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
                alt="bild">
                <img src={blogPic} lang="eng" alt="Github project" />
                <DateTitle>DEC 2022</DateTitle>
                <BlogTitle>Blog title</BlogTitle>
                <BlogText>Blog Text</BlogText>
                <EndingArrows>{'>>'}</EndingArrows>
              </a>
            </div>
          </AllMyThoughtsCards>
        </MyThoughtsContainer>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export const MyThoughtsContainer = styled.section`
  width: 100%;
  height: 30%;
  position: relative;
  margin: 10%;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }

  @media (min-width: 668px) {
    display: flex;
  }
`;

export const MyThoughtsHeader = styled.h2`
  font-size: 48px;
  line-height: 1;
  background-color: #ff0000;
  color: whitesmoke;
  display: inline-block;
  padding: 10px 15px;
`;

export const AllMyThoughtsCards = styled.div`
  position: relative;
  display: flex;
  flex-direction: center;
  justify-content: space-around;

  .MyThoughtsCard {
    width: 45%;
  }
`;

export const DateTitle = styled.p`
  color: #ff0000;
`;

export const BlogTitle = styled.p`
  font-weight: bold;
`;

export const BlogText = styled.p`
  font-size: 10px;
`;

export const EndingArrows = styled.p`
  font-size: 9px;
  color: #f44336; `;