# RESTful Services Practice and Theory
 RESTful Services Practice and Theory

 # What is Web Service?

 - a system that resides on a Web Server for only purpose: serving data needed by client.
 - web services can perform calculations, provide the client with certain utilities and data.
 - there are many trqchiques, architectures and technologies that allow us to create Web Services, such as: XML Web Services, Remote Procedure Calls (RPCs), Windows Communication Foundation (WCF), REST APIs, etc...

# Understanding HTTP Protocol

- Hypertext Transfer Protocol.
- is internet protocol for requesting and receiving web pages.
- the communication itself what works on the background is called TCP (Transmission Control Protocol). HTTP is basically sending-receiving documents on the internet.
- it is the browser that creates HTTP requests and sends them to the Server.

What exactly is HTTP Request and what is its format? It is a document that consists of five parts: 
1. Method (type of action: just GET and POST)
2. Page (the URL address of a page/path)
3. HTTP Version
4. HTTP Headers (follow-up data of a request: host, authorization, user-agent)
5. HTTP Request Body (main data of a request)

What is HTTP Response and its format?
1. HTTP Version 
2. HTTP Status Code (special code for an event - success(200, 201), failure(401, 404), etc.)
3. HTTP Status Text (text explaining the status code)
4. HTTP Response Headers (follow-up data of a response: name of a server, date, content-type)
5. HTTP Response Body (main data of a response: usually an html-document)

# HTTP Status Codes:
- 1xx Informational Status
- 2xx Success Status
- 3xx Redirection Status
- 4xx Client Error
- 5xx Server Error

# REST Architecture
- Representational State Transfer.
- Popular software architecure for creating Web Services.
- Transfers tables or collections (called resources) through URLs.
- Uses HTTP protocol for sending and receiving data.
- Does not deal with implementation, only design guidelines (meaning you can build in with any backeng language if you follow the rules)
- Developed by Roy Fielding in 2000
- ANy Web Service implemented by REST guidelines is called RESTful Service or REST API

REST and HTTP: REST is build on top of HTTP protocol. The data sent and received is placed inside the HTTP documents. The difference is: in case of REST Request/REST Response the data will be presented in .json format, and not as an html document.

REST APIs have more common methods than HTTP: apart from GET and POST, there are also PUT (update), PATCH (update partially), DELETE.
