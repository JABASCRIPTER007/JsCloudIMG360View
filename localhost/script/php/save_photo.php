<?php
// Check if files were transferred
if (!empty($_FILES['photo'])) {
  // Iterate over all files
  foreach ($_FILES['photo']['name'] as $key => $name) {
    // Check for errors during download
    if ($_FILES['photo']['error'][$key] === UPLOAD_ERR_OK) {
    // Get the temporary file name
      $temp_name = $_FILES['photo']['tmp_name'][$key];
     // Generate a unique name for the file in the uploads folder
      $new_name = '../../uploads/' . $name;
     // Move the file from the temporary path to the folder on the server
      move_uploaded_file($temp_name, $new_name);
      // Display a message about the successful download of the file
      echo 'Photo ' . $name . ' saved successfully';
    } else {
      // Display an error message when downloading a file
      echo 'Error uploading photo ' . $name;
    }
  }
}
?>
