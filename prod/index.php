<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>

   <body  class="position_relative width_100 float_left overflow_y">
      <header></header>
      <section
        tabindex="1"
        id="component_app"
        class="position_relative width_100 min_height_100vh float_left overflow_y background_white">
      </section>
      <footer></footer>

<?php
get_footer();
