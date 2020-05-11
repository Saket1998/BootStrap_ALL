$(document).ready(function(){
    $("#date").append(new Date().getFullYear());
    if( $('#dateOfLaunch').length )        
    {
        $("#dateOfLaunch").datepicker({
            uiLibrary: "bootstrap4",
            format: "dd/mm/yyyy",
        });
    }
});




const search = () => {
	let filter = document.getElementById('search').value.toUpperCase();
	let col = document.getElementById('movie');
	let eachCard = col.getElementsByClassName('card');
	let flag = 0;
	for (var i = 0; i < eachCard.length; i++) {
		let name = eachCard[i].getElementsByTagName('h5')[0];
		if (name) {
			let textValue = name.innerText;
			
			if (textValue.toUpperCase().indexOf(filter) > -1) {
				eachCard[i].style.display = "";
			} else {
				eachCard[i].style.display = "none";
				flag = flag + 1;
				
			}
		}
	}
	var moviesection = document.getElementById('moviesectionfail');
	if (flag == eachCard.length) {
		let filter = document.getElementById('search').value;
		moviesection.style.display = "";
		moviesection.innerHTML = "No Result Found with : " + "'" + filter + "'";
	} else {
		moviesection.style.display = "none";
	}
}



