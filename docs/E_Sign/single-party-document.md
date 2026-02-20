﻿
# How to Send Single Party Document?

This guide provides step-by-step instructions for sending a **single-party e-sign document** in Doculan, covering document preparation, configuration, delivery, tracking, and completion.

A **single-party document** is a contract that requires the signature of only **one recipient**.  
Follow the steps below to configure and send the document for electronic signing.

---

##  Step 1: Initiate and Upload the Document

1. From the **Dashboard**, click **Create Document**. 
2. Select an existing folder or create a new folder named **E-Sign Documents**.
3. Upload the document using the **Upload** button.

<img src="screenshots\E-Sign_Images\Create_and_Upload_Document1.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

4. Click the **⋮ (three-dot)** icon under the **Actions** column.  
5. We can also upload the document by selecting this **Upload** option from **Actions** column and choose your **contract file (PDF Format)**.

<img src="screenshots\E-Sign_Images\Create_and_Upload_Document2.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

Once uploaded, you'll see your document listed in the folder view.

---

##  Step 2: Open for E-Sign Configuration

1. Locate the uploaded contract in the document list.  
2. Under the **Actions**, click the **⋮ (three-dot)** menu for the selected document.  
3. Select **E-Sign**.

<img src=" screenshots\E-Sign_Images\E-Sign Configuration.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

You will be redirected to the E-Sign Configuration Interface, where signing fields and recipient roles are defined.

---

##  Step 3: Configure Signing Fields with Precision

Click the **Fields** tab to access all available input elements.

| Field Type | Description |
|-------------|-------------|
| **Signature** | Allows the recipient to provide a digital signature. |
| **Date** | Auto-populates with the current date or allows manual entry. |
| **Text / Textarea** | Captures text-based information. |
| **Email / Number** | Collects contact details. |
| **Checkbox / Dropdown** | Enables selections or acknowledgments. |
| **Attachment** | Allows the recipient to upload supporting documents. |
| **Initial** | Captures initials beside specific clauses. |

<details open>
  <summary><b>Steps to Add Fields</b></summary>

1. Drag and drop the required fields (e.g., Signature, Date) into the document.  
2. Align them properly within the contract text area.  
3. Assign each field to **Party 1** (your single recipient).  
4. Repeat for any additional details needed.  
5. Click **Save E-Sign** to store your setup.
</details>


<img src=" screenshots\E-Sign_Images\Configure_Field.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

<!-- ##  Step 4: Add Party Details

Click the **Parties** tab.

1. You'll see a default **Party 1** section.  
2. Click **Save**.

<img src=" screenshots\E-Sign_Images\Add_Party.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document"> -->

>  *Since this is a single-party document, you do not need to add more parties.*

---

##  Step 4: Execute Delivery – Send for Signature

Click **Send Mail** to initiate the signing process.


### Email Setup:
1. Select **Single Mail**.  
2. Enter the recipient's **Name** and **Email Address**.  

<img src=" screenshots\E-Sign_Images\Single_mail.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

3. Choose an **Expiry Date** and **Reminder Options**.

<img src=" screenshots\E-Sign_Images\Set_Reminder.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

Under **Security Settings**, We have to enable only the following options:
- **OTP Verification**
- **Certificate**

<img src=" screenshots\E-Sign_Images\Sec_SS.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

4. Write the email message manually **or** use **AI Assist** to generate it.  
5. Drag and drop the **document link** placeholder into the message body.
6. Click **Send Mail**.

<img src=" screenshots\E-Sign_Images\Send_mail.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

>  *You can also schedule the email for a specific date/time.*

---

##  Step 5: Track and Manage the Document

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

> All timestamps and audit logs are recorded for compliance and traceability.

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

##  Step 6: Recipient Signing Experience

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

##  Step 7: AI Assist for Recipients

During the signing process, recipients may use **AI Assist** to ask questions related to the contract’s content.
The AI provides contextual assistance specific to the document and does not respond to general queries.

<img src=" screenshots\E-Sign_Images\AI_Assist.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---

##  Step 8: After Submission

<!-- If the recipient declines:
- They must provide a **reason**.  
- The sender will receive an **email notification**.  
- The status changes to **Declined**.

<img src=" screenshots\E-Sign_Images\Recipient_declining.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

If they complete: -->
- A pop-up appears as **Submission Successfull**
- You can either view the document or download the document as zip file.

<img src=" screenshots\E-Sign_Images\Submitted_successfully.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

- A **Certificate of Completion** is generated.  
- The signed PDF is **SSL certified**.  
- Copies are sent to both sender and recipient via email.  
- The document status changes to **Completed**.


<img src=" screenshots\E-Sign_Images\SSL_Certificate.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---



 **Congratulations!**  
You have successfully configured and sent a **single-party e-sign document** using **Doculan**.

**Demo Video:**
<!-- Inline HTML in Markdown file -->
<style>
.video-wrap {
  border: 2px solid black;
  border-radius: 4px;
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  margin-bottom: 1rem;
}
.video-wrap video {
  display: block;
  width: 100%;
  height: auto;
}
</style>

<div class="video-wrap" role="region" aria-label="Demo: Creating a E-Sign">
  <!-- Use a relative path like ./videos/demo.mp4 or an absolute URL -->
  <video controls poster="">
    <source src="https://doculan-storage-public.s3.us-east-1.amazonaws.com/demo_video/E_Signature/E-Sign+Single+Party.mp4" type="video/mp4">
    <source src="https://doculan-storage-public.s3.us-east-1.amazonaws.com/demo_video/E_Signature/E-Sign+Single+Party.webm" type="video/webm">
    <!-- Fallback link if browser can't play video -->
    Your browser does not support the video tag. 
    <a href="https://doculan-storage-public.s3.us-east-1.amazonaws.com/demo_video/E_Signature/E-Sign+Single+Party.mp4" target="_blank" rel="noopener">Download / Open video</a>
  </video>
</div>

> The above **Video** represent that how to **Create an E-Sign Document and Send to Recipient**.

© Doculan by [Virtualan Software](https://www.virtualan.io)
