var cook = 25;
var noodles = 30;
var halim = 60;
var birani = 120;
var myBudget = 25; 

if(myBudget > birani){
    console.log('birani khabo');
}else if(myBudget > halim){
    console.log('halim khabo');
}else if(myBudget >= cook){
    console.log('cook khabo');
}
else{
    console.log('muri khao');
}