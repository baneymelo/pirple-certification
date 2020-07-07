//Collection of datas

var title = ["Godzilla","Myron","P2"];
var album = ["Music to Be Murdered By","Eternal Atake (Deluxe) - LUV vs. The World 2","Eternal Atake"];
var track = [1,2,3];
var genre = ["Rap","Trap","Trap"];
var subgenre = ["Urban","Urban","Urban"];
var primaryArtists = ["Eminem","Lil Uzi Vert","Lil Uzi Vert"];
var featuredArtists = ["Juice WRLD","Oogie","NA"];
var composers = ["Marshal Matters","Fito","Charles"];
var publishers = [true,false,true];
var producers = ["Eminem & D.A. Doman","Supah Mario & Oogie Mane","TM88"];
var additionalContributors = [true,true,false];
var explicitContent = [true,true,true];
var year = [2020,2020,2020];
var film = [true,false, false];

//Constructor

function songConstructor(title,album,track,genre,subgenre,primaryArtists,featuredArtists,composers,publishers,producers,additionalContributors,explicitContent,year,film){
    this.title = title;
    this.album = album;
    this.track = track;
    this.genre = genre;
    this.subgenre = subgenre;
    this.primaryArtists = primaryArtists;
    this.featuredArtists = featuredArtists;
    this.composers = composers;
    this.publishers = publishers;
    this.producers - producers;
    this.additionalContributors = additionalContributors;
    this.explicitContent = explicitContent;
    this.year = year;
    this.film = film;
}

//Variable

var listSong = [new songConstructor(title[0],album[0],track[0],genre[0],subgenre[0],primaryArtists[0],featuredArtists[0],composers[0],publishers[0],producers[0],additionalContributors[0],explicitContent[0],year[0],film[0]),new songConstructor(title[1],album[1],track[1],genre[1],subgenre[1],primaryArtists[1],featuredArtists[1],composers[1],publishers[1],producers[1],additionalContributors[1],explicitContent[1],year[1],film[1]),new songConstructor(title[2],album[2],track[2],genre[2],subgenre[2],primaryArtists[2],featuredArtists[2],composers[2],publishers[2],producers[2],additionalContributors[2],explicitContent[2],year[2],film[2])];


//Calling songs

console.log(listSong[0]);