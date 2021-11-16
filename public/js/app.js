// Area to incorporate functions or write objects
const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium
            document.body.append(img);
        }
    }
}