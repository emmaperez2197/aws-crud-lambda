const AWS = require("aws-sdk");

const getTasks = async (event) => {

    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient();

        const result = await dynamodb.scan({
            TableName: 'taskTable'
        }).promise()
        console.log("🚀 ~ getTasks ~ result:", result)


        const task = result.Items


        return {
            status: 200,
            body: {
                task
            }
        }
    } catch (error) {
        console.log(error)
    }



}


module.exports = {
    getTasks
}