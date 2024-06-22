const dynamoose = require("../config/db");

// Test to check if the Dynamoose connection is configured correctly
test("should connect to DynamoDB using Dynamoose", async () => {
  const ddb = dynamoose.aws.ddb();
  try {
    const data = await ddb.listTables().promise();
    console.log("Tables:", data.TableNames);
    expect(data.TableNames).toBeDefined();
  } catch (error) {
    console.error("Error connecting to DynamoDB:", error);
    throw error;
  }
});
