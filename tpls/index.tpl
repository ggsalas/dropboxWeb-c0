<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Introducción a las Construcciones B</title>
    <link href=" {{ css }} " rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
  </head>
  <body data-spy="scroll" data-target="#navbar" data-offset="50">
    <!-- Navbar -->
    <div class="header" id="navbar">
      <nav class="navbar navbar-default navbar-inverse navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#header-menu" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">ICB</a>
          </div>
          <ul class="nav navbar-nav navbar-right collapse navbar-collapse" id="header-menu">
            <li role="presentation"><a href="#section-calendar">Calendario</a></li>
            <li role="presentation"><a href="#section-explorer">Documentos</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- Front -->
    <section class="section-front" id="section-front">
      <div class="image-effect"></div>
      <div class="container text-center front-title">
          <h1>Introducción a las Construcciones B <small>Facultad de Arquitectura Urbanismo y Diseño de la Universidad Nacional de Mar del Plata</small></h1>
      </div>
    </section>

    <!-- Calendar -->
    <a class="anchor" id="section-calendar"></a>
    <section class="section-calendar" id="section-calendar-root">
      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="false" >
        <!-- Indicators -->
        <ol class="carousel-indicators" id="carousel-indicators-node">
        </ol>

      <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox" id="carousel-inner-node">
        </div>

        <!-- Controls --> 
        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
    <!-- Explorer -->
    <a class="anchor" id="section-explorer"></a>    
    <section class="section-explorer">
      <div class="container">
        <H2 class="text-center">Documentos de cátedra</h2>
        <div id="root" class="row"></div>
      </div>
    </section>

    <!-- Footer -->
    <section class="section-footer" id="section-footer">
      <div class="container ro::beforew">
        <div class="col-sm-8 footer-text text-xs-center text-sm-left">
          Cátedra de Introducción a las Construcciones B, de la FAUD UNMDP
        </div>
        <div class="col-sm-4 text-xs-center text-sm-right">
          <a href="#" class="btn btn-default"><i class="fa fa-facebook"></i></a>
          <a href="#" class="btn btn-default"><i class="fa fa-twitter"></i></a>
          <a href="#" class="btn btn-default"><i class="fa fa-linkedin"></i></a>
        </div>
      </div>
    </section>

    <script src="{{ main }}"></script>
  </body>
</html>

