exports.handler = async function(event, context) {
    console.info("This is info of context" + context)
    console.log("This is log event" + event)
    console.warn("This is warn")
    console.error("This is an error, yeah")
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World"})
    };
}