var players = {
    reble1: {
    name: "luke",
    healthPoints: 100,
    attackPoints: 100,
    counterPoints: 100
    },   
    reble2: {
    name: "chewy",
    healthPoints: 100,
    attackPoints: 100,
    counterPoints: 100
    },   
    reble3: {
    name: "han",
    healthPoints: 100,
    attackPoints: 100,
    counterPoints: 100
    },   
    dark1: {
    name: "boba",
    healthPoints: 100,
    attackPoints: 100,
    counterPoints: 100
    },   
    dark2: {
    name: "storm",
    healthPoints: 100,
    attackPoints: 100,
    counterPoints: 100
    },   
    dark3: {
    name: "darth",
    healthPoints: 100,
    attackPoints: 100,
    counterPoints: 100
    }
    };


// Each character in the game has 3 attributes: `Health Points`, `Attack Power` and `Counter Attack Power`.
console.log(players.reble1.name);
// Click player and add colored border on toggle
$(".reble-button").click(function(){
    $( this ).toggleClass ("grow-image");
    $("#luke").prependTo("#player1");
});



$(".dark-button").click(function(){
    $( this ).toggleClass ("grow-image");
    $("#boba").prependTo("#player2");
});

// Each time the player attacks, their character's Attack Power increases by its base Attack Power. 

// For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).

// The enemy character only has `Counter Attack Power`. 

// Unlike the player's `Attack Points`, `Counter Attack Power` never changes.

// The `Health Points`, `Attack Power` and `Counter Attack Power` of each character must differ.

// No characters in the game can heal or recover Health Points. 

// A winning player must pick their characters wisely by first fighting an enemy with low `Counter Attack Power`. This will allow them to grind `Attack Power` and to take on enemies before they lose all of their `Health Points`. Healing options would mess with this dynamic.

// Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.