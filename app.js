let now = new Date()
document.write("<h1>","Today is: "+ now,"</h1>")

let monthArray =["January","February","March","April","May","June","July","August","September","October","November","December"]
document.write("<h1>","The Month is: ",monthArray[now.getMonth()],"</h1>")


let day = now.getDay()
let week_days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let comp = week_days[day]
let sli = comp.slice(0,3)
document.write("<h1>","Today is: ",sli,"</h1>")

if (comp == "Saturday" || comp == "Sunday") {
    document.write("<h1>","Its Fun Day","</h1>")
}

let date = now.getDate()
if(date <=15){
    document.write("<h1>","Its First Fifteen Days Of Months","</h1>")
}
else{
    document.write("<h1>","Its last Fifteen Days Of Months","</h1>")

}
let now1 = new Date("1 Jan 1970")
document.write("<h1>","Current Date is: " ,now,"</h1>")
document.write("<h1>","Elapsed Milli Sec since 1st Jan 1970: " ,now-now1)
document.write("<h1>","Elapsed Minutes since 1st Jan 1970: " ,now-now1/60000)

document.write("<br>")
document.write("<br>")

let hour = now.getHours()
if (hour > 12) {
    hour = hour-12
    document.write("Its PM")
}
else{
    document.write("Its AM")
    
}
document.write("<br>")
document.write("<br>")

let now2 = new Date("31 Dec 2023")
document.write("Later date:" ,now2)


document.write("<br>")
document.write("<br>")

let now3 = new Date("Mar 13, 2024");
let daysPassed = (now - now3) / (1000 * 60 * 60 * 24); 
document.write(daysPassed.toFixed(0), " Days Passed In Ramadan")

document.write("<br>")
document.write("<br>")

document.write("On Reference Days: ",now)

document.write("<br>")
document.write("<br>")

let now4 = new Date("1 jan 2024")
let now5 =   now.getTime()-now4.getTime() 
document.write(now5," The seconds passed since 1 Jan")

document.write("<br>")
document.write("<br>")

let user = new Date(prompt("Enter Ur Birth Year"))
let result = now.getFullYear() - user.getFullYear()
document.write("You Are: ",result," Years old");

document.write("<br>")
document.write("<br>")

let name1 = prompt("Enter Your Name")
document.write("Your Name: ",name1)

document.write("<br>")
document.write("<br>")

document.write("Month",monthArray[now.getMonth()])

document.write("<br>")
document.write("<br>")

let units = 410
document.write("Number Of Units: ",units)

document.write("<br>")
document.write("<br>")

let charges = 16
let multiply = units * charges
document.write("Net Amount Payable (With In Due Date: )",multiply)

document.write("<br>")
document.write("<br>")

let late = 350
document.write("Late Amouns payment: ",late)
document.write("<br>")
document.write("<br>")
document.write("Gross Amount Payable after due date: ",multiply+late)