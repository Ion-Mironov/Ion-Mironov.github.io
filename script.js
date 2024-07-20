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
		<p>I'm a seasoned IT professional with over 17 years of experience as a Senior IT Field Technician, complemented with a strong background of troubleshooting and analytical skills. I'm all about solving tricky tech problems and have a tendency to dive deep into puzzling challenges, even if it may test my sanity.</p>

		<br>Off the clock, I'm a car enthusiast and fabricator. I love bringing some flair to automotive tech, using my imagination to design digital car instrument panels and sleek UI displays from scratch. Designing and building custom car parts (from metal, wood, and even plastics), playing with LEDs, and creating control panel UIs are just some of the ways I combine my tech skills with my passion for cars.
	`;

	aboutSection.innerHTML = aboutContent;



	// ====== Projects Content ====== \\
	const projectsSection = document.getElementById("projectsContent");
	const projectsList = document.createElement("ul");
	projectsList.classList.add("group/list");

	const projects = [
		{
			name: "The Racing Trail",
			description: "A text-based, choose-your-own-adventure game inspired by The Oregon Trail where you compete in random races at varying difficulties. You can win cash prizes and parts which you can use to upgrade your car. Along your journey, you'll experience random events such as having car troubles, finding hidden money caches, and even finding abandoned cars with useable parts!",
			link: "https://github.com/ion-mironov/The_Racing_Trail",
			imagePreview: "https://raw.githubusercontent.com/ion-mironov/ion-mironov.github.io/main/assets/the_racing_trail.png",
			technologies: ["Python", "Pygame", "VS Code", "Adobe Photoshop"]
		},
		{
			name: "Car Instrument Panel",
			description: "I designed a digital car instrument panel that displays on a 7-inch FREENOVE display connected to my Raspberry Pi 4. This all plugs directly into my car's OBD-II port, taking real-time data and displaying it on screen. I used Adobe Illustrator to design the gauges and coded everything in Visual Studio Code.",
			link: "https://github.com/Ion-Mironov/Instrument_Panel",
			imagePreview: "https://raw.githubusercontent.com/ion-mironov/ion-mironov.github.io/main/assets/instrument_panel.png",
			technologies: ["Python", "PySide6", "pyOBD", "Qt", "QML", "VS Code", "Adobe Illustrator"]
		},
		{
			name: "LED Control Panel",
			description: "A dynamic touchscreen UI for controlling LED animations on my Raspberry Pi 4 and 7-inch FREENOVE touchscreen. Just as I've done with my digital dashboard, I used Adobe Illustrator and Visual Studio Code to handle everything. The animations I've created so far are sequential turn signals, rectangular parking lights, rapid flash 3rd Brake Light, and sequential brake lights. This setup acts as a test bench for everything before I'm satisfied enough to load each animation's code onto a separate ESP32 microcontroller, which will then tie into my personal vehicles' light systems.",
			link: "https://github.com/Ion-Mironov/LED_Control_Panel",
			imagePreview: "https://raw.githubusercontent.com/ion-mironov/ion-mironov.github.io/main/assets/LED_control_panel.png",
			technologies: ["Python", "PySide6", "pyOBD", "Qt", "QML", "VS Code", "Adobe Illustrator"]
		},
		{
			name: "Magix",
			description: "The final project at my C#/.NET boot camp course at We Can Code IT. Our team of five developed an automated inventory management system for 'Magic: The Gathering' trade-ins for a local card shop. My role was front-end development, bringing the interface to life with custom designs and assets made in Photoshop. The project showcased our full-stack development expertise at graduation.",
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
