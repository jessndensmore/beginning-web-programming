$(document).ready(function () {

    function validateRequired(id, errId, message) {
        if ($(id).val().trim() === "") {
            $(errId).text(message);
            return false;
        } else {
            $(errId).text("");
            return true;
        }
    }

    function validateEmail() {
        var email = $("#email").val().trim();
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            $("#emailErr").text("Email is required.");
            return false;
        } else if (!regex.test(email)) {
            $("#emailErr").text("Enter a valid email address.");
            return false;
        } else {
            $("#emailErr").text("");
            return true;
        }
    }

    function validateZip(id, errId) {
        var zip = $(id).val().trim();
        var regex = /^[0-9]{5}$/;

        if (zip === "") {
            $(errId).text("Zip code is required.");
            return false;
        } else if (!regex.test(zip)) {
            $(errId).text("Zip code must be 5 numbers.");
            return false;
        } else {
            $(errId).text("");
            return true;
        }
    }

    function validateForm() {
        var valid = true;

        if (!validateRequired("#name", "#nameErr", "Name is required.")) valid = false;
        if (!validateRequired("#address", "#addressErr", "Address is required.")) valid = false;
        if (!validateRequired("#city", "#cityErr", "City is required.")) valid = false;
        if (!validateZip("#zip", "#zipErr")) valid = false;
        if (!validateEmail()) valid = false;

        if (!validateRequired("#shipaddr", "#shipaddrErr", "Shipping address is required.")) valid = false;
        if (!validateRequired("#shipcity", "#shipcityErr", "Shipping city is required.")) valid = false;
        if (!validateZip("#shipzip", "#shipzipErr")) valid = false;

        return valid;
    }

    $("#name").blur(function () {
        validateRequired("#name", "#nameErr", "Name is required.");
    });

    $("#address").blur(function () {
        validateRequired("#address", "#addressErr", "Address is required.");
    });

    $("#city").blur(function () {
        validateRequired("#city", "#cityErr", "City is required.");
    });

    $("#zip").blur(function () {
        validateZip("#zip", "#zipErr");
    });

    $("#email").blur(function () {
        validateEmail();
    });

    $("#shipaddr").blur(function () {
        validateRequired("#shipaddr", "#shipaddrErr", "Shipping address is required.");
    });

    $("#shipcity").blur(function () {
        validateRequired("#shipcity", "#shipcityErr", "Shipping city is required.");
    });

    $("#shipzip").blur(function () {
        validateZip("#shipzip", "#shipzipErr");
    });

    $("#copy").change(function () {
        if ($(this).is(":checked")) {
            $("#shipaddr").val($("#address").val());
            $("#shipcity").val($("#city").val());
            $("#shipzip").val($("#zip").val());
            $("#shipstate").val($("#state").val());
        }
    });

    function calculateOrder() {
        var ordertotal = 0;

        $(".qty").each(function () {
            var index = $(this).attr("id");
            var qty = parseFloat($(this).val());

            if (isNaN(qty)) {
                qty = 0;
                $(this).val(0);
            }

            var price = parseFloat($("#price" + index).text());
            var total = price * qty;

            $("#total" + index).text(total.toFixed(2));
            ordertotal += total;
        });

        $("#subt").text(ordertotal.toFixed(2));

        var tax = 0;
        var shipState = $("#shipstate").val();

        if (shipState === "TX") {
            tax = ordertotal * 0.08;
        }

        $("#tax").text(tax.toFixed(2));
        ordertotal += tax;

        var shipping = 10;

        if (shipState === "TX") {
            shipping = 5;
        } else if (shipState === "CA" || shipState === "NY") {
            shipping = 20;
        }

        $("#ship").text(shipping.toFixed(2));
        ordertotal += shipping;

        $("#gTotal").text(ordertotal.toFixed(2));
    }

    $(".qty").blur(function () {
        calculateOrder();
    });

    $("#shipstate").change(function () {
        calculateOrder();
    });

    $("#order").submit(function (evt) {
        if (!validateForm()) {
            evt.preventDefault();
        }
    });

});