<?php
if ( $_POST['payload'] ) {
shell_exec( 'sudo git reset –hard HEAD && sudo git pull' );
}
?>
