const AWS = require("aws-sdk");
// const { DynamoDB  }= require('@aws-sdk/client-dynamodb')
const { v4 } = require('uuid')

const jsonBodyParser = require('@middy/http-json-body-parser');
const middy = require('@middy/core');



const addTask =  async(event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const {title, description} = JSON.parse(event.body)

    const createAt = new Date()

    const id = v4()

    const newTaks = {
        id,
        title,
        description,
        createAt
    }

    await dynamodb.put({
        TableName: "taskTable",
        Item: newTaks
      }).promise();
    



    return {
        statusCode: 200,
        body: JSON.stringify(newTaks)
    }
}

module.exports = { addTask }