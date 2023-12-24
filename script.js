document.addEventListener("DOMContentLoaded", function() {

	document.addEventListener("mousemove", function (e) {
		const glow = document.getElementById("glow-effect");
		const x = e.clientX;
		const y = e.clientY;
		glow.style.background = `radial-gradient(300px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
	});


	const aboutSection = document.getElementById("aboutContent");
	const aboutContent = `
		<p>I'm a seasoned IT pro with over 15 years of experience, especially as a Senior IT Field Technician. I'm all about solving tricky tech problems and have a knack for diving deep into analytical challenges, even if it may test my sanity.</p>

		<p>Off the clock, I'm a car tech enthusiast and fabricator. I love bringing some flair to automotive tech, using my imagination to design digital car instrument panels and sleek UI displays from scratch. Designing and building custom car parts (from metal, wood, and even plastics), playing with LEDs, and creating control panel UIs from scratch are just some of the ways I combine my tech skills with my passion for cars.</p>
	`;

    aboutSection.innerHTML = aboutContent;


	const projectsSection = document.getElementById("projectsContent");

	// Create the ordered list element
	const projectsList = document.createElement("ol");
	projectsList.classList.add("projects-list");

	const projects = [
		{ name: "Car Instrument Panel", description: "Revving up automotive innovation, I've designed a bespoke car instrument panel, seamlessly integrated with a Raspberry Pi 4 and its touchscreen interface. This custom creation connects directly to my car's OBD-II port, transforming data into dynamic visuals. Crafted with precision in Adobe Illustrator and meticulously coded in VS Code, this project is a fusion of Python, PySide6, pyOBD, Qt, and QML – a true blend of design flair and technical prowess.", link: "https://github.com/Ion-Mironov/Instrument_Panel" },

		{ name: "LED Control Panel", description: "A dynamic touchscreen UI for controlling LED animations on a Raspberry Pi. Crafted in Python and Adobe Illustrator, it’s not just a test tool – it's the first step towards integrating custom LED animations into my car. Envision animated turn signals, vibrant parking lights, and expressive brake lights, all powered by a Raspberry Pi and designed by me.", link: "https://github.com/Ion-Mironov/LED_Control_Panel" },

		{ name: "Virtual Pets Re-Imagined", description: "During my C#/.NET Full Stack Developer boot camp at We Can Code IT, I teamed up with another student to reinvent nostalgia with 'Virtual Pets Re-Imagined.' Drawing inspiration from the classic Tamagotchi, we crafted an interactive virtual pet application in C#. This project not only honed our coding skills but also brought a beloved digital pastime into the modern era.", link: "https://github.com/Ion-Mironov/Virtual-Pet"},

		{ name: "Wormhole Creator", description: "For my mid-term project at We Can Code IT, I embarked on a solo journey to develop 'Wormhole Creator,' a unique twist on the 'Cookie Clicker' game genre. Inspired by the sci-fi thriller 'Event Horizon,' this game allows players to build and manage their own wormholes. Skillfully blending JavaScript, HTML, and CSS, it's a portal to both fun and my growing web development prowess.", link: "https://github.com/Ion-Mironov/Wormhole-Creator" },

		{ name: "Magix", description: "Our final project at We Can Code IT. Our team of five developed an automated inventory management system for Magic: The Gathering trade-ins at card shops. My role was front-end development, bringing the interface to life with custom designs and Photoshop assets. The project, a culmination of our skills in C#, JavaScript, ASP.NET, and database management, showcased our full-stack development expertise.", link: "https://github.com/Ion-Mironov/Final-Project-Magix" },
	];

	projects.forEach(project => {
		const projectItem = document.createElement("li");
		projectItem.classList.add("project-item");
		projectItem.innerHTML = `
			<a href="${project.link}" target="_blank" class="project-link">
				<span class="hover-background"></span>
				<div class="project-cell">
					<h3>${project.name}</h3>
					<p>${project.description}</p>
				</div>
			</a>
		`;

		projectsList.appendChild(projectItem);
	});

	projectsSection.appendChild(projectsList);

});
