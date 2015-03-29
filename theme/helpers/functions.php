<?php

	add_theme_support( 'widgets' );
	add_theme_support('menus');
	add_theme_support( 'post-thumbnails' ); 

	function slug($id) {
		return get_post($id)->post_name;
	}

?>