document.addEventListener('DOMContentLoaded', function() {
	const portfolioSection = document.getElementById('portfolio');
	const projects = [
		{ name: 'Project 1', description: 'Description of Project 1', link: '#' },
		{ name: 'Project 2', description: 'Description of Project 2', link: '#' },
		{ name: 'Project 3', description: 'Description of Project 3', link: 'https://github.com/WeCanCodeIT/donut-maker-IonMironov-main' },
		{ name: 'Project 4', description: 'Description of Project 4', link: 'https://github.com/WeCanCodeIT/C-Sharp-Final-Magix' },
	];

	projects.forEach(project => {
		const projectElement = document.createElement('div');
		projectElement.innerHTML = `
			<h3>${project.name}</h3>
			<p>${project.description}</p>
			<a href="${project.link}" target="_blank">View Project</a>
		`;
		portfolioSection.appendChild(projectElement);
	});
});
