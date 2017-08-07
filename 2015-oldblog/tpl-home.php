<?php
/*
Template Name: home
*/

/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package flowen
 */

get_header(); ?>

<main id="main" class="site-main" role="main">
	<article class="inner home">
		<?php
			$page = get_page_by_title( 'homepage' );
			$content = apply_filters('the_content', $page->post_content); 
			echo $content;
		?>
	</article>
</main>


<?php get_footer(); ?>
