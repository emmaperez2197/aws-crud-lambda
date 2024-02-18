module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello word by serverless",
        input: event,
      },
      null,
      2
    ),
  };
};
