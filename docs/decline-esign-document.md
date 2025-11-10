<!-- 1. Open the received document link from your email.  
2. Verify your email with the OTP code.  
3. On the signing page, click **Decline Document**.  
4. Provide a **Reason for Decline** and confirm.  
5. The sender will be notified automatically.  

🖼️ *Screenshot Placeholder: Decline document prompt with reason box* -->


***************************************************************************************


# How to Decline an eSign Document?

In some cases, a signer may need to **decline** an eSign document — for example, if the document contains incorrect information, unauthorized clauses, or was sent in error.  
This guide explains how recipients can **decline an e-sign request**, what happens after it’s declined, and how senders can track this status in **Doculan**.

---

<!-- ##  Step 1 — Open the E-Sign Request from Email

When a sender sends you a document for e-signing, you’ll receive an **email notification** like this:

Subject: Signature Request - [Document Name]

Dear [Your Name],

You have been requested to review and sign the document “[Document Name]”.

Click the link below to open and sign securely:
[View Document]


1. Open the email from **Doculan**.  
2. Click the **View Document** link.  
3. You’ll be redirected to the **eSign verification page**.

--- -->

<!-- ##  Step 2 — Verify OTP to Access the Document

For security purposes, Doculan verifies each recipient before allowing document access.

1. Enter your **email address** (the same one used by the sender).  
2. Click **Send OTP**.  
3. Check your inbox for the 6-digit **OTP code**.  
4. Enter the OTP in the field and click **Verify**.

Once verified, the eSign page will open with the document preview and available actions.

--- -->

<!-- ##  Step 1 — Review the Document Carefully

Before you make a decision, take time to:
- Review the document contents line by line.  
- Check for accuracy in names, dates, and clauses.  
- Confirm that the fields (like Signature, Date, Text boxes) are correctly assigned to you.  

If you find something incorrect or unauthorized, you can **decline** the document instead of signing it.

--- -->

##  Step 1 — Click “Decline” to Reject the Document

You’ll see action buttons at the right side of the document page:
- **AI Assist**
- **Submit**
- **Decline**
- **Info**
- **Exit**

<img src="images\Recipient_Contract_Editing.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

To decline:

1. Click the **Decline** button.  
2. A confirmation dialog box will appear asking for the reason.

---

##  Step 2 — Enter a Reason for Declining

A pop-up window appears with a text area labeled **“Decline Document”**.

<details>
  <summary><b>Steps to Confirm Decline</b></summary>

1. Enter the reason (e.g., “Incorrect contract value”, “Received in error”, “Terms not approved”).  
2. Click **Confirm Decline**.  
3. The document will immediately be marked as **Declined**.
</details>

<img src="images\Recipient_declining.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

>  Once you decline a document, it cannot be reopened or signed later.  
> The sender must create a new eSign request if changes are made.

---

##  Step 3 — System Actions After Decline

After the recipient declines the document:

| Effect | Description |
|--------|-------------|
| **Document Status** | Changes to **Declined** immediately |
| **Audit Log** | Adds an entry with “Declined by [Recipient Name]” |
| **Access Restriction** | The declined recipient cannot reopen the document link |

<img src="images\Decline Document.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---

<!-- ##  Step 7 — Notification Sent to the Sender

Once the recipient declines, the sender receives a system email like this:

Subject: eSign Document Declined - [Document Name]

Dear [Sender Name],

The recipient [Recipient Email] has declined to sign the document “[Document Name]”.

Reason provided:
"Incorrect contract terms"

You can review the document, make corrections, and resend it if needed.

Regards,
Doculan System


--- -->

<!-- ##  Step 8 — Viewing Declined Document Status

The sender can view the decline status from the **Dashboard** or **Audit** page.

1. Go to the folder where the document is saved.  
2. Locate the document in the table view.  
3. The **Status** column will now show **Declined** (in red).  
4. Under **Actions**, you can choose:
   - **View** → Opens document (read-only)
   - **Duplicate** → To reuse or correct and resend
   - **Audit** → To view the activity log

--- -->

##  Step 4 — Check the Audit Trail

To confirm who declined and when:

1. Click **Audit** beside the document.  
2. The detailed audit trail displays:
   - When the document was created  
   - When it was sent  
   - When it was opened  
   - When it was declined (with timestamp and user email)

<img src="images\Audit_after_Decline.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

<!-- Example Audit Log Entry:

| Timestamp | Event | Performed By |
|------------|--------|--------------|
| 2025-10-29 13:42:07 | Sent for e-sign | muralidharan.s@virtualan.io |
| 2025-10-29 13:49:23 | Opened by Party 1 | john@example.com |
| 2025-10-29 13:52:01 | Declined by Party 1 | john@example.com | -->

---

##  Step 5 — What Happens Next?

After a document is declined:
- The document’s **e-sign workflow is terminated** immediately.  
- Other recipients in the sequence will not receive the document.  
<!-- - The sender can **duplicate** or **recreate** the contract, make corrections, and resend it for signing. -->

---

<!-- ##  Step 11 — Sender Options After Decline

If you are the sender:

| Option | Description |
|---------|-------------|
| **View** | Opens the declined version (read-only) |
| **Duplicate** | Create a new editable copy of the same document |
| **Edit & Resend** | Modify details, save, and send again |
| **Delete** | Permanently remove from folder (optional) |

--- -->

<!-- ##  Step 12 — Tips for Preventing Declines

- Always **verify the contents** before sending.  
- Use **AI Assist** to check for missing or inconsistent details.  
- **Preview the document** using the View option before clicking “Send Mail”.  
- Add **clear instructions** in the email body to guide the signer.  

--- -->

##  Step 6 — Decline vs Cancel — What’s the Difference?

| Action | Who Performs It | When | Result |
|---------|-----------------|------|--------|
| **Cancel** | Sender | Before completion | Withdraws eSign request |
| **Decline** | Recipient | During signing | Rejects and stops eSign process |

---

<!-- ##  Step 14 — Visual Indicators

In the Dashboard:
- **Declined** status appears in **Red**.
- Hover tooltip: *“This document was declined by the recipient.”*
- Actions like **Resend** and **E-Sign** are disabled.

--- -->

<!-- ##  Example Scenario

1. Sender creates a new eSign request and sends it to **Party 1**.  
2. Party 1 opens the email and verifies via OTP.  
3. After reviewing, they find a mismatch in the payment term.  
4. Party 1 clicks **Decline** → adds the reason “Incorrect pricing details.”  
5. Doculan updates the document’s status to **Declined**.  
6. The sender receives a notification and reviews the reason.  
7. The sender duplicates the document, updates pricing, and resends it.  

--- -->

 **You’ve learned how to decline an eSign document in Doculan!**  

> Declining ensures that documents containing errors or unauthorized terms do not proceed further in the workflow, maintaining accuracy and compliance in your e-signature process.

© Doculan by [Virtualan Software](https://www.virtualan.io)
