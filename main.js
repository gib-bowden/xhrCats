var catContainer = document.getElementById("cats-container");

function domString(arr) {
	var domString = ""
	if (arr !== []) {
		for (let [i, item] of arr.entries()) {
			domString +=	`<div class="cat-card" id="card-${i}">
								<h1>${item.name}</h1>
								<h3>${item.color}</h3>
								<img src="${item.url}">
							</div>`;
		} 
		catContainer.innerHTML = domString;
	}
}

// domString(cats);

function doThisAfterFileLoads(){
	console.log("this", this.responseText);
	var data = JSON.parse(this.responseText);
	console.log("data", data);
	domString(data.cats);
}

function doThisIfLoadFails(){
	console.log("shit broke")
}


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", doThisAfterFileLoads)
myRequest.addEventListener("error", doThisIfLoadFails)
myRequest.open("GET", "cats.json")
myRequest.send();