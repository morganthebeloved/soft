import React from "react";
import img from "../images/code.jpg";
import img1 from "../images/lap.jpg";
import img2 from "../images/moon.jpg";
import img3 from "../images/soft.jpg";
const Description = () => {
  return (
    <article className="c">
      <h1 className="a">
        Hi, I am <span className="b">OKUNOYE PHILIP</span>👌
        <br />
        <h1>Popularly known as <h1>Morgan TheBeloved</h1></h1>
      </h1>
      <h2 className="a">I'm a Full Stack Developer</h2>
      <div>
        <Property img={img} text="Fueled by coffee" />
        <Property img={img1} text="Based in Nigeria" />
        <Property img={img2} text="Student at Valuemax Communications" />
        <Property img={img3} text="philipokunoye0@gmail.com" />
      </div>
    </article>
  );
};

export default Description;

const Property = ({ img, text }) => {
  return (
    <div>
      <img src={img} alt="" className="my-1 rounded-5" height={40} width={40} />&nbsp;&nbsp;&nbsp;
      <span>{text}</span>
    </div>
  );
};
