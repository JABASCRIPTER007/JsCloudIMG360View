<?php
// Check if files were transferred
if (!empty($_FILES['photo'])) {
  $total_files = count($_FILES['photo']['name']);
  $counter = 0;
  // Iterate over all files
  for ($i = 0; $i < $total_files; $i++) {
    // Check for errors during download
    if ($_FILES['photo']['error'][$i] === UPLOAD_ERR_OK) {
      // Get the temporary file name
      $temp_name = $_FILES['photo']['tmp_name'][$i];
      // Generate a unique name for the file in the uploads folder
      $new_name = '../../uploads/' . ($counter + 1) . '.jpg';
      // Move the file from the temporary path to the folder on the server
      move_uploaded_file($temp_name, $new_name);
      // Display a message about the successful download of the file
      echo 'Photo ' . $_FILES['photo']['name'][$i] . ' saved successfully as ' . ($counter + 1) . '.jpg<br>';
      $counter++;
    } else {
      // Display an error message when downloading a file
      echo 'Error uploading photo ' . $_FILES['photo']['name'][$i] . '<br>';
    }
  }
  // Sort the uploaded files based on the user's selection
  $selected_files = $_POST['selected_files'];
  $sorted_files = array();
  foreach ($selected_files as $selected_file) {
    for ($i = 1; $i <= $counter; $i++) {
      if (strpos($selected_file, strval($i) . '.jpg') !== false) {
        $sorted_files[] = '../../uploads/' . $i . '.jpg';
      }
    }
  }
  // Rename the uploaded files based on the user's selection
  $total_sorted_files = count($sorted_files);
  for ($i = 0; $i < $total_sorted_files; $i++) {
    $new_sorted_name = '../../uploads/' . ($i + 1) . '.jpg';
    rename($sorted_files[$i], $new_sorted_name);
    echo 'Renamed ' . $sorted_files[$i] . ' to ' . $new_sorted_name . '<br>';
  }
}
?>
