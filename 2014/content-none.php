<?php
/**
 * The template part for displaying a message that posts cannot be found.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package flowen
 */
?>

<section class="inner no-results not-found">

	<h1><?php _e( 'Naffin\' here yet.', 'flowen-travel' ); ?></h1>

	<div class="page-content">
		<?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>

			<p><?php printf( __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'flowen-travel' ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>

		<?php /*
		<?php elseif ( is_search() ) : ?>

			<p><?php _e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'flowen-travel' ); ?></p>
			<?php get_search_form(); ?>

		<?php else : ?>

			<p><?php _e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'flowen-travel' ); ?></p>
			<?php get_search_form(); ?>

		<?php endif; ?>
		*/ ?>
		
	</div><!-- .page-content -->
</section><!-- .no-results -->
