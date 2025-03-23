const { DateTime } = require("luxon");

const today = DateTime.now();
console.log("Today's date: " + today.toLocaleString(DateTime.DATE_MED));

const myBDAY = DateTime.fromObject({
        year: 2006, 
        month: 2, 
        day: 9,
        hour: 12,
        minute: 0
});
console.log(myBDAY.toLocaleString("My bday: " + DateTime.DATETIME_FULL));

const neighborBDAY = DateTime.fromObject({
        year: 2006,
        month: 3,
        day: 16
});
console.log("Is my bday less than my neighbor's?: " + myBDAY < neighborBDAY);

const newTime = myBDAY.plus({
        year: 1,
        month: 2,
        day: 3,
        hour: 10
})
console.log("Add time to my bday: " + newTime.toLocaleString(DateTime.DATETIME_FULL));

const timeChange = newTime.setZone("Asia/Manila");
console.log("Change time zone of the added time to be in Manila: " + timeChange.toLocaleString(DateTime.DATETIME_FULL));

const bdayTimeChange = myBDAY.setZone("Europe/Berlin");
console.log("Change time zone of my bday time to be in Berlin: " + bdayTimeChange.toLocaleString(DateTime.DATETIME_FULL))

/* Useful Functions (from API Documentation)

DateTime obj = {
                    year: number, 
                    month: number (1-12), 
                    day: number (1-31), 
                    hour: number (0-23), 
                    minute: number (0-59)
                }

.now() -- Create a DateTime for the current instant, in the system's time zone

.fromObject(obj) -- Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults

.toFormat(str) -- format date according to custom string input

.toLocaleString(DateTime.DATE_MED) -- "[Month] [Day #], [Year]" format

.toLocaleString(DateTime.DATETIME_FULL) -- "[Day] [Month] [Day #], [Year] at [Time] [Time Zone]" format

.plus(obj) -- adds parameters in obj to date

.minus(obj) -- subtracts parameters in obj to date

.setZone(str) -- converts time zone of DateTime obj
        multiple ways to format: 
        - "Region/City" such as "America/New York" or "Europe/Paris"
        - "code" such as "UTC-7" or "UTC-9"

Note: You can also compare dates!
dt1 > dt2
dt1 == dt2
...

*/
