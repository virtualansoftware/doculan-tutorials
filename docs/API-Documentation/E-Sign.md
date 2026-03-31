## **Authorization Management API**

The **Auth Management API** is used to handle authentication and authorization processes within the system. It ensures secure access to resources by verifying user identity and controlling permissions.

## 🔹 1 Register User

The **Register User API** is used to create a new user account in the system. It collects user details and securely stores them for authentication and access control.

### **Endpoint**

```
POST /api/v1/auth/register
```

<!-- ### **Headers**

| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format |

### **Query Parameters**
> _None_ -->

### **Request Body Example**

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

` Authorization `

---

## 🔹 2 Login User

The **Login User API** is used to authenticate users and allow access to the system by validating their credentials.

### **Endpoint**

```
POST /api/v1/auth/login

```
<!-- ### **Headers**

| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format |

### **Query Parameters**
> _None_ -->

### **Request Body Example**

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

### **Tags**

` Authorization `

---

## 🔹 3 Email Verification

The **Email Verification API** is used to verify a user’s email address after registration. It ensures that the provided email is valid and owned by the user.

### **Endpoint**

```
POST /api/v1/auth/verify-email
```

<!-- ### **Headers**

| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format |

### **Query Parameters**
> _None_ -->

### **Request Body Example**

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

` Authorization `

---

## 🔹 4 Resend Verification Email

The **Resend Verification Email API** is used to resend the verification email (OTP or verification link) to users who have not yet verified their email address.

### **Endpoint**

```
POST /api/v1/auth/verify-email/resend

```

<!-- ### **Headers**

| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format |

### **Query Parameters**
> _None_ -->

### **Request Body Example**

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

` Authorization `

---


## 🔹 5 Create Api Key

The **Create API Key** is used to generate a unique API key for secure access to the system’s APIs.

### **Endpoint**

```
POST /api/v1/auth/clients/api-keys

```
<!-- ### **Headers**

| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->

<!-- ### **Query Parameters**
> _None_ -->

### **Request Body Example**

```
json

{
  "expired_days": 0
}

```
### **Response Body Example**

```
json

{
  "api_key": "YapuaO4NF-NCDYJLLagSX3lSm2xjASLVCjPiqkLXS7UJ6LumZ-VRGzAJn15lFP2w",
  "key_preview": "YapuaO****************FP2w",
  "expires_in_days": 2
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

` Authorization `

---

##  **Files Operation APIs**

The Files Operation **APIs allow you to retrieve individual files or list all available files** associated with your account or documents.


**Base URL:**   
https://api.doculan.ai


---

## 🔹 1 Get Document

Retrieve a specific file using its document ID.  
Optionally, you can return the actual PDF file or just the file metadata.

### **Endpoint**

````
GET api/v1/documents/
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

<!-- ### **Request Body**
> _Not required_ -->

### **Response Body Example**

````
json

{
  "document_id": "682c5804-f860-4p08-802f-d5538j5aabd8",
  "file_path": "example.com/files/dev/OnePageContract.pdf",
  "metadata_path": "example.com/metadata/682c5804.json",
  "fileName": "OnePageContract.pdf",
  "size": 35599,
  "last_modified": "2025-12-26T16:19:53.484243+00:00",
  "created_by": {
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
  }
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

## 🔹 2 Get Documents

Retrieve a list of all available files.

### **Endpoint**

````
GET api/v1/documents/{document_id}
````



<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format | -->

### **Path Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `document_id` | string | ✅ Yes | Unique identifier of the document |

<!-- ### **Query Parameters**
> _None_

### **Request Body**
> _Not required_ -->

### **Response Body Example**

````
json

{
  "files": [
    {
      "document_id": "92c79f09-76c5-4cf8-bab6-9t68785acefc",
      "file_path": "example.com/files/automation/Two-party-sample.pdf",
      "metadata_path": "example.com/metadata/92c79f09.json",
      "fileName": "Two-party-sample.pdf",
      "size": 2746,
      "last_modified": "2025-12-06T15:37:02.145324+00:00",
      "created_by": {
        "name": "Test User",
        "email": "test.user@example.com"
      }
    },
    {
      "document_id": "b530324b-a18d-43b8-k943-19640164a094",
      "file_path": "example.com/files/automation/Folder1/Employee-Onboarding.pdf",
      "metadata_path": "example.com/metadata/b530324b.json",
      "fileName": "Employee-Onboarding.pdf",
      "size": 539879,
      "last_modified": "2025-12-08T11:07:52.468852+00:00",
      "created_by": {
        "name": "Test User",
        "email": "test.user@example.com"
      }
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

### **Response Format**
- Content-Type: `application/json`
- Returns an array of file objects with associated metadata.

###  Tags
`Files Operation`

---

## 🔹 3 Redirect URL

The **Redirect URL API** is used to define or retrieve the URL where users are redirected after completing specific actions such as login, email verification, or E-Sign processes.

### **Endpoint**

```
POST /api/v1/documents/auth/redirect
```

<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format |

### **Query Parameters**
> _None_

### **Request Body**
> _Not required_ -->

### **Response Body Example**

```
json

{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.samplePayload.signaturePart123456789",
  "ui_url": "https://dev.example.com/pdf-editor",
  "token_type": "Bearer",
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

## 🔹 4 Get Folders Structure

The Get **Folders Structure API** is used to retrieve the hierarchical structure of folders, including subfolders and associated files.

### **Endpoint**

```
GET /api/v1/documents/folder-structure
``` 

<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format |

### **Query Parameters**
> _None_

### **Request Body**
> _Not required_ -->

### **Response Body Example**

```
json

{
  "items": [
    {
      "index": 1,
      "type": "folder",
      "name": "Root Files",
      "items": [
        {
          "index": 1,
          "type": "folder",
          "name": "Project Alpha",
          "items": [
            {
              "index": 1,
              "type": "folder",
              "name": "Project Alpha - Docs",
              "items": [
                {
                  "index": 1,
                  "type": "file",
                  "name": "Requirement_Spec.pdf",
                  "document_id": "doc-001",
                  "created_by_name": "User One",
                  "created_by_email": "userone@example.com",
                  "created_at": "2026-02-10T10:30:00Z"
                },
                {
                  "index": 2,
                  "type": "file",
                  "name": "Weekly_Review_Report.pdf",
                  "document_id": "doc-002",
                  "created_by_name": "User Two",
                  "created_by_email": "usertwo@example.com",
                  "created_at": "2026-03-09T09:45:00Z"
                }
              ],
              "created_by_name": "User Three",
              "created_by_email": "userthree@example.com",
              "created_at": "2026-03-08T08:00:00Z"
            }
          ],
          "created_by_name": "User Two",
          "created_by_email": "usertwo@example.com",
          "created_at": "2026-03-01T12:00:00Z"
        }
      ],
      "created_by_name": "User One",
      "created_by_email": "userone@example.com",
      "created_at": "2026-02-01T09:00:00Z"
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

## 🔹 5 Upload Files

The **Upload File API** is used to upload documents or files to the system and store them in a specific folder.

### **Endpoint**

```
POST /api/v1/documents/upload/

```
<!-- ### **Headers**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format |

### **Query Parameters**
> _None_ -->


### **Request Body**
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `files`         | array<string >           | ✅ Yes    | Chose the recured file                   |
| `path` | string \| null | ❌ No    | Specifies the destination folder |
| `overwrite` | boolean | ❌ No    | Set to true or false to overwrite existing files |

### **Response Body Example**

```
json

{
    "uploaded_files": [
        {
            "document_id": "doc-001",
            "filename": "Project Alpha/User One/Test/Confidentiality_Agreement.pdf",
            "status": "uploaded"
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

##  **Document Template APIs**

This section describes the APIs used to retrieve document templates from the system.

---

## 🔹 1 Get All Document Templates

Retrieve a list of all available document templates.

### **Endpoint**


````
GET api/v1/documents/templates/all/
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


<!-- ### **Request Body**

> _Not required_ -->


### **Response Body Example**

````
json

{
    "local": {
        "ATTESTATION AND AGREEMENT": {
            "fields": [
                {
                    "id": "1766830885432-signature",
                    "type": "signature",
                    "x": 429,
                    "y": 902,
                    "width": 362,
                    "height": 36,
                    "page": 1,
                    "color": "hsl(196, 100%, 90%)",
                    "style": "both",
                    "partyId": "1",
                    "required": false,
                    "record": false,
                    "timestamp": false,
                    "options": []
                },
                {
                    "id": "1766830532236-text",
                    "type": "text",
                    "x": 501,
                    "y": 980,
                    "width": 310,
                    "height": 28,
                    "page": 1,
                    "color": "hsl(196, 100%, 90%)",
                    "style": "",
                    "partyId": "1",
                    "required": false,
                    "record": false,
                    "timestamp": false,
                    "options": []
                }            ],
            "parties": [
                {
                    "id": "1",
                    "name": "Party 1",
                    "email": "user@example.com",
                    "color": "hsl(196, 100%, 90%)",
                    "priority": 0
                }
            ],
            "document_id": "e1j8k49c-b726-4c9e-b168-m487cfaf6bcc"
        }
	},
	"global": {
        "Demo2-Temp": {
            "fields": [
                {
                    "id": "1765457294716-text",
                    "type": "text",
                    "x": 252,
                    "y": 188,
                    "width": 100,
                    "height": 25,
                    "page": 1,
                    "color": "hsl(196, 100%, 90%)",
                    "style": "both",
                    "partyId": "1",
                    "required": false,
                    "record": false,
                    "timestamp": false,
                    "options": []
                },
                {
                    "id": "1765457303824-date",
                    "type": "date",
                    "x": 555,
                    "y": 245,
                    "width": 100,
                    "height": 25,
                    "page": 1,
                    "color": "hsl(196, 100%, 90%)",
                    "style": "both",
                    "partyId": "1",
                    "required": false,
                    "record": false,
                    "timestamp": false,
                    "options": []
                }
            ],
            "parties": [
                {
                    "id": "1",
                    "name": "Party 1",
                    "email": "user@example.com",
                    "color": "hsl(196, 100%, 90%)",
                    "priority": 0
                }
            ],
            "document_id": "daac0bba-130b-4eeb-83fd-bi794882e972"
        }
    }
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

## 🔹2 Get Specific Document Template

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
  "document_id": "doc-12345-demo",

  "parties": [
    {
      "id": "party-1",
      "name": "User One",
      "email": "userone@example.com",
      "color": "hsl(200, 80%, 85%)",
      "priority": 1
    },
    {
      "id": "party-2",
      "name": "User Two",
      "email": "usertwo@example.com",
      "color": "hsl(120, 70%, 85%)",
      "priority": 2
    }
  ],

  "fields": [
    {
      "id": "field-full-name",
      "label": "Full Name",
      "type": "text",
      "value": "User One",
      "position": { "x": 600, "y": 880 },
      "size": { "width": 350, "height": 40 },
      "page": 4,
      "style": {},
      "assignedTo": "party-1",
      "required": true
    },
    {
      "id": "field-address",
      "label": "Address",
      "type": "text",
      "value": "123 Demo Street",
      "position": { "x": 510, "y": 960 },
      "size": { "width": 520, "height": 40 },
      "page": 4,
      "style": {},
      "assignedTo": "party-1",
      "required": true
    },
    {
      "id": "field-date",
      "label": "Date",
      "type": "date",
      "value": "2026-03-29",
      "position": { "x": 520, "y": 1215 },
      "size": { "width": 490, "height": 40 },
      "page": 4,
      "style": {},
      "assignedTo": "party-1",
      "required": true
    },
    {
      "id": "field-email",
      "label": "Email",
      "type": "email",
      "value": "userone@example.com",
      "position": { "x": 580, "y": 1050 },
      "size": { "width": 370, "height": 45 },
      "page": 4,
      "style": {},
      "assignedTo": "party-1",
      "required": true
    },
    {
      "id": "field-signature",
      "label": "Signature",
      "type": "signature",
      "value": "signature-placeholder",
      "position": { "x": 570, "y": 1130 },
      "size": { "width": 390, "height": 65 },
      "page": 4,
      "style": {
        "mode": "draw-and-type"
      },
      "assignedTo": "party-1",
      "required": true
    },
    {
      "id": "field-initial-page-1",
      "label": "Initial",
      "type": "initial",
      "value": "U1",
      "position": { "x": 1080, "y": 1630 },
      "size": { "width": 100, "height": 30 },
      "page": 1,
      "assignedTo": "party-1",
      "required": true
    },
    {
      "id": "field-initial-page-2",
      "label": "Initial",
      "type": "initial",
      "value": "U1",
      "position": { "x": 1080, "y": 1620 },
      "size": { "width": 100, "height": 30 },
      "page": 2,
      "assignedTo": "party-1",
      "required": true
    },
    {
      "id": "field-initial-page-3",
      "label": "Initial",
      "type": "initial",
      "value": "U1",
      "position": { "x": 1070, "y": 1620 },
      "size": { "width": 100, "height": 30 },
      "page": 3,
      "assignedTo": "party-1",
      "required": true
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

### **Tags**
`Document Template`

---

## 🔹 3 Create Template

The Create Template API is used to create a reusable document template for workflows such as E-Sign and document generation.

### **Endpoint**

```` 
GET api/v1/documents/status 
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

## 🔹 5 Update Template

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

## 🔹 2 Get Variable Registry

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
      "value": "Virtualan Software"
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

## 🔹 3 Update Variable Registry

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

## 🔹 4 Delete Variable Registry

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

## 🔹 5 Get All Variable Registry

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
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `scope` | string | ✅ Yes | Filter for a specific document scope |
| `variable` | string \| null | ❌ No | entire variable registry file will be deleted. |

<!-- ### **Request Body**
> _Not required_ -->

### **Response Body Example**

```
json

{
  "variable_registry": [
    {
      "variable": "Company Details",
      "fields": [
        {
          "type": "text",
          "style": "",
          "label": "Name",
          "value": "User Company One"
        },
        {
          "type": "email",
          "style": "",
          "label": "Email",
          "value": "contact@companyone.com"
        },
        {
          "type": "text",
          "style": "",
          "label": "Company Name",
          "value": "Company One Pvt Ltd"
        }
      ]
    },
    {
      "variable": "Company Details 2",
      "fields": [
        {
          "type": "text",
          "style": "",
          "label": "Company Name",
          "value": "Company Two Pvt Ltd"
        }
      ]
    },
    {
      "variable": "Company Details 3",
      "fields": [
        {
          "type": "text",
          "style": "",
          "label": "Company Name",
          "value": "Company Three LLC"
        }
      ]
    },
    {
      "variable": "Company",
      "fields": [
        {
          "type": "dropdown",
          "style": "",
          "label": "Global Dropdown",
          "value": "Option One"
        },
        {
          "type": "date",
          "style": "",
          "label": "Global Date",
          "value": "2026-12-12"
        },
        {
          "type": "email",
          "style": "",
          "label": "Global Personal Email",
          "value": "userone@example.com"
        },
        {
          "type": "number",
          "style": "",
          "label": "Global Phone Number",
          "value": "9876543210"
        }
      ]
    },
    {
      "variable": "Employee Info",
      "fields": [
        {
          "type": "text",
          "style": "",
          "label": "Name",
          "value": "User One"
        },
        {
          "type": "email",
          "style": "",
          "label": "Official Email ID",
          "value": "userone@companyone.com"
        },
        {
          "type": "date",
          "style": "",
          "label": "Start Date",
          "value": "2025-12-25"
        },
        {
          "type": "dropdown",
          "style": "",
          "label": "Gender",
          "value": "Option One"
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

## 🔹 6 Get Variable Registry Values

This API retrieves the **values associated with a specific variable registry**. It is useful for accessing predefined or dynamically stored values tied to a variable

### **Endpoint**

```` 
GET /api/v1/documents/variable-registry/values/{variable}
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

<!-- ### **Request Body**
> _Not required_ -->

### **Response Body Example**

```
json

[
  {
    "label": "Organization Name",
    "value": "Virtualan Software"
  }
]
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

## **Document Tracker APIs**

This API allows clients to retrieve the current status of a document using its tracking and document identifiers.

---

## 🔹 1 Get Over All Status

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

## 🔹 2 Get Document Status By Party

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

## 🔹 3 Resend E-Sign

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


### **Query Parameters**
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `store_as_default` | boolean | ❌ No | Store the provided configuration as default |


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

### **Example**

> store_as_default=false


### **Tags**

`Document Tracker`

---

## 🔹 4 Download Signed Document

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

## 🔹 5 Download Certificate

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

## 🔹 6 Log Action

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

## 🔹 7 Send E-Sign

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
  "document_id": "fct60e1e-5d05-4cf8-99ja-e65258f3ceb0",
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
      "email_body": "Hi [Fullname], We have completed the...[Documnet Link]"
    }
  ],
  "cc_emails": [
    "jason.brown@virtualansoftware.com"
  ],
  "client_info": {
    "ip": "3.156.94.85",
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

## 🔹 8 Sign API

Submit **signed field values** for a document by a specific party.


### **Endpoint**
````
POST api/v1/documents/sign
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
  "tracking_id": "98258l97c-56f6-4ffa-9c6e-62efbae24b36",
  "document_id": "fchgt56yhje1e-5d05-4cf8-99ba-e62994f3ceb0",
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


