document.addEventListener("DOMContentLoaded", function() {
	const aboutSection = document.getElementById("aboutContent");
	const aboutContent = `
		<p>a seasoned IT pro with over 15 years of experience, especially as a Senior IT Field Technician. I'm all about solving tricky tech problems and have a knack for diving deep into analytical challenges, even if it may strain my sanity.</p>

		<p>Off the clock, I'm a car tech enthusiast and fabricator. I love bringing a dash of flair to automotive tech, using my imagination to design custom car instrument panels and sleek UI displays from scratch. Designing and building custom car parts (from metal, wood, and even plastics), playing with LEDs, and creating control panel UIs from scratch are just some of the ways I merge my tech skills with my passion for cars.</p>
	`;

    aboutSection.innerHTML = aboutContent;


	const projectsSection = document.getElementById("projects");
	const projects = [
		{ name: "Car Instrument Panel", description: "A custom car instrument panel I designed which I run on my Raspberry Pi 4 with touchscreen, all of which plugs into a car's OBD-II port. Graphics were created in Adobe Illustrator and coding was done in VS Code. Utilizes Python, PySide6, pyOBD, Qt, and QML.", link: "https://github.com/Ion-Mironov/Instrument_Panel" },

		{ name: "LED Control Panel", description: "A touchscreen UI created to select various animations on an LED matrix; used for testing purposes. I needed something that I could run on my Raspberry Pi and would allow me to test the different light animations that I coded in Python.", link: "#" },

		{ name: "Virtual Pets Re-Imagined", description: "Earlier project while attending We Can Code IT. We had to create a Tamagotchi-style virtual pet application in C#.", link: "https://github.com/Ion-Mironov/Virtual-Pet"},

		{ name: "Wormhole Creator", description: "We Can Code IT mid-term project that required us to create our own 'Cookie Clicker' game. Drawing inspiration from the movie `Event Horizon`, I turned it into a wormhole creator. Utilizes JavaScript, HTML, and CSS.", link: "https://github.com/Ion-Mironov/Wormhole-Creator" },

		{ name: "Magix", description: "We Can Code IT final project combining everything we had learned. It focuses on creating a solution for a card shop owner to automatically update their inventory databases when dealing with trade-ins. Utilizes C#, JavaScript, ASP.NET, database queries, HTML, and CSS.", link: "https://github.com/Ion-Mironov/Final-Project-Magix" },
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
