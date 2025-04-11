//------------------------------------C L A S S E S-----------------------------------

class Comic {   //Exercici 1
    constructor(id, title, issueNumber, description, pageCount, thumbnail, price, creators, characters) {
        this.id = id;
        this.title = title;
        this.issueNumber = issueNumber;
        this.description = description;
        this.pageCount = pageCount;
        this.thumbnail = thumbnail;
        this.price = price;
        this.creators = creators;
        this.characters = characters;
    }

    getThumbnailURL(){
        return this.thumbnail.getURL();
    }

}

class Thumbnail {
    constructor(path, extension){
        this.path = path;
        this.extension = extension;
    }

    getURL() {
        return (this.path+"."+this.extension);
    }
}

class Hero {   //Exercici 2
    constructor(idHero, name, description, modifiedDate, thumbnail, resourceURI, appears){
        this.idHero = idHero;
        this.name = name;
        this.description = description;
        this.modifiedDate = modifiedDate;
        this.thumbnail = thumbnail;
        this.resourceURI = resourceURI;
        this.appears = appears;
    }

    getThumbnailURL(){
        return this.thumbnail.getURL();
    }
}

class Favorites {    // Exercici 3
    constructor(){
        this.favorites = [];
    }

    //MÈTODES

    addFavorite(comic){
        if (!this.favorites.find(com => com.id === comic.id)) {
            this.favorites.push(comic);
            console.log("Comic added to favorite list");
        } else {
            console.log("Comic is already in the list");
        }
    }

    removeFavorite(comicId) {
        if (this.favorites.find(com => com.id === comicId)){
            this.favorites = this.favorites.filter(com => com.id !== comicId);
            console.log("Comic deleted from favorite list");
        } else {
            console.log("Comic is not on favorite list");
        }
    }

    showFavorites() {
        this.favorites.forEach(
            com => (console.log("ID : " + com.id + " - TITLE: " + com.title))
        )
    }

    addMultipleFavorites(...comics){
        comics.forEach(com => this.addFavorite(com));
    }

    copyFavorites() {
        const savedList = new Favorites;
        savedList.favorites = [...this.favorites];
        return savedList;
    }

}

//----------------------------F U N C I O N S----------------------------------------

function findComicById(list, idComic, i=0){    //Exercici 4

    if(i >= list.length){
        return null;
    }

    if (list.favorites[i].id === idComic){
        return list.favorites[i];
    } 
   
    return findComicById(list, idComic, i+1);
}

function calculateAveragePrice(collection){   //Exercici 5

    if (collection.length === 0){
        return 0;
    }

    let sumValue = collection.favorites.reduce((sum,com) => sum + com.price, 0);
    
    return (sumValue/collection.favorites.length);

}

function addMultipleFavorites(favoriteList, ...comics){  //Exercici 6
    comics.forEach(com => favoriteList.addFavorite(com));
}

function copyFavorites(collection) {   //Exercici 7
    const savedList = new Favorites;
    savedList = [...collection.favorites];
    return savedList;
}

function getAffordableComicTitles(collection, cash){ // Exercici 8
    if (cash === 0){
        console.log("Your cash is not enought to buy anything");
        return null;
    }

    return collection.favorites.filter(com => com.price <= cash).map(com => com.title);

}

//-------------------------C A S O S------------E X E M P L E -----------------------------------------

const ruta = new Thumbnail("https://www.uoc.edu/comic_1_spiderman","jpg");
const ruta2 = new Thumbnail("https://www.uoc.edu/foto_spiderman", "png");
const ruta3 = new Thumbnail("https://www.uoc.edu/comic_1_hulk","jpg");

const comic1 = new Comic(
    1,
    "Les aventures de l'increible Spiderman",
    10,
    "Primer episodi de la nova saga del elf verd",
    203,
    ruta,
    10,
    "Jaume Murgadas",
    "Spiderman, Elf Verd, Dona aranya"
);
const comic2 = new Comic(
    2,
    "Les aventures de l'increible Hulk",
    12,
    "Primer episodi de la nova saga del monstre verd",
    120,
    ruta2,
    5,
    "Jaume Murgadas",
    "Hulk, Hulka, Hulkets"
);
const comic3 = new Comic(
    24,
    "Les aventures de l'increible Hulk a Catalunya",
    34,
    "Últim episodi de la nova saga del monstre verd",
    178,
    ruta2,
    15,
    "Jaume Murgadas",
    "Hulk, Hulka, Hulkets"
);

const hero1 = new Hero(
    3,
    "Spiderman",
    "Heroi que l'ha picat una aranya",
    "04-04-2025",
    ruta2,
    "https://marvelapp.com/spiderman/",
    comic1 
);

//---------------------- C O M P R O V A C I Ó  D E  M É T O D E S---------------------------------

console.log("Exercici 1: Obtencio de la URL del thumbnail");
console.log(comic1.getThumbnailURL());
console.log("--------------------------------------------------------------");
console.log("Exercici 2: Obtencio d'un heroi i el seu thumbnail");
console.log(hero1);
console.log(hero1.getThumbnailURL());
console.log("--------------------------------------------------------------");
console.log("Exercici 3: Creacio llista favorits");
let llistaFav = new Favorites();
llistaFav.addFavorite(comic1);
console.log("Afegim comic a llista favorits");
console.log(llistaFav.favorites);
llistaFav.addFavorite(comic2);
llistaFav.removeFavorite(1);
console.log("Afegim segon comic i elimienm el primer");
llistaFav.showFavorites();
console.log("Afegim primer i tercer comic i fem còpia de la llista");
llistaFav.addMultipleFavorites(comic1, comic3);
let copiaLlista = new Favorites();
copiaLlista = llistaFav.copyFavorites();
console.log(copiaLlista);
console.log("--------------------------------------------------------------");
console.log("Exercici 4: Trobar un comic de la llista anterior amb el id 24");
console.log(findComicById(llistaFav, 24));
console.log("--------------------------------------------------------------");
console.log("Exercici 5: Calcular el preu mitja de la coleccio");
console.log(calculateAveragePrice(llistaFav) + " euros");
console.log("--------------------------------------------------------------");
console.log("Exercici 6 i 7: Similars al mètode de la classe Favorites");
let llistaFav2 = new Favorites();
addMultipleFavorites(llistaFav2, comic1, comic2, comic3);
llistaFav2.showFavorites();
console.log("--------------------------------------------------------------");
console.log("Exercici 8: Filtrar volums de llista anterior i preu de 10 euros");
console.log(getAffordableComicTitles(llistaFav2,10));
console.log("--------------------------------------------------------------");