$(document).ready(function () {

    // Hide botanic names immediately when page loads
    $(".botanic").hide();

    // Hide image divs immediately when page loads
    $(".imgdiv").hide();

    // Mouseover and mouseout for headings
    $("h1, h2").mouseover(function () {
        $(this).css("color", "purple");
    });

    $("h1, h2").mouseout(function () {
        $(this).css("color", "darkgreen");
    });

    // Click event for flowers
    $(".flower").click(function () {
        $(".botanic").hide();
        $(this).children(".botanic").show();
    });

    // Hover event for flowers with pictures
    $(".pic").hover(
        function (evt) {
            var imgID = "#" + $(this).attr("title");
            var x = evt.pageX + 150;
            var y = evt.pageY;

            $(imgID).css({
                left: x + "px",
                top: y + "px"
            }).show();
        },
        function () {
            var imgID = "#" + $(this).attr("title");
            $(imgID).hide();
        }
    );

    // Keypress event to jump to first flower with typed letter
    $(document).keypress(function (evt) {
        var keyPressed = String.fromCharCode(evt.which).toLowerCase();
        window.location = "#" + keyPressed;
    });

});