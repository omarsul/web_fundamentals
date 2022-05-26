
function odds(nums){
    for(var i=1; i<=nums; i++){
        if(i % 2 == 1){
            console.log(i);
        }
    }
}
//odds(20);

function divisibleBy3(){
    for(var j = 100; j>0; j--){
        if(j%3==0){
            console.log(j)
        }
    }
}
//divisibleBy3()

function sequence(){
    var seq =4;
    for(var k = 0; k<5; k++){
        seq -= 1.5
        console.log(seq)
    }
}
//sequence();

function sigma(){
    var sum=0;
    for (var u = 0; u < 101; u++){
        sum += u ;
    }
    console.log(sum);
}
//sigma();

function factorial(){
    var product = 1;
    for(var t = 1; t < 13; t++){
        product *=t
    
    }
    console.log(product)
}
//factorial();