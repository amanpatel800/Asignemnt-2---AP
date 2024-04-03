$(document).ready(function () {
    // this section handles the scripts for q1
    $('button[role^="button"]').on('click', function () {
        var line = $(this).attr('role').replace('button', '');
        switch (line) {
            case 'E':
                $('.display-box[role="display-boxairtrain"]').text("Yes! Taking the E train to the Jamaica Station stop in Queens will allow you to connect to the AirTrain!");
                break;
            case 'D':
            case 'Q':
            case '1':
                $('.display-box[role="display-boxairtrain"]').text("Try again, the " + line + " line does not provide a direct connection to the AirTrain");
                break;

        }
    });

    // this section handles Q2
    $('button[role^="button"]').on('click', function () {
        var role = $(this).attr('role');
        switch (role) {
            case 'buttonright':
                $('.display-box[role="display-boxcolor"]').text("Yes! The ACE lines are all apart of the blue line!");
                break;
            case 'buttonwrong0':
            case 'buttonwrong1':
            case 'buttonwrong2':
                $('.display-box[role="display-boxcolor"]').text("Try again, these lines are not apart of the same color");
                break;
            default:

                break;
        }
    });

    // button code for MTA map link
    $('button[role="map"]').on('click', function () {
        var url = "https://new.mta.info/map/5341"
        window.location.href = url;
    });
});