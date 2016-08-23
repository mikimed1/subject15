
				
			
				function countL(string, contain) {
    var string = document.getElementById("word").value;
    var contain = document.getElementById("letter").value;
   count = string.split(contain).length - 1;
    document.getElementById("result").innerHTML = count;
}

				
			

