
let openMenu = document.getElementById("btn_menu");
	  openMenu.addEventListener("click", abrirMenu);

	  function abrirMenu()
	  {
	  	if ($("#header").hasClass("activo"))
			{
		  	$("#header").removeClass(" activo");
		  	openMenu.innerHTML = "menu";
			}
			else
			{
	  		$("#header").addClass(" activo");
		  	openMenu.innerHTML = "close";				
			}

	  }
