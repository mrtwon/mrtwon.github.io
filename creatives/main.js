let isOffScroll = false
let arrAnimElem = []
const generalObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	if(entry.isIntersecting){
		let elem = arrAnimElem.find(item => item.target === entry.target)
		if(elem !== undefined && !elem.wasShow){
			 elem.target.classList.add(elem.classAdd)
			 elem.wasShow = true
		}
	}
})
})

function addToArray(){
	arrAnimElem.push({
		target: document.querySelector(".top-section-two > p"),
		wasShow: false,
		classAdd: 'c-anim-h3-t-st'
	})
	arrAnimElem.push({
		target: document.querySelector(".top-section-two > h3"),
		wasShow: false,
		classAdd: 'c-anim-h3-t-st'
	})
	arrAnimElem.push({
		target: document.querySelector(".one-e-b-st "),
		wasShow: false,
		classAdd: 'c-anim-d-b-st'
	})
	arrAnimElem.push({
		target: document.querySelector(".two-e-b-st "),
		wasShow: false,
		classAdd: 'c-anim-d-b-st'
	})
	arrAnimElem.push({
		target: document.querySelector(".three-e-b-st "),
		wasShow: false,
		classAdd: 'c-anim-d-b-st'
	})
	arrAnimElem.push({
		target: document.querySelector(".four-e-b-st "),
		wasShow: false,
		classAdd: 'c-anim-d-b-st'
	})
	arrAnimElem.push({
		target: document.querySelector(".section-three-block-two"),
		wasShow: false,
		classAdd: 'c-anim-b-t-s-three'
	})
	arrAnimElem.push({
		target: document.querySelector(".section-three-block-one"),
		wasShow: false,
		classAdd: 'c-anim-b-o-s-three'
	})
	arrAnimElem.push({
		target: document.querySelector(".section-three-block-three"),
		wasShow: false,
		classAdd: 'c-anim-b-three-s-three'
	})
	arrAnimElem.push({
		target: document.querySelector(".section-three-block-four"),
		wasShow: false,
		classAdd: 'c-anim-b-f-s-three'
	})
	arrAnimElem.push({
		target: document.querySelector(".char-one-top-block-section-four"),
		wasShow: false,
		classAdd: 'c-c-o-t-b-s-f'
	})
	arrAnimElem.push({
		target: document.querySelector(".char-two-top-block-section-four"),
		wasShow: false,
		classAdd: 'c-c-t-t-b-s-f'
	})
	arrAnimElem.push({
		target: document.querySelector(".center-block-section-four > p"),
		wasShow: false,
		classAdd: 'c-center-block-s-f-p'
	})
	arrAnimElem.push({
		target: document.querySelector(".one-c-b-s-f"),
		wasShow: false,
		classAdd: 'c-all-c-b-s-f'
	})
	arrAnimElem.push({
		target: document.querySelector(".two-c-b-s-f"),
		wasShow: false,
		classAdd: 'c-all-c-b-s-f'
	})
	arrAnimElem.push({
		target: document.querySelector(".three-c-b-s-f"),
		wasShow: false,
		classAdd: 'c-all-c-b-s-f'
	})
	arrAnimElem.push({
		target: document.querySelector(".four-c-b-s-f"),
		wasShow: false,
		classAdd: 'c-all-c-b-s-f'
	})

	arrAnimElem.push({
		target: document.querySelector(".one-t-b-s-f"),
		wasShow: false,
		classAdd: 'c-all-p-b-b-s-f'
	})
	arrAnimElem.push({
		target: document.querySelector(".two-t-b-s-f"),
		wasShow: false,
		classAdd: 'c-all-p-b-b-s-f'
	})
	arrAnimElem.push({
		target: document.querySelector(".three-t-b-s-f"),
		wasShow: false,
		classAdd: 'c-all-p-b-b-s-f'
	})
	arrAnimElem.push({
		target: document.querySelector(".four-t-b-s-f"),
		wasShow: false,
		classAdd: 'c-all-p-b-b-s-f'
	})
	arrAnimElem.push({
		target: document.querySelector(".one-items-s-f"),
		wasShow: false,
		classAdd: 'c-one-items-s-f'
	})
	arrAnimElem.push({
		target: document.querySelector(".two-items-s-f"),
		wasShow: false,
		classAdd: 'c-two-items-s-f'
	})


	arrAnimElem.push({
		target: document.querySelector(".p1-block-one-section-six"),
		wasShow: false,
		classAdd: 'c-p1-b-o-s-s'
	})
	arrAnimElem.push({
		target: document.querySelector(".p2-block-one-section-six"),
		wasShow: false,
		classAdd: 'c-p2-b-o-s-s'
	})
	arrAnimElem.push({
		target: document.querySelector(".key-points-block-one-section-six"),
		wasShow: false,
		classAdd: 'c-k-p-b-o-s-s'
	})
	arrAnimElem.push({
		target: document.querySelector(".image-block-two-section-six"),
		wasShow: false,
		classAdd: 'c-img-b-t-s-s'
	})
	arrAnimElem.push({
		target: document.querySelector(".p1-block-one-section-eight"),
		wasShow: false,
		classAdd: 'c-c-o-t-b-s-f'
	})
	arrAnimElem.push({
		target: document.querySelector(".p2-block-one-section-eight"),
		wasShow: false,
		classAdd: 'c-c-t-t-b-s-f'
	})
	arrAnimElem.push({
		target: document.querySelector(".center-block-section-eight"),
		wasShow: false,
		classAdd: 'c-center-block-s-f-p'
	})

	arrAnimElem.push({
		target: document.querySelector(".p2-block-one-section-eight"),
		wasShow: false,
		classAdd: 'c-c-t-t-b-s-f'
	})
	arrAnimElem.push({
		target: document.querySelector(".center-block-section-eight"),
		wasShow: false,
		classAdd: 'c-center-block-s-f-p'
	})

	arrAnimElem.push({
		target: document.querySelector(".one-img-b-b-s-e"),
		wasShow: false,
		classAdd: 'c-all-img-b-b-s-e'
	})
	arrAnimElem.push({
		target: document.querySelector(".two-img-b-b-s-e"),
		wasShow: false,
		classAdd: 'c-all-img-b-b-s-e'
	})
	arrAnimElem.push({
		target: document.querySelector(".three-img-b-b-s-e"),
		wasShow: false,
		classAdd: 'c-all-img-b-b-s-e'
	})
	arrAnimElem.push({
		target: document.querySelector(".four-img-b-b-s-e"),
		wasShow: false,
		classAdd: 'c-all-img-b-b-s-e'
	})

	arrAnimElem.push({
		target: document.querySelector(".one-img-p-b-b-s-e"),
		wasShow: false,
		classAdd: 'c-all-img-p-b-b-s-e'
	})
	arrAnimElem.push({
		target: document.querySelector(".two-img-p-b-b-s-e"),
		wasShow: false,
		classAdd: 'c-all-img-p-b-b-s-e'
	})
	arrAnimElem.push({
		target: document.querySelector(".three-img-p-b-b-s-e"),
		wasShow: false,
		classAdd: 'c-all-img-p-b-b-s-e'
	})
	arrAnimElem.push({
		target: document.querySelector(".four-img-p-b-b-s-e"),
		wasShow: false,
		classAdd: 'c-all-img-p-b-b-s-e'
	})

	arrAnimElem.push({
		target: document.querySelector(".block-photo-one-section-three-mobile"),
		wasShow: false,
		classAdd: 'c-b-p-o-s-t-m'
	})
	arrAnimElem.push({
		target: document.querySelector(".block-photo-two-section-three-mobile"),
		wasShow: false,
		classAdd: 'c-b-p-t-s-t-m'
	})

}

function addForObserver(){
	arrAnimElem.forEach(elem => {
		generalObserver.observe(elem.target)
	})
}
function addListener(){
	window.addEventListener('hashchange', () => {
		let scrollEvent = window.location.hash.substr(1)
		if(scrollEvent === "features"){
			document.querySelector(".section-two").scrollIntoView({
				block: 'start',
				behavior: 'smooth'
			})
		}
	})
	document.querySelector('.burger-menu').onclick = () => {
		let elem = document.querySelector('.float-menu')
		elem.style.width = "100vw"
		elem.style.opacity = "1.0"
		isOffScroll = true
	}
	document.querySelector('.close-menu > img').onclick = () => {
		let elem = document.querySelector('.float-menu')
		elem.style.opacity = "0.0"
		setTimeout(() => {
			elem.style.width = "0vw"
		}, 800)
		isOffScroll = false
	}

}
window.onscroll = function () { 
	if(isOffScroll) window.scrollTo(0, 0);
};

window.onload = () => {
	addListener()
	addToArray()
	addForObserver()
}