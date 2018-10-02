<?php

    $shirt = array(
        'color' => 'blue',
        'number' => 23,
        'size' => 'XL'
    );

    // nav menus

    register_nav_menus(array(
        'primary' => __( 'Primary Menu'),
        'secondary' => __( 'Secondary Menu'),
        'footer' => __( 'Footer Menu'),
        ));

    add_theme_support( 'post-formats', array(
                'quote',
                'image',
                'video',
                'gallery',
                'aside',
                'link',
                'status',
                'audio',
                'chat'
            ) );

    function testFunction()
        {
        echo "This is a test";
        }

    function add_theme_scripts() {

        wp_enqueue_style('main-styles', get_template_directory_uri() . '/dist/2eebd1f6c2cfdb9f261b72dbbe5a6555.css', array(), filemtime(get_template_directory() . '/dist/2eebd1f6c2cfdb9f261b72dbbe5a6555.css'), false);

    }

    add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );


?>