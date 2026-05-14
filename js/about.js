$(document).ready(function () {

    // =========================
    // CUSTOM FUNCTION (REQUIRED)
    // =========================
    function highlightSection() {
        $("#details").css("border", "2px solid darkgreen");
    }

    highlightSection();

    // =========================
    // jQuery EFFECT #1 (fade toggle)
    // =========================
    $("#toggleBtn").click(function () {
        $("#details").fadeToggle("slow");
    });

    // =========================
    // jQuery EFFECT #2 (hover effect)
    // =========================
    $("h2").hover(
        function () {
            $(this).css("color", "purple");
        },
        function () {
            $(this).css("color", "black");
        }
    );

});