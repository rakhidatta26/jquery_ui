$(document).ready(function(){
	// Draggable
	$( "#draggable" ).draggable();
	

    // Droppable - Default functionality
    $( "#draggable1" ).draggable();
    $( "#droppable1" ).droppable({
      drop: function( event, ui ) {  
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
          .html( "Dropped!" );
          }
         });
    // Resizable
    $( "#resizable" ).resizable();
    // Selectable
    $( "#selectable" ).selectable();

    // sortable
    $( "#sortable" ).sortable();
    // Accordion
    $( "#accordion" ).accordion({
      collapsible: true
    });

    // Autocomplete
     var data = [
      "BASIC",
      "C",
      "C++",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#c_name" ).autocomplete({
      source: data
    });
    // Datepicker
    $( "#datepicker" ).datepicker();

    // Tabs
    $( "#tabs" ).tabs({
      collapsible: true
    });
    // Tooltip
    $( document ).tooltip();

    
    // Add class
     $( ".btn1" ).on( "click", function() {
      $( "#effect1" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect1" ).removeClass( "newClass" );
      }, 1500 );
    }

    // show
    function runEffect() {
   
      var data = $( "#effectTypes" ).val();
 
      var options = {};
      if ( data === "scale" ) {
        options = { percent: 50 };
      } 
      else if ( data === "size" ) {
        options = { to: { width: 280, height: 185 } };
      }
 
      $( "#effect_s" ).show( data, options, 500, callback );
    };
 
    function callback() {
      setTimeout(function() {
        $( "#effect_s:visible" ).removeAttr( "style" ).fadeOut();
      }, 1000 );
    };
 
    $( "#button2" ).on( "click", function() {
      runEffect();
    });
 
    $( "#effect_s" ).hide();
});
