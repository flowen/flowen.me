<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package flowen
 */ 
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<link href='http://fonts.googleapis.com/css?family=Archivo+Narrow:700|Open+Sans:300italic,300,600' rel='stylesheet' type='text/css'>

	<?php wp_head(); ?>
	
	<script src="<?php echo get_template_directory_uri(); ?>/js/imagelightbox.min.js"></script>
</head>

<body <?php body_class(); ?>>

	<?php do_action( 'before' ); ?>
	<header class="header" role="banner">

		<div class="inner">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" class="site-title">
				<h1><?php bloginfo( 'name' ); ?></h1>
			</a>
			
			<div class="nav-holder">
				<h2><?php bloginfo( 'description' ); ?></h2>
				
				<nav class="main-navigation" role="navigation">	
					<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
				</nav>
			</div>
			
		</div>
	</header>

	<div class="site-content">
