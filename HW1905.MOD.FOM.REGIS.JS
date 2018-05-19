<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>BootStrap</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
  <link rel="stylesheet" href="style.css">


</head>
<body>

  <!-- Trigger the modal with a button -->
  <button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#LoginModal"> <span class="glyphicon glyphicon-user"></span> Login</button>

<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#RegisterModal"><span class="glyphicon glyphicon-user"></span>Register</button>

  <!-- Modal -->
  <div id="LoginModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content 1-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <div id="home" class="tab-pane fade in active">
                <h3>Login</h3>                  
                   <form action="/action_page.php">
                        <div class="form-group">
                          
                          <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                      </div>
                      <div class="form-group">
                          
                          <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd">
                      </div>
                      <div class="checkbox">
                            <label><input type="checkbox" name="remember"> Remember me</label>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                         </form> 
              </div>   
        </div>
      </div> 

    </div>
  </div>

  <!-- Modal -->
  <div id="RegisterModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
    
          <!-- Modal content 1-->
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <div id="home" class="tab-pane fade in active">
                    <h3>Register</h3>                  
                       <form action="/action_page.php">
                            <div class="form-group">
                               <!-- <label for="email">Email:</label>  -->
                              <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                          </div>
                          <div class="form-group">
                              
                              <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd">
                          </div>
                          <div class="checkbox">
                               <label><input type="checkbox" name="remember"> Remember me</label>
                           </div>
                           <div class="modal-footer">
                               <button type="submit" class="btn btn-primary">Submit</button>
                           </div>
                            </form>                       
                  </div>     
            </div>
          </div>     
        </div>
      </div>
 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>
