let result = 0;

while(true){
    let distance = +prompt("Қашықтықты енгізіңіз (0 тоқтату үшін): ");
    if (distance === 0 || isNaN(distance) ){
        break;
    }
    let until = prompt("Өлшем бірлік енгіз (метр, дециметр, километр): ");
    if(until === "metr"){
        result += distance;
    } else if ( until === "dc"){
        result += distance / 10;
    } else if (until === "km"){
        result += distance * 1000;
    } else {
        alert("olshem birlik qate");
    }
} alert(result + "metr");
