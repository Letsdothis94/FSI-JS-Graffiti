// Select some elements...
let doggos = document.querySelector('#page-header');
doggos.style.textAlign = 'left';
doggos.style.fontFamily = 'Monaco';

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'
}

let dogNames = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogNames.length; i++){
dogNames[i].style.textAlign = 'left';
}

let footie = document.querySelector('.footer');
footie.style.backgroundColor = 'green';

let picture = document.querySelectorAll('.row');
picture.style.mirror = transform = scaleX(-1)
