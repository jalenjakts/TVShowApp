// Area to incorporate functions or write objects
i = 0;

const makeImages = (shows) => {
    str = "";
    // i = 0;
    /*document.body.innerHTML*/ str += "<div style='display:flex; flex-wrap:wrap; max-width:100%;'>";
    for (let result of shows) {
        i++;
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            const desc = result.show.summary;
            const title = result.show.name;
            // console.log(result);
            // console.log(desc);
            // document.body.append(img);
            str += "<img src='" + img.src + "' onclick='myFunction(" + i + ")'/>";
            // document.body.innerHTML += "<div style='visibility:hidden; width:100%'>" + desc + "</div>";
            str += "<a class='description' style='width:100%; display:none; background-color:black; color:white; padding: 5px; font-family:sans-serif; border-radius:5px' id='img" + i + "'><b>" + title + "</b> " + desc + "</a>";
        }
    }
    // document.body.innerHTML += "</div>";
    str += "</div>";

    document.body.innerHTML += str;
}

function myFunction(x) { 
    // console.log(x);
    // console.log(i);
    for(let j = 1; j <= i; j++) {
        if(j != x) {
            document.getElementById("img" + j).style.display="none";
        }
    }

    if(document.getElementById("img" + x).style.display === "none") {
        document.getElementById("img" + x).style.display="block";
    } else {
        document.getElementById("img" + x).style.display="none";
    }
}