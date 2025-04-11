class Comic {
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

class Hero {
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

const ruta = new Thumbnail("https://www.uoc.edu/comic_1_spiderman","jpg");
const ruta2 = new Thumbnail("https://www.uoc.edu/foto_spiderman", "png");
const comic1 = new Comic(
    1,
    "Les aventures de l'increible Spiderman",
    1-10,
    "Primer episodi de la nova saga del elf verd",
    203,
    ruta,
    "10€",
    "Jaume Murgadas",
    "Spiderman, Elf Verd, Dona aranya"
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

console.log(hero1.getThumbnailURL());

