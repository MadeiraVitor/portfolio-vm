import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function NetworkBackground() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },

      particles: {
        number: {
          value: 50,
        },
        color: {
          value: "#2dd4bf", // verde (pode trocar)
        },
        links: {
          enable: true,
          color: "#2dd4bf",
          distance: 120,
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
        },
        opacity: {
          value: 0.4,
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.6,
            },
          },
        },
      },
    }),
    []
  );

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="w-full h-full"
    />
  );
}