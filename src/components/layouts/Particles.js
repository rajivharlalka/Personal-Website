import React from "react";
import Particles from "react-particles-js";
import { background } from "../../profile";

const ParticlesBackground = () => {
  return (
    <div className='particle'>
      {background.type === "Particle" && (
        <Particles
          height='100vh'
          width='100vw'
          params={{
            particles: {
              collisions: {
                enable: true,
              },
              number: {
                value: 70,
                density: {
                  enable: false,
                },
              },
              color: "#000",
              size: {
                value: 5,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: true,
                color: "#000",
              },
              move: {
                random: false,
                speed: 1,
                direction: "bottom",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: false,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 3,
                  size: 6,
                  opacity: 0.4,
                },
                push: {
                  particles_nb: 5,
                },
              },
              retina_detect: true,
            },
          }}
        />
      )}
    </div>
  );
};

export default ParticlesBackground;
