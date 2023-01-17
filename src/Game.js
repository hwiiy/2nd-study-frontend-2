import styled from "styled-components";
import backgroundImg from "./assets/images/stage1_bg.jpeg";
import star from "./assets/images/star.png";
import { useEffect, useRef, useState } from "react";

const Background = styled.div`
  display: flex-end;
  background-image: url(${backgroundImg});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  section {
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
  }
  .Top {
    height: 50px;
    color: white;
  }
  .star {
    background-image: url(${star});
    background-size: 100% 100%;
    width: 20px;
    height: 20px;
    border: none;
  }
  .Bottom {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 20px;
    width: inherit;
    color: white;
  }
`;

function Game() {
  const [count, setCount] = useState(0);
  const [top, setTop] = useState(20);
  const [left, setLeft] = useState(10);
  const [right, setRight] = useState(10);
  const [bottom, setBottom] = useState(30);
  const [yellow, setYellow] = useState("######");

  const onIncrease = () => {
    setCount((prev) => prev + 5);
    setYellow("#ffd400");
  };

  useEffect(() => {
    setTop(Math.floor(Math.random() * 300 + 1));
    setLeft(Math.floor(Math.random() * 500 + 1));
    setRight(Math.floor(Math.random() * 500 + 1));
    setBottom(Math.floor(Math.random() * 300 + 1));
  }, [count]);

  return (
    <>
      <Background>
        {/* top */}
        <section className="Top">
          <div>
            Stage <span>1</span>
          </div>
          <div>Timer</div>
          <div>
            Score <span style={{ color: yellow }}>{count}</span>
          </div>
        </section>
        {/* middle */}
        <section className="Playing">
          <div
            className="star"
            onClick={onIncrease}
            style={{
              position: "absolute",
              top: top,
              left: left,
              right: right,
              bottom: bottom,
            }}
          ></div>
        </section>
        {/* bottom */}
        <section className="Bottom">
          <span className="exitBtn">Exit</span>
        </section>
      </Background>
    </>
  );
}

export default Game;
