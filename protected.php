<?php

require_once 'includes/main.php';

$user = new User();

if(!$user->loggedIn()){
	redirect('index.php');
}

?>

<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8"/>
		<title>Protected page</title>

		<link href="assets/css/style.css" rel="stylesheet" />		
		
	</head>

	<body>

		<div id="protected-page">
			<img src="assets/img/lock.jpg" alt="Lock" />
			<h1>You are logged in!</h1>

			<p>Email: <b><?php echo $user->email ?></b><br />
			</p>	

			<br><br><br>
			<div align="center">		

				<!-- using brolmo for the guestbook -->
				<link type="text/css" rel="stylesheet" href="http://www.brolmo.com/index.php?controller=AppGB&action=css&cid=13337&skin=2" />
				<script type="text/javascript" src="http://www.brolmo.com/index.php?controller=AppGB&action=load&hash=590dad3043ba0a3550faf2176ee4f38f7f3bd74b&aid=13807&cid=13337&locale=1"></script>
				<a id="BrolmoGBook_13337" href="http://www.brolmo.com/" target="_blank" title="Free Guest Book by Brolmo.com">Free Guest Book by Brolmo.com</a>
				
			</div>
			
			<br><br><br>
			<a href="index.php?logout=1" class="logout-button">Logout</a>

		</div>

	</body>
</html>