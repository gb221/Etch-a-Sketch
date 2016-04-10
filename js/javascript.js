//Creates an nxn grid on the page
function createGrid(n) {
    for (i=0; i<n; i++) {
        var row=document.createElement("tr");
        row.className="row";
        $("#grid").append(row);
    }
    for (j=0; j<n; j++) {
        var cell=document.createElement("td");
        cell.className="cell"
        $(".row").append(cell);
    }
};

//When the mouse enters a .cell it adds 10% opacity and changes .cell to .cellColoured
function colourIn() {
    $(".cell").mouseenter(function() {
        $(this).css("opacity", "+=0.1");
        $(this).removeClass("cell").addClass("cellColoured");
    });
};

//Sets currentColourDiv and remaining uncoloured cells to a background colour of x,y,z as in rgb(x,y,z)
function cc(x,y,z) {
    var rgbColour="rgb("+x+","+y+","+z+")";
    $("#currentColourDiv").css("background-color",rgbColour);
    $(".cell").css("background-color",rgbColour);
};

//Changes colour depending on selected button
function changeColour() {
    $("#blackButton").click(function() {
        cc(0,0,0);
    });
    $("#blueButton").click(function() {
        cc(0,0,255);
    });
    $("#redButton").click(function() {
        cc(255,0,0);
    });
    $("#greenButton").click(function() {
        cc(0,128,0);
    });
};

//Asks user for a new 'resolution' for the box from 1 to 100, any other number/characters return an alert
function resize() {
    $("#newGridButton").click(function() {
        var gridSize=parseInt(prompt("Enter a new resolution for the box from 1 to 100"))
        var notNumber=isNaN(gridSize);
        if (gridSize>100 || gridSize<1 || notNumber===true) {
            alert("You didn't enter a valid number from 1 to 100, try again");
        } else {
            $("#grid").empty();
            createGrid(gridSize);
            colourIn();
            cc(0,0,0);
        };
    });
};

//Clears grid but keeps current 'resolution' and background colour
function clearGrid () {
    $("#clearGridButton").click(function() {
        $(".cellColoured").removeClass("cellColoured").addClass("cell");
        $(".cell").css("opacity","0");
        cc(0,0,0)
    });
};
//Loads everything with a default grid of 30x30
$(document).ready(function() {
    createGrid(30);
    clearGrid();
    resize();
    colourIn();
    changeColour();
});