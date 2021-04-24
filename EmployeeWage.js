//UC1 
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT){
    console.log("Employee is Absent")
    return;
}
else{
    console.log("Employee is present")
}

//UC2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck){
    case IS_PART_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}

empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: "+ empWage);

//UC3
function getWorkingHours (empCheck) {
    switch (empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
empHrs = 0;
empCheck = Math.floor(Math.random() * 10 ) % 3;
empHrs = getWorkingHours(empCheck);
empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee wage: "+ empWage);

//UC4
let NUM_OF_WORKING_DAYS = 2;
empHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++){
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hours: "+empHrs+ " Employee Wage: "+empWage);

//UC5
const MAX_HRS_IN_MOTHS = 100;
NUM_OF_WORKING_DAYS = 10;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MOTHS && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC5 - Total days: "+ totalWorkingDays + " Total Hours: "
+ totalEmpHrs+" Employee Wage: "+ empWage);

//UC6
{
function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

const MAX_HRS_IN_MONTH = 160;
NUM_OF_WORKING_DAYS = 20;
totalEmpHrs = 0;
totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays ++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 - Total Days: "+ totalWorkingDays +"Total Hours: "
+totalEmpHrs +"Employee Wage: "+empWage);

//Array helper function
//UC 7A - total wage using Array forEach traversal or reverse method
let totalEmpWage = 0;
function sum(dailyWage){
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC 7A - Total Days: "+ totalWorkingDays + 
            "Total hours: " + totalEmpHrs + "Employee wage: " + totalEmpWage);

function totalWages (totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("UC 7A - Employee wage with reduce: " + 
            empDailyWageArr.reduce(totalWages,0));

//UC 7B - Show the day along with daily wage using Array map helper function 
let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC 7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC 7C - show days when Full time wage of 160 were earned
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC 7C - daily wage filter when Fulltime wage Earned");
console.log(fullDayWageArr);

//UC 7D - Find the first occurrence when Full Time was earned using find function
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC 7D - First time Fulltime wage was earned on day: "+
            mapDayWithWageArr.find(findFullTimeWage));


//UC 7E - check if every element of full time wage is truely holding full time wage
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC 6E - Check All Element have full time Wage: " +
            fullDayWageArr.every(isAllFullTimeWage));

//UC 7F - check if there is any part time Wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC 7F - check if any part time Wage: " +
            mapDayWithWageArr.some(isAnyPartTimeWage));


//UC 7G - Find the number of days the Employee worked
function totalDaysWorked(numOfDays, dailyWage){
    if (dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G - Number of day Employee Worked: " +
            empDailyWageArr.reduce(totalDaysWorked, 0));
}

//UC 6 Arrays and 7 Maps
const MAX_HRS_IN_MONTH = 160;
 NUM_OF_WORKING_DAYS = 20;
totalEmpHrs = 0;
totalWorkingDays = 0;
empDailyWageArr = new Array();
let empDailyWageMap = new Map();

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}

console.log("UC7A- Emp Wage map total: " +
Array.from(empDailyWageMap.values()).reduce(totalWages, 0));



//UC 9 Arrow functions
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let empDailyHrsMap = new Map();
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("UC9A - Employee wage with Arrow: " + "Total Hours: " +
            totalHours + "Total Wages: " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
 empDailyHrsmap.forEach((value, key,) => {
    if(value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log("Full working days: " + fullWorkingDays);
console.log("Part Working days: " + partWorkingDays);
console.log("Non Working days: " + nonWorkingDays);

//UC 10 Object Creation
totalEmpHrs = 0;
totalWorkingDays = 0;
let empDailyHrsAndWageArr = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr,push({
        dayNum: totalWorkingDays,
        dailyHours: empHrs,
        dailyWage: calcDailyWage(empHrs),
        toString(){
            return '\nDay' + this.dayNum + '=> Working Hours is ' + this.dailyHours +
            'And Wage Earned = ' + this.dailyWage
        },
    });
}
console.log("UC 10 showing daily hours worked and wage earned: " + empDailyHrsAndWageArr);

//UC 10 A to 11 D using object function along with Arroe functions
let totalWage = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                                      .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
totalHours = empDailyHrsAndWageArr
                 .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage >0)
                 .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log("UC 11A Total Hours: " + totalHours + " Total Wages: " + totalWages);

process.stdout.write("UC 11B Logging Full Work Days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                     .forEach(dailyHrsAndWage =>process.stdout.write(dailyHrsAndWage.toString()));
                    
let partWorkingDayStrArr = empDailyHrsAndWageArr
                           .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                           .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\n UC 11C PartWorkingDayString: " + partWorkingDayStrArr);

let nonWorkingDayNums = empDailyHrsAndWageArr
                        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                        .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("UC 11D NonWorkingDayNums: " + nonWorkingDayNums);

