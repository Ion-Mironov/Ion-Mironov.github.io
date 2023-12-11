document.addEventListener("DOMContentLoaded", function() {
	const aboutSection = document.getElementById("aboutContent");
	const aboutContent = `
		<p>I am an IT professional with a rich career spanning over 15 years as a Senior IT Field Technician. I pride myself on my strong troubleshooting and analytical skills, strengthened through years of hands-on experience.</p>
		<p>When I'm not working, my attention tends to divert to automotive technology, particularly in creating custom car instrument panels and UI displays. This hobby allows me to blend my technical skills with some style, resulting in unique and functional automotive enhancements. My spare time often involves designing and fabricating custom car parts, integrating LEDs, and developing control panel UIs from scratch.</p>
	`;

    aboutSection.innerHTML = aboutContent;


	const projectsSection = document.getElementById("projects");
	const projects = [
		{ name: "Car Instrument Panel", description: "A custom car instrument panel I designed which I run on my Raspberry Pi 4 with touchscreen, all of which plugs into a car's OBD-II port. Graphics were created in Adobe Illustrator and coding was done in VS Code. Utilizes Python, PySide6, pyOBD, Qt, and QML.", link: "https://github.com/Ion-Mironov/Instrument_Panel" },
		{ name: "LED Control Panel", description: "A touchscreen UI created to select various animations on an LED matrix; used for testing purposes. I needed something that I could run on my Raspberry Pi and would allow me to bench test the different light animations that I coded in Python.", link: "#" },
		{ name: "Wormhole Creator", description: "A JavaScript project I had to create in the C#/.NET WeCanCodeIT boot camp course I attended in mid-2023, this is my spin on the original Cookie Clicker game. Drawing inspiration from the movie `Event Horizon`, I turned it into a wormhole creator. It has a combination of JavaScript, HTML, and CSS.", link: "https://github.com/WeCanCodeIT/donut-maker-IonMironov-main" },
		{ name: "Magix", description: "The final project that a group of us had to create in the C#/.NET course, utilizing everything we had learned. It focuses on creating a solution for a card shop owner to automatically update their stock databases when dealing with trade-ins. It consists of C#, JavaScript, ASP.NET, database queries, HTML, and CSS.", link: "https://github.com/WeCanCodeIT/C-Sharp-Final-Magix" },
	];

	projects.forEach(project => {
		const projectElement = document.createElement("div");
		projectElement.innerHTML = `
			<h3>${project.name}</h3>
			<p>${project.description}</p>
			<a href="${project.link}" target="_blank">View Project</a>
		`;
		projectsSection.appendChild(projectElement);
	});
});
