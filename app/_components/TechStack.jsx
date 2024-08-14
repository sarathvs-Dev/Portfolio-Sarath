
'use client'
import React from 'react';
import styled, { keyframes, css } from 'styled-components';

function TechStack() {
  const row1 = [
    "https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6935wo8bLZh5FeafJEffqWKDOpNpx6UE5bg&s",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3uncngDj3h6h1TjNFSo9sgh7PENCLELPM_dGiMf-26_wipiIUpKxwyfmiApxklX5SMQ&usqp=CAU",
    "https://i.pinimg.com/originals/56/67/67/56676773cb4f0c00d7d47c6a84b9407c.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1bctuHVp7CoSYIgexL8-iR5EfQq-E354UnA&s",
    "https://cdn.iconscout.com/icon/free/png-256/free-firebase-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-3030134.png"
  ];

  const row2 = [
    "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    "https://i.pinimg.com/736x/c5/5f/50/c55f50cb7be3c17582cc0e28f961fe56.jpg",
    "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
    "https://static-00.iconduck.com/assets.00/angular-icon-2048x2048-24b236vf.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxe6IR3EKgALq0lEUvpW3GmPH8rpAv1cK0_w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_cQFT2t2hhHGNBAUVWyslwMvXYnK9qHZRw&s",
  ];

  return (
    <div>
      <AppContainer>
        <Wrapper>
          <Text>Toolkit.</Text>
          <Note>Crafting Solutions with Expertise in Modern Technologies.</Note>
          <Marquee>
            <MarqueeGroup>
              {row1.map((el, index) => (
                <ImageGroup key={index}>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <MarqueeGroup>
              {row1.map((el, index) => (
                <ImageGroup key={index}>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>
          <Marquee>
            <MarqueeGroup2>
              {row2.map((el, index) => (
                <ImageGroup key={index}>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
            <MarqueeGroup2>
              {row2.map((el, index) => (
                <ImageGroup key={index}>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
          </Marquee>
        </Wrapper>
      </AppContainer>
    </div>
  );
}

export default TechStack;

const AppContainer = styled.div`

  z-index:-20;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Note = styled.div`
  font-size: 1.1rem;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 10%,
    rgba(0, 0, 0, 1) 90%,
    rgba(0, 0, 0, 0)
  );
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(8rem, 5vw, 20rem);
  padding: calc(clamp(8rem, 5vw, 20rem) / 10);

  @media (max-width: 768px) {
    width: clamp(6rem, 5vw, 15rem);
    padding: calc(clamp(6rem, 5vw, 15rem) / 10);
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 10px 15px;

  @media (max-width: 768px) {
    padding: 5px 10px;
  }
`;
