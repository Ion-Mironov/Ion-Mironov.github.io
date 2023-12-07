document.addEventListener('DOMContentLoaded', function() {
	const portfolioSection = document.getElementById('portfolio');
	const projects = [
		{ name: 'Project 1', description: 'Description of Project 1', link: '#' },
		{ name: 'Project 2', description: 'Description of Project 2', link: '#' },
		// Add more projects here
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
