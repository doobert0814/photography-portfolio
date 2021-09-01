/* SORTING */ 

$(function(){
        
    var $container = $('.projects');

    $container.isotope({
	itemSelector : '.element'
    });
    
    var $optionSets = $('#options .option-set'),
	    $optionLinks = $optionSets.find('a');

    $optionLinks.click(function(){
	var $this = $(this);
	if ( $this.hasClass('selected') ) {
		return false;
	}
	var $optionSet = $this.parents('.option-set');
	$optionSet.find('.selected').removeClass('selected');
	$this.addClass('selected');

	var options = {},
		key = $optionSet.attr('data-option-key'),
		value = $this.attr('data-option-value');

	value = value === 'false' ? false : value;
	options[ key ] = value;
	if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {

	changeLayoutMode( $this, options )
	} else {

	$container.isotope( options );
	}
	
	return false;
    });

});