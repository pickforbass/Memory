
//First, let's put some important var we'll need later
var get1;
var get2;
var points = 0;
cl=0;
var win = 0;
var z;

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
    };

};

shuffleDeck();
c= b.length;
d = c/2;

//Wonderfull ! Now, let's put the card into the container !

var card = function(deck) {
    this.found = false;
    this.elem = document.createElement('div');
    this.elem.addEventListener('click', function efe() {
        //
        if (!this.found){
            this.innerHTML = '<img src = SVG/' + b[deck] + '.svg>';
            cl++;
            if(cl === 1){
                get1 = this;
            }
            else if (cl === 2)
            {
                get2 = this;
                testingC();
            }
        }

    });
    document.getElementById("main").appendChild(this.elem);
};

for (n=0; n<c; n++) {
    var popCard = new card(n);
};

// And let's create a function for returning the card after a wrong pair !

function returnCard() {

        if (points > 0 )
        {
            points--;
        };
        get1.innerHTML = "";
        get2.innerHTML = "";
        cl = 0;
};

// And now let's make another one for good pairs

function testingC ()
{
    if (get1.innerHTML === get2.innerHTML)
    {
        setTimeout(goodPairs, 200);
        points = points + 5;
        win++;
        finished();
        get1.found = true;
        get2.found = true;
    }
    else
    {
        setTimeout(returnCard, 200);
    }
    setTimeout(displayPoints, 300);
};

function goodPairs()
{
    cl=0;
};


// And this it' s the fi-nal func-tion (tudududuuu tududududuuuu)



//So let's count the points now !

function displayPoints()
{
    if (points>1)
    {
        document.getElementById("points").innerHTML = " "+points+" points";
    }
    else
    {
        document.getElementById("points").innerHTML = " "+points+" point";
    }
};

// And finally, let's play another game !

function finished (){
if (win == d)
{
    document.getElementById("replay").style.display = "block";
    document.getElementById("final_score").innerHTML = " "+points+" ";
    win = 0;
    a = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];
    c= a.length;
    b = [];

};};

document.getElementById("restart").onclick =function ()
{
    document.getElementById("main").innerHTML = "";
    points = 0;
    shuffleDeck();
    for (n=0; n<c; n++) {
        var popCard = new card(n);
    };
    document.getElementById("replay").style.display = "none";
    document.getElementById("points").innerHTML = " "+points+" point";
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




