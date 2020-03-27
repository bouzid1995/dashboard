define( function() {
	"use strict";

	return ( /^(?:checkbox|radio)$/i );
} );
define( [
	"../var/pnum"
], function( pnum ) {

"use strict";

return new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );

} );
