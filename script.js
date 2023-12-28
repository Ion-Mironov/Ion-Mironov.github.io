document.addEventListener("DOMContentLoaded", function() {

	const gradientContainer = document.getElementById("gradientContainer");
	const glowEffect = document.createElement("div");
	glowEffect.className = "pointer-events-none absolute inset-0 z-30 transition duration-300";
	gradientContainer.appendChild(glowEffect);

	document.addEventListener("mousemove", function(e) {
		const x = e.clientX / window.innerWidth;
		const y = e.clientY / window.innerHeight;
		glowEffect.style.background = `radial-gradient(300px at ${x * 100}% ${y * 100}%, rgba(29, 78, 216, 0.15), transparent 80%)`;
	});


	// const aboutSection = document.getElementById("aboutContent");
	// const aboutContent = `
	// 	<p>I'm a seasoned IT pro with over 15 years of experience, especially as a Senior IT Field Technician. I'm all about solving tricky tech problems and have a knack for diving deep into analytical challenges, even if it may test my sanity.</p>

	// 	<p>Off the clock, I'm a car tech enthusiast and fabricator. I love bringing some flair to automotive tech, using my imagination to design digital car instrument panels and sleek UI displays from scratch. Designing and building custom car parts (from metal, wood, and even plastics), playing with LEDs, and creating control panel UIs from scratch are just some of the ways I combine my tech skills with my passion for cars.</p>
	// `;

	// aboutSection.innerHTML = aboutContent;


	const projectsSection = document.getElementById("projectsContent");

	// Create the unordered list element
	const projectsList = document.createElement("ul");
	projectsList.classList.add("list-none", "p-0", "z-20");

	const projects = [
		{
			name: "Car Instrument Panel",
			description: "Revving up automotive innovation, I've designed a bespoke car instrument panel, seamlessly integrated with a Raspberry Pi 4 and its touchscreen interface. This custom creation connects directly to my car's OBD-II port, transforming data into dynamic visuals. Crafted with precision in Adobe Illustrator and meticulously coded in VS Code, this project is a true blend of design flair and technical prowess.",
			link: "https://github.com/Ion-Mironov/Instrument_Panel"
		},
		{
			name: "LED Control Panel",
			description: "A dynamic touchscreen UI for controlling LED animations on a Raspberry Pi. Crafted in Python and Adobe Illustrator, it’s not just a test tool – it's the first step towards integrating custom LED animations into my car. Envision animated turn signals, vibrant parking lights, and expressive brake lights, all powered by a Raspberry Pi and designed by me.",
			link: "https://github.com/Ion-Mironov/LED_Control_Panel"
		},
		{
			name: "Virtual Pets Re-Imagined",
			description: "During my C#/.NET Full Stack Developer boot camp course at We Can Code IT, we had to pair up and create our own Tamagotchi virtual-pet program in C# as our first project.",
			link: "https://github.com/Ion-Mironov/Virtual-Pet"
		},
		{
			name: "Wormhole Creator",
			description: "For the mid-term project at We Can Code IT, we had to go solo and create a variation of the 'Cookie Clicker' game, using what we had learned so far. Inspired by the sci-fi thriller 'Event Horizon', I decided to put a unique spin on it by allowing players to create their own wormholes.",
			link: "https://github.com/Ion-Mironov/Wormhole-Creator"
		},
		{
			name: "Magix",
			description: "Our final project at We Can Code IT. Our team of five developed an automated inventory management system for 'Magic: The Gathering' trade-ins for a local card shop. My role was front-end development, bringing the interface to life with custom designs and assets made in Photoshop. The project showcased our full-stack development expertise at graduation.",
			link: "https://github.com/Ion-Mironov/Final-Project-Magix"
		},
	];

	projects.forEach(project => {

		const projectItem = document.createElement("li");
		projectItem.classList.add("mb-8");
		projectItem.innerHTML = `
			<a href="${project.link}" target="_blank" class="block project-link relative">
				<div class="project-cell text-slate-200">
					<span class="block text-2xl font-bold mb-2">${project.name}</span>
					<p class="text-slate-200">${project.description}</p>
					<div class="absolute inset-0 bg-slate-200 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
				</div>
			</a>
		`;

		projectsList.appendChild(projectItem);
	});

	projectsSection.appendChild(projectsList);

});
