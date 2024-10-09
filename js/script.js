var current_fs, next_fs, previous_fs; //fieldsets

$("#step2").toggle();
$("#step3").toggle();

$(".next").click(function () {

	current_fs = $(this).parent().parent();
	next_fs = $(this).parent().parent().next();

	$("#progressbar li").eq($(".fieldset").index(next_fs)).addClass("active");

	next_fs.fadeIn(750);
	current_fs.hide();
});

$(".previous").click(function () {

	current_fs = $(this).parent().parent();
	previous_fs = $(this).parent().parent().prev();

	$("#progressbar li").eq($(".fieldset").index(current_fs)).removeClass("active");

	previous_fs.fadeIn(750);
	current_fs.hide();
});

$(".previous2").click(function () {

	current_fs = $(this).parent().parent().parent();
	previous_fs = $(this).parent().parent().parent().prev();

	$("#progressbar li").eq($(".fieldset").index(current_fs)).removeClass("active");

	previous_fs.fadeIn(750);
	current_fs.hide();
});

$(".submit").click(function () {
	return false;
})