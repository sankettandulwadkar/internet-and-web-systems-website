$(document).ready(function(){
	
	var total = [];

	function initializeTotal(num)
	{
		var i;
		for(i=0;i<num;i++)
		{
			total[i] = 0;
		}
	}

	function createTable(){
		var theader = '<table id = "CarTable">\n';
		var tbody = '';
		var k=0;
		var array = ["","Lease or Buy?","Type of car", "Down Payment", "Lease/Month", "No. of months", "Miles/month", "Miles/gallon","Short Trips(miles<20)","Long Trips(miles<100)","End Charge(Lease)","Cost/mile","Cost/month"];

		var total_col = document.getElementById("inputNumber").value;

		initializeTotal(total_col);

		var total_rows = 12;

		for ( var i = 0; i <= total_rows; i++) {
		    tbody += '<tr>';
		    for ( var j = 0; j <= total_col; j++) {

		        tbody += '<td name=' + "cell" + i + j + '>';

		        if(j === 0)
		        {
		        	tbody += '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + '<b>' + array[k++] +'</b>';
		        }
		        else
		        {
		        	if (i > 0) 
		        	{
		        		if(i === 1)
		        		{
		        			// tbody += '<input type="text" value = "" name="'+i+j + '">';	
		        			tbody += '<select name="'+i+j + '"><option>Select Type</option><option>Buy</option><option>Lease</option></select>'

		        		}
		        		else if(i === 2)
		        		{
		        			tbody += '<select name="'+i+j + '"><option>Select Car Type</option><option>Gas</option><option>Hybrid</option><option>Plugin Hybrid</option><option>Electric</option></select>';
		        		}
		        		else if(i > 10)
		        		{
		        			tbody += '<input readonly="readonly" type="text" value = "" name="'+i+j + '">';
		        		}
		        		else
		        		{
		        			tbody += '<input type="text" value = "" name="'+i+j + '">';	
		        		}
		            	
		        	}
		        	else 
		        	{
		            	tbody += '<b>' + "Car"+[j] + '</b>';
		        	}
		        }
		        tbody += '</td>';

		    }
		    tbody += '</tr>\n';
		}

		var tfooter = '</table>';
		
		document.getElementById('wrapper').innerHTML = theader  + tbody + tfooter ;

		//$("#calculateButton").html('<button type="button" id="submit">Calculate</button>');
	}

	
	function calculate(){
		
		var table = document.getElementById("CarTable");
		var column;
		var number_of_rows = table.rows.length;
		var number_of_columns = table.rows[0].cells.length;
		var i,j,k=0;
		
		var row = table.rows[0];

		for(i=1; i< number_of_columns; i++)
		{
			for(j=1; j<number_of_rows-2; j++)
			{

				//console.log(table.rows[j].cells[i]);
				//var a = table.rows[j];
				var b = j.toString() +i.toString();
				// console.log(b);
				// console.log("Try is ", document.getElementsByName(b)[0].value);
				// console.log("Value is ", parseInt(table.rows[j].cells[i].value));
				// console.log("innerHTML is ", table.rows[j].cells[i].innerHTML);
				
				if(j == 1)
				{
					var e = document.getElementsByName(b)[0];
					var leaseOrBuy = e.options[e.selectedIndex].text;
				}
				else if(j == 2)
				{
					var e = document.getElementsByName(b)[0];
					var typeOfCar = e.options[e.selectedIndex].text;
				}
				else if(j == 3)
				{
					if((document.getElementsByName(b)[0].value))
					{
						var downPayment = parseInt(document.getElementsByName(b)[0].value);
					}	
				}
				else if(j == 4)
				{
					if((document.getElementsByName(b)[0].value))
					{
						var leaseAmount = parseInt(document.getElementsByName(b)[0].value);
					}		
				}
				else if(j == 5)
				{
					if((document.getElementsByName(b)[0].value))
					{
						var noOfMonths = parseInt(document.getElementsByName(b)[0].value);
					}
				}
				else if(j == 6)
				{
					if((document.getElementsByName(b)[0].value))
					{
						var milesPerMonth = parseInt(document.getElementsByName(b)[0].value);
					}
				}
				else if(j == 7)
				{
					if((document.getElementsByName(b)[0].value))
					{
						var milesPerGallon = parseInt(document.getElementsByName(b)[0].value);
					}
				}
				else if(j == 8)
				{
					if((document.getElementsByName(b)[0].value))
					{
						var shortTrips = parseInt(document.getElementsByName(b)[0].value);
					}
				}
				else if(j == 9)
				{
					if((document.getElementsByName(b)[0].value))
					{
						var longTrips = parseInt(document.getElementsByName(b)[0].value);
					}
				}
				else if(j == 10)
				{
					if((document.getElementsByName(b)[0].value))
					{
						var endCharge = parseInt(document.getElementsByName(b)[0].value);
					}
				}
				// else
				// {
				// 	console.log("leaseOrBuy", leaseOrBuy);
				// 	console.log("typeOfCar", typeOfCar);
				// 	if((document.getElementsByName(b)[0].value))
				// 	{
				// 		//console.log("Adding", document.getElementsByName(b)[0].value);
				// 		total[k] += parseInt(document.getElementsByName(b)[0].value);
				// 		//console.log("Tots ",total[k]);  

				// 	}
				// }
			}
			if(leaseOrBuy == "Select Type" || typeOfCar == "Select Car Type")
			{
				alert("Dont know which type? Maybe you should think more");
				continue ;
			}
			if(leaseOrBuy == "Lease")
			{
				if(noOfMonths == undefined)
				{
					alert("Looks like you dont want to lease it?");
					continue ;
				}
				if(typeOfCar == "Electric")
				{
					milesPerGallon = 60;
				}
				else
				{
					if(milesPerGallon == undefined)
					{
						alert("If you don't know what mileage you want, not worth leasing the car then!");
						continue ;
					}
				}
				var totalLease = (leaseAmount*noOfMonths);
				var totalMiles = (milesPerMonth*noOfMonths);
				var totalAmountOnGas = ((totalMiles/milesPerGallon)*3.95);
				var costPerMile = 3.95/milesPerGallon;
				costPerMile = parseFloat(costPerMile).toFixed(2);
				// console.log("costPerMile lease", costPerMile);
				var totalShortTripCost = (shortTrips*20*costPerMile);
				var totalLongTripCost = (longTrips*100*costPerMile);
				// console.log("Lease->","downPayment", downPayment,"totalAmountOnGas",totalAmountOnGas,"totalShortTripCost", totalShortTripCost,"totalLongTripCost",totalLongTripCost);
				if(1)
				{
					if(isNaN(downPayment))
						downPayment =0;
					if(isNaN(totalAmountOnGas))
						totalAmountOnGas = 0;
					if(isNaN(totalShortTripCost))
						totalShortTripCost = 0;
					if(isNaN(totalLongTripCost))
						totalLongTripCost = 0;
				}
				// console.log("Lease=>","totalShortTripCost",totalShortTripCost,"totalLongTripCost",totalLongTripCost);
				total[k] = (downPayment + totalLease + totalAmountOnGas + totalLongTripCost + totalShortTripCost)/noOfMonths;
				total[k] = parseFloat(total[k]).toFixed(2);
				// console.log("total[k] lease", total[k]);
			}
			else if(leaseOrBuy == "Buy")
			{
				if(downPayment == undefined)
				{
					alert("No one gives away cars for free, you know!");
					continue ;
				}
				if(typeOfCar == "Electric")
				{
					milesPerGallon = 60;
				}
				else
				{
					if(milesPerGallon == undefined)
					{
						alert("If you don't know what mileage you want, not worth buying the car then!");
						continue ;
					}
				}
				var totalMiles = (milesPerMonth*(10*12));
				var totalAmountOnGas = ((totalMiles/milesPerGallon)*3.95);
				var costPerMile = 3.95/milesPerGallon;
				costPerMile = parseFloat(costPerMile).toFixed(2);
				// console.log("costPerMile buy", costPerMile);
				var totalShortTripCost = (shortTrips*20*costPerMile);
				var totalLongTripCost = (longTrips*100*costPerMile);
				// console.log("Buy->","downPayment", downPayment,"totalAmountOnGas",totalAmountOnGas,"totalShortTripCost", totalShortTripCost,"totalLongTripCost",totalLongTripCost);
				if(1)
				{
					if(isNaN(downPayment))
						downPayment =0;
					if(isNaN(totalAmountOnGas))
						totalAmountOnGas = 0;
					if(isNaN(totalShortTripCost))
						totalShortTripCost = 0;
					if(isNaN(totalLongTripCost))
						totalLongTripCost = 0;
				}
				// console.log("Buy=>","totalShortTripCost",totalShortTripCost,"totalLongTripCost",totalLongTripCost);
				total[k] = parseInt((downPayment + totalAmountOnGas + totalShortTripCost + totalLongTripCost)/(10*12));
				total[k] = parseFloat(total[k]).toFixed(2);
				// console.log("total[k] buy", total[k]);
			}
			if(isNaN(costPerMile))
				costPerMile = 0;
			if(isNaN(total[k]))
				total[k] = 0;
			// console.log("costPerMile row", table.rows[j].cells[i]);
			table.rows[j].cells[i].innerHTML = costPerMile;
			// console.log("total[k] row", table.rows[j+1].cells[i]);
			table.rows[j+1].cells[i].innerHTML = total[k++];
		}
	}

	function displayCalculations(){
		var max = 9999999999;
		//console.log("Total is ", total);

		for(var i=0;i<total.length;i++)
		{
			total[i] = parseFloat(total[i]);
		}

		for(var i=0;i< total.length;i++)
		{
			// console.log("total[i]", total[i]);
			// console.log("type of total[i]", typeof total[i]);
			// console.log("type of max", typeof max);
			if(max > total[i])
			{
				// alert("Max" + max + " total[i] " + total[i]);
				if(total[i]!= 0)
					max = total[i];
			}	
			// console.log("max is", max);
		}
		// console.log("The cheapest option is", max);
		if(max == 9999999999)
			max =0;
		$("#cheapestCar").html("<strong>The cheapest option is <u>" +max+"</u></strong>");
	}
	

	$("#create_table").click(function(){
		//insertTable();
		createTable();

	});
	
	$("#submit").click(function(){
		calculate();
		displayCalculations();
		
	});

});