/* @EdoardoOrta */




/* Oggetto Film di prova 
var film ={
    titolo:"Amandoti",
    poster:"https://pad.mymovies.it/filmclub/2008/11/079/locandinapg1.jpg",
    cast:"Harald Kloser, Larry J. Franco, Mark Gordon, Aaron Boyd, Volker Engel, Kirstin Winkler, Neal H. Moritz"
}*/


/* Array di film */
var filmArray=[
    '{"Title":"Rambo","Year":"2008","Rated":"R","Released":"25 Jan 2008","Runtime":"92 min","Genre":"Action, Thriller","Director":"Sylvester Stallone","Writer":"Art Monterastelli, Sylvester Stallone, David Morrell (character)","Actors":"Sylvester Stallone, Julie Benz, Matthew Marsden, Graham McTavish","Plot":"In Thailand, John Rambo joins a group of mercenaries to venture into war-torn Burma, and rescue a group of Christian aid workers who were kidnapped by the ruthless local infantry unit.","Language":"English, Burmese, Thai","Country":"Germany, USA, Thailand","Awards":"1 win & 1 nomination.","Poster":"https://m.media-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.0/10"},{"Source":"Rotten Tomatoes","Value":"37%"},{"Source":"Metacritic","Value":"46/100"}],"Metascore":"46","imdbRating":"7.0","imdbVotes":"220,504","imdbID":"tt0462499","Type":"movie","DVD":"26 Aug 2016","BoxOffice":"$42,754,105","Production":"Lionsgate Films","Website":"N/A","Response":"True"}',
    '{"Title":"Rome","Year":"2005–2007","Rated":"TV-MA","Released":"28 Aug 2005","Runtime":"52 min","Genre":"Action, Drama, History, Romance, War","Director":"N/A","Writer":"Bruno Heller, William J. MacDonald, John Milius","Actors":"Kevin McKidd, Ray Stevenson, Polly Walker, Kerry Condon","Plot":"A down-to-earth account of the lives of both illustrious and ordinary Romans set in the last days of the Roman Republic.","Language":"English","Country":"UK, USA","Awards":"Won 7 Primetime Emmys. Another 12 wins & 36 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BYTM4MmU1NWYtNzJjYy00YWFhLThjOGEtZmMxOGI1NzE0NGNiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.7/10"}],"Metascore":"N/A","imdbRating":"8.7","imdbVotes":"157,458","imdbID":"tt0384766","Type":"series","totalSeasons":"2","Response":"True"}',
    '{"Title":"Epic Movie","Year":"2007","Rated":"PG-13","Released":"26 Jan 2007","Runtime":"86 min","Genre":"Adventure, Comedy, Fantasy","Director":"Jason Friedberg, Aaron Seltzer","Writer":"Jason Friedberg, Aaron Seltzer","Actors":"Kal Penn, Adam Campbell, Jennifer Coolidge, Jayma Mays","Plot":"A spoof on previous years\' epic movies (The Da Vinci Code (2006), The Chronicles of Narnia: The Lion, the Witch and the Wardrobe (2005) + 20 more), TV series, music videos and celebs. 4 orphans are on an epic adventure.","Language":"English","Country":"USA","Awards":"2 wins & 3 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMTA3NDM5ODU3NzleQTJeQWpwZ15BbWU3MDgyMjgyNDE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"2.4/10"},{"Source":"Rotten Tomatoes","Value":"2%"},{"Source":"Metacritic","Value":"17/100"}],"Metascore":"17","imdbRating":"2.4","imdbVotes":"102,442","imdbID":"tt0799949","Type":"movie","DVD":"18 Sep 2012","BoxOffice":"$39,739,367","Production":"Regency Enterprises, 20th Century Fox, New Regency Pictures","Website":"N/A","Response":"True"}',
    '{"Title":"The Hangover","Year":"2009","Rated":"R","Released":"05 Jun 2009","Runtime":"100 min","Genre":"Comedy","Director":"Todd Phillips","Writer":"Jon Lucas, Scott Moore","Actors":"Bradley Cooper, Ed Helms, Zach Galifianakis, Justin Bartha","Plot":"Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.","Language":"English","Country":"USA, Germany","Awards":"Won 1 Golden Globe. Another 12 wins & 25 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"},{"Source":"Rotten Tomatoes","Value":"78%"},{"Source":"Metacritic","Value":"73/100"}],"Metascore":"73","imdbRating":"7.7","imdbVotes":"726,669","imdbID":"tt1119646","Type":"movie","DVD":"07 Jan 2014","BoxOffice":"$277,322,503","Production":"Green Hat Films","Website":"N/A","Response":"True"}','{"Title":"The Hungover Games","Year":"2014","Rated":"R","Released":"18 Feb 2014","Runtime":"85 min","Genre":"Comedy","Director":"Josh Stolberg","Writer":"Kyle Barnett Anderson, David Bernstein, Jamie Kennedy","Actors":"Ross Nathan, Sam Pancake, Ben Begley","Plot":"A spoof on The Hangover (2009), The Hunger Games (2012) and other movies, TV series etc. 4 men, with hangovers after a bachelor party, find themselves in a future, dystopian, kill or be killed game.","Language":"English","Country":"United States","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BMTk0NjM3MDk3NV5BMl5BanBnXkFtZTgwNTEzNTY3MDE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"3.6/10"},{"Source":"Rotten Tomatoes","Value":"18%"}],"Metascore":"N/A","imdbRating":"3.6","imdbVotes":"13,376","imdbID":"tt3138104","Type":"movie","DVD":"05 Aug 2014","BoxOffice":"N/A","Production":"Silver Nitrate Pictures","Website":"N/A","Response":"True"}',
    '{"Title":"2012","Year":"2009","Rated":"PG-13","Released":"13 Nov 2009","Runtime":"158 min","Genre":"Action, Adventure, Sci-Fi","Director":"Roland Emmerich","Writer":"Roland Emmerich, Harald Kloser","Actors":"John Cusack, Amanda Peet, Chiwetel Ejiofor, Thandiwe Newton","Plot":"A frustrated writer struggles to keep his family alive when a series of global catastrophes threatens to annihilate mankind.","Language":"English, French, Tibetan, Mandarin, Russian, Hindi, Portuguese, Latin, Italian, Spanish","Country":"USA","Awards":"5 wins & 21 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMTY0MjEyODQzMF5BMl5BanBnXkFtZTcwMTczMjQ4Mg@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.8/10"},{"Source":"Rotten Tomatoes","Value":"39%"},{"Source":"Metacritic","Value":"49/100"}],"Metascore":"49","imdbRating":"5.8","imdbVotes":"358,007","imdbID":"tt1190080","Type":"movie","DVD":"02 Oct 2012","BoxOffice":"$166,112,167","Production":"Centropolis Entertainment","Website":"N/A","Response":"True"}',
    '{"Title":"The Sex Movie","Year":"2006","Rated":"Not Rated","Released":"21 Jun 2006","Runtime":"84 min","Genre":"Drama","Director":"Colton Lawrence","Writer":"Colton Lawrence","Actors":"Michelle Mosley, Matthew Tyler, Mike Fallon","Plot":"Four friends spend an evening together after time apart. Differences in sex and sexuality reveal deep-rooted conflicts and long-hidden longings.","Language":"English","Country":"United States","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BMTY1MjA4MDgzNF5BMl5BanBnXkFtZTcwOTA3MDU1MQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"4.7/10"}],"Metascore":"N/A","imdbRating":"4.7","imdbVotes":"823","imdbID":"tt0823188","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"}'
]

/* Carosello Center */
var caroselloC= document.getElementById("center");

/* Carosello Left */
var caroselloL= document.getElementById("left");


/* Carosello Right */
var caroselloR= document.getElementById("right");






/*load() */
var indice=0;

function load() {
    if (indice<0) {
        indice=filmArray.length-1;
    } else if (indice>=filmArray.length){
        indice=0;
    }
    var film=JSON.parse(filmArray[indice]);
    /*Stampa carosello centrale */
    caroselloC.innerHTML='<h1>'+film.Title+'</h1><img src="'+film.Poster+'"><h2>Main Cast</h2><p>'+film.Actors+'</p>';
    
    /*Stampa carosello sinistro */
    var indiceLeft;
    if(indice-1<0){
        indiceLeft=filmArray.length-1;
    } else{
        indiceLeft=indice-1;
    }
    caroselloL.innerHTML='<h1>'+film.Title+'</h1><img src="'+film.Poster+'"><button class="caroselloButton" onclick="cambia(-1)">Precedente</button>';
    
    /*Stampa carosello destro */
    
    caroselloR.innerHTML='<h1>'+film.Title+'</h1><img src="'+film.Poster+'"><button class="caroselloButton" onclick="cambia(1)">Successivo</button>';
    
}







