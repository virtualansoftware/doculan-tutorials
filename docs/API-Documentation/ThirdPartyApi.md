## 📄 Document Template APIs

This section describes the APIs used to retrieve document templates from the system.

---

## 🔹 1 Get Document Template by Name

Retrieve a specific document template using its template name.

### **Endpoint**

````
GET /templates/{template_name}
````

### **Path Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `template_name` | string | ✅ Yes | Name of the document template |


### **Query Parameters**
| Name | Type | Required | Default | Description |
|-----|------|----------|---------|-------------|
| `is_global` | boolean | ❌ No | `false` | Whether the template is global |

### **Headers**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `Authorization` | string | ❌ No | Bearer access token |


### **Request Body**
> _Not required_

### **Responses**
| Status Code | Description |
|------------|-------------|
| 200 | Successful response |
| 422 | Validation error |

### **Tags**
`Document Template`

---

## 🔹 2 Get All Document Templates

Retrieve a list of all available document templates.

### **Endpoint**


````
GET /templates
````

### **Query Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `is_global` | boolean \| null | ❌ No | Filter global templates |

### **Headers**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `Authorization` | string | ❌ No | Bearer access token |


### **Request Body**

> _Not required_


### **Responses**
| Status Code | Description |
|------------|-------------|
| 200 | Successful response |
| 422 | Validation error |

### **Tags**
`Document Template`

---

# 📄 Document Tracker APIs

This API allows clients to retrieve the current status of a document using its tracking and document identifiers.

---

## 🔹 1 Get Document Status

Retrieve the status of a specific document.

### **Endpoint**

```` 
GET /documents/status
````

---

### **Query Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `tracking_id` | string | ✅ Yes | Unique tracking identifier of the document |
| `document_id` | string | ✅ Yes | Unique identifier of the document |


**Example**


> tracking_id=e1bfaec4-a667-43dd-b221-0b4qwbd11a77

> document_id=13d78bd9-70p1-4c8d-9b1c-a9066eda140f


---

### **Headers**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `Authorization` | string | ❌ No | Bearer access token |

---

### **Request Body**
> _Not required_

---

### **Responses**
| Status Code | Description |
|------------|-------------|
| 200 | Successful response |
| 422 | Validation error |

---

### **Response Format**
- Content Type: `application/json`

---

### **Tags**
`Document Tracker`

---

## 🔹 2 Get Party Document Status

Retrieve the document status for an individual party using tracking, document, and party identifiers.

### **Endpoint**

````
GET /documents/party-status
````

---

### **Query Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `tracking_id` | string | ✅ Yes | Unique tracking identifier of the document |
| `document_id` | string | ✅ Yes | Unique identifier of the document |
| `party_id` | string | ✅ Yes | Unique identifier of the party |

**Example**

> tracking_id=13c34dd9-7f31-4s3d-9b1c-b006eda140f

> document_id=e1bfqwe9-a677-43ad-b211-0b4afbd11a77

> party_id=1


---

### **Headers**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `Authorization` | string | ❌ No | Bearer access token |

---

### **Request Body**
> _Not required_

---

### **Responses**
| Status Code | Description |
|------------|-------------|
| 200 | Successful response |
| 422 | Validation error |

---

### **Response Format**
- Content Type: `application/json`

---

### **Tags**
`Document Tracker`

---

## 🔹 3 Resend Document Link

Resend the document access or signing link for an existing document using its document and tracking identifiers.

### **Endpoint**

````
POST /documents/resend
````

---

### **Query Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `store_as_default` | boolean | ❌ No | Store the provided configuration as default |

**Example**

> store_as_default=false


---

### **Headers**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `Authorization` | string | ❌ No | Bearer access token |

---

### **Request Body**
**Content-Type:** `application/json`  
**Required:** ✅ Yes

#### **Request Body Example**

````
json

{
  "document_id": "fce36a1e-5q95-4cf8-99ba-e62994f3ceb0",
  "tracking_id": "076a3e8b-2uue-49va-8d7e-d6d24d98f2ed",
  "validityDate": "2025-12-31T18:29:59.000Z",
  "remainder": 0,
  "client_info": 
  {
    "ip": "3.88.145.27",
    "city": "New York",
    "region": "New York",
    "country": "US",
    "timezone": "America/New_York",
    "timestamp": "2025-12-21T10:14:01.699Z",
    "aws_region": "us-east-1",
    "browser": "Chrome",
    "device": "PC/Laptop",
    "os": "Windows 10"
  }
}

````

**Response**

| Status Code | Description                       |
| ----------- | --------------------------------- |
| 200       | Document link successfully resent |
| 422       | Validation error                  |

**Response Format**

Content Type: `application/json`

**Tags**

`Document Tracker`

---

## 🔹 4 Get Signed PDF

Retrieve the final signed PDF document.

### **Endpoint**

````
GET /documents/signed-pdf
````

---

### **Query Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `tracking_id` | string | ✅ Yes | Unique tracking identifier of the document |
| `document_id` | string | ✅ Yes | Unique identifier of the document |

**Example**


> tracking_id=a2bfeeb9-a677-43ad-b211-0b4afbd11a77

> document_id=fyo50e1e-5d05-4cf8-99ba-e62994f3ceb0


---

### **Headers**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `Authorization` | string | ❌ No | Bearer access token |

---

### **Request Body**
> _Not required_

---

### **Responses**
| Status Code | Description |
|------------|-------------|
| 200 | Signed PDF retrieved successfully |
| 422 | Validation error |

---

### **Response Format**
- Content Type: `application/json`

---

## 🔹 5 Download Signed Document Package

Download the complete signed document package, which may include the signed PDF, audit logs, and supporting files.

### **Endpoint**

````
GET /documents/signed-package
````

---

### **Query Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `document_id` | string | ✅ Yes | Unique identifier of the document |
| `tracking_id` | string | ✅ Yes | Unique tracking identifier of the document |

**Example**


> document_id=fce56e1e-5d05-4cf8-99ba-e62994f3ceb0

> tracking_id=a2bfeeb9-a677-47qd-b211-0b4afbd11a77


---

### **Headers**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `Authorization` | string | ❌ No | Bearer access token |

---

### **Request Body**
> _Not required_

---

### **Responses**
| Status Code | Description |
|------------|-------------|
| 200 | Signed document package downloaded successfully |
| 422 | Validation error |

---

### **Response Format**
- Content Type: `application/json`

---

### **Tags**
`Document Tracker`


---

## 🔹 6 Get Completed Certificate

Retrieve the completion certificate for a fully processed document.

### **Endpoint**

````
GET /documents/complete-certificates
````

---

### **Query Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `document_id` | string | ✅ Yes | Unique identifier of the document |
| `tracking_id` | string | ✅ Yes | Unique tracking identifier of the document |

**Example**


> document_id=fce50e1e-5d05-4cf8-99ba-b67994f3ceb0

> tracking_id=e1bfeeb9-a677-43ad-f411-0b4afbd11a77

---

### **Headers**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `Authorization` | string | ❌ No | Bearer access token |

---

### **Responses**
| Status Code | Description |
|------------|-------------|
| 200 | Completion certificate generated successfully |
| 422  | Validation error |


---

## 🔹 7 Log Action API

Log a document-related action such as cancellation, rejection, or other workflow events.

### **Endpoint**

````
POST /documents/log-action
````

---

### **Headers**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `Authorization` | string | ❌ No | Bearer access token |

---

### **Request Body**
**Content-Type:** `application/json`  
**Required:** ✅ Yes

#### **Request Body Example**

````
json

{
  "document_id": "687u5804-d360-4e98-802f-d5531b5aabd8",
  "tracking_id": "7054eab3-c0f2-40e2-9b9e-731c1444df6d",
  "action": "CANCELLED",
  "party_id": "1",
  "reason": "User requested cancellation",
  "client_info": {
    "ip": "3.128.94.52",
    "city": "Lisle",
    "region": "Illinois",
    "country": "US",
    "timezone": "America/Chicago",
    "timestamp": "2025-12-21T04:14:01.699Z",
    "browser": "Chrome",
    "device": "PC/Laptop",
    "os": "Windows 10"
  },
  "holder": {
    "name": "John Doe",
    "email": "johndoe@virtualansoftware.com",
    "address": {
      "address_line_1": "3333 Warrenville Road",
      "address_line_2": "Suite 200",
      "city": "Lisle",
      "country": "USA",
      "state": "IL",
      "zipcode": "60532"
    }
  }
}


````

**Responses**

| Status Code | Description                |
| ----------- | -------------------------- |
| 200       | Action logged successfully |
| 422       | Validation error           |

## 🔹 8 Get All Tracking IDs by Status

Retrieve all document tracking IDs grouped by their current status.

**Endpoint**

```
GET /documents/trackings-status
```

**Headers**

| Name            | Type   | Required | Description         |
| --------------- | ------ | -------- | ------------------- |
| `Authorization` | string | ❌ No     | Bearer access token |

**Request Body**

> Not required

**Responses**

| Status Code | Description                         |
| ----------- | ----------------------------------- |
| 200       | Tracking IDs retrieved successfully |


**Response Format**

Content Type: `application/json`

**Tags**

`Document Tracker`

---

## 🔹 9 Send Document

Send a document to one or more parties for review or signing.

### **Endpoint**


````
POST /documents/send
````

---

### **Query Parameters**
| Name | Type | Required | Default | Description |
|-----|------|----------|---------|-------------|
| `store_as_default` | boolean | ❌ No | `false` | Store configuration as default |

---

### **Headers**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `Authorization` | string | ❌ No | Bearer access token |

---

### **Request Body**
**Content-Type:** `application/json`  
**Required:** ✅ Yes

#### **Request Body Example**

````
json

{
  "document_id": "fct60e1e-5d05-4cf8-99ja-e62994f3ceb0",
  "validityDate": "2025-12-31T18:29:59.000Z",
  "remainder": 0,
  "parties": 
  [
    {
      "id": "1",
      "name": "Sarah Williams",
      "email": "sarah.williams@virtualansoftware.com"
    }
  ],
  "email_response": [
    {
      "email_subject": ": Summary of Your API Integration Check",
      "email_body": "Hi [Fullname], We have completed the..."
    }
  ],
  "cc_emails": [
    "jason.brown@virtualansoftware.com"
  ],
  "client_info": {
    "ip": "3.156.94.52",
    "city": "Lisle",
    "region": "Illinois",
    "country": "US",
    "timezone": "America/Chicago",
    "timestamp": "2025-12-21T04:14:01.699Z",
    "aws_region": "us-east-2",
    "browser": "Chrome",
    "device": "PC/Laptop",
    "os": "Windows 10"
  },
  "holder": {
    "name": "John Doe",
    "email": "johndoe@virtualansoftware.com",
    "address": {
      "address_line_1": "3333 Warrenville Road",
      "address_line_2": "Suite 200",
      "city": "Lisle",
      "country": "USA",
      "state": "IL",
      "zipcode": "60532"
    }
  },
  "otp_enabled": false,
  "template_info": {
    "template_type": "Myself",
    "template_name": "Testing-template"
  }
}

````


**Responses**

| Status Code | Description                |
| ----------- | -------------------------- |
| 200      | Document sent successfully |
| 422       | Validation error           |


## 🔹 10 Get Tracking Metadata

Retrieve **metadata and status details** for a document using its **tracking ID.**

**Endpoint**  

````
GET /documents/{tracking_id}
````

**Path Parameters**

| Name          | Type   | Required | Description                |
| ------------- | ------ | -------- | -------------------------- |
| `tracking_id` | string | ✅ Yes    | Unique tracking identifier |


````
/documents/98dd587c-5d56-5dfa-9c6e-62efbae24b36
````

**Headers**

| Name            | Type   | Required | Description         |
| --------------- | ------ | -------- | ------------------- |
| `Authorization` | string | ❌ No     | Bearer access token |


**Responses**

| Status Code | Description                 |
| ----------- | --------------------------- |
| 200       | Tracking metadata retrieved |
| 422       | Validation error            |


## 🔹 11 Sign Field API

Submit **signed field values** for a document by a specific party.


**Endpoint**
````
POST /documents/sign
````

**Headers**

| Name            | Type   | Required | Description         |
| --------------- | ------ | -------- | ------------------- |
| `Authorization` | string | ❌ No     | Bearer access token |


**Request Body**

Content-Type: `application/json`

Required: `✅ Yes`


**Request Body Example**

````
json

{
  "tracking_id": "98db097c-56f6-4ffa-9c6e-62efbae24b36",
  "document_id": "fce58e1e-5d05-4cf8-99ba-e62994f3ceb0",
  "party_id": "1",
  "fields": [
    {
      "fields_ids": [
        {
          "field_id": "1766751979232-text",
          "value": "Maxin",
          "font": "",
          "style": ""
        }
      ]
    }
  ],
  "client_info": {
    "ip": "3.128.94.52",
    "city": "Lisle",
    "region": "Illinois",
    "country": "US",
    "timezone": "America/Chicago",
    "timestamp": "2025-12-27T04:02:59.239Z",
    "aws_region": "us-east-2",
    "browser": "Chrome",
    "device": "PC/Laptop",
    "os": "Windows 10"
  }
}


````

**Responses**

| Status Code | Description                |
| ----------- | -------------------------- |
| 200       | Fields signed successfully |
| 422       | Validation error           |

**Tags**

`Document Tracker`

---

# 📁 Files Operation APIs

The Files Operation **APIs allow you to retrieve individual files or list all available files** associated with your account or documents.


**Base URL:**   
https://api.doculansign.com


---

## 🔹 1 Get File

Retrieve a specific file using its document ID.  
Optionally, you can return the actual PDF file or just the file metadata.

### **Endpoint**

````
GET /files/{document_id}
````

---

### **Path Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `document_id` | string | ✅ Yes | Unique identifier of the document |

**Example**

````
/files/f7f5a7ce-87yf-4cf8-a3ab-3a9cc1ebc5ea
````

---

### **Query Parameters**
| Name | Type | Required | Default | Description |
|-----|------|----------|---------|-------------|
| `return_pdf` | boolean | ❌ No | `false` | If `true`, returns the PDF file; otherwise returns file metadata |

---

### **Headers**
> _None required_

---

### **Request Body**
> _Not required_

---

### **Responses**
| Status Code | Description |
|------------|-------------|
| 200 | File or metadata retrieved successfully |
| 422 | Validation error |


---

## 🔹 2 List Files

Retrieve a list of all available files.

### **Endpoint**

````
GET /files/
````

---

### **Headers**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `Authorization` | string | ❌ No | Bearer access token |

---

### **Query Parameters**
> _None_

---

### **Request Body**
> _Not required_

---

### **Responses**
| Status Code | Description |
|------------|-------------|
| 200 | List of files retrieved successfully |

---

### **Response Format**
- Content-Type: `application/json`
- Returns an array of file objects with associated metadata.

---

###  Tags
`Files Operation`

---

