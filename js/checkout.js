var discounts = 0;

function createDiscount() {
	var $code = $("#code").val();
	var $discount = $('<div id="discount"><div class="flex bg-form-bg border border-solid border-form-border rounded mt-4 p-4"><img src="assets/Checkmark.svg" class="w-5 h-5"><div class="pl-3 flex flex-col flex-1"><span class="flex justify-between"><h1 class="text-title font-medium text-sm">' + $code + '</h1><p class="font-medium text-price text-sm"><span class="font-normal">$</span><span class="">2.00</span></p></span><p class="text-form-text text-sm pt-1">Applied discount code</p></div></div><button onclick="removeDiscount();" type="button" class="text-sm text-price mt-3">Remove discount code</button></div>');
	if (discounts >= 1) return;

	$discount.appendTo($("#discounts"))
	discounts++;
}

function removeDiscount() {
	$("#discount").remove();
	discounts--;
}