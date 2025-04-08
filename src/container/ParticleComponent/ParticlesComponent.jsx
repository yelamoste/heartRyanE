import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = ({ id = "tsparticles" }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        zIndex: -1,
      },
      particles: {
        color: {
          value: ["#C599B6", "#E6B2BA", "#FAD0C4", "#FFF7F3"],
        },
        move: {
          direction: "bottom", // Set particles to fall down
          enable: true,
          outModes: {
            default: "out", // Particles will leave the screen once they fall out
          },
          speed: {
            min: 1,
            max: 3,
          },
        },
        number: {
          value: 500, // Total number of particles
          density: {
            enable: true,
            area: 800,
          },
        },
        opacity: {
          value: 1,
          animation: {
            enable: false,
          },
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          direction: "random",
          animation: {
            enable: true,
            speed: 60,
          },
        },
        tilt: {
          direction: "random",
          enable: true,
          move: true,
          value: {
            min: 0,
            max: 360,
          },
          animation: {
            enable: true,
            speed: 60,
          },
        },
        shape: {
          type: ["square"], // Particle shapes
        },
        size: {
          value: {
            min: 2,
            max: 4,
          },
        },
        roll: {
          darken: {
            enable: true,
            value: 30,
          },
          enlighten: {
            enable: true,
            value: 30,
          },
          enable: true,
          speed: {
            min: 15,
            max: 25,
          },
        },
        wobble: {
          distance: 30,
          enable: true,
          move: true,
          speed: {
            min: -15,
            max: 15,
          },
        },
      },
      emitters: {
        life: {
          count: 0, // Infinite burst
          duration: 0.1,
          delay: 0.1, // Time between bursts
        },
        rate: {
          delay: 0.1,
          quantity: 150, // Number of particles per burst
        },
        position: {
          x: 50, // Emitter position (center of the screen)
          y: 0, // Start at the top of the screen
        },
        size: {
          width: 0,
          height: 0,
        },
      },
    }),
    []
  );

  return <>{init && <Particles id={id} options={options} />}</>;
};

export default ParticlesComponent;
