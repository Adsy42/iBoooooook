const docClient = require("../config/db");
const { getTwoDaysAheadRange } = require("../utils/isoConversion");
const location = "Australia/Melbourne";

const fetchBookingsStartingTwoDaysAhead = async () => {
  const { start, end } = getTwoDaysAheadRange(location);

  // Define the parameters for the scan
  const params = {
    TableName: "Bookings",
    FilterExpression: "#startTime BETWEEN :startTimeStart AND :startTimeEnd",
    ExpressionAttributeNames: {
      "#startTime": "startTime",
    },
    ExpressionAttributeValues: {
      ":startTimeStart": start,
      ":startTimeEnd": end,
    },
  };

  // Perform the scan
  try {
    const data = await docClient.scan(params).promise();
    return data.Items;
  } catch (err) {
    console.error("Error scanning Bookings table:", err);
    throw err;
  }
};

// Usage example
(async () => {
  try {
    const bookings = await fetchBookingsStartingTwoDaysAhead();
    console.log("Bookings starting two days ahead:", bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
  }
})();
