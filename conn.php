<?php

// Create connection
$mysqli=mysqli_connect("localhost:3306","mons","020408dcm","mons");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

  ?>