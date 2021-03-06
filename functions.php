<?php

// ACTIVTATION DU THEME ENFANT

function theme_enqueue_styles() {
 wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );


// SUPPRESSION DU NUMERO DE VERSION DE WORDPRESS

function dc_delete_version() {
  return '';
}
add_filter('the_generator', 'dc_delete_version');

//test
// AJOUT DES ICONES FONT AWESOME

function dc_load_fontawesome() {
  wp_enqueue_style( 'font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', null, '4.7.0' );
}
add_action('wp_enqueue_scripts', 'dc_load_fontawesome');


// MASQUER LES ERREURS DE CONNEXION A L'ADMINISTRATION

function wpm_hide_errors() {
	return "L'identifiant ou le mot de passe est incorrect";
}
add_filter('login_errors', 'wpm_hide_errors');


// Ajout de script

add_action( 'wp_enqueue_scripts', 'theme_child_enqueue_js' );
function theme_child_enqueue_js() {
wp_enqueue_script( 'custom-script', get_stylesheet_directory_uri() . '/js/custom.js',array('jquery') );
}
?>