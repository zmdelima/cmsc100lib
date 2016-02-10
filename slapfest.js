'use strict';

var Student = function(hp, name){
	return {
		"hp": hp,
		"name": name,
		"slap": function (Student) {
			var dmg = parseInt(Math.random() * 15) + 5; 
			Student.hp = Student.hp - dmg;
			console.log(this.name + " has slapped " + Student.name + " for " + dmg + "!");
			console.log("\nCurrent Status\n" + this.name + " = " + this.hp + "\n" + Student.name + "  = " + Student.hp + "\n");
		}
	};
};

var student1 = Student(150,"Yvette de Robles");
var student2 = Student(120,"Kei Bulalacao");

while (student1.hp > 0 || student2.hp > 0) {
	var slaps1 = parseInt(Math.random() * 100);
	if(slaps1 > 50) {
		student1.slap(student2);
		if (student1.hp <= 0 || student2.hp <= 0) break;
	}
	else {
		student2.slap(student1);
		if (student1.hp <= 0 || student2.hp <= 0) break;
	}
		
}

if (student1.hp <=0) {
	console.log(student1.name + " wins the Slapfest!");
} else if (student2.hp <=0) {
	console.log(student2.name + " wins the Slapfest!");
}
