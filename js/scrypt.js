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

/* FUNCIONS */

function findComicById(list, idComic, i=0){    //Exercici 4

    if(i >= list.length){
        return null;
    }

    if (list.favorites[i].id === idComic){
        console.log("Punt2");
        return list.favorites[i];
    } 
   
    console.log("Punt3");
    return findComicById(list, idComic, i+1);
}

function calculateAveragePrice(collection){   //Exercici 5

    if (collection.length === 0){
        return 0;
    }

    let sumValue = collection.favorites.reduce((sum,com) => sum + com.price, 0);
    
    return (sumValue/collection.favorites.length);

}


/* CODI EXEMPLE*/

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

let patata = new Favorites();
patata.addMultipleFavorites(comic1,comic2,comic3);
patata.showFavorites();

console.log(patata.favorites);
console.log(calculateAveragePrice(patata));
