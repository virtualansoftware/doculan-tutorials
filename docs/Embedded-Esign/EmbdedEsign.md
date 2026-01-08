#  E-Sign Embedded in Doculan
E-Sign Embedded in Doculan allows users to **embed the E-Sign** process directly within forms, enabling recipients to **review and sign documents without leaving the form flow**. This ensures a seamless signing experience while **securely capturing signed documents** and storing completed forms in **Doculan Storage**. This section explains how to use **E-Sign Embedded** within Forms in Doculan.

---

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

**Screenshot 1**

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

**Screenshot 2**

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

**Screenshot 3**

<img src="screenshots/releaseNotes/ESIGN-EMB3.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">

-->The above **Screenshot** represent that **Submitting the Form**

4. Click **Submit Form**.
5. The completed form will be stored in **Doculan Storage**.

**Screenshot 4**

<img src="screenshots/releaseNotes/ESIGN-EMB4.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">

-->The above **Screenshot** represent that **Form Successfully Submitted in Doculan Storage**

---