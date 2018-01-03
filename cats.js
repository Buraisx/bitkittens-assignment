document.addEventListener('DOMContentLoaded',function(){
	var summonKitten = document.querySelector('.summon-cats')
	summonKitten.addEventListener('click',function(){
		$.ajax({
			url: 'http://bitkittens.herokuapp.com/cats.json',
			method: 'GET',
			dataType: 'JSON'
		}).done(function(response){
			var catList = response['cats'];
			for (var i = 0; i < catList.length; i++) {
				catImage = `<img src="${catList[i].photo}" alt="${catList[i].name}">`
				catBox = document.querySelector(`#cat${i+1}`)
				console.log(catBox)
				catBox.insertAdjacentHTML('beforeend',catImage)
			}
		})
	})
})