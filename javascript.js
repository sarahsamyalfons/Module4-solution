
var names=["Ali","john","David","Sarah","Jaakov","Daniel","Paul","sami"];
var x="j";
var y="J";
for (var name in names){
var name1=names[name];
	if (name1[0]===x || name1[0]===y){
		console.log("Goodbye " + names[name]);
	}
	else{
	console.log("hello " + names[name]);
	};
};