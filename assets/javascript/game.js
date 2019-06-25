var players = {
    reble1: {
    name: "Sky Walker",
    healthPoints: 120,
    attackPoints: 24,
    counterPoints: 150
    },   
    reble2: {
    name: "Chewbacca",
    healthPoints: 105,
    attackPoints: 18,
    counterPoints: 175
    },   
    reble3: {
    name: "Han Solo",
    healthPoints: 110,
    attackPoints: 20,
    counterPoints: 120
    },   
    dark1: {
    name: "Boba Fett",
    healthPoints: 100,
    attackPoints: 7,
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
    attackPoints: 11,
    counterPoints: 180
    }
    };


var selectedRebel1 = [];
var selectedDark1 = [];
var attacker = "";
var player1selected = [];
var player2selected = [];
var wins = "";
$("#replay").click(function() {
    console.log("I was clicked");
    location.reload();
});

// $(".reble-button").hover(function(){
//     if($(this).is("#luke")) {
//     console.log("Hover works");
//     $("#player1details").html("<div class='player1details'>Player Name:" + players.reble1.name + "</div>");
// }});

$("#lukeStats").html("<p>" + players.reble1.name + "</p>" + "<p>Attack Point: " + players.reble1.attackPoints + "<p>Counter Attack Points: " + players.reble1.counterPoints + "</p>" +
"<p>Health Points: " + players.reble1.healthPoints + "</p>");

$("#chewyStats").html("<p>" + players.reble2.name + "</p>" + "<p>Attack Point: " + players.reble2.attackPoints + "<p>Counter Attack Points: " + players.reble2.counterPoints + "</p>" +
"<p>Health Points: " + players.reble2.healthPoints + "</p>");

$("#hanStats").html("<p>" + players.reble3.name + "</p>" + "<p>Attack Point: " + players.reble3.attackPoints + "<p>Counter Attack Points: " + players.reble3.counterPoints + "</p>" +
"<p>Health Points: " + players.reble3.healthPoints + "</p>");

$("#bobaStats").html("<p>" + players.dark1.name + "</p>" + "<p>Attack Point: " + players.dark1.attackPoints + "<p>Counter Attack Points: " + players.dark1.counterPoints + "</p>" +
"<p>Health Points: " + players.dark1.healthPoints + "</p>");

$("#stormStats").html("<p>" + players.dark2.name + "</p>" + "<p>Attack Point: " + players.dark2.attackPoints + "<p>Counter Attack Points: " + players.dark2.counterPoints + "</p>" +
"<p>Health Points: " + players.dark2.healthPoints + "</p>");

$("#darthStats").html("<p>" + players.dark3.name + "</p>" + "<p>Attack Point: " + players.dark3.attackPoints + "<p>Counter Attack Points: " + players.dark3.counterPoints + "</p>" +
"<p>Health Points: " + players.dark3.healthPoints + "</p>");

$(".reble-button").click(function(){
if($(this).is("#luke")) {
    if(player1selected.length === 0){
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
    var lukeSound = new Audio("assets/audio/luke.wav");
    lukeSound.play();
    $("#lukeStats").detach();
    }


}if($(this).is("#chewy")) {
    if(player1selected.length === 0){
    console.log("Player 1 picked Chewbacca");
    $("#chewy").prependTo("#player1");
    $( this ).addClass("grow-image");
    selectedRebel1 = jQuery.extend(true, {}, players.reble2);
    $("#player1Name").text(players.reble2.name);
    $("#health1").text("Health: " + players.reble2.healthPoints);
    $("#power1").text("Power: " + players.reble2.attackPoints);
    console.log(selectedRebel1);
    player1selected.push("true");
    var chewySound = new Audio("assets/audio/chewy.wav");
    chewySound.play();
    $("#chewyStats").detach();
    }

}if($(this).is("#han")) {
    if(player1selected.length === 0){
    console.log("Player 1 picked Han Solo");
    $("#han").prependTo("#player1");
    $( this ).addClass("grow-image");
    selectedRebel1 = jQuery.extend(true, {}, players.reble3);
    $("#player1Name").text(players.reble3.name);
    $("#health1").text("Health: " + players.reble3.healthPoints);
    $("#power1").text("Power: " + players.reble3.attackPoints);
    console.log(selectedRebel1);
    player1selected.push("true");
    var hanSound = new Audio("assets/audio/han.wav");
    hanSound.play();
    $("#hanStats").detach();
    }

}});


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
    var bobaSound = new Audio("assets/audio/boba.wav");
    bobaSound.play();
    $("#bobaStats").detach();
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
    var stormSound = new Audio("assets/audio/storm.wav");
    stormSound.play();
    $("#stormStats").detach();
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
    var darthSound = new Audio("assets/audio/darth.wav");
    darthSound.play();
    $("#darthStats").detach();
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
    selectedDark1.healthPoints = selectedDark1.healthPoints - selectedRebel1.attackPoints ^ 2;
    var playMarch = new Audio("assets/audio/saberup.wav");
    playMarch.play();
    if(player1selected == "true" && player2selected == "true") {
        
    if  (selectedRebel1.healthPoints < 0 ) {
        
        alert("You loose better luck next time try starting off slow and then work your way up to the bigget guys");
        selectedDark1 = [];
        $("player1 img").detach();
        $(".col-md-8").addClass("game-over");
        resetPlayer1();
        resetPlayer2();
        $("#player1").detach().append(".rebels");
        $("#replay").html("<button id='replay' type='button' class='btn btn-outline-warning'>PLAY AGAIN </button>");
        player1selected = [];
        var marchSong = new Audio("assets/audio/march.mp3");
        marchSong.play();
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
        player2selected = [];
        resetPlayer2();
        wins++;
        console.log(wins);
        if(wins === 3){
            $("player2 img").detach();
            $(".col-md-8").addClass("game-over");
            resetPlayer1();
            player2selected = [];
            player1selected = [];
            $("#replay").html("<button id='replay' type='button' class='btn btn-outline-warning'>PLAY AGAIN </button>");
            var winSong = new Audio("assets/audio/win.mp3");
            winSong.play();
            }
        
        
    }}});

    
    
   