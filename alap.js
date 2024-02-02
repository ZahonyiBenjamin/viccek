var viccek = 
[
    {
        "szoveg":`– Hogy hívják az internetes kísértetet?
        <br>
        – ???
        <br>
        – Pont huuúú.`,
        "kep":"1.png"
    },
    {
        "szoveg":`– Hogyan avatják fel a pezsgő gyárat?
        <br>
        – Hozzá vágnak egy hajót`,
        "kep":"2.jpg"
    },
    {
        "szoveg":`– Szomszéd, használhatnám a fűnyíróját?
        <br>
        – Persze, csak ne vigye ki a kertemből…`,
        "kep":"3.jpg"
    },
    {
        "szoveg":`– Hallod?! Ti hogyan szoktátok kezelni a konfliktusokat?
        <br>
        – Pofon egyszerűen.`,
        "kep":"4.jpg"
    },
    {
        "szoveg":`– Mi a falusi abortusz?
        <br>
        – Lelövik a gólyát.`,
        "kep":"5.jpg"
    }
]

var r = -1

function toltes()
{ 
    document.getElementById("hely").innerHTML = ""
    document.getElementById("kep_helye").innerHTML = ""
    document.getElementById("gif").innerHTML = `<img src="dice.gif" alt="">`

    setTimeout(vicc_generalas,2000)
}
function vicc_generalas()
{
    document.getElementById("gif").innerHTML = ``
    do{
        var new_r = Math.floor(Math.random() * viccek.length)
    }
    while(new_r == r)
    r = new_r   
    document.getElementById("hely").innerHTML = viccek[r].szoveg
    document.getElementById("kep_helye").innerHTML = `<img class="img-thumbnail" src="${viccek[r].kep}" alt="">`
}