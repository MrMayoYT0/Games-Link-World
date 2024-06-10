function openGame(url) {
    window.open(url, '_blank');
}
function copyDiscordLink() {
    var copyText = document.getElementById("discord-invite-link");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");

    // Show confirmation message
    var confirmation = document.getElementById("copy-confirmation");
    confirmation.style.display = "block";

    // Hide confirmation message after 3 seconds
    setTimeout(function() {
        confirmation.style.display = "none";
    }, 3000);
}
function copyYouTubeLink() {
    var copyText = document.getElementById("youtube-subscribe-link");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");

    // Show confirmation message
    var confirmation = document.getElementById("copy-confirmation");
    confirmation.style.display = "block";

    // Hide confirmation message after 3 seconds
    setTimeout(function() {
        confirmation.style.display = "none";
    }, 3000);
}