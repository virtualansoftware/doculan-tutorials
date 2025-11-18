﻿
# How to Send Single Party Document?

This guide explains how to send a **single party e-sign document** in Doculan, from preparing the document to sending, tracking, and completion.

A **single party document** is a contract that requires only **one recipient** to sign.  
Follow the steps below to configure and send it for e-signing.

---

##  Step 1: Create or Select a Document

1. From the **Dashboard**, click **Create Document**. 
2. Choose or create a folder named **e-sign documents**. 
3. Upload the document using the **Upload** button.

<img src="screenshots\E-Sign_Images\Create_and_Upload_Document1.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

4. Click the **⋮ (three-dot)** icon under the **Actions** column.  
5. We can also upload the document by selecting this **Upload** option from **Actions** column and choose your **contract file (PDF)**.

<img src="screenshots\E-Sign_Images\Create_and_Upload_Document2.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

Once uploaded, you'll see your document listed in the folder view.

---

##  Step 2: Open for E-Sign Configuration

1. In the document list, find your uploaded contract.  
2. Under **Actions**, click the **⋮ (three-dot)** menu.  
3. Select **E-Sign**.

<img src=" screenshots\E-Sign_Images\E-Sign Configuration.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

This will open the **E-Sign Editing Page**, where you can define fields and assign them to the recipient.

---

##  Step 3: Configure Fields

Click the **Fields** tab to access all available input elements.

| Field Type | Description |
|-------------|-------------|
| **Signature** | For the recipient to sign. |
| **Date** | Auto-fills with current date or allows manual entry. |
| **Text / Textarea** | Collect text-based inputs. |
| **Email / Number** | Capture contact details. |
| **Checkbox / Dropdown** | For selections or acknowledgements. |
| **Attachment** | Recipient uploads supporting files. |
| **Initial** | For initials beside key clauses. |

<details>
  <summary><b>Steps to Add Fields</b></summary>

1. Drag and drop the required fields (e.g., Signature, Date) into the document.  
2. Align them properly within the contract text area.  
3. Assign each field to **Party 1** (your single recipient).  
4. Repeat for any additional details needed.  
5. Click **Save E-Sign** to store your setup.
</details>


<img src=" screenshots\E-Sign_Images\Configure_Fields.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---

##  Step 4: Add Party Details

Click the **Parties** tab.

1. You'll see a default **Party 1** section.  
2. Click **Save**.

<img src=" screenshots\E-Sign_Images\Add_Party.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

>  *Since this is a single-party document, you do not need to add more parties.*

---

##  Step 5: Send Mail

Click **Send Mail** to send the document for signing.

You'll now configure email delivery.

### Email Setup:
1. Select **Single Mail**.  
2. Enter the recipient's **Name** and **Email ID**.  

<img src=" screenshots\E-Sign_Images\Single_mail.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

3. Choose an **Expiry Date** and **Reminder Options**.

<img src=" screenshots\E-Sign_Images\Set_Reminder.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

4. Write the email message manually **or** use **AI Assist** to generate it.  
5. Drag and drop the **document link** placeholder into the message body.
6. Click **Send Mail**.

<img src=" screenshots\E-Sign_Images\Send_mail.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

>  *You can also schedule the email for a specific date/time.*

---

##  Step 6: Track and Manage the Document

After sending, navigate to your folder and click your document.

Beside the tracking details of the sent document, Under **Actions**, click the **⋮ (three-dot)** menu.

Click the **Audit** button 

You'll see:
- Recipient name and email
- Status (Sent / Opened / Signed / Completed / Expired)
- Timestamps for every action
<!-- <img src=" screenshots\E-Sign_Images\Audit.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document"> -->

<!-- You can open the **Audit Trail** for the document to view:

- When it was **Sent**
- When it was **Opened**
- When it was **Signed** -->
- Final status (**Completed / Declined / Cancelled**)

<img src=" screenshots\E-Sign_Images\Audit_and_Verification.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

All timestamps and audit logs are recorded for compliance and traceability.

### Actions Available
| Action | Description |
|--------|-------------|
| **Resend** | Only available if document expired or pending |
| **Cancel** | Cancel an active document |
| **Edit** | Edit the recipient details after sending mail |
| **View** | Open for completed status |
| **Download** | Only available if document is completed |

<img src=" screenshots\E-Sign_Images\Actions_available.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

<!-- <img src=" screenshots\E-Sign_Images\Edit_parties.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document"> -->

---

##  Step 7: Recipient Experience

When your recipient receives the email:

1. They click the **document link** in the email.  

<img src=" screenshots\E-Sign_Images\receiving email.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

2. They are redirected to the **Doculan Signing Page**.  
3. They must **verify via OTP** sent to their email.  
4. Once verified:
   - They can view the contract.
   - Fill in required details.
   - Click inside the **Signature Field** to sign.

   <img src=" screenshots\E-Sign_Images\Recipient_Contract_Editing.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

### Signature Options
- **Type:** Enter text signature.  
- **Draw:** Use mouse/touchpad to sign.  
- **Upload:** Attach a scanned signature image.

<img src=" screenshots\E-Sign_Images\Signing_the _document.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---

##  Step 8: AI Assist for Recipients

Recipients can also click **AI Assist** during signing to ask questions about the contract's contents.  
The AI will respond contextually, it does **not** handle general queries.

---

##  Step 9: After Submission

If the recipient declines:
- They must provide a **reason**.  
- The sender will receive an **email notification**.  
- The status changes to **Declined**.

<img src=" screenshots\E-Sign_Images\Recipient_declining.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

If they complete:
- A **Certificate of Completion** is generated.  
- The signed PDF is **SSL certified**.  
- Copies are sent to both sender and recipient via email.  
- The document status changes to **Completed**.

<img src=" screenshots\E-Sign_Images\Submitted_successfully.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

<img src=" screenshots\E-Sign_Images\SSL_Certificate.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---



 **Congratulations!**  
You have successfully configured and sent a **single-party e-sign document** using **Doculan**.

© Doculan by [Virtualan Software](https://www.virtualan.io)
