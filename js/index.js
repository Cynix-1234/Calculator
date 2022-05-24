const screen = document.querySelector(".screen")
const keys = document.querySelector(".keys")
const cancel = document.querySelector(".cancel")
var timer

keys.addEventListener("click", event => {
		const keyValue = event.target.textContent
		const screenValue = screen.textContent
		switch (keyValue) {
				case "=" :
						var replace = screenValue.replace(/×/g, "*"). replace(/÷/g, "/")
						screen.textContent = eval(replace)
						return
						break
				case "C" :
						return
						break
				default:
						
		}
		if (screenValue.length > 13) return
		if (screenValue == "0") screen.textContent = keyValue
		if (screenValue != "0") screen.textContent = screenValue + keyValue;
})

cancel.addEventListener("click", event => {
		const screenValue = screen.textContent
	  if (screenValue.length < 2) return screen.textContent = "0" 
	  screen.textContent = screenValue.substring(0, screenValue.length-1)
})
cancel.addEventListener("touchstart", event => {
		timer = setInterval(function() {
				const screenValue = screen.textContent
	  		if (screenValue.length < 2) return screen.textContent = "0" 
	  		screen.textContent = screenValue.substring(0, screenValue.length-1)
		}, 100)
})
cancel.addEventListener("touchend", event => {
		clearInterval(timer)
})
