function createGrid(n) { //Creates an nxn grid on the page
    for (i=0; i<n; i++) {
        var row=document.createElement("tr");
        row.className="row";
        $("#grid").append(row);
    };
    for (j=0; j<n; j++) {
        var cell=document.createElement("td");
        cell.className="cell"
        $(".row").append(cell);
    };
};

function colourIn() { //When the mouse enters a .cell it adds 10% opacity and changes .cell to .cellColoured
    $(".cell").mouseenter(function() {
        $(this).css("opacity", "+=0.1");
        $(this).removeClass("cell").addClass("cellColoured");
    });
};

function cc(n) {
    $("#currentColourDiv").css("background-color",n);
    $(".cell").css("background-color",n);
};

function changeColour() { //Changes colour depending on selected button
    $("#blackButton").click(function() {
        cc("rgb(0,0,0)");
    });
    $("#blueButton").click(function() {
        cc("rgb(0,0,255)");
    });
    $("#redButton").click(function() {
        cc("rgb(255,0,0)");
    });
    $("#greenButton").click(function() {
        cc("rgb(0,128,0)");
    });
};

function resize() { //Asks user for a new 'resolution' for the box from 1 to 100, any other number/characters return an alert
    $("#newGridButton").click(function() {
        var gridSize=parseInt(prompt("Enter a new resolution for the box from 1 to 100"))
        var notNumber=isNaN(gridSize);
        if (gridSize>100||gridSize<1||notNumber===true) {
            alert("You didn't enter a valid number from 1 to 100, try again");
        } else {
            $("#grid").empty();
            createGrid(gridSize);
            colourIn();
            cc("rgb(0,0,0)");
        };
    });
};

function clearGrid () { //Clears grid but keeps current 'resolution' and background colour
    $("#clearGridButton").click(function() {
        $(".cellColoured").removeClass("cellColoured").addClass("cell");
        $(".cell").css("opacity","0");
        cc("rgb(0,0,0)")
    });
};

$(document).ready(function() { //Loads everything with a default grid of 30x30
    createGrid(30);
    clearGrid();
    resize();
    colourIn();
    changeColour();
});