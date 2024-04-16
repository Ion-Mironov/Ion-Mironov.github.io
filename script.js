document.addEventListener("DOMContentLoaded", function() {


	// => Create a radial gradient glow
	const gradientContainer = document.getElementById("gradientContainer");
	const glowEffect = document.createElement("div");
	glowEffect.className = "pointer-events-none z-20 lg:absolute inset-0 transition duration-300";
	gradientContainer.appendChild(glowEffect);

	// => Have radial gradient glow follow mouse cursor
	document.addEventListener("mousemove", function(e) {
		const rect = gradientContainer.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width;
		const y = (e.clientY - rect.top) / rect.height;
		glowEffect.style.background =  /* html */`radial-gradient(300px at ${x * 100}% ${y * 100}%, rgba(29, 78, 216, 0.15), transparent 80%)`;
	});



	// ====== About Content ====== \\
	const aboutSection = document.getElementById("aboutContent");
	const aboutContent = /* html */ `
		<p>I'm a seasoned IT professional with over 15 years of experience as a Senior IT Field Technician, along with a strong background of troubleshooting and analytical skills. I'm all about solving tricky tech problems and have a knack for diving deep into puzzling challenges, even if it may test my sanity.</p>

		<br>Off the clock, I'm a car tech enthusiast and fabricator. I love bringing some flair to automotive tech, using my imagination to design digital car instrument panels and sleek UI displays from scratch. Designing and building custom car parts (from metal, wood, and even plastics), playing with LEDs, and creating control panel UIs are just some of the ways I combine my tech skills with my passion for cars.
	`;

	aboutSection.innerHTML = aboutContent;



	// ====== Projects Content ====== \\
	const projectsSection = document.getElementById("projectsContent");
	const projectsList = document.createElement("ul");
	projectsList.classList.add("group/list");

	const projects = [
		{
			name: "Car Instrument Panel",
			description: "Revving up automotive innovation, I've designed a bespoke car instrument panel, seamlessly integrated with a Raspberry Pi 4 and its touchscreen interface. This custom creation connects directly to my car's OBD-II port, transforming data into dynamic visuals. Crafted with precision in Adobe Illustrator and meticulously coded in VS Code, this project is a true blend of design flair and technical prowess.",
			link: "https://github.com/Ion-Mironov/Instrument_Panel",
			imagePreview: "https://raw.githubusercontent.com/ion-mironov/ion-mironov.github.io/main/assets/instrument_panel.png",
			technologies: ["Python", "PySide6", "pyOBD", "Qt", "QML", "VS Code", "Adobe Illustrator"]
		},
		{
			name: "LED Control Panel",
			description: "A dynamic touchscreen UI for controlling LED animations on a Raspberry Pi. Crafted in Python and Adobe Illustrator, it’s not just a test tool – it's the first step towards integrating custom LED animations into my car. Imagine animated turn signals, vibrant parking lights, and expressive brake lights, all powered by a Raspberry Pi and designed by me.",
			link: "https://github.com/Ion-Mironov/LED_Control_Panel",
			imagePreview: "https://raw.githubusercontent.com/ion-mironov/ion-mironov.github.io/main/assets/LED_control_panel.png",
			technologies: ["Python", "PySide6", "pyOBD", "Qt", "QML", "VS Code", "Adobe Illustrator"]
		},
		{
			name: "Virtual Pets Re-Imagined",
			description: "During my C#/.NET Full Stack Developer boot camp course at We Can Code IT, we had to pair up and create our own Tamagotchi virtual-pet program in C# as our first project. And, I couldn't help myself from creating a set of cute ASCII animals.",
			link: "https://github.com/Ion-Mironov/Virtual-Pet",
			imagePreview: "https://raw.githubusercontent.com/ion-mironov/ion-mironov.github.io/main/assets/virtual_pet.png",
			technologies: ["C#", "VS 2022"]
		},
		{
			name: "Wormhole Creator",
			description: "For the mid-term project at We Can Code IT, we had to go solo and create a variation of the 'Cookie Clicker' game, using what we had learned so far. Inspired by the sci-fi thriller 'Event Horizon', I decided to put a unique spin on it by allowing players to create their own wormholes.",
			link: "https://github.com/Ion-Mironov/Wormhole-Creator",
			imagePreview: "https://raw.githubusercontent.com/ion-mironov/ion-mironov.github.io/main/assets/wormhole_creator.png",
			technologies: ["JavaScript", "HTML", "CSS", "VS 2022"]
		},
		{
			name: "Magix",
			description: "Our final project at We Can Code IT. Our team of five developed an automated inventory management system for 'Magic: The Gathering' trade-ins for a local card shop. My role was front-end development, bringing the interface to life with custom designs and assets made in Photoshop. The project showcased our full-stack development expertise at graduation.",
			link: "https://github.com/Ion-Mironov/Final-Project-Magix",
			imagePreview: "https://raw.githubusercontent.com/ion-mironov/ion-mironov.github.io/main/assets/magix.png",
			technologies: ["C#", "ASP.NET", "OOP", "HTML", "CSS", "VS 2022", "Adobe Photoshop"]
		}
	];

	projects.forEach(project => {


		// ====== Create element that lists all technologies used ====== \\
		const techLabelsList = document.createElement("ul");
		const techLabels = project.technologies.map(techName =>
			/* html */ `
			<li class="mr-1.5 mt-2">
				<div class="flex items-center rounded-lg text-xs font-normal leading-5 px-[6px] py-[2px] lg:text-sm lg:font-medium lg:leading-6 lg:px-2 lg:py-[1px] bg-orange-300/50 text-slate-100">${techName}</div>
			</li>`
		).join("");

		techLabelsList.innerHTML = techLabels;


		const projectItem = document.createElement("li");
		projectItem.classList.add("mb-12");
		projectItem.innerHTML = /* html */ `
			<div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">

				<div class="z-0 absolute hidden rounded-md -inset-x-4 -inset-y-4 transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50"></div>
				<div class="z-10 sm:order-2 sm:col-span-6">

					<a class="group/link inline-flex items-baseline text-lg font-bold lg:text-xl lg:leading-6 text-sky-100 hover:text-orange-300 focus-visible:text-orange-300" href="${project.link}" target="_blank" rel="noreferrer noopener">
						<span class="absolute hidden rounded -inset-x-4 -inset-y-2.5 md:-inset-x-6 md:-inset-y-4 lg:block"></span>
						<span class="inline-block">${project.name}
							<svg class="inline-block ml-1 stroke-sky-100 h-4 w-4 stroke-1 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-hover/link:stroke-orange-300 group-hover/link:stroke-2 group-focus-visible/link:stroke-orange-300 group-focus-visible/link:stroke-2 motion-reduce:transition-none" viewBox="0 0 30 30">
								<path d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
							</svg>
						</span>
					</a>

					<p class="mt-2 text-sm lg:text-base text-sky-100 group-hover:text-sky-100 leading-normal">${project.description}</p>
					<ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">${techLabels}</ul>

				</div>

				<img class="rounded border-2 border-sky-200/20 transition group-hover:border-orange-300/80 sm:order-1 sm:col-span-2 sm:translate-y-1" loading="lazy" width="200" height="48" style="color:transparent" src="${project.imagePreview}">

			</div>
		`;

		projectsList.appendChild(projectItem);			// Append `projectItem` to `projectsList`
	});

	projectsSection.appendChild(projectsList);			// Append `projectsList` to `projectsSection`

});
