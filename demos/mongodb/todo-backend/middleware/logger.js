const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    const body = JSON.stringify(req.body);
    const headers = JSON.stringify(req.headers);

    console.log(`
=== Request Log ===
Timestamp: ${timestamp}
Method: ${method}
URL: ${url}
Body: ${body}
Headers: ${headers}
=================
    `);

    // Capture the response
    const originalSend = res.send;
    res.send = function (data) {
        console.log(`
=== Response Log ===
Timestamp: ${new Date().toISOString()}
Status: ${res.statusCode}
Response Body: ${JSON.stringify(data)}
=================
        `);
        originalSend.apply(res, arguments);
    };

    next();
};

module.exports = logger; 