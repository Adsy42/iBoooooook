const dynamoose = require("dynamoose");
const AWS = require("aws-sdk");
const path = require("path");

// Set the AWS_CONFIG_FILE environment variable programmatically
process.env.AWS_CONFIG_FILE = path.resolve(__dirname, "../aws-config.ini");

// Ensure the SDK loads the shared configuration file
process.env.AWS_SDK_LOAD_CONFIG = "1";

// Initialize AWS SDK (it will automatically use the configuration from AWS_CONFIG_FILE)
const ddb = new AWS.DynamoDB();

// Set the DynamoDB instance to use with Dynamoose
dynamoose.aws.ddb.set(ddb);

module.exports = dynamoose;
