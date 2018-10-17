var items={animal:"cat",human:"boi",sheepArray:
    [
        {sound:'baa',shape:'round'},
        {sound:'moo',shape:'square'},
        {sound:'neigh',shape:'rectangle'},
        {sound:'neigh',shape:'rectangle'}

    ]
};
var items2={animal:"dogo",human:"me"};

var data=[];
data.push(items);
data.push(items2);

console.log(data[0].sheepArray.forEach(function(element){
    console.log(element.shape);
}));



for (var i = 0, len = data[0].sheepArray.length; i < len; i++) {
    console.log(data[0].sheepArray[i].shape);
}
//.log(data.pop());