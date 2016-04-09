    var gridSize=30;
$(document).ready(function createGrid() { 

    blockSize=550/gridSize;
    for (i=0; i<gridSize; i++) { //Creates no. of rows=gridSize
        var newRow=document.createElement("tr");
        $("#grid").append(newRow);
    };
    for (i=0; i<gridSize; i++) { //Fills each row with no. of cells=gridSize with size=blockSize
        var newBlock=document.createElement("td");
        newBlock.className="gridBlock";
        newBlock.height=blockSize;
        newBlock.width=blockSize;
        $("tr").append(newBlock);
    };
});
$(document).ready(function() {
    $("td").mouseenter(function() { //Colours in table cells on mouse enter
        $(this).css("background-color","rgba(0,0,0,0.1)");
    });
});
$(document).ready(function() {
    $("#clearButton").click(function() { //Clears cells to opacity 0
        $("td").css("background-color","rgba(0,0,0,0)");
    });
});
$(document).ready(function() {
    $("#gridSizeButton").click(function() { //Asks user to input new grid size
        $("#grid").empty();
        gridSize=parseInt(prompt("Enter new grid size e.g. 16"));
        blockSize=550/gridSize;
        for (i=0; i<gridSize; i++) { //Creates no. of rows=gridSize
            var newRow=document.createElement("tr");
            $("#grid").append(newRow);
        };
        for (i=0; i<gridSize; i++) { //Fills each row with no. of cells=gridSize with size=blockSize
            var newBlock=document.createElement("td");
            newBlock.className="gridBlock";
            newBlock.height=blockSize;
            newBlock.width=blockSize;
            $("tr").append(newBlock);
        };
    });
});
