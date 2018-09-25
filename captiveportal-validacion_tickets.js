	window.onload = function() {
		var borrar = document.getElementById('borrar');
		borrar.addEventListener("click", borrarTodo);
		
		var ticket = document.getElementById('ticket');
		ticket.addEventListener("input", campoTicket);
	}

	function borrarTodo() {
		document.location.reload(true);
	}
	
	function campoTicket() {
		var ticketVoucher = document.getElementById('ticket').value;
		
		if (ticketVoucher) {
			document.getElementById('ticket_error').innerHTML = " ";
			document.getElementById('ticket').style.outline = "1px solid transparent";
		}
	}	


	function validacion_tickets() {
		var ticketVoucher = document.getElementById('ticket').value;
		var ticketCampo = document.getElementById('ticket');
		var ticketError = document.getElementById('ticket_error');
		
		if (!ticketVoucher) {
			var mensajeTicketError = "Por favor ingrese el Codigo del Voucher!";
			ticketError.innerHTML = mensajeTicketError;
			ticketCampo.style.outline = "1px solid #f00";
			return false;
		}
	}