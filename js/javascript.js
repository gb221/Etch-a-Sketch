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
        var currentOpactity=parseFloat($(this).css("opacity"));
        var newOpacity=currentOpactity+0.1;
        $(this).css("opacity", newOpacity);
        $(this).removeClass("cell");
        $(this).addClass("cellColoured");
    });
};

function changeColour() { //Changes colour depending on selected button
    $("#blackButton").click(function() {
        $("#currentColourDiv").css("background-color","black");
        $(".cell").css("background-color","rgb(0,0,0)");
    });
    $("#blueButton").click(function() {
        $("#currentColourDiv").css("background-color","blue");
        $(".cell").css("background-color","rgb(0,0,255)");
    });
    $("#redButton").click(function() {
        $("#currentColourDiv").css("background-color","red");
        $(".cell").css("background-color","rgb(255,0,0)");
    });
    $("#greenButton").click(function() {
        $("#currentColourDiv").css("background-color","green");
        $(".cell").css("background-color","rgb(0,128,0)");
    });
}

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
        };
    });
};

function clearGrid () { //Clears grid but keeps current 'resolution' and background colour
    $("#clearGridButton").click(function() {
        $(".cellColoured").removeClass("cellColoured");
        $("td").addClass("cell");
        $(".cell").css("opacity","0");
        $(".cellColoured").css("opacity","0");
        $(".cell").css("background-color","rgb(0,0,0)");
        $("#currentColourDiv").css("background-color","rgb(0,0,0)");
    });
};

$(document).ready(function() { //Loads default grid of 30x30
    createGrid(30);
    clearGrid();
    resize();
    colourIn();
    changeColour();
});