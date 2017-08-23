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

domString(cats);

domString(dogs);

domString(monkeys); 