<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Library Registration</title>
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
</head>
<div class="content">
    <center>
        <h1><u>Welcome to SPARK Library</u></h1>
    </center>
    <?php 
//variables    
$name=$_POST["firstname"] . " " .$_POST["lastname"];
$email=$_POST["email"];
$number=$_POST["contact"];
$payment=$_POST["payment"];
$address=$_POST["adress"];

//massege
echo "<b> hello, ".$name."! <br> <br></b>";
echo "We are sorry. Our Library System is still Under Construction. 
 But we recieved your <b>".$payment."</b>to our Bank Account. We post your printed Membership card to <b>".$address . " </b>Address.<br>We will contact you as soon as via Your <b>".$number."</b>Number. ";
 ?>
 
 <br><br>Thank You. <br>
    <p>
        <script>
            document.write('<a href="' + document.referrer + '">(Go Back to form)</a>');
        </script>
    </p>
</div>
</body>
<style>
    body {
        font-family: "Open Sans", sans-serif;
        line-height: 1.5rem;
        height: 50vh;
        margin: auto;
        display: flex;
        background: #ffb347;
        /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #ffcc33, #ffb347);
        /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #ffcc33, #ffb347);
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    
    h1 {
        color: #0800ff;
        line-height: 2.5rem;
    }
    
    .content {
        width: 50%;
        margin: auto;
        height: 15rem;
    }
    
    p {
        font-size: 15px;
    }
</style>