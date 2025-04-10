class Comic {
    constructor(id, title, issueNumber, description, pageCount, thumbnail, price, creators, characters) {
        this.id = id;
        this.title = title;
        this.issueNumber = issueNumber;
        this.description = description;
        this.pageCount = pageCount;
        this.thumbnail = thumbnail;
        this.price = price;
        this. creators = creators;
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

const ruta = new Thumbnail("https://www.uoc.edu/comic_1_spiderman","jpg");
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


