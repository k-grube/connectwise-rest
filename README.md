# connectwise-rest

[![npm version](https://img.shields.io/npm/v/connectwise-rest.svg)](https://www.npmjs.com/package/connectwise-rest) [![npm downloads](https://img.shields.io/npm/dt/connectwise-rest.svg)](https://www.npmjs.com/package/connectwise-rest) [![Node.js CI](https://github.com/k-grube/connectwise-rest/actions/workflows/node.js.yml/badge.svg?branch=master&event=push)](https://github.com/k-grube/connectwise-rest/actions/workflows/node.js.yml) [![Coverage Status](https://coveralls.io/repos/github/k-grube/connectwise-rest/badge.svg?branch=master)](https://coveralls.io/github/k-grube/connectwise-rest?branch=master)

A Node.JS TypeScript module for interacting with the ConnectWise Manage and Automate REST APIs. 
This module provides bindings for ease of development against the ConnectWise REST APIs as well as pagination, automatic retries and logging.   

###  ⚠️Breaking Changes ⚠️

Version 2.0 regenerates the Automate surface from the new swagger 2025.0.5 spec
(some class renames, see [CHANGELOG.md](./CHANGELOG.md) for the rename map) and
upgrades Manage to the 2025.16 spec.

## Table of Contents

- [Requirements](#requirements)
  - [Manage](#manage)
  - [Automate](#automate)
- [Documentation](#documentation)
- [Usage](#usage)
  - [Manage Usage](#manage-usage)
  - [Automate Usage](#automate-usage)
  - [Pagination](#pagination)
  - [File Uploads](#file-uploads)
  - [File Downloads](#file-downloads)
  - [APIs Without Typings](#apis-without-typings)
  - [Cloud-Hosted ConnectWise Manage](#cloud-hosted-connectwise-manage)
- [Examples](#examples)
  - [Sample Project](#sample-project)
  - [Code Examples](#code-examples)
  - [Manage Conditions Example](#manage-conditions-example)
  - [Manage Callbacks](#manage-callbacks)

## Requirements

### Manage 

- ConnectWise Manage 2018.1+, though these functions are written for ConnectWise Manage 2021.1 APIs.
- ConnectWise Manage API keys (available on ConnectWise 2015.3+), or API Only Member keys (only available on ConnectWise 2015.6+).  See the [documentation](https://developer.connectwise.com/Authentication) for more details.

### Automate

- ConnectWise Automate 2020+
- ConnectWise Automate integrator login, your own generated token, or user account with 2FA.

## Documentation

See this package's full documentation [here](https://k-grube.github.io/connectwise-rest/index.html)

## Usage

### Manage Usage

```javascript
// ESM
import { ManageAPI } from 'connectwise-rest';
// CommonJS
const { ManageAPI } = require('connectwise-rest');

const cwm = new ManageAPI({
  companyId: 'company',
  companyUrl: 'your.connectwise.com',
  publicKey: '<public key>',
  privateKey: '<private key>',
  clientId: '<your client id>',
  entryPoint: 'v4_6_release', // optional, defaults to 'v4_6_release'
  apiVersion: '3.0.0',        // optional, defaults to '3.0.0'
  timeout: 20000,             // optional, request connection timeout in ms, defaults to 20000
  retry: false,               // optional, defaults to false
  retryOptions: {             // optional, override retry behavior, defaults as shown
    retries: 4,               // maximum number of retries
    minTimeout: 50,           // number of ms to wait between retries
    maxTimeout: 20000,        // maximum number of ms between retries
    randomize: true,          // randomize delay between retries on timeouts
  },
  debug: false,               // optional, enable debug logging
  logger: (level, text, meta) => { } // optional, pass in logging function
});

cwm.ServiceDeskAPI.Tickets.getTicketById(1234)
  .then((ticket) => {
      //do something with results
  })
  .catch((error) => {
      //handle errors
  });
```


### Automate Usage

```javascript
// ESM
import { AutomateAPI } from 'connectwise-rest';
// CommonJS
const { AutomateAPI } = require('connectwise-rest');

const cwa = new AutomateAPI({
  companyId: 'company',
  serverUrl: 'your.connectwise.com',
  clientId: '<your client id>',
  // One of the following: integrator username and password or username, password and two-factor code
  // integrator username/password:
  username: '<username>',
  password: '<private key>',
  
  // also pass in two factor passcode if not using an integrator account
  // this is useful for command line utilities
  twoFactorPasscode: '<2fa code>',

  timeout: 20000,             // optional, request connection timeout in ms, defaults to 20000
  retry: false,               // optional, defaults to false
  retryOptions: {             // optional, override retry behavior, defaults as shown
    retries: 4,               // maximum number of retries
    minTimeout: 50,           // number of ms to wait between retries
    maxTimeout: 20000,        // maximum number of ms between retries
    randomize: true,          // randomize delay between retries on timeouts
  },
  debug: false,               // optional, enable debug logging
  logger: (level, text, meta) => { } // optional, pass in logging function
});

cwa.ComputersAPI.getComputerList()
  .then((computers) => {
      //do something with results
  })
  .catch((error) => {
      //handle errors
  });
```

### Pagination

Use the pagination function to automatically fetch all records in order that match the request.  

Note: the last argument to the pagination function must be an object, or an error will be thrown.  

```javascript
const cwa = new ManageAPI()
const cwm = new AutomateAPI()

// use the instantiated ManageAPI or AutomateAPI
cwm.paginate(
  cwm.ServiceAPI.getServiceTickets,   // pass in the api function to be paginated
  {startPage: 10, pageSize: 500},     // pagination options, defaults to startPage 1, pageSize 1000
  {}                                  // additional arguments to the api function as needed                            
)
  .then(results => { /*...*/ })
  .catch(error => { /*...*/ })

```

### File Uploads

Endpoints that accept `multipart/form-data` (e.g. `SystemAPI.postSystemDocuments`
on Manage) take either a typed object or a pre-built `FormData`. The generated
method converts objects into FormData for you. The only thing you need to supply
in the file field is a `Buffer`, `Blob`, `File`, or Node `ReadStream`.

```javascript
import { readFileSync } from 'node:fs'
import { ManageAPI } from 'connectwise-rest'

const cwm = new ManageAPI({ /* ...options */ })

// Upload a document attached to a ticket. The `file` field accepts any
// FormData-appendable value (Buffer, Blob, File, ReadStream).
const doc = await cwm.SystemAPI.postSystemDocuments({
  file: readFileSync('./report.pdf'),    // Buffer
  recordType: 'Ticket',
  recordId: 1234,
  title: 'Monthly report',
  privateFlag: false,
})

console.log(doc.id, doc.fileName)
```

Need more control over the multipart encoding (custom filename, MIME type, streams
with specific content-length)? Build your own `FormData` and hand it in directly:

```javascript
import { createReadStream } from 'node:fs'

const fd = new FormData()
fd.append('file', new Blob([await readFile('./image.png')], { type: 'image/png' }), 'image.png')
fd.append('recordType', 'Contact')
fd.append('recordId', String(42))
fd.append('title', 'Avatar')

await cwm.SystemAPI.postSystemDocuments(fd)
```

The same mechanism works on Automate endpoints that accept `multipart/form-data`.
The method signatures look like `postFoo(fooRequest: FooRequest | FormData)`.

### File Downloads

Endpoints that return `application/octet-stream` or `application/pdf` are typed as
`OctetStreamResponse` (which is `Buffer` at runtime on Node) or `PDFResponse`.
Endpoints that return `text/html` are typed as `HTMLResponse` (a string). The
runtime configures axios to decode the response correctly, no manual setup
required.

```javascript
import { writeFileSync } from 'node:fs'

// Download a contact's avatar image (octet-stream)
const buffer = await cwm.CompanyAPI.getCompanyContactsByIdImage(42, true, '')
writeFileSync('./avatar.bin', buffer)

// Download a document attached to a ticket
const pdf = await cwm.SystemAPI.getSystemDocumentsByIdDownload(documentId)
writeFileSync('./document.pdf', pdf)
```

In a browser environment, override the response type if you want a `Blob`:

```javascript
// Use the untyped request escape hatch with an explicit responseType
const blob = await cwm.request({
  path: `/system/documents/${id}/download`,
  method: 'get',
  responseType: 'blob',
})
```

### APIs Without Typings

You can also manually access the API without typings:

```javascript

    const { ManageAPI, AutomateAPI } = require('connectwise-rest');

    const cwm = new ManageAPI(CWMOptions);
    const cwa = new AutomateAPI(CWAOptions);
    
    // use cwa.request or cwm.request
    cwm.request({
      path: '/path/to/api',
      method: 'POST',
      params: {
        'queryParam1': 'val1',
        'queryParam2': 'val2'
      },
      data: {
        'dataValue': 'val1',
      },
      // optional, set to 'multipart' if you're passing a FormData
      contentType: 'json',
      // optional, set to 'arraybuffer' | 'blob' | 'stream' | 'text' for non-JSON responses
      responseType: 'json',
    })
      .then((result) => {
          //do something with results
      })
      .catch((error) => {
          //handle errors
      });
```

### Cloud-Hosted ConnectWise Manage

To access cloud-hosted ConnectWise, use the `companyUrl` of `api-na.myconnectwise.net` and override the default `entryPoint`.

| Region | URL                            |
| --- |--------------------------------|
| North America | api-na.myconnectwise.net       |
| Europe | api-eu.myconnectwise.net       |
| Australia | api-aus.myconnectwise.net      |
| Demo | api-staging.connectwisedev.com |

```javascript
    options = {
        companyId: 'company',
        companyUrl: 'api-na.myconnectwise.net',
        entryPoint: 'v2022.1', // change to the current hosted version 
        publicKey: '<public key>',
        privateKey: '<private key>'
    }
```

## Examples

### Sample Project

See [the sample project here](https://github.com/k-grube/cw-micro).  This is a simple node.js express based API. 

### Code Examples

Get ticket 1234 and print ticket number, summary and status. 

```javascript

    cwm.ServiceAPI.getServiceTicketsById(1234)
        .then((ticket) => { console.log(ticket.id, ticket.summary, ticket.status.name); })
        .catch((err) => { console.log(err); });
```

Create new ticket on service board, then print the returned ticket number, or any errors

```javascript
    cwm.ServiceAPI.postServiceTickets({
      summary: "This is the summary",
      board: {
          name: "Service Board"
      },
      company: {
          identifier: "ABC" //company ID
      },
      initialDescription: "ticket description",
      recordType: "ServiceTicket"
      //can also pass in any other Ticket object settings as needed
    })
    .then((ticket) => { console.log(ticket.id); })
    .catch((err) => { console.log(err); });    
    
```

Change the status of a ticket

```javascript
    cwa.ServiceAPI.patchServiceTicketsById(1234, [{
        op: 'replace',
        path: 'status',
        value: {id: 123} //id of the status to change to, find with boards.getBoards and status.getStatuses
    }, {
        //second or more operations
    }])
    .then((res) => { 
      //do something with returned ticket 
    })
    .catch((err) => { 
      //do something with errors 
    });    

```

### Manage Conditions Example

Valid example conditions string:
  
```javascript

    const conditions = '(contact/name like "Fred%" and closedFlag = false) and dateEntered > [2015-12-23T05:53:27Z] or summary contains "test" AND  summary != "Some Summary"'

```

Error message returned from server when invalid conditions are passed in:
> Expected a boolean value, not a numeric. String values should be enclosed with double or single quotes; DateTime values should be enclosed in square brackets; numbers should consist of only digits, and optionally a decimal point and a negation sign; boolean values should be indicated with the keywords true or false; null values should be indicated by the keyword null.


### Manage Callbacks

This library includes an express style callback middleware that will parse and verify the payload signature.

```javascript
  const {utils} = require('connectwise-rest')
  const CWCallback = utils.Callback;
  
  router.post('/your/callback', CWCallback.middleware((err, req, res, verified, payload) => {
    if (err) {
      //handle error, parsing, malformed object, etc
      res.status(500).end();
    } else if (!verified) {
      // send 403 on verification failure, 
      // or handle some other way
      res.status(403).end();
    } else {
      res.status(200).end()
    }
    const {action, id} = req.query;
    // do something with the payload
  }));

```

