const menuIcon = document.querySelectorAll('svg.menu-icon');
const path = document.querySelectorAll('svg.menu-icon path');

for (let i = 0; i < menuIcon.length; i += 1) {
	menuIcon[i].addEventListener('mouseover', () => {
		path[i].setAttribute('fill', '#199eda');
	});

}
for (let j = 0; j < menuIcon.length; j += 1) {
	menuIcon[j].addEventListener('mouseleave', () => {
		path[j].setAttribute('fill', '#707A86');
	});
}