
# How to Send Bulk Mail in Doculan?

This guide provides a comprehensive overview of how to distribute **bulk e-sign documents** to multiple recipients simultaneously within Doculan.  

The Bulk E-Sign feature empowers organizations to efficiently circulate identical contracts or forms—such as NDAs, consent agreements, or offer letters—to numerous recipients at once. Each recipient receives a secure, personalized copy for individual signing, ensuring both efficiency and compliance.

---


When utilizing Bulk Mode:
- A single document or template is distributed to **multiple recipients**.  
- Each recipient receives a **distinct and secure copy** for signing.  
- Recipient details may be entered manually or imported via a **CSV file**.  
- The system independently tracks each document and maintains a comprehensive audit trail for full transparency and compliance.

---

##  Step 1: Open the Bulk Mail Setup

1. Navigate to your **Dashboard**.  
2. Locate the folder containing your e-sign-ready document.  
3. Click the **⋮ (three dots)** menu under the **Actions** column.  
4. Select **E-Sign** to enter the configuration page.  
5. Click **Send Mail**, then choose the **Bulk Mail** option.

---

##  Step 2: Prepare Your Document Fields

Before proceeding, ensure that the document includes all necessary fields, such as:
- Signature
- Name
- Email
- Date
- Text or additional required input fields

All fields must be correctly assigned and saved prior to **bulk** sending.

>  **Tip:** Save the document as a reusable Template to ensure consistency across all distributed copies.

<!-- ### Field Configuration Checklist:
- Signature Field   
- Name and Email Field   
- Date Field   
- Text Fields for form responses   
- “Save E-Sign” clicked before proceeding  -->

---

##  Step 3: Prepare Recipient Data

Doculan provides two methods for adding recipients:  
<!-- - **Option 1:** Upload a **CSV file**  
- **Option 2:** Enter manually into the text area -->

---

###  Option 1: Upload CSV File

Uploading a **CSV file** is the most efficient method when distributing documents at scale.
<details open>
  <summary><b>Steps to Upload CSV File</b></summary>

1. Click **Upload CSV File**.  
2. Select a properly formatted **CSV file** from your device.  
3. The system will interpret each row as an individual recipient. 
4. Review the preview table to verify accuracy.  
5. Click **Validate** to confirm proper email formatting and data structure.
</details>

####  CSV File Format Example

<p>
  <a href="files/Bulk_Mail_CSV_File.csv" target="_blank"
     style="display:inline-block; background-color:#007bff; color:white; padding:10px 20px; border-radius:6px; text-decoration:none;">
    📄 Download CSV Example
  </a>
</p>

<!-- 6. Enable the custom signing order to define the sequence and prioritize recipients accordingly.

<p>
  <a href="files/Bulk_Mail_CSV_Files.csv" target="_blank"
     style="display:inline-block; background-color:#007bff; color:white; padding:10px 20px; border-radius:6px; text-decoration:none;">
    📄 Download CSV Example
  </a>
</p> -->

<!-- <iframe src="files\Bulk_Mail_CSV_File.csv"
        style="width:100%; height:600px; border:2px solid black; border-radius:4px;">
</iframe> -->


<!-- | Name | Email | Company | Role |
|------|--------|----------|------|
| John Doe | john@example.com | Virtualan | Manager |
| Sarah Lee | sarah@example.com | Virtualan | HR |
| Amit Patel | amit@example.com | Virtualan | Legal | -->

**Each row in the CSV file represents one recipient and generates one unique document.**  
> *All documents are securely created and delivered individually.*
</details>

---

###  Option 2: Enter Manually

For smaller distributions, recipients may be entered directly.

<details open>
  <summary><b>Steps to Enter Recipients Manually</b></summary>

1. In the **Recipients** text area, type details for each recipient.  
2. Follow the sample format provided on-screen.  
3. Press **Enter** or **Add Line** for each recipient.  
4. Each line represents one document to be sent.

<!-- **Example:**
John Doe, john@example.com
Sarah Lee, sarah@example.com
Amit Patel, amit@example.com

5. Click **Validate** to confirm all entries are correct. -->
</details>

<img src=" screenshots\E-Sign_Images\Bulk_Mail_Manual_CSV.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

<!-- 5. Enable the custom signing order to define the sequence and prioritize recipients accordingly.

<img src=" screenshots\E-Sign_Images\Bulk_Mail_Manual_CSV1.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document"> -->

> *This method offers flexibility when handling a limited number of recipients.*
---

<!-- ##  Step 4 — Generate Email Content (Using AI Assist or Manual)

You can create the email content in two ways:
- Write manually  
- Use **AI Assist** to generate customized content

<details>
  <summary><b>Steps to Generate Email Using AI Assist</b></summary>

1. Click the **AI Assist** button.  
2. The AI chatbot will appear on the side panel.  
3. Provide a short prompt, e.g.  
   *“Write an invitation email for document signing for our employee contract.”*  
4. The AI will auto-generate a professional message.  
5. Click **Insert to Email Body** to add it instantly.  
</details>

###  Sample Email Template

Subject: Please Review and Sign the Document

Dear [Name],

You have been requested to review and sign the attached contract.
Please click the document link below to proceed with your digital signature.

[Document Link]

Thank you,
Virtualan Doculan Team


--- -->

<!-- ##  Step 5 — Attach Document Link and Send

1. Drag and drop the **[Document Link]** placeholder into the email body.  
2. Review all the fields once again:
   - Recipients List   
   - Subject   
   - Email Body   
   - Document Link   
3. Click **Send Bulk Mail**.

>  Each recipient gets their **own document copy**, linked uniquely for secure signing.

--- -->

<!-- ##  Step 6 — Schedule Bulk Emails (Optional)

You can schedule the bulk emails to go out at a future date or time.

<details>
  <summary><b>Steps to Schedule a Bulk Mail</b></summary>

1. In the **Send Mail** window, enable **Schedule Mail**.  
2. Choose the desired **date and time**.  
3. Click **Confirm Schedule**.  
4. Doculan automatically sends all emails at the scheduled time.
</details>

--- -->

<!-- ##  Step 7 — Set Expiry Date & Reminders

1. Under **Mail Settings**,set:
   - **Expiry Date:** The deadline for signing.  
   - **Reminder Frequency:** How often to remind pending signers (daily, weekly, etc.).  
2. Click **Save Settings**.

This ensures signers receive follow-up reminders until the document is signed or expires.

--- -->

## Step 4: Document Scheduler
- Upon clicking Send Document, you will be automatically redirected to the Document Scheduler page to manage and monitor document delivery.
- The system sends documents to recipients one at a time, maintaining a 30-second interval between each email.
- If any document delivery fails, you can resend it directly from the Document Scheduler page using the Resend option in the Actions menu.

<img src=" screenshots\E-Sign_Images\Bulk_Mail_Dashboard1.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document"><br>

<img src=" screenshots\E-Sign_Images\Bulk_Mail_Scheduler.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document"><br>


<img src=" screenshots\E-Sign_Images\Bulk_Mail_Resend.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---

##  Step 5: Track Bulk Document Status

Once sent, return to your folder and click **Audit** on the corresponding bulk batch.

You’ll see:

| Column | Description |
|---------|-------------|
| **Name** | Recipient’s name |
| **Email** | Email sent to |
| **Status** | Sent / Opened / Signed / Declined / Expired |
| **Last Modified** | Date of last action |
| **Actions** | View / Resend / Cancel / Delete / Download |

- Sent time
- Opened time
- Signed time
- Recipient’s IP & device info
- Completed or declined status

> *You can also export this data as a report for compliance records.*

---

<!-- ##  Step 9 — Resend or Cancel Bulk Documents

| Action | Description |
|--------|-------------|
| **Resend** | Available only if the document has expired |
| **Cancel** | Cancels pending requests for all unsent signers |
| **Delete** | Permanently removes the record from bulk history |

--- -->

<!-- ##  Step 10 — Recipient Experience

Each recipient receives a **personalized email** with their own signing link.

Steps:
1. Open the email and click the **document link**.  
2. Verify the **OTP** sent to their email.  
3. Fill in the required details.  
4. Click the **Signature Field** and choose:
   - **Type**
   - **Draw**
   - **Upload Image**  
5. Click **Submit** once done.  

After signing:
- The recipient gets a confirmation email.
- The sender’s dashboard updates with **“Completed”** status.

--- -->

<!-- ##  Step 11 — Completion and Certification

When all recipients finish signing:
- Each document gets an **SSL Certified** completion page.  
- The system generates a **Certificate of Completion** for each signer.  
- The sender can **download** all completed copies in bulk or individually.  

>  Every signed document is verifiable with an audit trail and timestamp logs.

--- -->

<!-- ##  Step 12 — Audit Trail Summary

Open **Order Trail** to see:
- Sent time
- Opened time
- Signed time
- Recipient’s IP & device info
- Completed or declined status

You can also export this data as a report for compliance records.

--- -->

 **You’ve successfully sent a Bulk E-Sign Document!**

Now, you can efficiently manage hundreds of contracts or forms using Doculan’s bulk automation and AI-assisted tools.

---

**Demo Video:**
<!-- Inline HTML in Markdown file -->
<style>
.video-wrap {
  border: 2px solid #000;
  border-radius: 4px;
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  margin-bottom: 1rem;
  line-height: 0; /* removes iframe gaps */
}

.video-wrap iframe {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
  margin: 0;
  padding: 0;
}
</style>

<div class="video-wrap" role="region" aria-label="Demo: Creating an E-Sign">
  <iframe
    src="https://www.youtube.com/embed/25huWNfF4SM"
    title="Demo Video"
    allowfullscreen>
  </iframe>
</div>

> The above **Video** represent that how to **send a document using the bulk email feature**.

© Doculan by [Virtualan Software](https://www.virtualan.io)
