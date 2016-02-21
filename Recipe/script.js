$(document).ready(function() {
  console.log("Script included!");
  $(".checkbox_color").change(function(){
    if(($(this).is(":checked")) && ($(this).attr("class") === "checkbox_color")){
        $(this).parent().addClass("blue"); 
    }else{
        $(this).parent().removeClass("blue");  
    }
  });
  $("#img_hide_show").change(function(){
	if(($(this).is(":checked")) && ($(this).attr("id") === "img_hide_show")){
    	$('img').fadeOut('slow'); 
	}else{
    	$('img').fadeIn('slow');  
	}
  });
  $("#menu").accordion({collapsible: true, active: false});
});
    
/* Original that made the hidden images appear after the checkbox_color received a "check"
$(document).ready(function() {
  console.log("Script included!");
  $("input[type='checkbox']").change(function(){
    if(($(this).is(":checked")) && ($(this).attr("id") === "checkbox_color")){
        $(this).parent().addClass("blue"); 
    }else{
        $(this).parent().removeClass("blue");  
    }
  });
  $("input[type='checkbox']").change(function(){
	if(($(this).is(":checked")) && ($(this).attr("id") === "img_hide_show")){
    	$('img').fadeOut('slow'); 
	}else{
    	$('img').fadeIn('slow');  
	}
  });
  $("#menu").accordion({collapsible: true, active: false});
});
*/