"use client";
import styled from "styled-components";
import { Navigation } from "../components/navigation/Navigation";
import { Hero } from "../components/hero/Hero";
import { Gallery } from "../components/gallery/Gallery";

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: rgba(245, 245, 245, 1);
`;

const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <MainContainer>
        <Navigation />
        <ContentContainer>
          <Hero />
          <Gallery />
        </ContentContainer>
      </MainContainer>
    </>
  );
}
