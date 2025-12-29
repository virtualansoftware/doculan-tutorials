# 📄 Document Template APIs

This section describes the APIs used to retrieve document templates from the system.

---

## 🔹 Get Document Template by Name

Retrieve a specific document template using its template name.

### **Endpoint**

````
GET /templates/{template_name}
````

### **Path Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `template_name` | string | ✅ Yes | Name of the document template |


<!-- #### ATTESTATION AND AGREEMENT -->


### **Query Parameters**
| Name | Type | Required | Default | Description |
|-----|------|----------|---------|-------------|
| `is_global` | boolean | ❌ No | `false` | Whether the template is global |

### **Headers**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `Authorization` | string | ❌ No | Bearer access token |

<!-- **Example** -->


 <!-- Authorization: Bearer <JWT_TOKEN> -->
 


### **Request Body**
_Not required_

### **Responses**
| Status Code | Description |
|------------|-------------|
| `200` | Successful response |
| `422` | Validation error |

### **Tags**
`Document Template`

---

## 🔹 Get All Document Templates

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

**Example**

````
Authorization: Bearer <JWT_TOKEN>

````


### **Request Body**

_Not required_


### **Responses**
| Status Code | Description |
|------------|-------------|
| `200` | Successful response |
| `422` | Validation error |

### **Tags**
`Document Template`

---

## 📌 Notes
- All endpoints require proper authentication when security is enabled.
- Responses are returned in **JSON** format.
- Ensure correct permissions are assigned to access these APIs.

---

# 📄 Document Tracker API

This API allows clients to retrieve the current status of a document using its tracking and document identifiers.

---

## 🔹 Get Document Status

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

**racking_id=e1bfeeb9-a677-43ad-b211-0b4afbd11a77**

**document_id=13c33bd9-78e1-4a4d-9b1c-b0066eda140f**


---

### **Headers**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `Authorization` | string | ❌ No | Bearer access token |

**Example**

````
 Authorization: Bearer <JWT_TOKEN>
 ````


---

### **Request Body**
_Not required_

---

### **Responses**
| Status Code | Description |
|------------|-------------|
| `200` | Successful response |
| `422` | Validation error |

---

### **Response Format**
- Content Type: `application/json`

---

### **Tags**
`Document Tracker`

---

### **Notes**
- Ensure valid `tracking_id` and `document_id` values are provided.
- Authorization requirements depend on the configured security scheme.
- The response contains the latest document processing status.

---

# 📄 Document Tracker API

This API allows clients to retrieve the status of a document for a specific party involved in the document workflow.

---

## 🔹 Get Party Document Status

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

**tracking_id=13c33bd9-78e1-4a4d-9b1c-b0066eda140f**
**document_id=e1bfeeb9-a677-43ad-b211-0b4afbd11a77**
**party_id=1**


---

### **Headers**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `Authorization` | string | ❌ No | Bearer access token |

**Example**

````
Authorization: Bearer <JWT_TOKEN>
````


---

### **Request Body**
_Not required_

---

### **Responses**
| Status Code | Description |
|------------|-------------|
| `200` | Successful response |
| `422` | Validation error |

---

### **Response Format**
- Content Type: `application/json`

---

### **Tags**
`Document Tracker`

---

### **Notes**
- All query parameters are mandatory for this endpoint.
- Ensure the `party_id` belongs to the specified document.
- Authorization requirements depend on the configured security scheme.
- The response returns the latest status of the document for the specified party.

--- 

# 📄 Document Tracker API

This API allows clients to resend a document signing link to recipients, with optional validity and client metadata.

---

## 🔹 Resend Document Link

Resend the document access or signing link for an existing document using its document and tracking identifiers.

### **Endpoint**

POST /documents/resend


---

### **Query Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `store_as_default` | boolean | ❌ No | Store the provided configuration as default |

**Example**

store_as_default=false


---

### **Headers**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `Authorization` | string | ❌ No | Bearer access token |

**Example**

Authorization: Bearer <JWT_TOKEN>


---

### **Request Body**
**Content-Type:** `application/json`  
**Required:** ✅ Yes

#### **Request Body Example**

````json
{
  "document_id": "fce50e1e-5d05-4cf8-99ba-e62994f3ceb0",
  "tracking_id": "076a1e8b-27ae-4e5a-8d7e-d6d24d98f2ed",
  "validityDate": "2025-12-31T18:29:59.000Z",
  "remainder": 0,
  "client_info": {
    "ip": "122.164.82.75",
    "city": "Chennai",
    "region": "Tamil Nadu",
    "country": "IN",
    "timezone": "Asia/Kolkata",
    "timestamp": "2025-12-21T15:44:01.699Z",
    "aws_region": "ap-south-1",
    "browser": "Chrome",
    "device": "PC/Laptop",
    "os": "Windows 10"
  }
}
````

**Response**

| Status Code | Description                       |
| ----------- | --------------------------------- |
| `200`       | Document link successfully resent |
| `422`       | Validation error                  |

**Response Format**

Content Type: **application/json**

**Tags**

Document Tracker

## **Notes**

- Ensure the document and tracking identifiers are valid and active.

- The validityDate defines the expiration of the resent link.

- Client metadata is used for auditing and tracking purposes.

- Authorization requirements depend on the configured security scheme.

---

# 📄 Document Tracker API

These APIs allow clients to retrieve signed documents after the document workflow has been completed.

---

## 🔹 Get Signed PDF

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

````
tracking_id=e1bfeeb9-a677-43ad-b211-0b4afbd11a77
document_id=fce50e1e-5d05-4cf8-99ba-e62994f3ceb0
````

---

### **Headers**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `Authorization` | string | ❌ No | Bearer access token |

**Example**

````
Authorization: Bearer <JWT_TOKEN>
````

---

### **Request Body**
_Not required_

---

### **Responses**
| Status Code | Description |
|------------|-------------|
| `200` | Signed PDF retrieved successfully |
| `422` | Validation error |

---

### **Response Format**
- Content Type: `application/json`

---

## 🔹 Download Signed Document Package

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

````
document_id=fce50e1e-5d05-4cf8-99ba-e62994f3ceb0
tracking_id=e1bfeeb9-a677-43ad-b211-0b4afbd11a77
````

---

### **Headers**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `Authorization` | string | ❌ No | Bearer access token |

**Example**

````
Authorization: Bearer <JWT_TOKEN>
````

---

### **Request Body**
_Not required_

---

### **Responses**
| Status Code | Description |
|------------|-------------|
| `200` | Signed document package downloaded successfully |
| `422` | Validation error |

---

### **Response Format**
- Content Type: `application/json`

---

### **Tags**
`Document Tracker`

---

### **Notes**
- Both endpoints require the document to be fully signed.
- Authorization may be required based on the configured security scheme.
- The signed document package may include additional artifacts such as audit trails and certificates.
- Use the signed PDF endpoint for direct access to the final document, and the package endpoint for full compliance records.

---

# 📄 Document Tracker API

This section covers APIs related to document completion certificates, audit/action logging, and tracking status retrieval.

---

## 🔹 Get Completed Certificate

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

````
document_id=fce50e1e-5d05-4cf8-99ba-e62994f3ceb0
tracking_id=e1bfeeb9-a677-43ad-b211-0b4afbd11a77
````

---

### **Headers**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `Authorization` | string | ❌ No | Bearer access token |

---

### **Responses**
| Status Code | Description |
|------------|-------------|
| `200` | Completion certificate generated successfully |
| `422` | Validation error |

---

### **Response Notes**
- This endpoint may return a **certificate file or no-content response**, depending on implementation.
- Used primarily for compliance and audit purposes.

---

## 🔹 Log Action API

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
  "document_id": "682c5804-f860-4e98-802f-d5531b5aabd8",
  "tracking_id": "7054eab3-c0f2-40e2-9b9e-731c1444df6d",
  "action": "CANCELLED",
  "party_id": "1",
  "reason": "User requested cancellation",
  "client_info": {
    "ip": "122.164.82.75",
    "city": "Chennai",
    "region": "Tamil Nadu",
    "country": "IN",
    "timezone": "Asia/Kolkata",
    "timestamp": "2025-12-21T15:44:01.699Z",
    "browser": "Chrome",
    "device": "PC/Laptop",
    "os": "Windows 10"
  },
  "holder": {
    "name": "Manikandan",
    "email": "manikandan.d@virtualandemo.com",
    "address": {
      "address_line_1": "3333 warrenville road",
      "address_line_2": "suite 200",
      "city": "lisle",
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
| `200`       | Action logged successfully |
| `422`       | Validation error           |

**Notes**

- This API is used for audit trails and compliance logging.

- Logged actions become part of the document’s lifecycle history.

## 🔹 Get All Tracking IDs by Status

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

`Not required`

**Responses**

| Status Code | Description                         |
| ----------- | ----------------------------------- |
| `200`       | Tracking IDs retrieved successfully |


**Response Format**

Content Type: `application/json`

**Tags**

`Document Tracker`

**General Notes**

- All endpoints may require authorization depending on system configuration.

- These APIs support auditing, compliance, and operational monitoring.

- Ensure document and tracking identifiers are valid before invoking these endpoints.

---

# 📄 Document Tracker API

These APIs manage document sending, signing, tracking, and metadata retrieval throughout the document lifecycle.

---

## 🔹 Send Document

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
  "document_id": "fce50e1e-5d05-4cf8-99ba-e62994f3ceb0",
  "validityDate": "2025-12-31T18:29:59.000Z",
  "remainder": 0,
  "parties": [
    {
      "id": "1",
      "name": "vignesh",
      "email": "vignesh02cse@gmail.com"
    }
  ],
  "email_response": [
    {
      "email_subject": ": Summary of Your API Integration Check",
      "email_body": "Hi [Fullname], We have completed the..."
    }
  ],
  "cc_emails": [
    "gowtham.v@virtualandemo.com"
  ],
  "client_info": {
    "ip": "122.164.82.75",
    "city": "Chennai",
    "region": "Tamil Nadu",
    "country": "IN",
    "timezone": "Asia/Kolkata",
    "timestamp": "2025-12-21T15:44:01.699Z",
    "aws_region": "ap-south-1",
    "browser": "Chrome",
    "device": "PC/Laptop",
    "os": "Windows 10"
  },
  "holder": {
    "name": "Manikandan",
    "email": "manikandan.d@virtualandemo.com",
    "address": {
      "address_line_1": "3333 warrenville road",
      "address_line_2": "suite 200",
      "city": "lisle",
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
| `200`       | Document sent successfully |
| `422`       | Validation error           |


## 🔹 Get Tracking Metadata

Retrieve **metadata and status details** for a document using its **tracking ID.**

Endpoint

````
GET /documents/{tracking_id}
````

**Path Parameters**

| Name          | Type   | Required | Description                |
| ------------- | ------ | -------- | -------------------------- |
| `tracking_id` | string | ✅ Yes    | Unique tracking identifier |


````
/documents/98db097c-56f6-4ffa-9c6e-62efbae24b36
````

**Headers**

| Name            | Type   | Required | Description         |
| --------------- | ------ | -------- | ------------------- |
| `Authorization` | string | ❌ No     | Bearer access token |


**Responses**

| Status Code | Description                 |
| ----------- | --------------------------- |
| `200`       | Tracking metadata retrieved |
| `422`       | Validation error            |


## 🔹 Sign Field API

Submit **signed field values** for a document by a specific party.

Endpoint

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

````
json
Request Body Example

{
  "tracking_id": "98db097c-56f6-4ffa-9c6e-62efbae24b36",
  "document_id": "fce50e1e-5d05-4cf8-99ba-e62994f3ceb0",
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
    "ip": "38.134.138.151",
    "city": "Chennai",
    "region": "Tamil Nadu",
    "country": "IN",
    "timezone": "Asia/Kolkata",
    "timestamp": "2025-12-27T15:32:59.239Z",
    "aws_region": "ap-south-1",
    "browser": "Chrome",
    "device": "PC/Laptop",
    "os": "Windows 10"
  }
}

````

**Responses**

| Status Code | Description                |
| ----------- | -------------------------- |
| `200`       | Fields signed successfully |
| `422`       | Validation error           |

**Tags**

`Document Tracker`

**General Notes**

- All endpoints may require authorization depending on configuration.

- Ensure document and tracking IDs are valid and active.

- These APIs support end-to-end document sending, signing, and tracking workflows.

---

# 📁 Files Operation API

The Files Operation **APIs allow you to retrieve individual files or list all available files** associated with your account or documents.


**Base URL**
https://api.doculansign.com


---

## 🔹 Get File

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
/files/f7f5a7ce-85ef-4cf8-a3ab-3a9cc1ebc5ea
````

---

### **Query Parameters**
| Name | Type | Required | Default | Description |
|-----|------|----------|---------|-------------|
| `return_pdf` | boolean | ❌ No | `false` | If `true`, returns the PDF file; otherwise returns file metadata |

---

### **Headers**
_None required_

---

### **Request Body**
_Not required_

---

### **Responses**
| Status Code | Description |
|------------|-------------|
| `200` | File or metadata retrieved successfully |
| `422` | Validation error |

---

### **Response Notes**
- When `return_pdf=true`, the response may contain binary PDF data.
- When `return_pdf=false`, metadata is returned in JSON format.

---

## 🔹 List Files

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
_None_

---

### **Request Body**
_Not required_

---

### **Responses**
| Status Code | Description |
|------------|-------------|
| `200` | List of files retrieved successfully |

---

### **Response Format**
- Content-Type: `application/json`
- Returns an array of file objects with associated metadata.

---

## 🏷️ Tags
`Files Operation`

---

## ℹ️ General Notes
- All endpoints are read-only.
- Authorization may be required depending on your security configuration.
- Ensure the `document_id` exists and is accessible by the requesting client.
- Use **Get File** for direct file access and **List Files** for browsing available documents.

---

