# 🚀 Version 0.6.0 – New Enhancements

1. **Wet Signature in Doculan** – Wet Signature in Doculan allows recipients to print documents, sign them manually, and upload the signed PDF back into the E-Sign workflow, ensuring compliance where handwritten signatures are required with a secure digital audit trail.
2. **E-Sign Embedded in Doculan** – E-Sign Embedded in Doculan enables users to integrate the signing process directly within forms, allowing recipients to review and electronically sign documents seamlessly without leaving the form flow.

---
## 1️⃣ Wet Signature in Doculan
Wet Signature in Doculan enables recipients to **physically sign printed documents** as part of the **E-Sign workflow**. The signed document is then **uploaded** in **PDF format** for verification and submission. This process ensures compliance with scenarios that require **handwritten signatures** while maintaining a secure digital audit trail. This section explains how to complete a **Wet Signature** process in Doculan using the E-Sign workflow.

---

### Initiating Wet Signature

1. Navigate to the **Doculan Dashboard**.
2. Click **Documents**.
3. Open the required document.
4. Click the **⋮ (three-dot)** icon under the **Actions** column.
5. Click **E-Sign**.
6. Place the required fields in the document and click **Send Mail**.
7. Add the recipient’s **Email ID** and **Name**.
8. Set the **Validity Date** and **Reminder**.

Under **Security Settings**, you can configure the following options:
- **OTP Verification**
- **Wet Signature**

You may disable **OTP Verification** if required, but enabling both options is considered a best practice.

**Screenshot 1**

<img src="screenshots/releaseNotes/Wet-Sign1.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">

-->The above **Screenshot** represent that **Initiating Wet Signature**

---

### Sending the Document

1. Enter the **Email Subject** and **Email Body**.
2. Send the email to the recipient.

The recipient will receive the email and open the document using **OTP Verification**.

After reviewing the document, the recipient should click the **Print** button to print the document.

**Screenshot 2**

<img src="screenshots/releaseNotes/Wet-Sign2.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">

-->The above **Screenshot** represent that **how to send and print the Document**

---

### Uploading the Wet-Signed Document

After printing the document:

1. Fill in the required fields.
2. Affix a **physical (wet) signature**.
3. Convert the document into **PDF format**.
4. Click the **Upload** button.
5. Attach the PDF file.

> **Note:** Only **PDF format** files are accepted.

6. **Review** the uploaded document.
7. Click the **Confirm** button.

**Screenshot 3**

<img src="screenshots/releaseNotes/Wet-Sign3.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">

-->The above **Screenshot** represent that **Uploading the Wet-Signed Document**

---

### Submission and Download

- After clicking **Confirm**, the uploaded document is **automatically** submitted.
- You can view the submitted document.
- You can download the document as a **ZIP file** for records or sharing.

**Screenshot 4**

<img src="screenshots/releaseNotes/Wet-Sign4.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">

-->The above **Screenshot** represent that **how to Submit and Download the Document**

---

# 2️⃣ E-Sign Embedded in Doculan
E-Sign Embedded in Doculan allows users to **embed the E-Sign** process directly within forms, enabling recipients to **review and sign documents without leaving the form flow**. This ensures a seamless signing experience while **securely capturing signed documents** and storing completed forms in **Doculan Storage**. This section explains how to use **E-Sign Embedded** within Forms in Doculan.

### Creating a Form with E-Sign Embedded

1. Navigate to the **Doculan Dashboard**.
2. Click **Forms**.
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

**Screenshot 5**

<img src="screenshots/releaseNotes/ESIGN-EMB1.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">


-->The above **Screenshot** represent that **Creating a Form with E-Sign Embedded**

---

### Configuring Recipient and Security Settings

1. Add the recipient’s **Email ID** and **Name**.
2. Set the **Validity Date** and **Reminder**.
3. Under **Security Settings**, configure **OTP Verification**.

> **Note:** You may disable OTP Verification if required, but enabling this option is considered a best practice.

---

### Send and Fill the Form

1. Enter the **Email Subject** and **Email Body**.
2. Send the email to the recipient.

The recipient will receive the email and open the form using **OTP Verification**.

The recipient can:
- Fill in the required form fields
- Click **Open & Sign Document**

**Screenshot 6**

<img src="screenshots/releaseNotes/ESIGN-EMB2.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">

-->The above **Screenshot** represent that **Send and Fill the Form**

---

### Completing the E-Sign Process

1. The document will open.
2. Fill and put E-Sign in the required document fields.
3. Click the **Submit** button.

The **E-Sign Document** will be submitted successfully.

You can:
- View the signed document
- Download the **ZIP file** to your local system

---

### Submitting the Form

1. After completing the E-Sign process, return to the **Forms** page.
2. In the **Agreement (E-Sign Embedded Field)**, click the **Refresh** button.
3. The status will change from **Pending** to **Signed**.

**Screenshot 7**

<img src="screenshots/releaseNotes/ESIGN-EMB3.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">

-->The above **Screenshot** represent that **Submitting the Form**

4. Click **Submit Form**.
5. The completed form will be stored in **Doculan Storage**.

**Screenshot 8**

<img src="screenshots/releaseNotes/ESIGN-EMB4.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">

-->The above **Screenshot** represent that **Form Successfully Submitted in Doculan Storage**

---


# E-Sign Record in Doculan

E-Sign Record in Doculan enables secure, video-recorded electronic signatures with automatic timestamping for enhanced compliance and auditability. The signing process captures visual evidence and consent during execution, allowing organizations to verify signer identity, signature time, and signing activity with complete transparency.

This section explains how to enable and use **E-Sign Record** in Doculan, including video recording and timestamp verification during the signing process.


## Initiating E-Sign Record

1. Navigate to the **Doculan Dashboard**.
2. Click **Documents**.
3. Open the required document.
4. Click the **⋮ (three-dot)** icon under the **Actions** column.
5. Click **E-Sign**.
6. Place all required fields in the document.
7. Select the **Signature Field**, click the **Settings** menu, and enable:
   - **Record**
   - **Timestamp**

**Screenshot 1**

<img src="screenshots/releaseNotes/ESIGN-EMB4.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">

8. Click **Send Mail**.
9. Add the recipient’s **Email ID** and **Name**.
10. Set the **Validity Date** and **Reminder**.

Under **Security Settings**, configure the following options:
- **OTP Verification**
- **Wet Signature**

> **Note:** You may disable OTP Verification if required.  
> Enable **Wet Signature only** when additional security is needed.


## Sending the Document

1. Enter the **Email Subject** and **Email Body**.
2. Send the email to the recipient.

The recipient will receive the email and open the document.

---

## Disclosure and OTP Verification

1. A **Disclosure Popup** will appear.
2. Read the disclosure statement.
3. Check the consent checkbox.
4. Click **Continue**.

**Screenshot 2**

<img src="screenshots/releaseNotes/ESIGN-EMB4.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">

5. Complete **OTP Verification**.
6. Open the document.


## Video-Based E-Sign Process

1. Click the **Signature Field**.
2. A **Video-Enabled E-Sign popup** will appear.
3. Read the statement.
4. Check the consent checkbox.
5. Click **Start**.

**Screenshot 3**

<img src="screenshots/releaseNotes/ESIGN-EMB4.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">

- Video recording will appear in the **top-left corner**.
- The **Signature popup** will appear in the **center** of the screen.
- Complete the signature.

**Screenshot 4**

<img src="screenshots/releaseNotes/ESIGN-EMB4.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">

6. Fill in the remaining required fields.
7. Click **Submit** to complete the signing process.

The document will be submitted successfully.

---

## Viewing Signed Document and Evidence

1. Navigate to the **Doculan Dashboard**.
2. Click **Documents**.
3. Open the signed document.
4. Click the **⋮ (three-dot)** icon under the **Actions** column.
5. Click **View**.
6. Select **Document**.

The signed document will appear.  
Verify the **signature**, **date**, and **time (timestamp)**.

**Screenshot 5**

<img src="screenshots/releaseNotes/ESIGN-EMB4.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">

---

## Viewing Video Evidence

1. Click **Evidence**.
2. Select the specified **Party**.
3. View the **video evidence** associated with the signed document.

**Screenshot 6**

<img src="screenshots/releaseNotes/ESIGN-EMB4.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">


---
