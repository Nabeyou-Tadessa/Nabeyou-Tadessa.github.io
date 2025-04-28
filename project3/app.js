var main = function() {
    var state;
    var volume;

    // The PLAY button
    $('#play').click(function() {
        $('#message').text("Playing track");
        $('#player').trigger("play");
    });

    // The PAUSE button
    $('#pause').click(function() {
        $('#message').text("Track paused");
        $('#player').trigger("pause");
    });

    // The STOP button
    $('#stop').click(function() {
        $('#player').trigger("pause");
        $('#player').prop('currentTime', 0);
        $('#message').text("Track stopped");
    });

    // The MUTE/UNMUTE toggle button
    $('#mute').click(function() {
        var muted = $('#player').prop('muted');
        $('#player').prop('muted', !muted);

        if (!muted) {
            $('#message').text("Muted");
            $('#mute').text("Unmute");
        } else {
            $('#message').text("Unmuted");
            $('#mute').text("Mute");
        }
    });

    // The UNMUTE button
    $('#unmute').click(function() {
        $('#player').prop('muted', false);
        $('#message').text("Unmuted");
    });

    // Volume Up button
    $('#volUp').click(function() {
        var currentVolume = $('#player').prop('volume');
        if (currentVolume < 1.0) {
            var newVolume = Math.min(currentVolume + 0.1, 1.0);
            $('#player').prop('volume', newVolume.toFixed(2));
            $('#message').text("Volume: " + Math.round(newVolume * 100) + "%");
        } else {
            $('#message').text("Volume is already at max");
        }
    });

    // Volume Down button
    $('#volDown').click(function() {
        var currentVolume = $('#player').prop('volume');
        if (currentVolume > 0.0) {
            var newVolume = Math.max(currentVolume - 0.1, 0.0);
            $('#player').prop('volume', newVolume.toFixed(2));
            $('#message').text("Volume: " + Math.round(newVolume * 100) + "%");
        } else {
            $('#message').text("Volume is already at minimum");
        }
    });
};

$(document).ready(main);
