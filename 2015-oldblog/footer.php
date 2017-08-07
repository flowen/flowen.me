<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package flowen
 */
?>

	</div><!-- #content -->

	<footer class="site-footer inner" role="contentinfo">
		<nav>
      <h2>sharing is caring</h2>
      <span class="nav-holder">
        <a href="<?php bloginfo('rss2_url'); ?>" class="icon icon-rss" target="_blank" title="RSS feed"></a>
        <a href="http://www.facebook.com/sharer.php?u=<?php if(is_home()){echo home_url();}else{the_permalink();} ?>" class="icon icon-fb" title="Share this page on Facebook" target="_blank"></a>
        <a href="http://twitter.com/share?url=<?php if(is_home()){echo home_url();}else{the_permalink();} ?>" target="_blank" class="icon icon-tw" title="Tweet this page" target="_blank"></a>
      </span>
      <p>
        &copy; copyright Rou Hun Fan
        <script type="text/javascript">
        var d = new Date();
        document.write(d.getFullYear());
        </script>
      </p>
    </nav>
	</footer><!-- #colophon -->

  <?php wp_footer(); ?>

  <script src="<?php echo get_template_directory_uri(); ?>/js/functions.js"></script>

</body>
</html>