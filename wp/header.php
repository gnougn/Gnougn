<!DOCTYPE html>
<html>

<head>
    <?php wp_head(); ?>
    <title>Gnougn: handmade everything</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Amatic+SC" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Gaegu:300,400,700&amp;subset=korean" rel="stylesheet">
    </link>
    <link href="https://fonts.googleapis.com/css?family=VT323" rel="stylesheet">
    <audio id="componentSound" src="http://gnougn.com/audio/mike.mp3" autostart="false"></audio>
    <!-- firebase -->
    <script src="https://www.gstatic.com/firebasejs/4.8.0/firebase.js"></script>
</head>

   <body id="component_app_body" class="position_relative width_100 float_left overflow_y scrollbaryhidden">
      <header 
        id="component_app_header" class="position_relative width_100 height_1vh float_left overflow_y scrollbaryhidden background_white"></header>
      <section
        tabindex="1"
        id="component_app"
        class="position_relative width_100 height_100vh min_height_100vh float_left overflow_y scrollbaryhidden background_white">
      </section>