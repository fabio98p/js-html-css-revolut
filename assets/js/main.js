console.log("ciao ale");

//#region features menu
$(".btn-features").mouseenter(function () {
	$(".features-menu").addClass("active")
})
$('.features').mouseleave(function () {
	$(".features-menu").removeClass("active")
})
//#endregion

//#region plans menu
$(".btn-plans").mouseenter(function () {
	$(".plans-menu").addClass("active")
})
$('.plans').mouseleave(function () {
	$(".plans-menu").removeClass("active")
})
//#endregion

//#region about-us menu
$(".btn-about-us").mouseenter(function () {
	$(".about-us-menu").addClass("active")
})
$('.about-us').mouseleave(function () {
	$(".about-us-menu").removeClass("active")
})
//#endregion

//#region help menu
$(".btn-help").mouseenter(function () {
	$(".help-menu").addClass("active")
})
$('.help').mouseleave(function () {
	$(".help-menu").removeClass("active")
})
//#endregion

