 
 
$(document).ready(function(){
   /*  var viewheight = $(window).height();
	 var viewwidth = $(window).width();
	 $("#mylayer").css("height",viewheight+"px!important");
	 alert(viewheight);
	 */
	 
	 // $("#tt").accordion('select',0);
	// $("#sstab1").tabs("select", 1);
	/* $('#stab1').tabs('update',{
		tab:$('#stab1').tabs('getTab','DataGrid12'),
		options:{
		selected:true
		}
		});*/
		
		//$("#atab1").prop("data-options","selected:true");
		//var tab = $('#tt').tabs('getSelected');
		//$("#sstab1").tabs("getTab","DataGrid12").panel('refresh');
		// $("#sstab1").tabs("select", 1);
		
		
	/*$('#sstab1').tabs('update',{
		tab:$('#sstab1').tabs('getTab','DataGrid12'),
		options:{
		selected:true
		}
		});*/
			
	$("#sstab1").tabs("select", 1);
	
	// Start 窗口的拖动  
    var _move=false;                 //移动标记   
    var _x,_y;                       //鼠标离控件左上角的相对位置  
	$("#zf_Box").click(function(){  
        //alert("click");//点击（松开后触发）  
  
            }).mousedown(function(e){   
                    if(!_move){  
                     _move=true;   
                     _x=e.pageX-parseInt($("#zf_Box").css("left"));   
                     _y=e.pageY-parseInt($("#zf_Box").css("top"));   
                      
                    }else{  
                     $("#zf_Box").fadeTo("fast", 1);    
                      _move=false;  
                  
                    }                          
            });   
    $(document).mousemove(function(e){   
		    if(_move){   
				var x=e.pageX-_x;                                   
				var y=e.pageY-_y;   
				$("#zf_Box").fadeTo(20, 0.5);  
				$("#zf_Box").css({top:y,left:x});                 
			}   
            }).mouseup(function(){   
                    _move=false;   
                    $("#zf_Box").fadeTo("fast", 1);                             
            }); 
});
		
function do1(){
	
	alert("1");
	
	$("#amaintab").tabs("select",2);
	
}
function do2(){
	
	alert("2");
	
	$("#amaintab").tabs("select",1);
	
}

       