function loadContent(page){

	var home = {
		quote:'<p id="bannerTxt">&quot;I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.&quot;<br>-Bill Gates</p>',
		img:'sloth.jpg',
		content:'<h1>Welcome to Slothful Designs</h1><p>Slothful Designs is a game development company based in Helsinki, Finland.<br/>Currently we are working on our own game engine.</p>'
		}

	var games = {
		quote:'<p id="bannerTxt">&quot;I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.&quot;<br>-Bill Gates</p>',
		img:'sloth.jpg',
		content:'<h1>Games</h1><p>Coming soon... Stay tuned!</p>'
		}

	var about = {
		quote:'<p id="bannerTxt">&quot;I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.&quot;<br>-Bill Gates</p>',
		img:'sloth.jpg',
		content:'<h1>About</h1><p>Slothful Designs is a game development company based in Helsinki, Finland.<br/>Currently we are working on our own game engine.</p>'
		}

	var pages = {
		home: home,
		games: games,
		about: about
		}

	var current = pages[page];

	return current;

	}

var current = loadContent('home');

document.getElementById('header').innerHTML = '<img src="sloth-logo.svg" id="logo"/>';

document.getElementById('menu').innerHTML = '<a href="#" class="menu">HOME</a><a href="#" class="menu">GAMES</a><a href="#" class="menu">ABOUT</a>';

document.getElementById('banner').style.backgroundImage = 'url('+current['img']+')';

document.getElementById('banner').innerHTML = current['quote'];

document.getElementById('container').innerHTML = current['content'];
