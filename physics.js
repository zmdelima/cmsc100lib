{
    var dist = 0;
    const G = 9.8;
    var obj = Math.floor((Math.random() * 3)+1);
    var objCoEff = 0.25;
    var initVel = parseInt(Math.random() * 20);
    var trail = "";
    var box = "\u25a1";
    console.log("============");
    console.log("NEWTONIAN PHYSICS");
    console.log("============");
    //.5
    console.log("[1] Wooden Box");
    //.25
    console.log("[2] Glass Box");
    //.8
    console.log("[3] Brick");
    console.log("============");
    console.log("Select an object: " + obj);
    console.log("select an initial velocity: " + initVel + " m/s^2");

    //casing of objects for coEff if friction
    if (obj === 1) {
        objCoEff = 0.5;
    }
    else if (obj === 2) {
        objCoEff = 0.5;
    }
    else {
        objCoEff = 0.5;
    }
    
    dist = (0.5 * initVel * initVel) / (objCoEff * G);
    for(var i=0;i<dist;i++){
        trail = trail + "="; 
    }
    dist = parseInt(dist);
    //printing
    console.log(trail + box);
    console.log("Distance: "+ dist + "m");
}
