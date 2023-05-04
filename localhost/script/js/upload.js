$('#upload-form').submit(function(e) {
    // disable the standard form of behavior
    e.preventDefault();

    // we receive data from the form
    var formData = new FormData($(this)[0]);
    $.ajax({
        // the address of the PHP script for saving the photo on the server
        url: '../script/php/save_photo.php',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {

            // set a timeout of 0.2 seconds before reloading the page
            setTimeout(function() {
                location.reload();
            }, 200);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("error");
        }
    });
});
