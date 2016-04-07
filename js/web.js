

$(document).ready(function(){
 
				
				
				
	
	var viewheight = $(window).height();
	var viewwidth = $(window).width();
	$(".maincontent").css("height",viewheight-30-30-30-20+"px");
	//$(".maincontent").css("background-color","blue");
	
	
	$('#switchbarimg').live('click',function(){
        $(this).toggle(function(i){
                $("#leftpage") .css('display','none');
				$('#switchbarimg').addClass("rotate");
				var widthmaincontent = 0.76 * viewwidth ;//$("#centertab").width();
				//alert(widthmaincontent);
				$("#centertab .tab_container").css("width",widthmaincontent+"px");
				
				$("#centertab ul.tabs").css("width",widthmaincontent-10+"px");
				$("#centertab ul.tabs").css("border-bottom", "1px solid #999");
            },
            function(i){
                $("#leftpage").css('display','block');
				$('#switchbarimg').removeClass("rotate");
				var widthmaincontent =  0.5 * viewwidth  ;//$("#centertab").width();
				//alert(widthmaincontent);
				$("#centertab .tab_container").css("width",widthmaincontent+"px");
				
				$("#centertab ul.tabs").css("width",widthmaincontent+"px");
				$("#centertab ul.tabs").css("border-bottom", "1px solid #999");
            }
            
        );
        $(this).trigger('click');
    });
	  
 
    	//$(".tabs").tabs(".pane", { history: true });
    $("ul.tab_content").hide(); //Hide all content  
    $("ul.tabs li:first").addClass("active").show(); //Activate first tab  
    $(".tab_content:first").show(); //Show first tab content  
      
    //On Click Event  
    $("#toptab .tabs li").click(function() {  
	    //console.log("ddd")
        $("#toptab ul.tabs li").removeClass("active"); //Remove any "active" class  
        $(this).addClass("active"); //Add "active" class to selected tab  
        $("#toptab .tab_content").hide(); //Hide all tab content  
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content  
        $(activeTab).fadeIn(); //Fade in the active content  
        return false;  
    });  
	
	
	 $("#bottomtab .tabs li").click(function() {  
	   // console.log("ddd")
        $("#bottomtab ul.tabs li").removeClass("active"); //Remove any "active" class  
        $(this).addClass("active"); //Add "active" class to selected tab  
        $("#bottomtab .tab_content").hide(); //Hide all tab content  
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content  
        $(activeTab).fadeIn(); //Fade in the active content  
        return false;  
    });  
	
	
	 $("#centertab .tabs li").click(function() {  
	   // console.log("ddd")
        $("#centertab ul.tabs li").removeClass("active"); //Remove any "active" class  
        $(this).addClass("active"); //Add "active" class to selected tab  
        $("#centertab .tab_content").hide(); //Hide all tab content  
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content  
        $(activeTab).fadeIn(); //Fade in the active content  
        return false;  
    }); 
  
	
	
	
	
});







