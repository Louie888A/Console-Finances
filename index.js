var totalMonths= finances.length-1;
var total =0;
var change=0;
var date;  //e.g. Jan-2010; =currenetMonth[0]
var amount; //e.g 867884; =crrentMonth[1]
var currentMonth; //e.g. Jan-2010 & 867884 together = finances i
var previousAmount;
var greatestIncrease=0;
var greatestIncreaseMonth="";
var greatestDecrease=0;
var greatestDecreaseMonth="";



console.log(`The total number of the months is ${finances.length}`);




    for (var i=0; i<= totalMonths; i++){
        currentMonth =finances[i];  // finances[0] = ['Jan-2010', 867884]
        date = currentMonth[0];  // currentMonth = ['Jan-2010', 867884]=finances[i];
        amount= currentMonth[1]; 
        total += amount;   // total = total + amount
                          // 867884 = 867884 + 984655

        if (i >0) {
            change += amount - previousAmount;  // change = (984655 - 867884) + 322013 - 984655
          if(amount - previousAmount>greatestIncrease){
            greatestIncreaseMonth =date;   // date = 'Feb-2010' // greatestIncreaseMonth = 'Feb-2010'
            greatestIncrease = amount -previousAmount;
          }

          if(amount-previousAmount <greatestDecrease){
            greatestDecreaseMonth=date;
            greatestDecrease=amount - previousAmount;
          } 

        } 
        previousAmount=amount;  
    }
        
console.log(`Total: \$${total}`);
var averageChange = Math.round((change/totalMonths)*100)/100;
console.log(Average Change: ${averageChange});
   // var change =amount - currentMonth[1+1];
    // total + = change;
console.log(Greatest Increase in Profile/Losses: ${greatestIncreaseMonth});
console.log( (\$${greatestIncrease}));
console.log(Greatest Decrease in Profile/Loss: ${greatestDecreaseMonth});
console.log((\$${greatestDecrease}));