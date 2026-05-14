$(document).ready(function () {

    // Hide newsletter form when page loads
    $("#newsSignup").hide();

    // Animate rose on page load
    $("#rose").animate(
        {
            right: "100px",
            opacity: 1
        },
        "slow",
        "swing"
    );

    // Click event for newsletter signup link
    $("#signuplink").click(function (evt) {
        evt.preventDefault();

        $("#newsSignup").slideToggle();

        if ($("#openclose").text() === "+") {
            $("#openclose").text("-");
        } else {
            $("#openclose").text("+");
        }
    });

    // Hover event for slogan
    $("#slogan").hover(
        function () {
            $(this).fadeOut("normal", "linear", function () {
                $(this).text("Hand Picked Just for You");
                $(this).fadeIn("slow", "swing");
            });
        },
        function () {
            $(this).fadeOut("fast", "swing", function () {
                $(this).text("The Power of Flowers");
                $(this).fadeIn("slow", "linear");
            });
        }
    );

    // Submit event for newsletter form
    $("#newsSignup").submit(function (evt) {
        evt.preventDefault();

        alert("Thank you for registering");
        $("#newsSignup").hide();
        $("#signuplink").fadeTo("slow", 0.3);
        $("#openclose").text("+");
    });

});