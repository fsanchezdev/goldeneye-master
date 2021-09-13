<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Goldeneye</title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>

<body>

 
  <div class="container-fluid mt-5">
    <div class="row text-center text-xl-start mb-xl-5">
      
      <form method="post" class="col-12 col-xl-6 pt-5 pb-xl-5 mb-5 mb-xl-0">
        <h1 class="mb-3">Goldeneye</h1>
        <p class="mb-5">Please insert the form from below to provide you the corporate email</p>

        <div class="form-group col-8 mb-5 d-inline-block">
         
          <input type="text" name="firstName" id="firstName" class="form-control" placeholder="First name" formControlName="firstName" required/>
        </div>

        <div class="form-group col-8 mb-5 d-inline-block">
          
          <input type="text" name="surName" id="surName" class="form-control" placeholder="Surname" formControlName="surName" required maxlength="16"/>
        </div>

        <div id="selects" class="col-8 d-inline-block">

        </div>

        <input type="submit" value="Generate email" class="col-8"></>

      </form>
      <div id="divResult" class="col-12 col-xl-6 pt-3 pt-xl-5 pb-xl-5">
	      <div class="col-8 col-xl-12 position-relative d-inline-block text-xl-center">
	        <div id="img" class="d-block mt-4 mt-xl-0"></div>
	        <div id="result" class="d-block d-flex align-items-center justify-content-center"></div>
	      </div>
      </div>

    </div>
  </div>



  <script type="text/javascript"  src="js/index.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
    crossorigin="anonymous"></script>
</body>

</html>