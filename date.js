let year = prompt("Enter a year");

for (let month = 0; month < 12; month++) {
    let date = new Date(year, month, 1);
    while (date.getMonth() === month) {
        console.log(date.toDateString());
        date.setDate(date.getDate() + 1);
    }
}