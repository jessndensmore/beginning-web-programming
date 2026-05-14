$(document).ready(function () {

    // Hover effect for thumbnail images
    $("#thumbs img").hover(
        function () {
            $(this).css({
                "border": "thin solid darkgreen",
                "box-shadow": "3px 3px 8px gray"
            });
        },
        function () {
            $(this).css({
                "border": "none",
                "box-shadow": "none"
            });
        }
    );

    // Click thumbnail to change large image and caption
    $("#thumbs img").click(function () {
        var imageSource = $(this).attr("src");
        var imageAlt = $(this).attr("alt");

        $("#lgPic").attr("src", imageSource);
        $("#lgTitle").text(imageAlt);
    });

    // Click large image to open it in a new window
    $("#lgPic").click(function () {
        var largeImageSource = $(this).attr("src");
        window.open(largeImageSource);
    });

});