import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      
      backDelay:  1500,
      strings: ["Web Developer", "Front End Developer", "React Developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="intro__left">
        <div className="imgContainer">
          <img src="/images/man.png" alt="" />
        </div>
      </div>

      <div className="intro__right">
        <div className="wrapper">
          <h5>Hi There, Im</h5>
          <h1>Md Sahadat Hossin</h1>
          <h3>
            I'm a <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#protfolio">
          <img src="/images/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
