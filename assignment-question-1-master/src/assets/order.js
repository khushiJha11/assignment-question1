const fs = require("fs");
const json = require("json");

const timestampData = await fs.readFileSync("src/assets/timeStamps.json");
const orderData = await fs.readFileSync("src/assets/orders.json");

const orderSubmittedDates = {};
for (const timestamp of json.parse(timestampData)["timestamps"]) {
  orderSubmittedDates[timestamp["&id"]] = timestamp["orderSubmitted"];
}

const results = json.parse(orderData)["results"];
for (const result of results) {
  const orderSubmittedDate = orderSubmittedDates[result["&id"]];
  if (orderSubmittedDate) {
    result["orderSubmitted"] = orderSubmittedDate;
  }

  result["profilePicture"] = "https://picsum.photos/200/300";
}
console.log(json.stringify(results, null, 4));

// const output = json.stringify(results, null, 4);
// fs.writeFileSync("output.json", output);


