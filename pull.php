<?php
if ( $_POST['payload'] ) {
shell_exec( 'sudo -s && git pull' );
}
?>
