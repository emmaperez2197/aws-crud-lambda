const AWS = require('aws-sdk')

const deleteTask = async (event) =>{
    try{
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const { id } = event.pathParameters
        
       await dynamodb.delete({
            TableName: "taskTable",
            Key: {
                id: id
            }
        }).promise();

        return {
            status: 200,
            body: JSON.stringify({ 
                message: 'Product deleted'
            })
        }
    }catch(error){
        console.log(error);
    }
};
module.exports = {
    deleteTask
}