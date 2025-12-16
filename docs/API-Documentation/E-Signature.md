# Send Document for Signature API

## 1️⃣ **POST** — Send Document

**Endpoint**

```http
POST https://api.doculan.ai/documents/{document_id}/send
```

---

### **Path Parameters**

| Field         | Type | Required | Description                                              |
| ------------- | ---- | -------- | -------------------------------------------------------- |
| `document_id` | UUID | Yes      | Unique identifier of the document to be sent for signing |

---

### **Request Body**

### **Root Object**

| Field                | Type     | Required | Description                                          |
| -------------------- | -------- | -------- | ---------------------------------------------------- |
| `document_id`        | UUID     | Yes      | Unique identifier of the document                    |
| `validityDate`       | ISO 8601 | Yes      | Expiration date and time for signing the document    |
| `remainder`          | Integer  | No       | Number of reminder emails to be sent                 |
| `parties`            | Array    | Yes      | List of recipients required to sign the document     |
| `email_response`     | Array    | Yes      | Email content sent to signers                        |
| `cc_emails`          | Array    | No       | Email addresses to receive carbon copies             |
| `client_info`        | Object   | Yes      | Metadata related to the sender’s device and location |
| `holder`             | Object   | Yes      | Information about the document owner                 |
| `scheduled_datetime` | ISO 8601 | No       | Scheduled date and time to send the document         |

---

### **parties[] Object**

| Field      | Type    | Required | Description                                      |
| ---------- | ------- | -------- | ------------------------------------------------ |
| `id`       | String  | Yes      | Unique identifier of the signer                  |
| `name`     | String  | Yes      | Full name of the signer                          |
| `email`    | String  | Yes      | Email address of the signer                      |
| `color`    | String  | No       | Highlight color assigned to the signer           |
| `priority` | Integer | Yes      | Signing order priority (lower value signs first) |

---

### **email_response[] Object**

| Field           | Type   | Required | Description                           |
| --------------- | ------ | -------- | ------------------------------------- |
| `email_subject` | String | Yes      | Subject line of the signing email     |
| `email_body`    | String | Yes      | Email body content sent to the signer |

---

### **client_info Object**

| Field        | Type     | Required | Description                                  |
| ------------ | -------- | -------- | -------------------------------------------- |
| `ip`         | String   | Yes      | IP address of the sender                     |
| `city`       | String   | No       | City of the sender                           |
| `region`     | String   | No       | Region or state                              |
| `country`    | String   | No       | Country name                                 |
| `timezone`   | String   | No       | Sender’s timezone                            |
| `timestamp`  | ISO 8601 | Yes      | Time the request was initiated               |
| `latitude`   | String   | No       | Latitude coordinate                          |
| `longitude`  | String   | No       | Longitude coordinate                         |
| `aws_region` | String   | No       | AWS region from which the request originated |
| `browser`    | String   | No       | Browser used by the sender                   |
| `device`     | String   | No       | Device type (e.g., PC/Laptop)                |
| `os`         | String   | No       | Operating system of the sender               |

---

### **holder Object**

| Field     | Type   | Required | Description                          |
| --------- | ------ | -------- | ------------------------------------ |
| `name`    | String | Yes      | Name of the document holder          |
| `email`   | String | Yes      | Email address of the document holder |
| `address` | String | No       | Physical address of the holder       |

---

### **Request Example**

```json
{
  "document_id": "d7c2cd92-25c1-4301-a386-19996680b75c",
  "validityDate": "2025-12-15T18:29:59.000Z",
  "remainder": 0,
  "parties": [
    {
      "id": "1",
      "name": "Sarah Williams",
      "email": "sarahwilliams@virtualansoftware.com",
      "color": "hsl(196, 100%, 90%)",
      "priority": 1
    }
  ],
  "email_response": [
    {
      "email_subject": "Non-Disclosure Agreement for Your Review and Signature",
      "email_body": "Hi [Fullname]..."
    }
  ],
  "cc_emails": [],
  "client_info": {
    "ip": "276.15.39.1",
    "timestamp": "2025-12-15T18:08:27.068Z",
    "browser": "Chrome",
    "device": "PC/Laptop",
    "os": "Windows 10"
  },
  "holder": {
    "name": "John Doe",
    "email": "johndoe@virtualansoftware.com",
    "address": null
  },
  "scheduled_datetime": null
}
```

---

### **Response**

### **Response Fields**

| Field         | Type   | Description                                      |
| ------------- | ------ | ------------------------------------------------ |
| `tracking_id` | UUID   | Unique tracking identifier for the sent document |
| `status`      | String | Current status of the document                   |

```json
{
  "tracking_id": "272f3791-6b00-47dc-96b9-c20e30de437d",
  "status": "sent"
}
```

---

### Track Document Status API

## 2️⃣ **GET** — Track Status

**Endpoint**

```http
GET https://api.doculan.ai/documents/{tracking_id}/trackings-status
```

---

### **Path Parameters**

| Field         | Type | Required | Description                                     |
| ------------- | ---- | -------- | ----------------------------------------------- |
| `tracking_id` | UUID | Yes      | Tracking ID returned when the document was sent |

---

### **Response Structure**

### **Party Status Object**

| Field         | Type     | Description                                   |
| ------------- | -------- | --------------------------------------------- |
| `isSent`      | Boolean  | Indicates whether the document email was sent |
| `dateTime`    | ISO 8601 | Date and time of the event                    |
| `party_name`  | String   | Name of the signer                            |
| `party_email` | String   | Email address of the signer                   |
| `ip`          | String   | IP address used                               |
| `browser`     | String   | Browser used                                  |
| `os`          | String   | Operating system                              |
| `device`      | String   | Device type                                   |
| `location`    | Object   | Geographical metadata                         |

---

### **Tracking Response Example**

```json
{
  "d7c2cd92-25c1-4301-a386-19996680b75c": {
    "in_progress": {
      "272f3791-6b00-47dc-96b9-c20e30de437d": {
        "parties": [
          {
            "id": "1",
            "name": "Sarah Williams",
            "email": "sarahwilliams@virtualansoftware.com",
            "status": {
              "sent": [
                {
                  "isSent": true,
                  "dateTime": "2025-12-16T09:57:22.191241+00:00"
                }
              ]
            }
          }
        ],
        "last_updated": "2025-12-16T09:57:22.191241+00:00"
      }
    }
  }
}
```