

<?php

require '/conn.php';

 // $result = mysqli_query($con,"SELECT * FROM mon_table");
// SELECT COUNT(DISTINCT column_name) FROM table_name;
$result = mysqli_query($con,"SELECT * FROM mon_table WHERE Attribute = 'Fire'");






echo '<table class="mdl-data-table">';
    echo "<tr>";

        echo "<th>Awakened</th>";
        echo "<th>Name</th>";
        echo "<th>Stars</th>";
        echo "<th>Attribute</th>";


        echo "</tr>";

    while($row = mysqli_fetch_array($result))
         {
    echo "<tr>";
        echo "<td>" . $row['Awakened'] . "</td>";
        echo "<td>" . $row['Name'] . "</td>";
        echo "<td>" . $row['Stars'] . "</td>";
        echo "<td>" . $row['Attribute'] . "</td>";
        echo "</tr>";
    }
    echo "</table>";





mysqli_close($con);



?>


<!-- /.container -->