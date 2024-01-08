document.addEventListener("DOMContentLoaded", function() {


	// => Create a radial gradient glow
	const gradientContainer = document.getElementById("gradientContainer");
	const glowEffect = document.createElement("div");
	glowEffect.className = "pointer-events-none z-30 lg:absolute inset-0 transition duration-300";
	gradientContainer.appendChild(glowEffect);

	// => Have radial gradient glow follow mouse cursor
	document.addEventListener("mousemove", function(e) {
		const rect = gradientContainer.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width;
		const y = (e.clientY - rect.top) / rect.height;
		glowEffect.style.background = `radial-gradient(300px at ${x * 100}% ${y * 100}%, rgba(29, 78, 216, 0.15), transparent 80%)`;
	});



	// ====== About Content ====== //
	const aboutSection = document.getElementById("aboutContent");
	const aboutContent = `
		<p>I'm a seasoned IT pro with over 15 years of experience, especially as a Senior IT Field Technician, with a strong background of troubleshooting and analytical skills. I'm all about solving tricky tech problems and have a knack for diving deep into puzzling challenges, even if it may test my sanity.</p>

		<br>Off the clock, I'm a car tech enthusiast and fabricator. I love bringing some flair to automotive tech, using my imagination to design digital car instrument panels and sleek UI displays from scratch. Designing and building custom car parts (from metal, wood, and even plastics), playing with LEDs, and creating control panel UIs from scratch are just some of the ways I combine my tech skills with my passion for cars.</br>
	`;

	aboutSection.innerHTML = aboutContent;



	// ====== Projects Content ====== //
	const projectsSection = document.getElementById("projectsContent");
	const projectsList = document.createElement("ul");
	projectsList.classList.add("group/list");

	const projects = [
		{
			name: "Car Instrument Panel",
			description: "Revving up automotive innovation, I've designed a bespoke car instrument panel, seamlessly integrated with a Raspberry Pi 4 and its touchscreen interface. This custom creation connects directly to my car's OBD-II port, transforming data into dynamic visuals. Crafted with precision in Adobe Illustrator and meticulously coded in VS Code, this project is a true blend of design flair and technical prowess.",
			link: "https://github.com/Ion-Mironov/Instrument_Panel",
			technologies: ["Python", "PySide6", "pyOBD", "Qt", "QML", "VS Code", "Adobe Illustrator"]
		},
		{
			name: "LED Control Panel",
			description: "A dynamic touchscreen UI for controlling LED animations on a Raspberry Pi. Crafted in Python and Adobe Illustrator, it’s not just a test tool – it's the first step towards integrating custom LED animations into my car. Envision animated turn signals, vibrant parking lights, and expressive brake lights, all powered by a Raspberry Pi and designed by me.",
			link: "https://github.com/Ion-Mironov/LED_Control_Panel",
			technologies: ["Python", "PySide6", "pyOBD", "Qt", "QML", "VS Code", "Adobe Illustrator"]
		},
		{
			name: "Virtual Pets Re-Imagined",
			description: "During my C#/.NET Full Stack Developer boot camp course at We Can Code IT, we had to pair up and create our own Tamagotchi virtual-pet program in C# as our first project.",
			link: "https://github.com/Ion-Mironov/Virtual-Pet",
			technologies: ["C#", "VS 2023"]
		},
		{
			name: "Wormhole Creator",
			description: "For the mid-term project at We Can Code IT, we had to go solo and create a variation of the 'Cookie Clicker' game, using what we had learned so far. Inspired by the sci-fi thriller 'Event Horizon', I decided to put a unique spin on it by allowing players to create their own wormholes.",
			link: "https://github.com/Ion-Mironov/Wormhole-Creator",
			technologies: ["JavaScript", "HTML", "CSS", "VS 2023"]
		},
		{
			name: "Magix",
			description: "Our final project at We Can Code IT. Our team of five developed an automated inventory management system for 'Magic: The Gathering' trade-ins for a local card shop. My role was front-end development, bringing the interface to life with custom designs and assets made in Photoshop. The project showcased our full-stack development expertise at graduation.",
			link: "https://github.com/Ion-Mironov/Final-Project-Magix",
			technologies: ["C#", "ASP.NET", "OOP", "HTML", "CSS", "VS 2023", "Adobe Photoshop"]
		}
	];

	projects.forEach(project => {


		// ----- Create element that lists all technologies used ----- //
		const techLabelsList = document.createElement("ul");
		const techLabels = project.technologies.map(techName =>
			`<li class="mr-1.5 mt-2">
				<div class="flex items-center rounded-lg bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-orange-100">${techName}</div>
			</li>`
		).join("");

		techLabelsList.innerHTML = techLabels;


		const projectItem = document.createElement("li");
		projectItem.classList.add("mb-12");
		projectItem.innerHTML = `
			<div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">

				<div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
			
				<div class="z-10 sm:order-2 sm:col-span-6">
					<h3>
						<a class="inline-flex items-baseline font-medium leading-tight text-sky-100 hover:text-orange-300 focus-visible:text-orange-300 group/link text-base" href="${project.link}" target="_blank">
							<span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
							<span class="inline-block">${project.name}
								<svg class="inline-block h-6 w-6 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px stroke-sky-100 stroke-2 group-hover/link:stroke-orange-300 group-hover/link:stroke-3" viewBox="0 0 30 30">
									<path d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
								</svg>
							</span>
						</a>
					</h3>
					<p class="mt-2 text-sm text-sky-200 group-hover:text-sky-100 leading-normal">${project.description}</p>
					<ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">${techLabels}</ul>
				</div>

			</div>
		`;

		projectsList.appendChild(projectItem);			// Append `projectItem` to `projectsList`
	});

	projectsSection.appendChild(projectsList);			// Append `projectsList` to `projectsSection`

});
