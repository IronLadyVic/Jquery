$(function(){

	var bOpen = false; //after function has been run, the bOpen is now available. The relationship of bOpen to the function is called "Closure"

	$("#sidebar-handle").on("click",function(){

		if(bOpen == true){
				//want to close it
				$("#sidebar").animate({width: "3em"}, 1000,function(){
				//do this after animation has completed
				$("#sidebar-handle").removeClass("fa fa-arrow-circle-left fa-2x")
									.addClass("fa fa-arrow-circle-right fa-2x");	

				bOpen = false;
			});

		}else{
		//want to open it
		$("#sidebar").animate({width: "20em", height: "100%"}, 1000,function(){
			//do this after animation has completed
			$("#sidebar-handle").removeClass("fa fa-arrow-circle-right fa-2x")
								.addClass("fa fa-arrow-circle-left fa-2x");	

			bOpen = true;

		});
	}//on ready function
//side bar open and close
});


//accordinan bit

$(".accordian p").hide();
$(".accordian h2").on("click",function(){


	if($(this).data("open") == 1){
			//slide up
	$(this).next().slideUp(function(){
	$(this).prev().find("i").removeClass("fa fa-arrow-circle-up").addClass("fa fa-arrow-circle-down");
	$(this).prev().data("open",0);

	});

	}else{
	//slide down
	$(this).next().slideDown(function(){
	$(this).prev().find("i").removeClass("fa fa-arrow-circle-down").addClass("fa fa-arrow-circle-up");
	$(this).prev().data("open",1);
	});
}

});


});
