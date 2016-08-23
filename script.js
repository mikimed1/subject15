function calc(a, b) {
				var a = document.getElementById("num1").value;
				var b = document.getElementById("num2").value;
				if (a > b)
					result = a +" is Bigger";
				else
					result = b +" is Bigger";
				document.getElementById("result").innerHTML = result;
			}