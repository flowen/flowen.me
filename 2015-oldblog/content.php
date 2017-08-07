<?php
/**
 * @package flowen
 */
?>

<article id="post-<?php the_ID(); ?>" class="inner">
	<header class="entry-header">
		<h1><a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a></h1>
		
		<?php if ( 'post' == get_post_type() ) : ?>
		<div class="entry-meta">
			<?php flowen_travel_posted_on(); ?>
		</div><!-- .entry-meta -->
		<?php endif; ?>
	</header><!-- .entry-header -->


	<div class="entry-summary">
		<?php the_excerpt(); ?>
	</div><!-- .entry-summary -->


	<?php /*
	<footer class="entry-meta">
		<?php if ( 'post' == get_post_type() ) : // Hide category and tag text for pages on Search ?>
			<?php
				// translators: used between list items, there is a space after the comma 
				$categories_list = get_the_category_list( __( ', ', 'flowen-travel' ) );
				if ( $categories_list && flowen_travel_categorized_blog() ) :
			?>
			<span class="cat-links">
				<?php printf( __( 'Posted in %1$s', 'flowen-travel' ), $categories_list ); ?>
			</span>
			<?php endif; // End if categories ?>

			<?php
				// translators: used between list items, there is a space after the comma
				$tags_list = get_the_tag_list( '', __( ', ', 'flowen-travel' ) );
				if ( $tags_list ) :
			?>
			<span class="tags-links">
				<?php printf( __( 'Tagged %1$s', 'flowen-travel' ), $tags_list ); ?>
			</span>
			<?php endif; // End if $tags_list ?>
		<?php endif; // End if 'post' == get_post_type() ?>
	</footer><!-- .entry-meta -->
	*/ ?>
</article><!-- #post-## -->
