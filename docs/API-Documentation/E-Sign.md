## **Authorization Management API**

The **Auth Management API** is used to handle authentication and authorization processes within the system. It ensures secure access to resources by verifying user identity and controlling permissions.

**Base URL:**   
https://api.doculan.ai/client-docs


<!-- ## 🔹 1 Register User

The **Register User API** is used to create a new user account in the system. It collects user details and securely stores them for authentication and access control.

### **Endpoint**

```
POST /api/v1/auth/register
``` -->

<!-- ### **Headers**

| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format |

### **Query Parameters**
> _None_ -->

<!-- ### **Request Body Example**

```
json

{
  "name": "string",
  "email": "user@example.com",
  "password": "string",
  "preferences": {
    "dateFormat": "string",
    "timeFormat": "string",
    "timezone": "string",
    "region": "string"
  },
  "organization": "string",
  "logo": "string",
  "theme": "string",
  "extra": {},
  "additionalProp1": {}
}

```

### **Response Body Example**

```
json

{
  "message": "User registered",
  "user_id": {
    "status": 200,
    "message": "User registered successfully",
    "subscription_plan": null,
    "billing_cycle": null
  }
}

``` -->
<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

<!-- ### **Tags**

` Authorization `

---

## 🔹 2 Login User

The **Login User API** is used to authenticate users and allow access to the system by validating their credentials.

### **Endpoint**

```
POST /api/v1/auth/login

``` -->
<!-- ### **Headers**

| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format |

### **Query Parameters**
> _None_ -->

<!-- ### **Request Body Example**

```
json

{
  "email": "user@example.com",
  "password": "string",
}

```
### **Response Body Example**

```
json

{
  "access_token": "string",
  "token_type": "string",
  "is_temp_password": true,
  "subscription_status": "string",
  "mfa_access": {
    "additionalProp1": true,
    "additionalProp2": true,
    "additionalProp3": true
  }
}

```
<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

<!-- ### **Tags**

` Authorization `

---

## 🔹 3 Email Verification

The **Email Verification API** is used to verify a user’s email address after registration. It ensures that the provided email is valid and owned by the user.

### **Endpoint**

```
POST /api/v1/auth/verify-email
``` -->

<!-- ### **Headers**

| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format |

### **Query Parameters**
> _None_ -->

<!-- ### **Request Body Example**

```
json

{
  "email": "user@example.com",
  "otp": "string"
}

```
### **Response Body Example**

```
{
  "status": "active",
  "message": "User verified Successfully"
}

``` -->
<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

<!-- ### **Tags**

` Authorization `

--- -->

<!-- ## 🔹 4 Resend Verification Email

The **Resend Verification Email API** is used to resend the verification email (OTP or verification link) to users who have not yet verified their email address.

### **Endpoint**

```
POST /api/v1/auth/verify-email/resend

``` -->

<!-- ### **Headers**

| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format |

### **Query Parameters**
> _None_ -->

<!-- ### **Request Body Example**

```
json

{
  "email": "string"
}

```
### **Response Body Example**

```
json

{
  "status": "unverified",
  "message": "OTP sent successfully"
}

``` -->
<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

<!-- ### **Tags**

` Authorization `

--- -->


<!-- ## 🔹 5 Create Api Key

The **Create API Key** is used to generate a unique API key for secure access to the system’s APIs.

### **Endpoint**

```
POST /api/v1/auth/clients/api-keys

``` -->
<!-- ### **Headers**

| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->

<!-- ### **Query Parameters**
> _None_ -->

<!-- ### **Request Body Example**

```
json

{
  "expired_days": 30
}

```
### **Response Body Example**

```
json

{
  "api_key": "YapuaO4NF-NCDYJLLagSX3lSm2jKLrDtFP8GqkLXS7UJ6LumZ-VRGzAJn15lFP2w",
  "key_preview": "YapuaO****************FP2w",
  "expires_in_days": 30
}

``` -->
<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

<!-- ### **Tags**

` Authorization `

--- -->

##  **Files Operation APIs**

The Files Operation **APIs allow you to retrieve individual files or list all available files** associated with your account or documents.


---

## 🔹 1 Create Folder

Create a new folder in the document management system.
Optionally, you can specify parent folder details, custom metadata, or access permissions while creating the folder.


### **Endpoint**

````
POST /api/v1/documents/folder/
````

<!-- ### **Headers**

| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->

<!-- > _None required_ -->
<!-- ### **Query Parameters**
> _None_ -->


<!-- ### **Query Parameters**
| Name | Type | Required | Default | Description |
|-----|------|----------|---------|-------------|
| `return_pdf` | boolean | ❌ No | `false` | If `true`, returns the PDF file; otherwise returns file metadata | -->

### **Request Body**

````
json

{
  "new_folder": "string",
  "folder_mapping_id": "string"
}

````

### **Response Body Example**

````
json

{
  "status": "'Acme Technologies' folder created successfully."
}

````

<!-- ### **Responses**
| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

###  Tags
`Files Operation`

---

## 🔹 2 Upload Documents

Upload a document for storage and management.

### **Endpoint**

````
POST /api/v1/documents/upload/
````



<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->

<!-- ### **Path Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `document_id` | string | ✅ Yes | Unique identifier of the document | -->

### **Request Body**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `files`         | array<string >           | ✅ Yes    | Chose the recured file                   |
| `folder_mapping_id`|string \| (string \| null) | ❌ No    | Specifies the destination folder |
<!-- | `overwrite` | boolean | ❌ No    | Set to true or false to overwrite existing files | -->

<!-- ### **Query Parameters**
> _None_

### **Request Body**
> _Not required_ -->

### **Response Body Example**

````
json

```json id="m8x4rz"
{
  "uploaded_files": [
    {
      "document_id": "987f6543-e21c-45b6-a789-123456789abc",
      "filename": "Acme Technologies/Employee Handbook Acknowledgment.pdf",
      "status": "uploaded"
    }
  ]
}
```


````


<!-- ### **Responses**
| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

<!-- ### **Response Format**
- Content-Type: `application/json`
- Returns an array of file objects with associated metadata. -->

###  Tags
`Files Operation`

---

## 🔹 3 List Documents

Retrieve a list of all available documents.

### **Endpoint**

```
GET /api/v1/documents/

```
<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->

### **Query Parameters**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `folder_mapping_id`|string \| (string \| null) | ✅ Yes   | Specifies the destination folder |                  |
| `Page` | intiger | ✅ Yes     | Valid page values are integers starting from 1 |
| `Limit` | intiger | ✅ Yes     | Limit must be a positive integer within the range of 1–500 |


<!-- ### **Request Body**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `files`         | array<string >           | ✅ Yes    | Chose the recured file                   |
| `path` | string \| null | ❌ No    | Specifies the destination folder |
| `overwrite` | boolean | ❌ No    | Set to true or false to overwrite existing files | -->

### **Response Body Example**

```
json

{
  "total_records": 23,
  "limit": 10,
  "page": 1,
  "files": [
    {
      "document_id": "a12b34c5-d678-4e90-9f12-3456789abcde",
      "file_path": "files/Sample Company/Employee Handbook Acknowledgment.pdf",
      "fileName": "Employee Handbook Acknowledgment.pdf",
      "size": 482112,
      "last_modified": "2026-05-22T10:15:23.054741+00:00"
    }
  ]
}

```

<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

###  Tags
`Files Operation`

---

## 🔹 4 Get Documents

Retrieve a list of all available documents.

### **Endpoint**

```
GET /api/v1/documents/{document_id}

```
<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->

### **Query Parameters**
| Parameter    | Required | Description                |
|--------------|----------|----------------------------|
| `document id`  | ✅ Yes   | Get document information from the repository      |

<!-- ### **Request Body**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `files`         | array<string >           | ✅ Yes    | Chose the recured file                   |
| `path` | string \| null | ❌ No    | Specifies the destination folder |
| `overwrite` | boolean | ❌ No    | Set to true or false to overwrite existing files | -->

### **Response Body Example**

Download files

<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

###  Tags
`Files Operation`

---

## 🔹 5 Get Folders Structure

The Get **Folders Structure API** is used to retrieve the hierarchical structure of folders, including subfolders and associated files.

### **Endpoint**

```
GET /api/v1/documents/folder-structure
``` 

<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->

### **Query Parameters**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `folder_mapping_id`|string \| (string \| null) | ❌ No    | Specifies the destination folder |                  |
| `Content type`|string \| (string \| null) | ❌ No    | Specifies the destination folder |
| `Page` | intiger | ✅ Yes     | Valid page values are integers starting from 1 |
| `Limit` | intiger | ✅ Yes     | Limit must be a positive integer within the range of 1–500 |

<!-- ### **Request Body**
> _Not required_ -->

### **Response Body Example**

```
json

{
  "files": {
    "offset": 0,
    "limit": 10,
    "total_records": 6,
    "next_offset": null,
    "data": [
      {
        "index": 6,
        "type": "folder",
        "name": "Sample Company",
        "folderMappingId": "FMpX9aQz1K",
        "items": [],
        "created_by_name": "John Doe",
        "created_by_email": "john.doe@sample.com",
        "created_at": "2026-05-22T10:15:11.278619+00:00"
      },
      {
        "index": 5,
        "type": "file",
        "name": "I-9 Employment Verification.pdf",
        "document_id": "11111111-aaaa-4fc4-bb96-a1503f9b9a1b",
        "created_by_name": "John Doe",
        "created_by_email": "john.doe@sample.com",
        "created_at": "2026-05-21T12:23:16.767928+00:00"
      },
      {
        "index": 4,
        "type": "folder",
        "name": "HR Documents",
        "folderMappingId": "HRxC7UM7xZ",
        "items": [],
        "created_by_name": "Jane Smith",
        "created_by_email": "jane.smith@sample.com",
        "created_at": "2026-05-19T14:00:37.429864+00:00"
      },
      {
        "index": 3,
        "type": "file",
        "name": "Tax_Form_1040.pdf",
        "document_id": "22222222-bbbb-4d87-bc8c-7a1a5b5ae559",
        "created_by_name": "Jane Smith",
        "created_by_email": "jane.smith@sample.com",
        "created_at": "2026-05-05T07:52:36.017015+00:00"
      },
      {
        "index": 2,
        "type": "folder",
        "name": "API Integration Docs",
        "folderMappingId": "APIb9UxBQQ",
        "items": [],
        "created_by_name": "Alex Johnson",
        "created_by_email": "alex.j@sample.com",
        "created_at": "2026-04-29T15:04:00.116660+00:00"
      },
      {
        "index": 1,
        "type": "folder",
        "name": "Demo Workspace",
        "folderMappingId": "DMoK7oQSB7B",
        "items": [],
        "created_by_name": "Admin User",
        "created_by_email": "admin@sample.com",
        "created_at": "2026-03-19T16:09:19.326984Z"
      }
    ]
  }
}

```
<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

###  Tags
`Files Operation`

---


# **ESign Editor APIs**

Use ESign Editor APIs to create, edit, and manage electronic signature documents and workflows.

---

## 🔹 1 Redirect URL (PDF Editor)

The **Redirect URL API** is used to securely generate a session for accessing the third-party PDF editor.  
This API uses **API Key authentication only (no login required)** and returns a scoped bearer token along with the editor UI URL.

---

### **Endpoint**

```

GET /api/v1/documents/

```

---
<!-- 
### **Headers**

| Name        | Type   | Required | Description                          |
|-------------|--------|----------|--------------------------------------|
| X-API-Key   | string | ✅ Yes   | API key for client authentication    |
| accept      | string | ✅ Yes   | application/json                     |

--- -->

### **Request Body**
> _Not required_

---

### **Response Body Example**

```

json

{
  "client_id": "client_xxxxxxxxxxx1bb23c0a105316",
  "email": "sample@example.com",
  "role": "admin",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.samplePayload.signature",
  "ui_url": "https://demo.doculandemo.com/pdf-editor",
  "token_type": "bearer"
}

```

---

### **Response Fields**

| Field         | Type   | Description                                              |
|---------------|--------|----------------------------------------------------------|
| client_id     | string | Unique identifier for the client                         |
| email         | string | Associated client email                                  |
| role          | string | Role assigned to the client (e.g., admin)                |
| access_token  | string | Bearer token used for authentication in editor session   |
| ui_url        | string | Third-party PDF editor URL                               |
| token_type    | string | Token type (always `bearer`)                             |

---

### **Usage Flow**

1. Call the API using your **X-API-Key**
2. Receive:
   - `access_token`
   - `ui_url`
3. Load `ui_url` inside an iframe or browser
4. Pass the following data to the editor via `postMessage`

---

### **PostMessage Payload**

```

json

{
  "type": "INIT_DATA",
  "payload": {
    "document_id": "string",
    "access_token": "string"
  }
}

```

---

### **Important Notes**

- No user login is required — authentication is handled via API Key
- The `access_token` is **short-lived and scoped to the client**
- Ensure secure communication by restricting `postMessage` origin in production

Example:

```

postMessage(data, "https://demo.doculandemo.com");

```

---

### **Error Handling**

- If the API call fails, retry with a valid API key
- Ensure the iframe is fully loaded before sending data
- Handle cases where `access_token` is not yet available

---

### **Required Parameters**

| Parameter    | Required | Description                |
|--------------|----------|----------------------------|
| document_id  | ✅ Yes   | Document to be edited      |
| access_token  | ✅ Yes  | Bearer token for authenticating the session      |
---

### Tags
`Files Operation`

---


##  **Document Template APIs**

This section describes the APIs used to retrieve document templates from the system.

---

## 🔹 1 Create Template

The Create Template API is used to create a reusable document template for workflows such as E-Sign and document generation.

### **Endpoint**

```` 
POST /api/v1/documents/templates/ 
````
---

<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format |

### **Query Parameters**
> _None_ -->

### **Request Body**

```
json

{
  "template_name": "string",
  "fields": [
    {
      "id": "string",
      "type": "string",
      "x": 0,
      "y": 0,
      "width": 0,
      "height": 0,
      "page": 0,
      "color": "string",
      "style": "string",
      "label": "string",
      "partyId": "string",
      "required": false,
      "record": false,
      "timestamp": false,
      "options": [
        "string"
      ],
      "variable_registry": {
        "variable": "string",
        "label": "string",
        "scope": "string",
        "type": "string",
        "value": ""
      }
    }
  ],
  "parties": [
    {
      "id": "string",
      "name": "string",
      "email": "user@example.com",
      "color": "string",
      "priority": 0
    }
  ],
  "document_id": "string",
  "scope": "Myself"
}

```

### **Response Body Example**

```
json

{
  "message": "Template 'Name of the Template' created."
}

```
<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

### **Tags**
`Document Template`

---

## 🔹 2 Get All Document Templates

Retrieve a list of all available document templates.

### **Endpoint**


````
GET /api/v1/documents/templates/all/
````

<!-- ### **Headers**

| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->



### **Query Parameters**
| Name | Type | Required | Default | Description |
|-----|------|----------|-------------|-------------|
| `Scope` | string | ❌ No  | `Myself` | Filter for a specific document scope |
| `Page` | intiger | ✅ Yes     | Valid page values are integers starting from 1 |
| `Limit` | intiger | ✅ Yes     | Limit must be a positive integer within the range of 1–500 |
| `search`|string \| (string \| null) | ❌ No    | Specifies the template name |


<!-- ### **Request Body**

> _Not required_ -->


### **Response Body Example**

````
json

{
  "total": 7,
  "page": 1,
  "limit": 10,
  "count": 7,
  "data": [
    {
      "template_name": "Employee Onboarding Agreement",
      "document_id": "a1111111-8104-4c13-b292-c522096644ea"
    },
    {
      "template_name": "Vendor Contract Template",
      "document_id": "b2222222-8104-4c13-b292-c522096644ea"
    },
    {
      "template_name": "Attestation & Compliance Form",
      "document_id": "c3333333-ac77-4348-b952-8c2d3ad0ef17"
    },
    {
      "template_name": "Tax Form 1040",
      "document_id": "d4444444-72f1-4d87-bc8c-7a1a5b5ae559"
    },
    {
      "template_name": "Dual Party Agreement",
      "document_id": "e5555555-72f1-4d87-bc8c-7a1a5b5ae559"
    },
    {
      "template_name": "Internal Policy Template",
      "document_id": "f6666666-72f1-4d87-bc8c-7a1a5b5ae559"
    },
    {
      "template_name": "F1040 Standard Template",
      "document_id": "g7777777-72f1-4d87-bc8c-7a1a5b5ae559"
    }
  ]
}

````

<!-- ### **Responses** -->
<!-- | Status Code | Description |
|------------|-------------|
| 200 | Successful response |
| 422 | Validation error | -->

<!-- | Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->


<!-- | Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | <span style="color:green; font-weight:bold;">Successful response</span> |
| <span style="color:red; font-weight:bold;">422</span>   | <span style="color:red; font-weight:bold;">Validation error</span>    | -->


### **Tags**
`Document Template`

---

## 🔹3 Get Specific Document Template

Retrieve a specific template from the list of available document templates.

### **Endpoint**
````
GET api/v1/documents/templates/{template_name}
````

<!-- ### **Headers**

| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->

### **Path Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `template_name` | string | ✅ Yes | Specifies the template name |

### **Query Parameters**
| Name | Type | Required | Default | Description |
|-----|------|----------|-------------|-------------|
| `Scope` | string | ❌ No  | `Myself` | Filter for a specific document scope |


<!-- ### **Request Body**

> _Not required_ -->


### **Response Body Example**

```` 
json

{
  "fields": [
    {
      "id": "2000000000001-signature",
      "type": "signature",
      "x": 320,
      "y": 880,
      "width": 210,
      "height": 60,
      "page": 1,
      "color": "hsl(210, 100%, 90%)",
      "style": "both",
      "label": null,
      "partyId": "1",
      "required": true,
      "record": false,
      "timestamp": true,
      "imageMode": null,
      "value": null,
      "options": [],
      "variable_registry": null
    },
    {
      "id": "2000000000002-text",
      "type": "text",
      "x": 410,
      "y": 960,
      "width": 180,
      "height": 40,
      "page": 1,
      "color": "hsl(210, 100%, 90%)",
      "style": "",
      "label": null,
      "partyId": "1",
      "required": false,
      "record": false,
      "timestamp": true,
      "imageMode": null,
      "value": null,
      "options": [],
      "variable_registry": null
    },
    {
      "id": "2000000000003-date",
      "type": "date",
      "x": 370,
      "y": 1040,
      "width": 110,
      "height": 32,
      "page": 1,
      "color": "hsl(210, 100%, 90%)",
      "style": "",
      "label": null,
      "partyId": "1",
      "required": false,
      "record": false,
      "timestamp": true,
      "imageMode": null,
      "value": null,
      "options": [
        "MM/DD/YYYY",
        "true"
      ],
      "variable_registry": null
    }
  ],
  "parties": [
    {
      "id": "1",
      "name": "Signer One",
      "email": "signer.one@example.com",
      "color": "hsl(210, 100%, 90%)",
      "priority": 0
    }
  ],
  "document_id": "c1111111-ac77-4348-b952-8c2d3ad0ef17"
}

````
<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

### **Tags**
`Document Template`

---

## 🔹 4 Update Template

The **Update Template API** is used to modify an existing document template, such as updating its name, file, or configuration.

### **Endpoint**

```` 
PUT /api/v1/documents/templates/{template_name}
````
---

<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->

### **Path Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `template_name` | string | ✅ Yes | Specifies the template name |

### **Request Body**

```
json

{
  "fields": [
    {
      "id": "string",
      "type": "string",
      "x": 0,
      "y": 0,
      "width": 0,
      "height": 0,
      "page": 0,
      "color": "string",
      "style": "string",
      "label": "string",
      "partyId": "string",
      "required": false,
      "record": false,
      "timestamp": false,
      "options": [
        "string"
      ],
      "variable_registry": {
        "variable": "string",
        "label": "string",
        "scope": "string",
        "type": "string",
        "value": ""
      }
    }
  ],
  "parties": [
    {
      "id": "string",
      "name": "string",
      "email": "user@example.com",
      "color": "string",
      "priority": 0
    }
  ],
  "document_id": "string",
  "scope": "Myself"
}

```

### **Response Body Example**
```
json

{
  "detail": "Template updated successfully"
}
```

<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

### **Tags**
`Document Template`

---

## 🔹 4 Delete Template

The **Delete Template API** is used to permanently remove a document template from the system.

### **Endpoint**

````
DELETE /api/v1/documents/templates/{template_name}
````

<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->

### **Path Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `template_name` | string | ✅ Yes | Specifies the template name |

### **Query Parameters**
| Name | Type | Required | Default | Description |
|-----|------|----------|-------------|-------------|
| `Scope` | string | ❌ No  | `Myself` | Filter for a specific document scope |


<!-- ### **Request Body**
> _Not required_ -->

### **Response Body Example**

```
json

{
  "message": "Template 'Name of the Template' deleted."
}

```
<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

### **Tags**
`Document Template`

---


## **Variable Registry APIs**

The **Variable Registry APIs** are used to manage dynamic variables that can be applied to documents, templates, and E-Sign workflows.

---

## 🔹 1 Create Variable Registry

The **Create Variable Registry API** is used to create and store variables that can be dynamically applied to documents, templates, and E-Sign workflows.

### **Endpoint**

```` 
POST /api/v1/documents/variable-registry/
````
---

<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format |

### **Query Parameters**
> _None_ -->

### **Request Body**

```
json

{
  "variable": "string",
  "scope": "Current",
  "fields": [
    {
      "type": "string",
      "style": "string",
      "label": "string",
      "value": "string"
    }
  ],
  "template_name": "string"
}

```

### **Response Body Example**

```
json

{
  "message": "variables saved successfully",
  "variable": "string",
  "scope": "Current"
}
```
<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

### **Tags**

`Variable Registry`


---

## 🔹 2 Get All Variable Registry

This API retrieves a **list of all variable registries** available in the system. It can be used to view, manage, and reference variables across templates or workflows.

### **Endpoint**

```` 
GET /api/v1/documents/variable-registry
````
---

<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->

### **Query Parameters**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `Scope`|string | ✅ Yes    | Available values : Global, Local, Current | 
| `variable`|string \| (string \| null) | ❌ No    | If provided, only the matching field will be displayed. |
| `Page` | intiger | ✅ Yes     | Valid page values are integers starting from 1 |
| `Limit` | intiger | ✅ Yes     | Limit must be a positive integer within the range of 1–500 |

<!-- ### **Request Body**
> _Not required_ -->

### **Response Body Example**

```
json

{
  "total": 1,
  "page": 1,
  "limit": 10,
  "variable_registry": [
    {
      "variable": "Organization",
      "fields": [
        {
          "type": "text",
          "style": "",
          "label": "Full-Name",
          "value": "Acme Technologies Inc"
        },
        {
          "type": "text",
          "style": "",
          "label": "Address",
          "value": "San Francisco, CA"
        },
        {
          "type": "text",
          "style": "",
          "label": "Address-1",
          "value": "456 Market Street"
        },
        {
          "type": "text",
          "style": "",
          "label": "Address-2",
          "value": "Suite 800, CA 94105"
        },
        {
          "type": "date",
          "style": "",
          "label": "Lease Start Date:",
          "value": "January 1, 2026"
        },
        {
          "type": "date",
          "style": "",
          "label": "Lease End Date:",
          "value": "December 31, 2026"
        },
        {
          "type": "text",
          "style": "",
          "label": "Monthly Rent:",
          "value": "$3,500"
        },
        {
          "type": "text",
          "style": "",
          "label": "Security Deposit:",
          "value": "$3,500"
        },
        {
          "type": "text",
          "style": "",
          "label": "Utilities:",
          "value": "Internet, Electricity"
        },
        {
          "type": "text",
          "style": "",
          "label": "Name",
          "value": "Acme Technologies LLC"
        }
      ]
    }
  ]
}

```

<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

### **Tags**

`Variable Registry`

---

## 🔹 3 Get Variable Registry

The **Get Variable Registry API** is used to retrieve all available variables stored in the Variable Registry. These variables can be used in templates, documents, and E-Sign workflows.

### **Endpoint**

```` 
POST /api/v1/documents/variable-registry/{variable}
````
---

<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->

### **Path Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `variable` | string | ✅ Yes | Specifies the variable name |

### **Query Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `Scope` | string | ✅ Yes | Filter for a specific document scope |
| `template_name` | string \| null | ❌ No | templateName is required only if scope=local |

<!-- ### **Request Body**
> _Not required_ -->

### **Response Body Example**

```
json

{
  "variable": "Organization",
  "scope": "Global",
  "fields": [
    {
      "type": "Text",
      "style": "string",
      "label": "Name",
      "value": "Acme Technologies"
    }
  ]
}
```

<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

### **Tags**

`Variable Registry`

---

## 🔹 4 Update Variable Registry

The **Update Variable Registry API** is used to modify existing variables in the registry, such as updating their name, value, or scope.

### **Endpoint**

```` 
PUT /api/v1/documents/variable-registry/{variable}
````
---

<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->

### **Path Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `variable` | string | ✅ Yes | Specifies the variable name |

<!-- ### **Query Parameters**
> _None_ -->


### **Request Body**

```
json

{
  "variable": "string",
  "scope": "Global",
  "fields": [
    {
      "type": "string",
      "style": "string",
      "label": "string",
      "value": "string"
    }
  ],
  "template_name": "string"
}
```

### **Response Body Example**

```
json

{
  "message": "Variable fields replaced successfully",
  "variable": "Organization Name",
  "scope": "Global",
  "replaced_fields": 1,
  "total_fields": 1
}
```

<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

### **Tags**

`Variable Registry`

---

## 🔹 5 Delete Variable Registry

This API is used to **delete** an existing variable registry from the system. Once deleted, the variable and its associated data will no longer be available.

### **Endpoint**

```` 
DELETE /api/v1/documents/variable-registry/{variable}
````
---

<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->

### **Path Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `variable` | string | ✅ Yes | Specifies the variable name |

### **Query Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `scope` | string | ✅ Yes | Filter for a specific document scope |
| `leable` | string \| null | ❌ No | entire variable registry file will be deleted. |

<!-- ### **Request Body**
> _Not required_ -->

### **Response Body Example**

```
json

{
  "message": "variable field deleted",
  "variable": "Organization Name",
  "scope": "Global"
}
```

<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

### **Tags**

`Variable Registry`

---


---

<!-- ## 🔹 6 Get Variable Registry Values

This API retrieves the **values associated with a specific variable registry**. It is useful for accessing predefined or dynamically stored values tied to a variable

### **Endpoint**

```` 
GET /api/v1/documents/variable-registry/values/{variable}
````
--- -->

<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->

<!-- ### **Path Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `variable` | string | ✅ Yes | Specifies the variable name |

### **Query Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `scope` | string | ✅ Yes | Filter for a specific document scope | -->

<!-- ### **Request Body**
> _Not required_ -->

<!-- ### **Response Body Example**

```
json

[
  {
    "label": "Organization Name",
    "value": "Virtualan Software"
  }
]
``` -->

<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

<!-- ### **Tags**

`Variable Registry`


--- -->

## **Document Tracker APIs**

This API allows clients to retrieve the current status of a document using its tracking and document identifiers.

---
## 🔹 1 Send Document

Send a document to one or more parties for review or signing.

### **Endpoint**


````
POST api/v1/documents/send
````

<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->

### **Query Parameters**
| Name | Type | Required | Default | Description |
|-----|------|----------|---------|-------------|
| `store_as_default` | boolean | ❌ No | `false` | Store configuration as default |


### **Request Body Example**

````
json

{
  "document_id": "string",
  "fields": [
    {
      "id": "string",
      "type": "string",
      "x": 0,
      "y": 0,
      "width": 0,
      "height": 0,
      "page": 0,
      "color": "string",
      "style": "string",
      "label": "string",
      "partyId": "string",
      "required": false,
      "record": false,
      "timestamp": false,
      "options": [
        "string"
      ],
      "variable_registry": {
        "variable": "",
        "label": "string",
        "scope": "string",
        "type": "string",
        "value": ""
      }
    }
  ],
  "pages": [
    {
      "page_number": 0,
      "page_width": 0,
      "page_height": 0
    }
  ],
  "parties": [
    {
      "id": "string",
      "name": "string",
      "email": "string",
      "color": "string",
      "priority": 0
    }
  ],
  "holder": {
    "name": "string",
    "email": "string"
  },
  "cc_emails": [
    "user@example.com"
  ],
  "client_info": {
    "ip": "string",
    "city": "string",
    "region": "string",
    "country": "string",
    "timezone": "string",
    "timestamp": "string",
    "browser": "string",
    "device": "string",
    "os": "string"
  },
  "email_response": [
    {
      "email_subject": "Request for Electronic Signature – Action Required",
      "email_body": "\nDear [Fullname],\n\nYou have received a document that requires your electronic signature.\n\nPlease review the attached document carefully and complete the e-signature process at your earliest convenience. The electronic signature is legally valid and securely recorded in compliance with applicable regulations.\n[Document Link]\nIf you have any questions or require clarification, please contact the sender directly.\n\nThank you for your prompt attention to this matter.\n\nBest regards,\nYour Organization Name\n"
    }
  ],
  "signing_order": "ordered",
  "otp_enabled": true,
  "certificate_enabled": true,
  "wet_sign": false,
  "validityDate": "string",
  "scheduled_datetime": "2026-05-22T18:38:34.753Z",
  "remainder": 0,
  "is_variable_registry": false
}

````

### **Response Body Example**

````
json

{
    "tracking_id": "036589d1-45c7-4c7f-b83c-cde17bg5yhj72c",
    "status": "sent"
}

````

<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

### **Tags**

`Document Tracker`

---

## 🔹 2 Sign Document

Submit **signed field values** for a document by a specific party.


### **Endpoint**
````
POST /api/v1/documents/sign
````

<!-- ### **Headers**

| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format |

### **Query Parameters**
> _None_ -->

### **Request Body Example**

````
json

{
  "document_id": "string",
  "tracking_id": "string",
  "party_id": "string",
  "fields": [
    {
      "fields_ids": [
        {
          "field_id": "string",
          "font": "string",
          "style": "string",
          "value": "string"
        }
      ]
    }
  ],
  "client_info": {
    "ip": "string",
    "city": "string",
    "region": "string",
    "country": "string",
    "timezone": "string",
    "timestamp": "string",
    "browser": "string",
    "device": "string",
    "os": "string"
  }
}


````

### **Response Body Example**

````
json

{
    "status": "completed",
    "message": "Signature processed and metadata updated",
    "document_id": "nhy67e1e-5d05-4cf8-99ba-e62994f3ceb0",
    "tracking_id": "u7y6b7c1-c683-4299-8eb6-7806e8ac59a0",
    "signed": true
}

````

<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

### **Tags**

`Document Tracker`

---

## 🔹 3 Resend Document Link

Resend the document access or signing link for an existing document using its document and tracking identifiers.

### **Endpoint**

````
POST api/v1/documents/resend
````

<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->


<!-- ### **Query Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `store_as_default` | boolean | ❌ No | Store the provided configuration as default | -->


### **Request Body Example**

````
json

{
  "document_id": "fce52a1e-5q95-4cf8-99ba-e62994f3ceb0",
  "tracking_id": "076a3e8b-2uue-49va-8d7e-d6d28k98f2ed",
  "validityDate": "2025-12-31T18:29:59.000Z",
  "remainder": 0,
  "client_info": 
  {
    "ip": "3.82.145.27",
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

### **Response Body Example**

````
json

{ 
    "message": "Resend initiated", 
    "tracking_id": "076a1e8b-27ae-4e5a-8d7e-d6d24j78f2ed", 
    "new_validityDate": "2026-12-31T18:29:59.000Z"
} 


````

<!-- ### **Response**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    | -->

<!-- ### **Example**

> store_as_default=false -->


### **Tags**

`Document Tracker`

---

## 🔹 4 Get Over All Status

Retrieves a list of all document statuses.

### **Endpoint**

```` 
GET api/v1/documents/status 
````
---

<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->

<!-- ### **Query Parameters**
> _None_

### **Request Body**
> _Not required_ -->

### **Response Body Example**

````
json

{
  "total_documents": 7,
  "status_counts": {
    "completed": 1,
    "cancelled": 1,
    "expired": 1,
    "in_progress": 1,
    "declined": 1,
    "shared": 1,
    "scheduled": 1
  },
  "documents": [
    {
      "document_id": "00f3435b-460a-40e0-a2a9-5547450b82f1",
      "tracking_id": "0254861d-bc0c-463f-9ab5-76007a852811",
      "validity_date": "2025-12-12T18:29:59.000Z",
      "status": "completed",
      "datetime": "2025-12-12T16:12:49.689499+00:00",
      "parties": [
        {
          "id": "1",
          "name": "User One",
          "email": "user.one@example.test",
          "color": "hsl(196, 100%, 90%)",
          "status": {
            "sent": [
              {
                "isSent": true,
                "dateTime": "2025-12-12T16:00:50.797238+00:00",
                "party_name": "User One",
                "party_email": "user.one@example.test",
                "ip": "34.201.55.91",
                "browser": "Chrome",
                "os": "Windows 11",
                "device": "PC/Laptop",
                "location": {
                  "city": "New York",
                  "region": "New York",
                  "country": "US",
                  "timestamp": "2025-12-12T16:00:31.616Z",
                  "timezone": "America/New_York"
                }
              }
            ],
            "opened": [
              {
                "isOpened": true,
                "dateTime": "2025-12-12T16:11:04.313365+00:00",
                "party_name": "User One",
                "party_email": "user.one@example.test",
                "ip": "34.201.45.91",
                "browser": "Chrome",
                "os": "Windows 11",
                "device": "PC/Laptop",
                "location": {
                  "city": "New York",
                  "region": "New York",
                  "country": "US",
                  "timestamp": "2025-12-12T16:10:46.089Z",
                  "timezone": "America/New_York"
                }
              }
            ],
            "signed": [
              {
                "isSigned": true,
                "dateTime": "2025-12-12T16:12:49.689499+00:00",
                "party_name": "User One",
                "party_email": "user.one@example.test",
                "ip": "34.201.45.91",
                "browser": "Chrome",
                "os": "Windows 11",
                "device": "PC/Laptop",
                "location": {
                  "city": "New York",
                  "region": "New York",
                  "country": "US",
                  "timestamp": "2025-12-12T16:12:29.632Z",
                  "timezone": "America/New_York"
                }
              }
            ]
          }
        }
      ]
    },
    {
      "document_id": "011baa59-f55b-4fed-b15c-d1653fb72e46",
      "tracking_id": "0e3bc8c4-b7b2-4471-bcf4-03756c17dae7",
      "validity_date": "2026-02-28T18:29:59.000Z",
      "status": "cancelled",
      "datetime": "2025-12-31T21:48:44.275476+00:00",
      "parties": [
        {
          "id": "1",
          "name": "User Two",
          "email": "user.two@example.test",
          "color": null,
          "status": {
            "cancelled": [
              {
                "isCancelled": true,
                "reason": "Invalid document format",
                "dateTime": "2025-12-31T21:48:44.275476+00:00",
                "party_name": "User Two",
                "party_email": "user.two@example.test",
                "ip": "18.211.90.44",
                "browser": "Chrome",
                "os": "Windows 11",
                "device": "PC/Laptop",
                "location": {
                  "city": "Austin",
                  "region": "Texas",
                  "country": "US",
                  "timestamp": "2025-12-31T21:48:38.999Z",
                  "timezone": "America/Chicago"
                }
              }
            ]
          }
        }
      ]
    },
    {
      "document_id": "92c79f09-76c5-4cf8-bab6-9b98721ncefc",
      "tracking_id": "ac532311-6c71-4f65-aea6-a6chnj77faefa",
      "validity_date": "2026-12-12T18:29:59.000Z",
      "status": "scheduled",
      "datetime": "2026-01-06T13:42:49.000600+00:00",
      "parties": [
        {
          "id": "1",
          "name": "Signer One",
          "email": "signer.one@example.test",
          "color": "hsl(196, 100%, 90%)",
          "status": {
            "scheduled": [
              {
                "isScheduled": true,
                "dateTime": "2026-01-06T13:42:49.000600+00:00",
                "party_name": "Signer One",
                "party_email": "signer.one@example.test",
                "ip": "34.228.4.221",
                "browser": "HeadlessChrome",
                "os": "Linux",
                "device": "PC/Laptop",
                "location": {
                  "city": "Ashburn",
                  "region": "Virginia",
                  "country": "US",
                  "timestamp": "2026-01-06T13:42:48.584Z",
                  "timezone": "America/New_York"
                }
              }
            ]
          }
        },
        {
          "id": "2",
          "name": "Signer Two",
          "email": "signer.two@example.test",
          "color": "hsl(80, 70%, 90%)",
          "status": {}
        }
      ]
    },
    {
      "document_id": "021fc34b-b267-43ba-a7af-455286ebe90b",
      "tracking_id": "0e8aa699-9114-4cbb-a479-m50cf693f988",
      "validity_date": "2025-12-10T23:59:59.000Z",
      "status": "in_progress",
      "datetime": "2025-12-10T16:42:15.133172+00:00",
      "parties": [
        {
          "id": "1",
          "name": "User Three",
          "email": "user.three@example.test",
          "color": "hsl(196, 100%, 90%)",
          "status": {}
        }
      ]
    },
    {
      "document_id": "92c79f09-76c5-4cf8-bab6-9b9523565acefc",
      "tracking_id": "05433b6b-3f7e-4d7f-a333-8c4b258gf598a8",
      "validity_date": "2026-03-01T18:29:59.000Z",
      "status": "shared",
      "datetime": "2026-01-06T13:15:29.208286+00:00",
      "parties": [
        {
          "id": "1",
          "name": "User Four",
          "email": "user.four@example.test",
          "color": "#ccf1ffff",
          "status": {
            "shared": [
              {
                "isShared": true,
                "dateTime": "2026-01-06T13:15:29.208286+00:00",
                "party_name": "User Four",
                "party_email": "user.four@example.test",
                "ip": "44.193.15.98",
                "browser": "Chrome",
                "os": "Linux",
                "device": "PC/Laptop",
                "location": {
                  "city": "Ashburn",
                  "region": "Virginia",
                  "country": "US",
                  "timestamp": "2026-01-06T13:15:25.699Z",
                  "timezone": "America/New_York"
                }
              }
            ]
          }
        }
      ]
    }
  ]
}


````

<!-- ### **Responses**
| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->


<!-- **Example**


> tracking_id=e1ewaec4-a667-43dd-b221-0b4qwbh54a77

> document_id=13n25bd9-70p1-4c8d-9b1c-a9066eda140f -->


### **Tags**
`Document Tracker`

---

## 🔹 5 Get Document Status By Party

Retrieve the document status for an individual party using tracking, document, and party identifiers.

### **Endpoint**

````
GET api/v1/documents/party-status
````

<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->



### **Query Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `tracking_id` | string | ✅ Yes | Unique tracking identifier of the document |
| `document_id` | string | ✅ Yes | Unique identifier of the document |
| `party_id` | string | ✅ Yes | Unique identifier of the party |




<!-- ### **Request Body**
> _Not required_ -->


### **Response Body Example**

````
json

{
  "tracking_id": "09aa3a64-fd50-4afa-a79e-e70ek5cea2a6",
  "document_id": "form-doc-dded726c-a117-42e3-9df9-a3a3c5hg91b2",
  "validity_date": "2025-12-11T18:29:59.000Z",
  "tracking_status": {
    "status": "completed",
    "dateTime": "2025-12-11T14:29:10.596474+00:00",
    "ip": "34.102.136.180",
    "browser": "Chrome",
    "os": "Windows 11",
    "device": "PC/Laptop",
    "location": {
      "city": "San Francisco",
      "region": "California",
      "country": "US",
      "timestamp": "2025-12-11T14:29:09.599Z",
      "timezone": "America/Los_Angeles"
    }
  },
  "party_id": "1",
  "party_info": {
    "id": "1",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "color": "hsl(196, 100%, 90%)",
    "status": {
      "sent": [
        {
          "isSent": true,
          "dateTime": "2025-12-11T14:26:25.598788+00:00",
          "party_name": "John Doe",
          "party_email": "john.doe@example.com",
          "ip": "34.102.136.180",
          "browser": "Chrome",
          "os": "Windows 11",
          "device": "PC/Laptop",
          "location": {
            "city": "San Francisco",
            "region": "California",
            "country": "US",
            "timestamp": "2025-12-11T14:26:22.091Z",
            "timezone": "America/Los_Angeles"
          }
        }
      ],
      "opened": [
        {
          "isOpened": true,
          "dateTime": "2025-12-11T14:28:46.051332+00:00",
          "party_name": "John Doe",
          "party_email": "john.doe@example.com",
          "ip": "34.102.136.180",
          "browser": "Chrome",
          "os": "Windows 11",
          "device": "PC/Laptop",
          "location": {
            "city": "San Francisco",
            "region": "California",
            "country": "US",
            "timestamp": "2025-12-11T14:28:46.738Z",
            "timezone": "America/Los_Angeles"
          }
        }
      ],
      "signed": [
        {
          "isSigned": true,
          "dateTime": "2025-12-11T14:29:10.596474+00:00",
          "party_name": "John Doe",
          "party_email": "john.doe@example.com",
          "ip": "34.102.136.180",
          "browser": "Chrome",
          "os": "Windows 11",
          "device": "PC/Laptop",
          "location": {
            "city": "San Francisco",
            "region": "California",
            "country": "US",
            "timestamp": "2025-12-11T14:29:09.599Z",
            "timezone": "America/Los_Angeles"
          }
        }
      ]
    }
  },
  "fields": [
    {
      "id": "176544595874381-date",
      "type": "date",
      "x": 545,
      "y": 852,
      "width": 100,
      "height": 25,
      "page": 0,
      "color": "hsl(196, 100%, 90%)",
      "style": "both",
      "partyId": "1",
      "required": false,
      "record": false,
      "timestamp": false,
      "options": [],
      "signed": true,
      "value": "12/11/2025",
      "signed_at": "2025-12-11T14:29:08.922733+00:00"
    },
    {
      "id": "1765446872111-date",
      "type": "date",
      "x": 625,
      "y": 297,
      "width": 100,
      "height": 25,
      "page": 0,
      "color": "hsl(196, 100%, 90%)",
      "style": "both",
      "partyId": "1",
      "required": false,
      "record": false,
      "timestamp": false,
      "options": [],
      "signed": true,
      "value": "12/11/2025",
      "signed_at": "2025-12-11T14:29:08.922758+00:00"
    }
  ],
  "otp_enabled": null,
  "wet_sign": false
}

````

<!-- ### **Responses**
| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->



### **Example**

> tracking_id=13c34dd9-7f31-4s3d-9b1c-b006ehy587f

> document_id=e1bfqwe9-a677-43ad-b211-0b4afbj55a77

> party_id=1

### **Tags**
`Document Tracker`


---


---

## 🔹 6 Download Signed Document

Retrieve the final signed PDF document.

### **Endpoint**

````
GET api/v1/documents/signed-pdf
````
<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->


### **Query Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `tracking_id` | string | ✅ Yes | Unique tracking identifier of the document |
| `document_id` | string | ✅ Yes | Unique identifier of the document |


<!-- ### **Request Body**
> _Not required_ -->

### **Response Example**

This API returns the **signed document** in **PDF format.**

 A **sample signed document** is provided below for reference. 
 
 You may **download** the sample PDF for structure and content of the response.

<!-- ####  PDF File Format Example  -->
<p>
  <a href="files/Sample Two-Party Agreement-Authorized.pdf" target="_blank"
     style="display:inline-block; background-color:#007bff; color:white; padding:10px 20px; border-radius:6px; text-decoration:none;">
    📄 Download Sample PDF 
  </a>
</p>

<!-- ### **Responses**
| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->


### **Example**


> tracking_id=a2bfeeb9-a677-43ad-b211-0b4afby76a77

> document_id=fyo50e1e-5d05-4cf8-99ba-e62994y7ceb0

### **Tags**

`Document Tracker`

---

## 🔹 7 Download Certificate

Retrieve the completion certificate for a fully processed document.

### **Endpoint**

````
GET api/v1/documents/complete-certificates
````

<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->



### **Query Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `document_id` | string | ✅ Yes | Unique identifier of the document |
| `tracking_id` | string | ✅ Yes | Unique tracking identifier of the document |



<!-- ### **Request Body**
> _Not required_ -->

### **Response Example**

 This API returns **Certificate of Completion** in **PDF** format, serving as proof of the completed signing process.
 
 A sample certificate is attached below for reference. 

 You may **download** the sample PDF for detailed information.

<!-- ####  PDF File Format Example  -->
<p>
  <a href="files/Sample-Certificate.pdf" target="_blank"
     style="display:inline-block; background-color:#007bff; color:white; padding:10px 20px; border-radius:6px; text-decoration:none;">
    📄 Download Sample PDF
  </a>
</p>


<!-- ### **Responses**
| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->


### **Example**

> document_id=fce50e1e-5d05-4cf8-99ba-b6797y6tceb0

> tracking_id=e1bfeeb9-a677-43ad-f411-0b4afbj71a77

### **Tags**

`Document Tracker`

---

## 🔹 8 Log Action

Log a document-related action such as cancellation, rejection, or other workflow events.

### **Endpoint**

````
POST api/v1/documents/log-action
````

<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->

<!-- ### **Query Parameters**
> _None_ -->

### **Request Body Example**

````
json

{
  "document_id": "687u5804-d360-4e98-802f-d5531htyrf675abd8",
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

### **Response Body Example**

````
json

{
    "message": "Action 'CANCELLED' logged successfully."
}

````

<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->
                                            

### **Tags**

`Document Tracker`

---


## 🔹 9 Tracking IDs API

Use the **Tracking ID** to fetch the current status of a document and track its progress through the E-Sign workflow.


### **Endpoint**
````
POST api/v1/documents/tracking-ids/
````

<!-- ### **Headers**

| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->

### **Query Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `document_id` | string | ✅ Yes | Unique identifier of the document |
| `page` | intiger | ✅ Yes | Specifies the page number |
| `limit` | intiger | ✅ Yes | Specifies the number of records per page |


### **Response Body Example**

```
json

{
  "page": 1,
  "limit": 10,
  "total": 4,

  "tracking_ids": [
    {
      "tracking_id": "track-001",
      "status": "expired",
      "updated_at": "2026-01-06T15:08:28Z",
      "parties": [
        {
          "party_id": "party-1",
          "name": "User One",
          "email": "userone@example.com"
        }
      ]
    },
    {
      "tracking_id": "track-002",
      "status": "expired",
      "updated_at": "2026-01-06T15:08:28Z",
      "parties": [
        {
          "party_id": "party-2",
          "name": "User Two",
          "email": "usertwo@example.com"
        }
      ]
    },
    {
      "tracking_id": "track-003",
      "status": "cancelled",
      "updated_at": "2025-10-14T14:26:49Z",
      "parties": [
        {
          "party_id": "party-3",
          "name": "User Three",
          "email": "userthree@example.com"
        }
      ]
    },
    {
      "tracking_id": "track-004",
      "status": "expired",
      "updated_at": "2025-10-18T04:59:59Z",
      "parties": [
        {
          "party_id": "party-4",
          "name": "User Four",
          "email": "userfour@example.com"
        }
      ]
    }
  ]
}

```


<!-- ### **Responses**

| Status Code                                             | Description         |
| ------------------------------------------------------- | ------------------- |
| <span style="color:green; font-weight:bold;">200</span> | Successful response |
| <span style="color:green; font-weight:bold;">201</span> | Created |
| <span style="color:green; font-weight:bold;">202</span> | Accepted |
| <span style="color:red; font-weight:bold;">404</span>   | Not Found    |
| <span style="color:red; font-weight:bold;">422</span>   | Validation error    |
| <span style="color:red; font-weight:bold;">500</span>   | Internal Server Error    | -->

### **Tags**

`Document Tracker`

---


