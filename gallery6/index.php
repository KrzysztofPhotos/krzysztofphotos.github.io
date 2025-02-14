<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  		<title>Garry Gallery</title>
<!-- 

Highway Template

https://templatemo.com/tm-520-highway

-->
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="apple-touch-icon.png">

        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="css/fontAwesome.css">
        <!-- <link rel="stylesheet" href="css/light-box.css"> -->
        <link rel="stylesheet" href="css/templatemo-style.css">
        <link rel="stylesheet" href="css/shine-hover.css"> 

        <link href="https://fonts.googleapis.com/css?family=Kanit:100,200,300,400,500,600,700,800,900" rel="stylesheet">

        <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
    </head>

<body>

    <nav>
        <div class="logo">
            <a href="index.html">ONLINE<em>GALLERY</em></a>
        </div>
        <div class="menu-icon">
        <span></span>
      </div>
    </nav>

    <div id="video-container">
        <div class="video-overlay"></div>
        <div class="video-content">
            <div class="inner">
              <h1>Welcome to <em>Galery</em></h1>
              <p>The best wallpapers in the world!</p>
              <p>Pictures with the super resolution!</p>
                <div class="scroll-icon">
                    <a class="scrollTo" data-scrollTo="portfolio" href="#"><img src="img/scroll-icon.png" alt=""></a>
                </div>    
            </div>
        </div>
        <video autoplay="" loop="" muted>
        	<source src="video.mp4" type="video/mp4" />
        </video>
    </div>



    
     <?php
     
    $z = opendir('thumbnails');
    while ( $file = readdir( $z ) )
    {
     
    $parts = pathinfo( 'thumbnails/' . $file );
      if ( $parts['extension']  == 'jpg' ) // tylko gdy pliki maja rozszerzenie jpg.. 
      {
     
      echo '<div class="full-screen-portfolio" id="portfolio">';
      echo '<div class="container-fluid">';
      echo '<div class="col-md-4 col-sm-6">';
      echo '<div class="portfolio-item">';
      echo '<a href="images/'.$file.'"><div class="thumb">';
      echo '<div class="image">';
      
      echo '<div class="hover14 columns">';
      echo '<div>';
      echo '<figure><img src="thumbnails/' . $file . '"></figure>';
      echo '</div>';
      echo '</div>';
      
      echo '</div>';
      echo '</div></a>';
      echo '</div>';
      echo '</div>';
     
      }
     
    }
    closedir($z);
     
    ?>
                        
            

    
    


    <footer>
        <div class="container-fluid">
            <div class="col-md-12">
                <p>Copyright &copy; 2021 Company Name 
    
    | Designed by TemplateMo</p>
            </div>
        </div>
    </footer>

    <section class="overlay-menu">
      <div class="container">
        <div class="row">
          <div class="main-menu">
              <ul>
                  <li>
                      <a href="index.php">Gallery</a>
                  </li>
                  <li>
                      <a href="masonry.html">Home - Masonry</a>
                  </li>
                  <li>
                      <a href="grid.html">Home - Small-width</a>
                  </li>
                  <li>
                      <a href="about.html">About Us</a>
                  </li>
                  <li>
                      <a href="blog.html">Blog Entries</a>
                  </li>
                  <li>
                      <a href="single-post.html">Single Post</a>
                  </li>
              </ul>
              <p>We a create awesome pages for you.</p>
          </div>
        </div>
      </div>
    </section>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>

    <script src="js/vendor/bootstrap.min.js"></script>
    
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>

    
</body>
</html>