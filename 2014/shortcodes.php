<?php

add_shortcode('figure', function($atts) {
	$atts = shortcode_atts(
		array(
			'src' => '',
			'class' => 'left',
			'title' => ''
		), $atts);

    return'
        <figure class="img-' . $atts['class'] . '">
          <img src="' . $atts['src'] . '" alt="' . $atts['title'] . '">
          <figcaption>
            '. $atts['title'] .'
          </figcaption>  
        </figure>
        ';
});

add_shortcode('wrapper', function($atts, $content = null) {

    return'
        <div class="inner">
			 '. do_shortcode($content) .'
        </div>
        ';
});

add_shortcode('video', function($atts){
  $atts = shortcode_atts(
    array(
      'id' => ''
    ), $atts);

  return '<iframe src="//player.vimeo.com/video/' . $atts['id'] .'?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=0" class="video-player" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> ';
}); 



?>