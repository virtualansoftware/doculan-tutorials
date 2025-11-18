﻿
# How to Send Multiple Party Document?

This guide explains how to send a **multi-party e-sign document** in Doculan, where two or more recipients must review and sign the same document in a defined order.
A **multi-party document** allows you to send one contract to multiple signers (Party 1, Party 2, Party 3, etc.).  
Each recipient receives the document **in sequence**, after the previous party has completed their signing.

---


##  Step 1: Add Multiple Parties

Switch to the **Parties** tab to define recipients.

<details>
  <summary><b>Steps to Add Parties</b></summary>

1. By default, you'll see **Party 1** already listed.  
<!-- 2. Fill in the details for **Party 1**:
   - **Name**
   - **Email Address**
   - **Signature**
   - **Initial** etc at the respective places.  -->
2. Click the **Add Party** button to create additional recipients.  
3. Fill in their details (Party 2, Party 3, etc.).  
4. Verify that the fields you placed earlier are linked to the respective Parties by relating the colour of the Fields to colour of the Party.
5. Repeat this process for every signer.  

>  **Important:** Each party must have a valid email address, and every field (Signature, Date, etc.) must be linked to a specific party.

6. Click **Save** once all parties are added.
</details>

<img src=" screenshots\E-Sign_Images\Multiple_party_added.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---

##  Step 2: Define the Signing Order

When multiple parties are added, Doculan follows a **sequential signing** flow:

- **Party 1** receives the email first.
- Once Party 1 completes signing, the document is automatically sent to **Party 2**.
- The sequence continues until all parties have signed.

<!-- >  *If you need parallel (simultaneous) signing, contact your admin to enable it in the configuration.* -->

---


##  Step 3: Send Mail

Once your parties and fields are set:

1. Click **Send Mail** to open the mailing setup page.  
2. Choose **Single Mail**.  
3. Enter all **Party Names and Emails** as added previously.  
4. Choose the **Expiry Date** and **Reminder Frequency**.  
5. Write your email content manually or click **AI Assist** to generate it.  
6. Drag the **Document Link** placeholder into the email body.  
7. Click **Send Mail**.

<img src=" screenshots\E-Sign_Images\Multiple_party_mail.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

>  *Emails are sent sequentially to each party. You can also schedule the email for a future date/time.*

---

##  Step 4: Track the Document

After sending, navigate to your folder and click **Audit** for that document.

You can view:
- Party details (Name, Email)
- Document status: *Sent, Opened, Signed, Completed, Expired, Declined*
- Timestamps for every action
- Sequential signing progress

### Common Actions
| Action | Description |
|--------|-------------|
| **Audit** | Timestamps and activity logs |
| **Resend** | Available only if the email is expired |
| **Cancel** | Cancels ongoing signing process |
| **Download** | Available if the document is completed |

---

##  Step 5: Recipient Experience

Each party experience happens **in order**.

###  Party 1
1. Receives the first email with the document link.  
2. Clicks the link to open the **Signing Page**.  

<img src=" screenshots\E-Sign_Images\Party1_Recipient_Mail.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

3. Verifies OTP sent to their email.  
4. Reviews, fills in the required fields, and signs.  

<img src=" screenshots\E-Sign_Images\Party1_Document_Editing_Done.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

5. Clicks **Submit**.

Document Attachment

Once Party 1 completes signing, the document is automatically sent to **Party 2**.

---

###  Party 2 and Subsequent Parties
1. Receive an email notification only after the previous signer completes their action.  


<img src=" screenshots\E-Sign_Images\Party2_Recipient_Mail.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

2. Click the document link and verify OTP.  
3. They can **view previously filled fields** before completing their own.  


<img src=" screenshots\E-Sign_Images\Party2_Document_Editing_Done.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

4. Fill in their details, sign, and click **Submit**.

Document Attachment

---

##  Step 6: AI Assist for Recipients

Recipients can click **AI Assist** on their signing screen to ask document-specific questions.

>  *AI Assist works only for the uploaded document. It does not answer unrelated queries.*

---

##  Step 7: Decline, Cancel, or Complete

| Status | Description |
|--------|-------------|
| **Declined** | A recipient can choose to decline and provide a reason. The sender is notified immediately. |
| **Cancelled** | The sender can cancel the document anytime before completion. The sender is notified immediately.|
| **Expired** | When the Recipient failed to submit document before the validity. The sender is notified immidiately |
| **Completed** | When all parties have signed, the process finishes automatically. |

When completed:
- A **Certificate of Completion** is generated.  
- The signed document is **SSL certified**.  
- Copies are emailed to all parties.  
- Status updates to **Completed**.

---

##  Step 8: Audit Trail & Verification

Open **Order Trail** from the document actions menu to view:

- When the document was **sent**, **opened**, and **signed** by each party.  
- Timestamps and activity logs.  
- Party sequence and status summary.

**Party 1 Audit**

<img src=" screenshots\E-Sign_Images\Audit_Party1.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

**Party 2 Audit**

<img src=" screenshots\E-Sign_Images\Audit_Party2.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

This ensures a verifiable audit history for compliance and legal verification.

---

 **You've successfully sent a multi-party e-sign document!**

Your workflow is now complete, all parties have securely signed, and the document is stored, certified, and traceable.

© Doculan by [Virtualan Software](https://www.virtualan.io)
