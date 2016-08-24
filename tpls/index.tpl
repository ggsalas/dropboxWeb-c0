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
        <ol class="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

      <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <div class=" calendar-item text-center">
              <h3><span class="label label-default calendar-date">28 de julio</span>Clase 3: Materiales Cerámicos</h3>
              <p>Descripción de la clase Lorem Ipsum es simplemente el data-slidexto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un imptraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
              <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            </div>
          </div>
          <div class="item ">
            <div class="container calendar-item text-center">
              <h3><span class="label label-default calendar-date">28 de agosto</span>Clase 3: Materiales Cerámicos</h3>
              <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            </div>
          </div>         
          <div class="item ">
            <div class="container calendar-item text-center">
              <h3><span class="label label-default calendar-date">28 de setiembre</span>Clase 3: Materiales Cerámicos</h3>
              <p>Descripción de la clase Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un imptraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            </div>
          </div>
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

