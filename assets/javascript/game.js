var players = {
    reble1: {
    name: "Luke",
    healthPoints: 100,
    attackPoints: 10,
    counterPoints: 150
    },   
    reble2: {
    name: "Chewbacca",
    healthPoints: 100,
    attackPoints: 6,
    counterPoints: 175
    },   
    reble3: {
    name: "Han Solo",
    healthPoints: 100,
    attackPoints: 7,
    counterPoints: 120
    },   
    dark1: {
    name: "Boba Fett",
    healthPoints: 100,
    attackPoints: 8,
    counterPoints: 150
    },   
    dark2: {
    name: "Stormtrooper",
    healthPoints: 100,
    attackPoints: 5,
    counterPoints: 100
    },   
    dark3: {
    name: "Darth Vader",
    healthPoints: 100,
    attackPoints: 9,
    counterPoints: 180
    }
    };


var selectedRebel1 = [];
var selectedDark1 = [];
var attacker = "";
var player1selected = [];
var player2selected = [];


$(".reble-button").click(function(){
if($(this).is("#luke")) {
    if(player1selected !== "true"){
    console.log("Player 1 picked Luke");
    $("#luke").prependTo("#player1");
    $( this ).addClass("grow-image");
    selectedRebel1 = jQuery.extend(true, {}, players.reble1);
    $("#player1Name").text(players.reble1.name);
    $("#health1").text("Health: " + players.reble1.healthPoints);
    $("#power1").text("Power: " + players.reble1.attackPoints);
    console.log(selectedRebel1);
    player1selected.push("true");
    console.log(player1selected);



}if($(this).is("#chewy")) {
    if(player1selected !== "true"){
    console.log("Player 1 picked Chewbacca");
    $("#chewy").prependTo("#player1");
    $( this ).addClass("grow-image");
    selectedRebel1 = jQuery.extend(true, {}, players.reble2);
    $("#player1Name").text(players.reble2.name);
    $("#health1").text("Health: " + players.reble2.healthPoints);
    $("#power1").text("Power: " + players.reble2.attackPoints);
    console.log(selectedRebel1);
    player1selected.push("true");

}if($(this).is("#han")) {
    if(player1selected !== "true"){
    console.log("Player 1 picked Han Solo");
    $("#han").prependTo("#player1");
    $( this ).addClass("grow-image");
    selectedRebel1 = jQuery.extend(true, {}, players.reble3);
    $("#player1Name").text(players.reble3.name);
    $("#health1").text("Health: " + players.reble3.healthPoints);
    $("#power1").text("Power: " + players.reble3.attackPoints);
    console.log(selectedRebel1);
    player1selected.push("true");
}
}}}});


$(".dark-button").click(function(){
    console.log(player2selected);
if($(this).is("#boba")) {
    if(player2selected.length === 0){
    console.log("Player 2 picked Boba Fett");
    $("#boba").prependTo("#player2");
    $( this ).addClass ("grow-image");
    selectedDark1 = jQuery.extend(true, {}, players.dark1);
    console.log(selectedDark1);
    $("#player2Name").text(players.dark1.name);
    $("#health2").text("Health: " + players.dark1.healthPoints);
    $("#power2").text("Power: " + players.dark1.attackPoints);
    player2selected.push("true");
    console.log(player2selected);
    }
} if($(this).is("#storm")) {
    if(player2selected.length === 0){
    console.log("Player 2 picked Stormtrooper");
    $("#storm").detach().prependTo("#player2");
    $( this ).addClass ("grow-image");
    selectedDark1 = jQuery.extend(true, {}, players.dark2);
    console.log(selectedDark1);
    $("#player2Name").text(players.dark2.name);
    $("#health2").text("Health: " + players.dark2.healthPoints);
    $("#power2").text("Power: " + players.dark2.attackPoints);
    player2selected.push("true");
    }
} if($(this).is("#darth") ) {
    if(player2selected.length === 0){
    console.log("Player 2 picked Darth Vader");
    $("#darth").detach().prependTo("#player2");
    $( this ).addClass ("grow-image");
    selectedDark1 = jQuery.extend(true, {}, players.dark3);
    console.log(selectedDark1);
    $("#player2Name").text(players.dark3.name);
    $("#health2").text("Health: " + players.dark3.healthPoints);
    $("#power2").text("Power: " + players.dark3.attackPoints);
    player2selected.push("true");
    }

}});

function resetPlayer2() { 
    selectedDark1 = [];
    $("#player2Name").text("Player 2");
    $("#power2").text("Power: ");
    $("#health2").text("Health:");
};

function resetPlayer1() { 
    selectedRebel1 = [];
    $("#health1").text("Health:");
    $("#player1Name").text("Player 1");
    $("#power1").text("Power: ");
 
};


$("#attack1").click(function(){
    // console.log(selectedRebel1.attackPoints);
    // console.log(selectedDark1.healthPoints);
    selectedRebel1.healthPoints = selectedRebel1.healthPoints - selectedDark1.attackPoints;
    selectedDark1.healthPoints = selectedDark1.healthPoints - selectedRebel1.attackPoints;
    // console.log(selectedDark1.healthPoints);
    if(player1selected == "true" && player2selected == "true") {
    if  (selectedRebel1.healthPoints < 0 ) {
        alert("You loose better luck next time try starting off slow and then work your way up to the bigget guys");
        resetPlayer2();
        selectedDark1 = [];
        $("player1 img").detach();
        resetPlayer1();
        
        }

    $("#health1").text("Health: " + selectedRebel1.healthPoints);
    $("#health2").text("Health: " + selectedDark1.healthPoints);
    if (selectedDark1.healthPoints < 0) { 
        alert("You Win select another enemy from the dark side");
        if(selectedDark1.name === "Boba Fett") {
        $("#boba").detach();
        }if (selectedDark1.name === "Stormtrooper"){
        $("#storm").detach();
        }if (selectedDark1.name === "Darth Vader"){
        $("#darth").detach();
        }
        resetPlayer2();
        console.log(player2selected);
        player2selected = [];
        console.log(player2selected);
        
    }}});
    