const topBar = document.getElementById('Top')
const leftBar = document.getElementById('secondRowImg1')
const midBar = document.getElementById('secondRowImg2')
const bottomBar = document.getElementById('thirdRow')

midBar.addEventListener("scroll", function() {
	leftBar.scrollTop = midBar.scrollTop
	topBar.scrollLeft = midBar.scrollLeft
})
