const AWS = require("aws-sdk");

const updateTask = async (event) => {
    
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient();

        const { id } = event.pathParameters
        
        const { title } = JSON.parse(event.body)


        const result = await dynamodb.update({
            TableName: "taskTable",
            UpdateExpression: 'set title = :title',
            ExpressionAttributeValues: {
                ':title': title
            },
            Key: {
                id: id
            },
            ReturnValues: 'ALL_NEW'
        }).promise();

        
        return {
            status: 200,
            body: JSON.stringify({ 
                message: 'Product updated', result
            })
        }


    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    updateTask
}