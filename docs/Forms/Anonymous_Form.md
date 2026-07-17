# How to Use Anonymous Forms?

This guide explains the complete process of creating an anonymous form, generating a public link, collecting responses without login, and reviewing submitted data within the system.Anonymous Forms allow anyone with the public link to access and submit the form without authentication.<br>
Follow the step-by-step instructions below to create, share, manage, and review anonymous form submissions in Doculan.
---

##  Step 1: Create a New Anonymous Form

- Navigate to the **Doculan Dashboard** and open the **Forms** module from the main menu.
- Click **Create New Form** to start designing the anonymous form.
**Enter the following details:** <br>
- Form Title<br>
- Form Description (optional)<br>
- Upload Destination folder
- From the left-side panel, drag and drop the required form fields into the form builder area.
**Available field categories include:**

|Category |	Available Fields|
|---------|-----------------|
|BASIC    |Text, Number, Email, Date, Textarea|
|CHOICE   |Radio Button, Dropdown, Checkbox|
|ADVANCED |	File Upload|

- Enable the Public option to allow users to access the form without login.

<img src="screenshots\Anonymous-form\Anonymous-Form.png" alt="Step 1 — Create the Form" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

> After configuring the form, click Generate Link to continue.

---

## Step 2: Configure Public Access Settings

- After clicking **Generate Link**, the system automatically opens the anonymous form management page.
- Navigate to the **Manage Link** tab available in the top section of the page.
- If no expiry date is configured, the form link remains active indefinitely.
- Click **Generate Public Link** to create the anonymous form URL.

### Configure the following options:

| Option | Description |
|--------|-------------|
| Expiry Date | Set the date and time when the form link should expire |
| Never Expire | Keeps the form link active permanently |
| Allow Resubmit | Allows the same email address to submit multiple responses |
| Redirect URL | Redirects users to another page after submission |

<img src="screenshots\Anonymous-form\Anonymous-Form-gnerate-link.png" alt="Step 2 — Configure Public Access" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

  >“Anyone with this link can fill and submit the form without logging in.”

---

## Step 3: Generate and Share the Public Link

- Once the link is generated, the system displays:
  - Public Form URL
  - Link Status *(Active / Inactive)*
  - Expiry Date and Time *(if configured)*

- Users can:
  - Open the form directly
  - Copy the public link
  - Share the form through email, chat, or social media
  - Activate or deactivate the form link anytime

<img src="screenshots\Anonymous-form\Anonymous-Form-public-link.png" alt="Step 3 — Public Link Management" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

> The above screenshot represents how to manage and share the generated anonymous form link.

---

## Step 4: Share the Form Using QR Code

- Navigate to the **QR Code** tab.
- A QR code is automatically generated for the anonymous form.
- Users can scan the QR code using mobile devices to directly open the form.
- Click **Download QR Code** to save the QR image for sharing.

<img src="screenshots\Anonymous-form\Anonymous-Form-QR.png" alt="Step 4 — QR Code Sharing" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

> The above screenshot represents how to generate and share the anonymous form QR code.

---

## Step 5: Fill and Submit the Anonymous Form

- The users opens the public form link or scans the QR code.
- The anonymous form page displays all configured fields.

### The respondent:
- Enters their email address
- Fills all required fields
- Completes the reCAPTCHA verification
- Clicks **Submit Form**

<img src="screenshots\Anonymous-form\Anonymous-Form-recapcha.png" alt="Step 5 — Fill Anonymous Form" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

> The above screenshot represents how users fill and submit anonymous forms.

---

## Step 6: Successful Submission

- After clicking **Submit Form**, the system processes the submission successfully.
- If a **Redirect URL** is configured, the respondent is redirected automatically.
- A success confirmation message is displayed after submission.

<img src="screenshots\Anonymous-form\Anonymous-Form-submission.png" alt="Step 6 — Submission Success" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

> The above screenshot represents a successful anonymous form submission.

---

## Step 7: Review Form Details

- Navigate to the **Forms** section and open the required anonymous form.
- Select the **Action Menu**
- Click the **Details**

<img src="screenshots\Anonymous-form\Anonymous-Form-list.png" alt="Step 7 — Review Submissions" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">


### The Details displays:

- View applicant details
- Review educational information
- Check academic performance
- Download resumes
- Manage application records

<!-- <img src="screenshots\Anonymous-form\Anonymous-Form-submission-list1.png" alt="Step 7 — Review Submissions" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

<img src="screenshots\Anonymous-form\Anonymous-Form-submission-list2.png" alt="Step 7 — Review Submissions" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"> -->

<img src="screenshots\Anonymous-form\Anonymous-Form-submission-list.png" alt="Step 7 — Review Submissions" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

> The above screenshot represents how to review anonymous form submissions inside the system.

---
## Step 8: Access Anonymous Form Management Options

- After creating a anonymous form, the form will appear in the **Forms List** with an **Anonymous** label beside the form name.
- Click the **Actions (⋮)** menu of the anonymous form.

### The Actions menu contains:
- **View** → Open the form details
- **Clone** → Create a duplicate copy of the form
- **Public Link** → Access public form management options

<img src="screenshots\Anonymous-form\Anonymous-Form-public-link-2.png" alt="Step 3 — Anonymous Form List" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

  <!-- <img src="screenshots\Anonymous-form\Anonymous-Form-submission-list-1.png" alt="Step 3 — Anonymous Form List" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

  <img src="screenshots\Anonymous-form\Anonymous-Form-submission-list-2.png" alt="Step 3 — Anonymous Form List" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"> -->

> The above screenshot represents how anonymous forms are displayed in the Forms List and how to access public form management options from the Actions menu.

---
## Step 9: Integration via API (Optional)

- Navigate to the **Integration** tab.
- Developers can integrate anonymous forms into external systems using API support.

### Integration Details

| Item | Value |

### API Usage
- Use the **FORM ID** to identify the anonymous form.
- Submit form responses using the provided API endpoint.
- Send data through a **POST request**.
- Submitted responses will appear in the **Submissions** section.\

<img src="screenshots\Anonymous-form\Anonymous-Form-Intagaration1.png" alt="Step 8 — API Integration" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

<img src="screenshots\Anonymous-form\Anonymous-Form-Intagaration2.png" alt="Step 8 — API Integration" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

> The above screenshot represents how to integrate anonymous forms using API support.

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
    src="https://www.youtube.com/embed/HvNzRr4kObg"
    title="Demo Video"
    allowfullscreen>
  </iframe>
</div>


> The above **Video** represent that how to **Use Anonymous Forms**.

© Doculan by [Virtualan Software](https://www.virtualan.io)
