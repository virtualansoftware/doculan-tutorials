#  How to use Embedded Esign?
It allows users to **embed the E-Sign** process directly within forms, enabling recipients to **review and sign documents without leaving the form workflow**.This creates a seamless and intuitive signing experience while **securely capturing signed documents** and automatically storing completed forms in **Doculan Storage**.<br> 
This section explains how to configure and use **E-Sign Embedded** within Forms in Doculan.

---

### Step 1: Creating a Form with E-Sign Embedded

1. Navigate to the **Doculan Dashboard**.
2. Click **Documents** from the main menu.
3. Click **Create New Form**.
4. Enter the **Form Title** and **Form Description**.
5. Select the **folder path** to store submitted form data.
6. Drag and drop the required form fields.
7. Add the **E-Sign Embedded** field.
8. Provide a **Label Name** for the field.
9. Attach a **Document**.
10. Select the **Template Type**:
    - **Myself**
    - **Team**
11. Attach the required **Template**.

**Screenshot 1**

<img src="screenshots/releaseNotes/ESIGN-EMB1.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">


> The above **Screenshot** represent that **Creating a Form with E-Sign Embedded**

---

### Step 2: Configuring Recipient and Security Settings

1. Add the recipient’s **Email ID** and **Name**.
2. Set the **Validity Date** and **Reminder**.
3. Under **Security Settings**, enable and configure **OTP Verification** for secure access.

> **Note:** You may disable OTP Verification if required, but enabling this option is considered a best practice.

---

### Step 3: Send and Fill the Form

1. Enter the **Email Subject** and **Email Body**, ensuring the message clearly communicates the purpose of the document.
2. Click **Send** to deliver the email to the recipient.

The recipient will receive the email and open the form using **OTP Verification**.

The recipient can:
- Fill in the required form fields.
- Click **Open & Sign Document** to proceed with the embedded e-sign process.

**Screenshot 2**

<img src="screenshots/releaseNotes/ESIGN-EMB2.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">

> The above **Screenshot** represent that **Send and Fill the Form**

---

### Step 4: Completing the E-Sign Process

1. The document will open.
2. Complete the required fields and apply your **E-Sign** in the designated areas.
3. Click the **Submit** button to finalize the signing process.

The **E-Sign Document** will be submitted successfully.

You can:
- View the signed document
- Download the **ZIP file** to your local system for record-keeping.

---

### Step 5: Submitting the Form

1. After completing the E-Sign process, return to the **Forms** page.
2. In the **Agreement (E-Sign Embedded Field)**, click the **Refresh** button.
3. The status will change from **Pending** to **Signed**.

**Screenshot 3**

<img src="screenshots/releaseNotes/ESIGN-EMB3.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">

> The above **Screenshot** represent that **Submitting the Form**

4. Click **Submit Form**.
5. The completed form will be stored in **Doculan Storage**.

**Screenshot 4**

<img src="screenshots/releaseNotes/ESIGN-EMB4.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">

> The above **Screenshot** represent that **Form Successfully Submitted in Doculan Storage**

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
    src="https://www.youtube.com/embed/hUsGKZkGMhc"
    title="Demo Video"
    allowfullscreen>
  </iframe>
</div>
The above **Video** represent that how to **Create an Form with Embedded E-Sign Document**.

© Doculan by [Virtualan Software](https://www.virtualan.io)