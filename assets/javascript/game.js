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






// Each character in the game has 3 attributes: `Health Points`, `Attack Power` and `Counter Attack Power`.
console.log(players.reble1.name);
// Click player and add colored border on toggle
// if(attacker === )

$(".reble-button").click(function(){
if($(this).is("#luke")) {
    console.log("Player 1 picked Luke");
    $("#luke").prependTo("#player1");
    $( this ).addClass("grow-image");
    selectedRebel1 = jQuery.extend(true, {}, players.reble1);
    
    $("#player1Name").text(players.reble1.name);
    $("#health1").text("Health: " + players.reble1.healthPoints);
    $("#power1").text("Power: " + players.reble1.attackPoints);
    console.log(selectedRebel1);
}
});

$(".dark-button").click(function(){
if($(this).is("#boba")) {
    console.log("Player 2 picked Boba Fett");
    $("#boba").prependTo("#player2");
    $( this ).addClass ("grow-image");
    selectedDark1 = jQuery.extend(true, {}, players.dark1);
    console.log(selectedDark1);
    $("#player2Name").text(players.dark1.name);
    $("#health2").text("Health: " + players.dark1.healthPoints);
    $("#power2").text("Power: " + players.dark1.attackPoints);
    
} if($(this).is("#storm")) {
    console.log("Player 2 picked Stormtrooper");
    $("#storm").detach().prependTo("#player2");
    $( this ).addClass ("grow-image");
    selectedDark1 = jQuery.extend(true, {}, players.dark2);
    console.log(selectedDark1);
    $("#player2Name").text(players.dark2.name);
    $("#health2").text("Health: " + players.dark2.healthPoints);
    $("#power2").text("Power: " + players.dark2.attackPoints);

} if($(this).is("#darth")) {
    console.log("Player 2 picked Darth Vader");
    $("#darth").detach().prependTo("#player2");
    $( this ).addClass ("grow-image");
    selectedDark1 = jQuery.extend(true, {}, players.dark3);
    console.log(selectedDark1);
    $("#player2Name").text(players.dark3.name);
    $("#health2").text("Health: " + players.dark3.healthPoints);
    $("#power2").text("Power: " + players.dark3.attackPoints);


}});

if(selectedRebel1.length < 0 ){ 
    console.log("Player one picked")
}

console.log(selectedRebel1);
$("#attack1").click(function(){
    console.log(selectedRebel1.attackPoints);
    console.log(selectedDark1.healthPoints);
    selectedRebel1.healthPoints = selectedRebel1.healthPoints - selectedDark1.attackPoints
    selectedDark1.healthPoints = selectedDark1.healthPoints - selectedRebel1.attackPoints ;
    console.log(selectedDark1.healthPoints);
    console.log(selectedRebel1.healthPoints);
    $("#health1").text("Health: " + selectedRebel1.healthPoints);
    $("#health2").text("Health: " + selectedDark1.healthPoints);
    if(selectedDark1.healthPoints < 0) { 
        alert("You Win select another enemy from the dark side");
        if(selectedDark1.name === "Boba Fett") {
        $("#boba").detach();
        }if (selectedDark1.name === "Stormtrooper"){
        $("#storm").detach();
        }if (selectedDark1.name === "Darth Vader"){
        $("#darth").detach();
        }
    if (selectedRebel1.healthPoints < 0 ) {
        alert("You loose better luck next time try starting off slow and then work your way up to the bigget guys");
        };
        resetPlayer2();
        selectedDark1 = [];
    }


    });
    
    function resetPlayer2() { 
        selectedDark1 = [];
        $("#player2Name").text("Player 2");
        $("#health2").text("Health: ");
        $("#power2").text("Power: ");

    };

// Each time the player attacks, their character's Attack Power increases by its base Attack Power. 

// For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).

// The enemy character only has `Counter Attack Power`. 

// Unlike the player's `Attack Points`, `Counter Attack Power` never changes.

// The `Health Points`, `Attack Power` and `Counter Attack Power` of each character must differ.

// No characters in the game can heal or recover Health Points. 

// A winning player must pick their characters wisely by first fighting an enemy with low `Counter Attack Power`. This will allow them to grind `Attack Power` and to take on enemies before they lose all of their `Health Points`. Healing options would mess with this dynamic.

// Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.