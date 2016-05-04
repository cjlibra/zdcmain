 
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
				
				
				$('#sstab1').tabs('update',{
					tab:$('#sstab1').tabs('getTab','DataGrid12'),
					options:{
					selected:true
					}
					});
        });

       