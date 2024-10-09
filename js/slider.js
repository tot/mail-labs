$("input[type=range]").mousemove(function (e) {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    var percent = val * 100;
    $(this).css('background-image',
        '-webkit-gradient(linear, left top, right top, ' +
        'color-stop(' + percent + '%, #46A0F0), ' +
        'color-stop(' + percent + '%, #44444e)' +
        ')');

    $(this).css('background-image',
        '-moz-linear-gradient(left center, #46A0F0 0%, #46A0F0 ' + percent + '%, #44444e ' + percent + '%, #44444e 100%)');

    if (document.getElementById("amount").value > 0) {
        document.getElementById("next-amount").classList.remove("cursor-not-allowed");
        document.getElementById("next-amount").classList.add("cursor-pointer");
    }
});