const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
	span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function(e) {
	span.classList.remove('animated', 'rubberBand')
}))

const desainBar = document.querySelector('.bar-desain')
const programBar = document.querySelector('.bar-programming')
const webBar = document.querySelector('.bar-webprogramming')
const dbBar = document.querySelector('.bar-database')

var t1 = new TimelineLite()

t1.fromTo(desainBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(70% - 6px)', ease: Power4.easeOut})
	.fromTo(programBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(80% - 6px)', ease: Power4.easeOut})
	.fromTo(webBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(60% - 6px)', ease: Power4.easeOut})
	.fromTo(dbBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(70% - 6px)', ease: Power4.easeOut})

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
	triggerElement: '.skills',
	triggerHook: 0
})
.setTween(t1)
.addTo(controller)

const showRequiredCategory = event => {
	const getId = event.id;
	const links = document.querySelectorAll('.work-category button')
	for(i=0; i<links.length; i++){
		if(links[i].hasAttribute('class')){
			links[i].classList.remove('active')	
		} 
	}

	event.classList.add('active')
	const getCategory = document.querySelector('.category-'+ getId)
	const categories = document.querySelectorAll('div[class^="category-"]')
	for(i=0; i<categories.length; i++){
		if(categories[i].hasAttribute('class')){
			categories[i].classList.remove('showCategory')	
			categories[i].classList.add('hideCategory')	
		} 
	}

	getCategory.classList.remove('hideCategory')
	getCategory.classList.add('showCategory')
}

let model = document.querySelector('.model')
let trigger = document.querySelector('.act-btn')
let closeButton = document.querySelector('.close-model')

function toggleModel() {
	model.classList.toggle("show-model");
}

function windowsOnClick(e) {
	if(e.target === model) {
		toggleModel()
	}
}

trigger.addEventListener('click', toggleModel);
closeButton.addEventListener('click', toggleModel);
window.addEventListener('click', windowsOnClick);

const spans2 = document.querySelectorAll('.model-content span')
spans2.forEach(span => span.addEventListener('mouseover', function(e) {
	span.classList.add('animated', 'rubberBand')
}))
spans2.forEach(span => span.addEventListener('mouseout', function(e) {
	span.classList.remove('animated', 'rubberBand')
}))

var sdclicked = true;
var smpclicked = true;
var smkclicked = true;
var univclicked = true;

function sdclick() {
	if(sdclicked)
	{
		document.getElementById('sd').innerHTML = '<h4>Organisasi</h4><p>-Pramuka<br> </p>';
		sdclicked = false;
	}	
	else
	{
		document.getElementById('sd').innerHTML = '<h3>SDN</h3><p>Juwet Kenongo</p>';
		sdclicked = true;
	}
}

function smpclick() {
	if(smpclicked)
	{
		document.getElementById('smp').innerHTML = '<h4>Organisasi</h4><p>-Pramuka<br> -PMR<br> </p>';
		smpclicked = false;
	}	
	else
	{
		document.getElementById('smp').innerHTML = '<h3>SMPN</h3><p>1 Porong</p>';
		smpclicked = true;
	}
}

function smkclick() {
	if(smkclicked)
	{
		document.getElementById('smk').innerHTML = '<h4>Organisasi</h4><p>-Paskibra<br> -PMR<br> -Majalah Digital<br> -Karang Taruna </p>';
		smkclicked = false;
	}	
	else
	{
		document.getElementById('smk').innerHTML = '<h3>SMK</h3><p>Teknik Pal</p>';
		smkclicked = true;
	}
}

function univclick() {
	if(univclicked)
	{
		document.getElementById('universitas').innerHTML = '<h4>Organisasi</h4><p>-Aslab Multimedia Kreatif<br> -Karang Taruna </p>';
		univclicked = false;
	}	
	else
	{
		document.getElementById('universitas').innerHTML = '<h3>UNESA</h3><p>S1 Teknik Informatika</p>';
		univclicked = true;
	}
}