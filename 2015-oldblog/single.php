<?php
/**
 * The Template for displaying all single posts.
 *
 * @package flowen
 */

get_header(); ?>

	<div class="content-area">
		<main class="site-main" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'content', 'single' ); ?>

			<?php flowen_travel_post_nav(); ?>

		<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>