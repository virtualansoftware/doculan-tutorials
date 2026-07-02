# API Operations Overview

**API operations** define how clients interact with the system to perform actions such as creating, retrieving, updating, and deleting resources. These operations follow standard HTTP methods and structured request/response formats.

---

## API Structure

**API structure** defines how endpoints, requests, and responses are organized to ensure consistency, scalability, and ease of use. A well-structured API follows RESTful principles and standard conventions.

## Headers

**Headers** are key-value pairs sent along with an API request or response. They provide metadata that helps the server understand how to process the request and how the client expects the response.

### Headers Example
| Name                | Type               | Required | Description                                                |
| ------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `x-api-key`         | string             | ✅ Yes    | API key used to authenticate the request                   |
| `Content type` | application/json | ✅ Yes     | Specifies that the API response is returned in JSON format |


---

## Path Parameres

A **path parameter** is a dynamic value included in the API URL that is used to uniquely identify and access a specific resource, enabling the system to perform operations on that resource.

### Path Parameters Example
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `template_name` | string | ✅ Yes | Specifies the template name |

---

## Query Parameters

**Query parameters** are optional values added to the URL to filter, modify, or customize API requests. They are passed as key-value pairs after the ? in the URL and help control how the data is retrieved or processed.

### Query Parameters Example
| Name | Type | Required | Description |
|-----|------|----------|-------------|
| `tracking_id` | string | ✅ Yes | Unique tracking identifier of the document |
| `document_id` | string | ✅ Yes | Unique identifier of the document |
| `party_id` | string | ✅ Yes | Unique identifier of the party |

---

## Request Body

The **request body** contains the data sent by the client to the API. It is mainly used in:

 - `POST` → Create data
 - `PUT` → Replace data
 - `PATCH` → Update partial data

Most APIs use `JSON` format for the request body.

### Request Body Example

```
json

{
  "name": "Company Details",
  "description": "Stores company-related information",
  "fields": [
    {
      "field_name": "company_name",
      "type": "string",
      "required": true
    },
    {
      "field_name": "address",
      "type": "string",
      "required": false
    }
  ]
}
```

---

## Response Body

The **response body** is the data returned by the API after processing a client request. It provides:

 - Operation status
 - Resulting data
 - Error details (if any)

Most APIs return responses in `JSON` format.

### Response Body Example

```
json

{
  "status": "success",
  "message": "Operation completed successfully",
  "data": "",
  "errors": null
}
```

---

## API Endpoints

### Authorization Management APIs

| Operation                   | Method | Endpoint                        |
| ------------------------- | ------ | ------------------------------- |
| Register User             | POST   | `/api/auth/register`            |
| Login User                | POST   | `/api/auth/login`               |
| Email Verification        | POST   | `/api/auth/verify-email`        |
| Resend Verification Email | POST   | `/api/auth/resend-verification` |
| Create API Key            | POST   | `/api/auth/api-key`             |

---

### Files Operation APIs

| Operation              | Method | Endpoint                            |
| -------------------- | ------ | ----------------------------------- |
| Get Document         | GET    | `/api/files/{document_id}`          |
| Get Documents        | GET    | `/api/files`                        |
| Redirect URL         | GET    | `/api/files/{document_id}/redirect` |
| Get Folder Structure | GET    | `/api/files/folders`                |
| Upload Files         | POST   | `/api/files/upload`                 |

---

### Document Template APIs

| Operation                        | Method | Endpoint                         |
| ------------------------------ | ------ | -------------------------------- |
| Get All Document Templates     | GET    | `/api/templates`                 |
| Get Specific Document Template | GET    | `/api/templates/{template_name}` |
| Create Template                | POST   | `/api/templates`                 |
| Delete Template                | DELETE | `/api/templates/{template_name}` |
| Update Template                | PUT    | `/api/templates/{template_name}` |

---

### Variable Registry APIs

| Operation                      | Method | Endpoint                                      |
| ---------------------------- | ------ | --------------------------------------------- |
| Create Variable Registry     | POST   | `/api/variable-registry`                      |
| Get Variable Registry        | GET    | `/api/variable-registry/{variable_id}`        |
| Update Variable Registry     | PUT    | `/api/variable-registry/{variable_id}`        |
| Delete Variable Registry     | DELETE | `/api/variable-registry/{variable_id}`        |
| Get All Variable Registry    | GET    | `/api/variable-registry`                      |
| Get Variable Registry Values | GET    | `/api/variable-registry/{variable_id}/values` |

---

### Document Tracker APIs

| Operation                      | Method | Endpoint                                      |
| ---------------------------- | ------ | --------------------------------------------- |
| Get Overall Status           | GET    | `/api/tracker/status`                         |
| Get Document Status By Party | GET    | `/api/tracker/{document_id}/party/{party_id}` |
| Resend E-Sign                | POST   | `/api/tracker/{document_id}/resend`           |
| Download Signed Document     | GET    | `/api/tracker/{document_id}/download`         |
| Download Certificate         | GET    | `/api/tracker/{document_id}/certificate`      |
| Log Action                   | POST   | `/api/tracker/log`                            |
| Send E-Sign                  | POST   | `/api/tracker/send`                           |
| Sign API                     | POST   | `/api/tracker/sign`                           |
| Tracking IDs API             | GET    | `/api/tracker/ids`                            |

---


### Custom Labels APIs

| Operation                    | Method | Endpoint                                      |
| ---------------------------- | ------ | --------------------------------------------- |
| Create labels                | POST   | `/api/v1/documents/custom-labels/create/`     |
| Get all labels               | GET    | `/api/v1/documents/custom-labels/get-all-labels/` |
| Labels Update                | PUT    | `/api/v1/documents/custom-labels/update/`     |
| Delete Labels                | DELETE | `/api/v1/documents/custom-labels/delete/`     |

---

### Client Roles APIs

| Operation                    | Method | Endpoint                                      |
| ---------------------------- | ------ | --------------------------------------------- |
| Create Client Role           | POST   | `/api/v1/roles/`                              |
| Get All Client Roles         | GET    | `/api/v1/roles/`                              |
| Update Client Role           | PUT    | `/api/v1/roles/{role_name}`                   |
| Add User                     | POST   | `/api/v1/auth/add-user`                       |
| Get User                     | GET    | `/api/v1/auth/get-users`                      |
| Get Current User Api         | GET    | `/api/v1/auth/current-user`                   |


---

## HTTP Status Codes

| Status Code | Description              |
| ---- | --------------------- |
| <span style="color:green; font-weight:bold;">200</span>  | OK                    |
| <span style="color:green; font-weight:bold;">201</span>  | Created               |
| <span style="color:green; font-weight:bold;">204</span>  | No Content            |
| <span style="color:red; font-weight:bold;">400</span>  | Bad Request           |
| <span style="color:red; font-weight:bold;">401</span>  | Unauthorized          |
| <span style="color:red; font-weight:bold;">403</span>  | Forbidden             |
| <span style="color:red; font-weight:bold;">404</span>  | Not Found             |
| <span style="color:red; font-weight:bold;">500</span>  | Internal Server Error |
