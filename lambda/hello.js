exports.handler = async function (event) {
  console.log('request:', JSON.stringify(event, undefined, 2))
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain' },
    body: `Good afternoon, CDK! You've hit ${event.path}\n`,
  }
}