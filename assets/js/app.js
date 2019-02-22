(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */
  
    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
  })(jQuery);

  $(document).ready(function() {

    $(".button-collapse").sideNav();
    $(window).scroll(function(event) {
  
        $(".module").each(function(i, el) {
          var el = $(el);
          if (el.visible(true)) {
            el.addClass("come-in"); 
          } 
        });
        
      });
      $("#phoneToggle").on("click", function(){
          if($(this).attr("data-visibility") == "hidden"){
            $("#phoneNumber").text("512.938.9851");
            $(this).attr("data-visibility", "visible");
            $("#phoneToggle").text("Hide");
          } else {
            $("#phoneNumber").text("512.*******");
            $(this).attr("data-visibility", "hidden");
            $("#phoneToggle").text("Show");
          }
      });
      $("#emailToggle").on("click", function(){
        if($(this).attr("data-visibility") == "hidden"){
          $("#emailAddress").html("<a href='mailto:trentdavisinc@gmail.com'>trentdavisinc@gmail.com</a>");
          $(this).attr("data-visibility", "visible");
          $("#emailToggle").text("Hide");
        } else {
          $("#emailAddress").text("*************@gmail.com");
          $(this).attr("data-visibility", "hidden");
          $("#emailToggle").text("Show");
        }
    });
    $(function(){
     
      var current = document.location.pathname;
      current = current.toString();
      current = current.replace("/updated-portfolio/", "");
      console.log(current)
      $('.nav-item a').each(function(){
          var $this = $(this);          
          if($this.attr('href').indexOf(current) !== -1){
            $this.parent().addClass('active');
        } 
      })
  })
  
  });
 
