var utente = '{"nome":"Lorenzo","cognome":"Rosa","voto":30}';
console.log(typeof utente);
var utenteOBJ= JSON.parse(utente);
console.log(utenteOBJ);
console.log(typeof utenteOBJ);
var studente={
    nome:"Elena",
    cognome:"Bosio",
    voto: 30
}
var films=[
    '{"Title":"Rambo","Year":"2008","Rated":"R","Released":"25 Jan 2008","Runtime":"92 min","Genre":"Action, Thriller","Director":"Sylvester Stallone","Writer":"Art Monterastelli, Sylvester Stallone, David Morrell (character)","Actors":"Sylvester Stallone, Julie Benz, Matthew Marsden, Graham McTavish","Plot":"In Thailand, John Rambo joins a group of mercenaries to venture into war-torn Burma, and rescue a group of Christian aid workers who were kidnapped by the ruthless local infantry unit.","Language":"English, Burmese, Thai","Country":"Germany, USA, Thailand","Awards":"1 win & 1 nomination.","Poster":"https://m.media-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.0/10"},{"Source":"Rotten Tomatoes","Value":"37%"},{"Source":"Metacritic","Value":"46/100"}],"Metascore":"46","imdbRating":"7.0","imdbVotes":"220,504","imdbID":"tt0462499","Type":"movie","DVD":"26 Aug 2016","BoxOffice":"$42,754,105","Production":"Lionsgate Films","Website":"N/A","Response":"True"}',
    '{"Title":"Pizza","Year":"2012","Rated":"Not Rated","Released":"19 Oct 2012","Runtime":"127 min","Genre":"Horror, Thriller","Director":"Karthik Subbaraj","Writer":"Prasad Ramar, Karthik Subbaraj","Actors":"Vijay Sethupathi, Ramya Nambeeshan, Aadukalam Naren","Plot":"A pizza delivery boy lands in a mysterious circumstance and it works a dramatic change in his life.","Language":"Tamil","Country":"India","Awards":"5 wins & 3 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BOTM3MzA2MDk4NV5BMl5BanBnXkFtZTgwNzM2ODczMDE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"75%"}],"Metascore":"N/A","imdbRating":"8.0","imdbVotes":"7,228","imdbID":"tt2585562","Type":"movie","DVD":"11 Mar 2017","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"}',
    '{"Title":"Kennedy","Year":"1983","Rated":"N/A","Released":"20 Nov 1983","Runtime":"282 min","Genre":"Biography, Drama, History","Director":"N/A","Writer":"N/A","Actors":"John Shea, E.G. Marshall, Geraldine Fitzgerald, Andrew Rayden","Plot":"Biography of the 1961-1963 Presidency of John F. Kennedy. This Landmark miniseries covers the momentous presidential years and the lives, loves, and triumphs of one of the most controversial families of the twentieth-century.","Language":"English","Country":"UK, USA","Awards":"Nominated for 3 Golden Globes. Another 2 wins & 4 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMzQ4NDEyMjc0M15BMl5BanBnXkFtZTcwMzczODAzMQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"67%"}],"Metascore":"N/A","imdbRating":"8.0","imdbVotes":"489","imdbID":"tt0085044","Type":"series","totalSeasons":"1","Response":"True"}',
    '{"Title":"Rome","Year":"2005–2007","Rated":"TV-MA","Released":"28 Aug 2005","Runtime":"52 min","Genre":"Action, Drama, History, Romance, War","Director":"N/A","Writer":"Bruno Heller, William J. MacDonald, John Milius","Actors":"Kevin McKidd, Ray Stevenson, Polly Walker, Kerry Condon","Plot":"A down-to-earth account of the lives of both illustrious and ordinary Romans set in the last days of the Roman Republic.","Language":"English","Country":"UK, USA","Awards":"Won 7 Primetime Emmys. Another 12 wins & 36 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BYTM4MmU1NWYtNzJjYy00YWFhLThjOGEtZmMxOGI1NzE0NGNiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.7/10"}],"Metascore":"N/A","imdbRating":"8.7","imdbVotes":"157,458","imdbID":"tt0384766","Type":"series","totalSeasons":"2","Response":"True"}',
    '{"Title":"Epic Movie","Year":"2007","Rated":"PG-13","Released":"26 Jan 2007","Runtime":"86 min","Genre":"Adventure, Comedy, Fantasy","Director":"Jason Friedberg, Aaron Seltzer","Writer":"Jason Friedberg, Aaron Seltzer","Actors":"Kal Penn, Adam Campbell, Jennifer Coolidge, Jayma Mays","Plot":"A spoof on previous years\' epic movies (The Da Vinci Code (2006), The Chronicles of Narnia: The Lion, the Witch and the Wardrobe (2005) + 20 more), TV series, music videos and celebs. 4 orphans are on an epic adventure.","Language":"English","Country":"USA","Awards":"2 wins & 3 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMTA3NDM5ODU3NzleQTJeQWpwZ15BbWU3MDgyMjgyNDE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"2.4/10"},{"Source":"Rotten Tomatoes","Value":"2%"},{"Source":"Metacritic","Value":"17/100"}],"Metascore":"17","imdbRating":"2.4","imdbVotes":"102,442","imdbID":"tt0799949","Type":"movie","DVD":"18 Sep 2012","BoxOffice":"$39,739,367","Production":"Regency Enterprises, 20th Century Fox, New Regency Pictures","Website":"N/A","Response":"True"}',
    '{"Title":"HungOver","Year":"2016","Rated":"UNRATED","Released":"N/A","Runtime":"N/A","Genre":"Drama","Director":"Jonathon Goodro","Writer":"Jonathon Goodro","Actors":"Morgan Matthews","Plot":"Kevin Mitchell\'s life is turned upside down after an unforeseen breakup of his longtime girlfriend, and a one-night stand with a mystifying, yet beautiful stranger, and must learn with some...","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BMjE2NDk3NTE3Nl5BMl5BanBnXkFtZTgwMzA3MTQxNTE@._V1_SX300.jpg","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt4552152","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"}',
    '{"Title":"The Hangover","Year":"2009","Rated":"R","Released":"05 Jun 2009","Runtime":"100 min","Genre":"Comedy","Director":"Todd Phillips","Writer":"Jon Lucas, Scott Moore","Actors":"Bradley Cooper, Ed Helms, Zach Galifianakis, Justin Bartha","Plot":"Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.","Language":"English","Country":"USA, Germany","Awards":"Won 1 Golden Globe. Another 12 wins & 25 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"},{"Source":"Rotten Tomatoes","Value":"78%"},{"Source":"Metacritic","Value":"73/100"}],"Metascore":"73","imdbRating":"7.7","imdbVotes":"726,669","imdbID":"tt1119646","Type":"movie","DVD":"07 Jan 2014","BoxOffice":"$277,322,503","Production":"Green Hat Films","Website":"N/A","Response":"True"}','{"Title":"The Hungover Games","Year":"2014","Rated":"R","Released":"18 Feb 2014","Runtime":"85 min","Genre":"Comedy","Director":"Josh Stolberg","Writer":"Kyle Barnett Anderson, David Bernstein, Jamie Kennedy","Actors":"Ross Nathan, Sam Pancake, Ben Begley","Plot":"A spoof on The Hangover (2009), The Hunger Games (2012) and other movies, TV series etc. 4 men, with hangovers after a bachelor party, find themselves in a future, dystopian, kill or be killed game.","Language":"English","Country":"United States","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BMTk0NjM3MDk3NV5BMl5BanBnXkFtZTgwNTEzNTY3MDE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"3.6/10"},{"Source":"Rotten Tomatoes","Value":"18%"}],"Metascore":"N/A","imdbRating":"3.6","imdbVotes":"13,376","imdbID":"tt3138104","Type":"movie","DVD":"05 Aug 2014","BoxOffice":"N/A","Production":"Silver Nitrate Pictures","Website":"N/A","Response":"True"}',
    '{"Title":"The Sex Movie","Year":"2006","Rated":"Not Rated","Released":"21 Jun 2006","Runtime":"84 min","Genre":"Drama","Director":"Colton Lawrence","Writer":"Colton Lawrence","Actors":"Michelle Mosley, Matthew Tyler, Mike Fallon","Plot":"Four friends spend an evening together after time apart. Differences in sex and sexuality reveal deep-rooted conflicts and long-hidden longings.","Language":"English","Country":"United States","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BMTY1MjA4MDgzNF5BMl5BanBnXkFtZTcwOTA3MDU1MQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"4.7/10"}],"Metascore":"N/A","imdbRating":"4.7","imdbVotes":"823","imdbID":"tt0823188","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"}'
]
var film='{"Title":"Django Unchained","Year":"2012","Rated":"R","Released":"25 Dec 2012","Runtime":"165 min","Genre":"Drama, Western","Director":"Quentin Tarantino","Writer":"Quentin Tarantino","Actors":"Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington","Plot":"With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.","Language":"English, German, French, Italian","Country":"USA","Awards":"Won 2 Oscars. Another 55 wins & 158 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.4/10"},{"Source":"Rotten Tomatoes","Value":"87%"},{"Source":"Metacritic","Value":"81/100"}],"Metascore":"81","imdbRating":"8.4","imdbVotes":"1,387,415","imdbID":"tt1853728","Type":"movie","DVD":"24 Mar 2017","BoxOffice":"$162,805,434","Production":"A Band Apart","Website":"N/A","Response":"True"}';
var filmOBJ= JSON.parse(film);
console.log(typeof filmOBJ);
var titolo=document.getElementById("titolo");
var immagine= document.getElementById("immag");
titolo.innerHTML=filmOBJ.Title;
immagine.innerHTML='<img src="'+filmOBJ.Poster+'" alt=""></img>';

var inSala= document.getElementById("inSala");

for (let index = 0; index < films.length; index++) {
    var filmsO=JSON.parse(films[index]);
   //inSala.innerHTML+="<div>";
   //inSala.innerHTML+="<div class='filmContainer'>";
    inSala.innerHTML+="<li><h1>"+filmsO.Title+'</h1><img src="'+filmsO.Poster+'" alt=""></li>';
    //inSala.innerHTML+="</div>";
   //inSala.innerHTML+="</div>";
   
}


//inizio carosello
var index=0;
var carosello=document.getElementById("carosello");


// carica()
// https://animate.style/



function cambiaFilm(index) {
    if (index>=films.length) {
        index=0;
    }
    var filmsO=JSON.parse(films[index]);
    carosello.innerHTML+="<h1>"+filmsO.Title+'</h1><img src="'+filmsO.Poster+'" alt="">';
    index=index+1;
}

