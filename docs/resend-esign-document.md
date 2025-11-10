<!-- 1. Navigate to **Dashboard → E-Sign Documents**.  
2. Select the document to resend.  
3. Click the **Resend** button.  
4. The recipient will get the new email immediately.  

🖼️ *Screenshot Placeholder: Resend button in document actions* -->


****************************************************************************************


# How to Resend an eSign Document?

Sometimes, an eSign document may need to be resent — for example, if the **recipient missed the email**, the **document expired**, or **email details were updated**.  
This guide covers all the ways you can **resend eSign requests** in Doculan, including how to handle expired, pending, or failed email deliveries.

---

##  Step 1 — Understanding When You Can Resend

You can resend a document only under certain conditions.  
Doculan enforces strict resend rules to ensure audit accuracy.

| Document Status | Can Resend? | Description |
|------------------|-------------|--------------|
| **Expired** |  Yes | Document expired before signing |
| **Pending** |  Yes | Until the recipient declines or submits the document |
| **Completed** |  No | Already signed and finalized |
| **Cancelled** |  No | Sender has withdrawn |
| **Declined** |  No | Recipient refused to sign |
<!-- | **Failed** |  Yes | Email delivery issue | -->

<img src="images\Actions_available.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

>  **Note:** You can only resend *if the document status is not Completed, Cancelled, or Declined.*

---

<!-- ##  Step 2 — Navigate to Your Folder

1. From the **Dashboard**, locate your main folder or project (e.g., “Contracts” or “Client Documents”).  
2. Open the **e-sign documents** subfolder — this is where all your active eSign files are stored.  
3. Each document is listed in a table with columns such as:
   - **Name**
   - **Party Details**
   - **Last Modified**
   - **Created By**
   - **Status**
   - **Actions**

>  You can use the **Search bar** at the top to quickly find a document by name or recipient.

--- -->

<!-- ##  Step 3 — Check the Document Status

Before resending, check if the document is eligible.

1. Look at the **Status** column.
2. If it shows **Expired**, hover over it — a tooltip will read *“This document can be resent.”*  
3. If it’s **Completed**, **Cancelled**, or **Declined**, the **Resend** option will be **disabled**.

--- -->

##  Step 2 — Open the Actions Menu

In the **Actions** column for that document:

1. Click the **three-dot menu** (⋮).  
2. You’ll see options like:
   - View  
   - Audit  
   - Download    
   - **Resend** *(visible only if applicable)*  
3. Click **Resend**.
4. Set an expiry date(if needed) before send button.

<img src="images\Resend_Popup.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---

<!-- ##  Step 5 — Confirm Resend and Verify Recipients

When you click “Resend”, Doculan will prompt you to review recipient details.

<details>
  <summary><b>Steps to Confirm Resend</b></summary>

1. A pop-up form will display all the current **Party Names** and **Emails**.  
2. Verify that each recipient’s **email address** is correct.  
   - If a recipient’s email was entered incorrectly, you can **edit** it directly here.  
3. (Optional) Add or remove recipients if the document needs new parties.  
4. Click **Next** to proceed.
</details>

>  **Tip:** Always double-check email spellings — incorrect addresses are the most common cause of failed deliveries.

--- -->

<!-- ##  Step 6 — Review the Email Content

The **Email Composer** page will open.

You can:
- Review or modify the **subject line**  
- Update the **email message** body  
- Use **AI Assist** to auto-generate a professional email template  
- Attach a **reminder message** or **expiry date**  

Steps:

1. Select **AI Assist** if you want a quick auto-generated message.  
2. Or, manually enter a message like:  
   *“Dear [Recipient], please find your e-sign document link below. Kindly review and complete the signing process.”*  
3. Choose an **expiry date** (optional).  
4. Set a **reminder frequency** (e.g., every 2 days until signed).

---

##  Step 7 — Choose Send Type (Single or Bulk)

Depending on the document type:

| Option | Description |
|---------|-------------|
| **Single Send** | Resends the same document to one or more specific recipients |
| **Bulk Send** | Used when resending multiple documents (e.g., via CSV upload) |

Steps:
1. Select **Single Send** for a single document resend.  
2. If you need to resend to multiple recipients at once (e.g., missed clients), choose **Bulk Send** and upload a **CSV file**.

--- -->

<!-- ##  Step 8 — Send or Schedule the Resend

After reviewing, you’ll have two options:
- **Send Now** → Immediately sends the email to all recipients.  
- **Schedule Later** → Allows you to set a future date and time.

Steps:
1. Click **Send Now** or **Schedule Send**.  
2. Wait for the success toast notification —  
   *“Your document has been resent successfully.”*

--- -->

<!-- ##  Step 9 — Tracking the Resent Document

After sending, go back to the folder view.

You can monitor the status changes:

| Indicator | Meaning |
|------------|----------|
| **Resent (Pending)** | The email was reissued and is awaiting recipient action |
| **Opened** | Recipient has opened the document |
| **Signed (Completed)** | Recipient has completed signing |
| **Failed** | Email couldn’t be delivered |

>  Hover over the status to see tooltips with exact timestamps and event details.

--- -->

##  Step 3 — View Audit Trail After Resend

You can always check the **Audit** log to confirm resend activity.

Steps:
1. Click the **Audit** button in the Actions column.  
2. You’ll see a chronological list of all actions:
   <!-- - Original document creation  
   - First send  
   - Resend date/time   -->
   - Recipient open, view, and sign timestamps  

   <img src="images\Resend_pending_status.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

<!-- Example:

| Timestamp | Event | Performed By |
|------------|--------|--------------|
| 2025-10-27 14:22:51 | Sent for eSign | muralidharan@virtualan.io |
| 2025-10-30 09:17:36 | Document Expired | System |
| 2025-10-31 08:45:02 | Resent to Party 1 | muralidharan@virtualan.io |
| 2025-10-31 08:49:18 | Opened by Party 1 | client@example.com | -->

---

<!-- ##  Step 4 — Editing Before Resend

If you need to **make changes** before resending (like updating names, fields, or templates):

<details>
  <summary><b>Steps to Edit Before Resend</b></summary>

1. From the folder, click **View** or **E-Sign** in the Actions menu.  
2. Make the necessary field or text edits.  
3. Click **Save E-Sign** to save the updates.  
4. Then return to the folder view and click **Resend**.
</details>

>  This ensures the recipients receive the **latest corrected version** of your document.

--- -->

<!-- ##  Step 12 — Common Issues & Solutions

| Issue | Cause | Solution |
|--------|--------|----------|
| Email not received | Spam filter or typo in address | Verify recipient email and ask them to check spam folder |
| Resend option disabled | Status is Completed / Declined | Create a new document copy and send again |
| Link expired again | Short expiry duration | Increase expiry date when resending |
| Wrong document version | Edits not saved | Always click **Save E-Sign** before resending |

--- -->

<!-- ##  Step 13 — Best Practices for Resending

- Always verify recipient emails before clicking **Send**.  
- Use **AI Assist** for professional email drafting.  
- Add a **clear subject line** (e.g., “Reminder: Please sign your pending document”).  
- Set **reminders** for every 48 hours until signed.  
- Avoid resending the same document multiple times in quick succession.

--- -->

<!-- ##  Step 14 — Visual Indicators in Dashboard

In the dashboard:

| Icon | Meaning |
|------|----------|
| 🟡 Yellow dot | Resent, awaiting action |
| 🟢 Green dot | Signed and completed |
| 🔴 Red dot | Declined or cancelled |
| ⚫ Grey dot | Expired or inactive |

Hover over the icon for quick details.

--- -->

<!-- ##  Step 15 — Example Scenario

1. Sender creates and sends an eSign request to Party 1.  
2. Party 1 does not sign before the expiry date — status becomes **Expired**.  
3. Sender reviews and updates the email address.  
4. Clicks **Resend** → verifies recipients → sends again.  
5. Party 1 receives a new link and completes signing successfully.  
6. Document status changes to **Completed**, and both parties receive a confirmation email.

--- -->

 **You’ve learned how to resend an eSign document in Doculan!**

> Resending ensures that no document signing opportunity is missed — especially when recipients fail to act before expiry or emails fail to deliver. It helps maintain a smooth, uninterrupted e-signature workflow.

© Doculan by [Virtualan Software](https://www.virtualan.io)
