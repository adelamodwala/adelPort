<?php

// This function include screen.css in wp_head() function

function enqueue_stylesheets() {

  // wp_register_style("liquid-slider", stylesheet_url("liquid-slider"), false, false);
  // wp_enqueue_style("liquid-slider");

  wp_register_style("owl.carousel", stylesheet_url("owl.carousel"), false, false); wp_enqueue_style("owl.carousel");
  wp_register_style("owl.theme", stylesheet_url("owl.theme"), false, false); wp_enqueue_style("owl.theme");
  wp_register_style("owl.transitions", stylesheet_url("owl.transitions"), false, false); wp_enqueue_style("owl.transitions");

  wp_register_style("solarized_light", stylesheet_url("solarized_light"), false, false);
  wp_enqueue_style("solarized_light");

  wp_register_style("screen", stylesheet_url("screen"), false, false);
  wp_enqueue_style("screen");
}

add_action('wp_enqueue_scripts', 'enqueue_stylesheets');

// This function include jquery and application.js in wp_footer() function

function enqueue_javascripts() {
  wp_enqueue_script("jquery");
  // wp_register_script("application", javascript_url("application"), '', false, true);
  // wp_enqueue_script("application");

  wp_register_script("css_browser_selector", javascript_url("css_browser_selector"), '', false, true);
  wp_enqueue_script("css_browser_selector");

  wp_register_script("jquery.waitforimages", javascript_url("jquery.waitforimages"), '', false, true);
  wp_enqueue_script("jquery.waitforimages");

  wp_register_script("TweenMax", javascript_url("TweenMax"), '', false, true);
  wp_enqueue_script("TweenMax");
  
  wp_register_script("ScrollToPlugin", javascript_url("ScrollToPlugin"), '', false, true);
  wp_enqueue_script("ScrollToPlugin");

  wp_register_script("jquery.touchSwipe.min", javascript_url("jquery.touchSwipe.min"), '', false, true);
  wp_enqueue_script("jquery.touchSwipe.min");

  wp_register_script("owl.carousel", javascript_url("owl.carousel"), '', false, true); wp_enqueue_script("owl.carousel");
  // wp_register_script("jquery.liquid-slider.min", javascript_url("jquery.liquid-slider.min"), '', false, true);
  // wp_enqueue_script("jquery.liquid-slider.min");

  wp_register_script("seedrandom", javascript_url("seedrandom"), '', false, true);
  wp_enqueue_script("seedrandom");

  wp_register_script("functional.min", javascript_url("functional.min"), '', false, true);
  wp_enqueue_script("functional.min");

  wp_register_script("highlight.pack", javascript_url("highlight.pack"), '', false, true);
  wp_enqueue_script("highlight.pack");

  wp_register_script("RandomLogo", javascript_url("RandomLogo"), '', false, true);
  wp_enqueue_script("RandomLogo");

  wp_register_script("home", javascript_url("home"), '', false, true);
  wp_enqueue_script("home");

}

add_action('wp_enqueue_scripts', 'enqueue_javascripts');
