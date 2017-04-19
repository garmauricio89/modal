
document.addEventListener("DOMContentLoaded",function(){

	var modal=document.getElementById('modal')

	var submit=document.getElementById('submit')

	var close=document.getElementById('close')

	setTimeout(function(){
		modal.style.display = "block";
	},3000);

	close.addEventListener("click",function(event){modal.style.display="none";
		event.preventDefault();
	})

});