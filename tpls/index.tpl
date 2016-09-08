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
            <a class="navbar-brand" href="#" id="appShortTitle">ICB</a>
          </div>
          <ul class="nav navbar-nav navbar-right collapse navbar-collapse" id="header-menu">
            <li role="presentation"><a href="#section-calendar">Calendario</a></li>
            <li role="presentation"><a href="#section-explorer">Documentos</a></li>
            <li role="presentation"><a href="#section-chat">Chat</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- Front -->
    <section class="section-front" id="section-front">
      <div class="image-effect"></div>
      <div class="container text-center front-title" id="front-title-container">
          <h1 id="appTitle">Introducción a las Construcciones B <small>Facultad de Arquitectura Urbanismo y Diseño de la Universidad Nacional de Mar del Plata</small></h1>
          <div id="form-signin">
            <form class="form-signin col-md-6 col-md-offset-3" >
              <h2 class="form-signin-heading">Ingresar</h2>
              <label for="inputPassword" class="sr-only">Password</label>
              <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="remember-me"> recordar 
                </label>
              </div>
              <button class="btn btn-lg btn-primary btn-block" type="button" id="loginPass">Ingresar</button>
            </form>
          </div>
      </div>
    </section>

    <!-- Calendar -->
    <a class="anchor" id="section-calendar"></a>
    <section class="section-calendar" id="section-calendar-root">
    </section>

    <!-- Explorer -->
    <a class="anchor" id="section-explorer"></a>    
    <section class="section-explorer" id="root">
    </section>

    <!-- Chat -->
    <a class="anchor" id="section-chat"></a>
    <section class="section-chat" id="section-chat-root">
    </section>

    <!-- Footer -->
    <section class="section-footer" id="section-footer">
      <div class="container ro::beforew">
        <div class="col-sm-4 text-xs-center text-sm-left" id="footer-links"></div>
        <div class="col-sm-8 footer-text text-xs-center text-sm-right">
          Realizado con <a href="https://github.com/ggsalas/dropboxWeb-c0"> DropboxWeb</a>
        </div>      
      </div>
    </section>

    <script src="{{ main }}"></script>
  </body>
</html>

