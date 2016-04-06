


<?php

require '/conn.php';

$result = mysqli_query($con,"SELECT * FROM mon_table WHERE Name = 'Imp'");


$Name_test = $_GET[mon];

echo '<section class="demo-container md-whiteframe-z1"style="margin-top: 0px; padding-top: 8px;">';

   echo "<md-card>";
   echo "<md-card-title>";
   echo "<md-card-title-text>";
   echo '<span class="md-headline">Card with image</span>';
   echo '<span class="md-subhead">Large</span>';
   echo "</md-card-title-text>";
   echo "<md-card-title-media>";
   echo '<div class="md-media-lg card-media"></div>';
   echo "</md-card-title-media>";
   echo "</md-card-title>";
   echo '<md-card-actions layout="row" layout-align="end center">';
   echo "<md-button>Action 1</md-button>";
   echo "<md-button>Action 2</md-button>";
   echo "</md-card-actions>";
   echo "</md-card>";
   echo "<br>";

    while($row = mysqli_fetch_array($result))
             {
    echo "<ul>";
       echo "<li>" . $row['Awakened'] . "</li>";
         echo "<li>" . $row['Name'] ."</li>";
         echo "<li>" . $row['Stars'] . "</li>";
   echo "</ul>";
   }

    echo "<br>";

echo $Name_test ;
echo "</section>";

mysqli_close($con);


?>

