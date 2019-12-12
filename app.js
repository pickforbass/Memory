
//First, let's put some important var we'll need later
var get1;
var get2;
var points = 0;
cl=0;
//OK, this is my deck properly ordered
var a = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];
var c= a.length;

//let's shuffle it !
var b = [];
function shuffleDeck() {
    for (n=0; n<c; n++) {
    newPlace = Math.floor(Math.random()*a.length);
    b.push(a[newPlace]);
    a.splice(newPlace, 1);
}};

shuffleDeck();
c= b.length;

//Wonderfull ! Now, let's put the card into the container !

var card = function(deck) {
    this.elem = document.createElement('div');
    //this.elem.id = "i"+[deck];
    this.elem.onclick = function () {
        this.innerHTML = '<img src = SVG/' + b[deck] + '.svg>';
        this.style.Zindex="-1";
        cl++;
        this.id = "c"+cl;
        if(cl === 1){
            get1 = this.innerHTML;
        }
        else if (cl === 2)
        {
            get2 = this.innerHTML;
            testingC();
        };

    };
    document.body.appendChild(this.elem);
};

for (n=0; n<c; n++) {
    var popCard = new card(n);
};

// And let's create a function for returning the card after a wrong pair !

function returnCard() {
    if (cl ===2) {
        if (points > 0 )
        {
            points--;
        };
        document.getElementById("c1").innerHTML = "";
        document.getElementById("c1").style.Zindex = "0";
        document.getElementById("c1").id = "";
        document.getElementById("c2").innerHTML = "";
        document.getElementById("c2").style.Zindex = "0";
        document.getElementById("c2").id = "";
        cl = 0;
    };
};

// And now let's make another one for good pairs

function goodPairs()
{
    alert ("C'est gagné");
    points = points + 5;
    document.getElementById("c1").id = "";
    document.getElementById("c2").id = "";
    cl=0;
}

// And this it' s the fi-nal func-tion (tudududuuu tududududuuuu)

function testingC ()
{
    if (get1 === get2)
    {
        setTimeout(goodPairs, 500);
    }
    else
    {
        setTimeout(returnCard, 800);
    }
    console.log ("points "+points);
};










//GOOOOOD !



/*
    var div = document.createElement("div");
    div.id = a[i];
    div.innerHTML = a[i];
    div.onclick = ()=>
    {
        alert(div.id);
    };
    document.body.appendChild(div);

for (i = 0; i<a.length; i++)
{
    var div = document.createElement("div");
    div.id = a[i];
    div.innerHTML = a[i];
    div.onclick = ()=>
    {
        alert(div.id);
    };
    document.body.appendChild(div);

    div = document.createElement("div");
    div.id = b[i];
    div.innerHTML = b[i];
    div.onclick = ()=>
    {
        alert(div.id);
    };
    document.body.appendChild(div);
};

 */




