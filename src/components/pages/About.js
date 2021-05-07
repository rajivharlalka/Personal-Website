import React from "react";
import Skills from "../layouts/Skills";
import { about, skillsBar, section2title } from "../../profile";
import { Frame } from "framer";

const About = () => {
  return (
    <div id='about' className='effect2'>
      <div data-aos='zoom-in-up' data-aos-once='true' className='row'>
        <div className='col-12 d-none d-md-block offset-md-1 col-md-4' id='not'>
            <Frame
              name={"Image"}
              drag={true}
              dragConstraints={{
                left: -100,
                right: 100,
                top: 100,
                bottom: 400,
              }}
              size={300}
              radius={30}
              style={{background:"#fff"}}
              image={
                "https://i.postimg.cc/rscpbGTH/profile.png"
              }
            ><img alt="" style={{background:`url("https://i.postimg.cc/rscpbGTH/profile.png")`}}></img></Frame>
          
        </div>
        <div className='col-12 offset-md-1 col-md-6 about'>
          <div className='About-title-box'>
            <h1 id='About' className='red-line'>
              {section2title}
            </h1>
          </div>
          {about.map((a) => (
            <p className='lead about-text'>{a.paragraph}</p>
          ))}
        </div>
      </div>
      <div id='Skills'>
        <div className='row d-flex justify-content-center skills'>
          {skillsBar.map((x) => (
            <Skills faClass={x.faClass} label={x.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
