﻿
# How to Resend an eSign Document?

At times, an eSign document may need to be resent—for example, if the **recipient did not receive the email**, the **document has expired**, or the **recipient’s email details were updated**.  
This guide explains when and how you can **resend an eSign request in Doculan**, including how the system handles expired or pending documents while maintaining audit integrity.

---

##  Step 1: Understand Resend Eligibility

For compliance and audit accuracy, Doculan allows resending only under specific conditions.

| Document Status | Can Resend? | Description |
|------------------|-------------|--------------|
| **Expired** |  Yes | Document expired before signing |
| **Pending** |  Yes | Until the recipient declines or submits the document |
| **Completed** |  No | Already signed and finalized |
| **Cancelled** |  No | Sender has withdrawn |
| **Declined** |  No | Recipient refused to sign |
<!-- | **Failed** |  Yes | Email delivery issue | -->

<img src=" screenshots\E-Sign_Images\Actions_available.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

>  **Note:**  You may only resend a document *if its status is **not Completed, Cancelled, or Declined**.*

---

##  Step 2: Open the Actions Menu

In the **Actions** column for that document:

1. Under the Actions column, click the **⋮ (three-dot)** icon.  
2. You'll see options like:
   - View  
   - Audit  
   - Download    
   - **Resend** *(visible only if applicable)*  
3. From the dropdown menu, select **Resend**.
4. If necessary, update or set a new **expiry date**.
5. Click Send to resend the request.

<img src=" screenshots\E-Sign_Images\Resend_Popup.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

> *The system will immediately dispatch the document again to the recipient.*
---

##  Step 3: Verify Resend Activity in the Audit Trail

You can always check the **Audit** log to confirm resend activity.

Steps:
1. Click the **Audit** button in the Actions column.  
2. The Audit page will display a chronological record of activities, including:
   - Original document creation  
   - Initial send date and time  
   - Resend date/time  
   - Recipient open, view, and signing activity 

<img src=" screenshots\E-Sign_Images\Resend_pending_status.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---

 **You have successfully learned how to resend an eSign document in Doculan!**

> Resending ensures that no document signing opportunity is missed—especially when recipients do not respond before expiry or when emails fail to deliver. It helps maintain a smooth and uninterrupted e-signature workflow.

© Doculan by [Virtualan Software](https://www.virtualan.io)
