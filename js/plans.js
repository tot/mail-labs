var selectedTitle, selectedDescription, selectedPrice, currentTitle, currentDescription, currentPrice;
var x = document.getElementsByClassName('plan')
for (var i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function () {

        var selectedEl = document.querySelector(".selected");

        if (selectedEl == null) {
            document.getElementById("next").disabled = false;
            document.getElementById("next").classList.remove("cursor-not-allowed");
            document.getElementById("next").classList.add("cursor-pointer");
            document.getElementById("next").classList.add("bg-primary");
        } else {
            selectedEl.classList.remove("selected");
        }
        this.classList.add("selected");
        selectedEl = document.querySelector(".selected");
        /*Selected Element*/
        //console.log(selectedEl);
        selectedTitle = $(selectedEl).find(".title").text();
        //console.log(selectedTitle);
        selectedDescription = $(selectedEl).find(".description").text();
        //console.log(selectedDescription);
        selectedPrice = $(selectedEl).find(".price").text();
        console.log(selectedPrice);
        $("#title").text(selectedTitle);
        $("#price").text(selectedPrice);
        $("#description").text(selectedDescription);
        $("#checkout-title").text(selectedTitle);
        $("#checkout-price").text(selectedPrice);
        $("#checkout-description").text(selectedDescription);

    }, false);
}