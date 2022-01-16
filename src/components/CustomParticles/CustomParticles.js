import Particles from 'react-tsparticles';
import { loadLinksPreset } from "tsparticles-preset-links";

const particlesOptions = {
	preset: "links",
	particles: {
		number: {
			value: 55,
			density: {
				enable: true,
				value_area: 1100
			}
		},
		line_linked: {
			opacity: 0.4,
			color: {
				value: "#000"
			},
			shadow: {
				enable: true,
				color: '#141414',
				blur: 5
			}
		},
		color: {
			value: "#000"
		},
		stroke: {
			color: "#000"
		},
		size: {
			value: 2
		}
	},
	background: {
		color: "#FFF"
	}
}

function customInit(main) {
  loadLinksPreset(main);
}

const CustomParticles = () => {

  return (
    <Particles className='particles' id="tsparticles" options={particlesOptions} init={customInit}/>
  );
};

export default CustomParticles;