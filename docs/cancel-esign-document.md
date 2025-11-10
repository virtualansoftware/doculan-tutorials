<!-- ## Steps

1. Go to **Dashboard → E-Sign Documents**.  
2. Select the document to cancel.  
3. Click the **Three-dot menu (⋮)** beside the document.  
4. Choose **Cancel Document**.  
5. Confirm the cancellation.  

🖼️ *Screenshot Placeholder: Cancel document option in dropdown* -->


*************************************************************************************


# How to Cancel an eSign Document?

Sometimes you may need to **cancel an ongoing e-signature request** — for example, if you sent it to the wrong recipient, updated the document, or no longer need it signed.  
This guide explains how to cancel such eSign documents in **Doculan** and what happens afterward.

---

<!-- ##  Step 1 — Open the Document List

1. Go to the **Dashboard** page.  
2. Select the folder containing the document you previously sent for e-sign.  
3. Inside the folder, you’ll see the list of uploaded or sent documents displayed in a table.  

Each document row includes:
| Column | Description |
|---------|-------------|
| **Name** | Document file name |
| **Party Details** | Signers involved |
| **Last Modified** | Date and time of last update |
| **Created By** | Sender’s account |
| **Status** | Current state (Pending / Sent / Completed / Cancelled / Declined) |
| **Actions** | Menu for View, E-Sign, Share, Download, Delete |

--- -->

##  Step 1 — Identify the Document to Cancel

1. In the **Status** column, find the document that is **Pending**, **Sent**, or **In Progress**.  
2. Click the **⋮ (three dots)** button under **Actions** for that document.  
3. Choose **Audit** to confirm the current activity and signer progress (optional).  
4. Once confirmed, click the **Cancel eSign** option.

<img src="images\Actions_available.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

>  You can only cancel documents that are *not yet completed* or *not fully signed by all parties*.

---

##  Step 2 — Confirm Cancellation

After selecting **Cancel eSign**, a pop-up confirmation appears.

<details>
  <summary><b>Steps to Confirm Cancellation</b></summary>

1. Click **Cancel eSign** from the dropdown menu.  
2. A confirmation dialog appears —  
   **“Are you sure you want to cancel this eSign document?”**  
3. Optionally, enter a short reason for cancellation (helps in tracking).  
4. Click **Confirm**.  
5. The system updates the status to **Cancelled**.
</details>

<img src="images\Cancel_Esign_Document.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---

##  Step 3 — System Updates After Cancellation

When the document is cancelled:

| Effect | Description |
|--------|-------------|
| **Status Update** | Status changes to **Cancelled** immediately in the dashboard |
| **Recipient Access** | Any signer trying to open the old link will see: *“This document has been cancelled by the administrator and is no longer available.”* |
| **Email Notification** | All recipients receive an automatic email informing them of the cancellation |
| **Audit Log** | A new entry is created in the **Order Trail** indicating cancellation time and user ID |

<img src="images\Cancelled_By_Admin.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---

<!-- ##  Step 5 — Notification to Recipients

All parties involved get an email notification similar to this:

**Edit/Replace this below sample mail with ScreenShot**

Subject: eSign Request Cancelled

Dear [Recipient Name],

The e-sign request for the document titled “[Document Name]” has been cancelled by the sender.

You no longer need to take any action on this request.

Thank you,
Virtualan Doculan System


This ensures that signers are clearly informed that no further steps are required.

--- -->

<!-- ##  Step 6 — Optional: Edit and Send the Cancelled Document

You can still reuse a cancelled document by duplicating or editing it.

<details>
  <summary><b>Steps to Reuse a Cancelled Document</b></summary>

1. In the **Dashboard**, find the cancelled document.  
2. Click **⋮ (Actions)** → **Duplicate** or **Edit**.  
3. Make necessary changes (update party details, fix email, etc.).  
4. Click **Save E-Sign** and then **Send Mail** again.  
5. You can choose **Single** or **Bulk** mode for resending.
</details>

--- -->

##  Step 4 — Track Audit History

You can verify all cancellation events in the **Audit Trail**.

1. Click the **Audit** button for the specific document.  
2. The audit page displays:
   - Document creation time  
   - Sent time  
   - Opened by  
   - Signed by  
   - **Cancelled by [User Name]** with timestamp  
<!-- 3. You can **download the audit report** for internal compliance. -->

<img src="images\Cancel_Audit.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---

<!-- ##  Step 5 — Restrictions on Cancelled Documents

Once a document is cancelled:
- It **cannot be reopened or signed** by any party.  
- You **cannot modify** its existing fields.  
- You **cannot resend** it directly — you must recreate it.  
- The cancellation event remains **permanent** in the audit history.

--- -->

<!-- ##  Step 9 — Viewing Cancelled Documents

In your document list:

| Column | Example Value |
|---------|----------------|
| **Status** | Cancelled |
| **Color Indicator** | Gray (to visually distinguish from active ones) |
| **Available Actions** | View, Duplicate, Delete |
| **Unavailable Actions** | Resend, E-Sign, Share |

When you click **View**, the document opens in read-only mode with the message:
> *“This document was cancelled and cannot be edited.”*

--- -->

<!-- ##  Step 10 — Common Use Cases

| Scenario | Solution |
|-----------|-----------|
| Sent to wrong recipient | Cancel immediately, duplicate document, resend to correct email |
| Contract updated | Cancel old one, upload new version, send fresh request |
| Recipient inactive | Cancel and replace signer with new recipient |
| Signer declined | Cancel the pending request, then reissue if needed |

--- -->

<!-- ##  Step 11 — Best Practices

- Always **verify recipient emails** before sending e-sign requests.  
- Use **templates** to minimize errors in repetitive documents.  
- Avoid unnecessary cancellations by **previewing fields and emails**.  
- Keep your **Audit Trail** intact — don’t delete cancelled items too quickly; they’re useful for record keeping.

--- -->

<!-- ##  Example Audit Trail Record

| Timestamp | Event | Performed By |
|------------|--------|--------------|
| 2025-10-29 14:22:05 | Document sent for e-sign | Admin |
| 2025-10-29 14:24:33 | Opened by Party 1 | john@example.com |
| 2025-10-29 14:26:11 | Cancelled by Sender | muralidharan.s@virtualan.io |

--- -->

 **You’ve successfully cancelled an eSign document in Doculan!**

> The cancellation ensures that incomplete or incorrect sign requests are safely withdrawn without confusion or risk of unauthorized signing.

© Doculan by [Virtualan Software](https://www.virtualan.io)
