window.onload = function() {
	var messages = [
		'Decide for me',
		'I\'m Tired, Decide for me',
		'I can\'t do it, Decide for me',
		'Decide for me Universe',
		'DECIDE'
	];
	var positive_messages = [
		'Yes, totally do it!',
		'Yes, do it!',
		'Yes - said the Universe.',
		'Yes.',
		'Why aren\'t you doing it yet? Yes.'
	];
	var negative_messages = [
		'No, don\'t do it!',
		'No - said the Universe.',
		'Better not to do it.',
		'Hell No.',
	];
	var how_urls = [
		'img/how/how1.png'
	];
	var positive_urls = [
		'img/yes/yes1.jpg',
		'img/yes/yes2.jpg',
		'img/yes/yes3.jpg',
		'img/yes/yes4.jpg',
		'img/yes/yes5.jpg',
		'img/yes/yes6.jpg',
		'img/yes/yes7.jpg'
	];
	var negative_urls = [
		'img/no/no1.jpg',
		'img/no/no2.jpg',
		'img/no/no3.jpg',
		'img/no/no4.jpg'
	];
	var nav_decide = document.getElementById('nav-decide');
	var nav_how = document.getElementById('nav-how');
	var main = document.getElementById('main');
	var get_random_element = function(array) {
		return array[Math.floor(Math.random() * array.length)];
	};
	var get_decide_button = function() {
		var button = document.createElement('button');

		button.id = 'decide';
		button.innerHTML = get_random_element(messages);
		button.className = 'button-xlarge pure-button';

		return button;
	};
	var get_decide_div = function() {
		var div = document.createElement('div');
		var p = document.createElement('p');
		var img = document.createElement('img');
		var answer = Math.random() < 0.5;

		p.innerHTML = get_random_element((answer) ? positive_messages : negative_messages);

		img.src = get_random_element((answer) ? positive_urls : negative_urls);
		
		div.id = 'message';
		div.appendChild(p);
		div.appendChild(img);

		return div;
	};
	var get_how_comic = function() {
		var img = document.createElement('img');

		img.src = get_random_element(how_urls);

		return img;
	};
	var clear_main_div = function() {
		while (main.hasChildNodes()) {
			main.removeChild(main.firstChild);
		}
	};

	nav_decide.addEventListener('click', function(event) {
		clear_main_div();
		main.appendChild(get_decide_button());
	});

	nav_how.addEventListener('click', function(event) {
		clear_main_div();

		var p = document.createElement('p');

		p.id = 'how-message';
		p.innerHTML = 'How the Decider makes its decision:';
		main.appendChild(p);
		main.appendChild(get_how_comic());
	});

	main.addEventListener('click', function(event) {
		if (event.target.id === 'decide') {
			for (var i = 0; i < main.children.length; i++) {
				var child = main.children[i];
				if (child.id === 'message') {
					main.removeChild(child);
				}
			}
			main.appendChild(get_decide_div());
		}
	});

	nav_decide.dispatchEvent(new MouseEvent('click', {
		view: window,
		bubbles: true,
		cancelable: true,
		clientX: 20
	}));
};
