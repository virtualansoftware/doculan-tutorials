# How to use Web Form Integration?

The **Web Form Integration** feature enables organizations to seamlessly collect form submissions directly through their website or application without requiring users to access the Doculan portal. This integration simplifies data collection, improves workflow automation, and ensures a smooth user experience for both administrators and form respondents.

Once integrated, submitted forms are automatically delivered via email and can also be reviewed directly within the Doculan platform.

---

## Step 1: Generate the Form

After creating and completing the form configuration:

1. Click **Generate Form**
2. Configure the required options, such as **Never Expire** and **Allow Resubmit**, based on your requirements.
3. Click Generate to create the public form link for sharing.

<img src="screenshots\Form-Integration\Form-Integration.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

This generated link can be shared through any preferred communication method, including:

* Website integration
* Email
* Messaging platforms
* Internal systems
* Applications

<img src="screenshots\Form-Integration\Form-Integration8.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>


<img src="screenshots\Form-Integration\Form-Integration1.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

---

## Step 2: Configure Email Notifications

The notification feature ensures that administrators receive alerts whenever a user submits a form.

### To Configure Notifications:

1. Enable **Email Notifications**
2. Add recipient email addresses
3. Click **Configure Notifications**

### Notification Limits

* You can add up to **10 email addresses**
* All configured recipients will receive submission alerts automatically

<img src="screenshots\Form-Integration\Form-Integration2.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

---

# Integrate the Form into Your Website or Application

The Integration section allows you to connect the public form directly with your website, application, or external system using the provided API endpoint. This enables users to submit form responses externally without requiring login access to the Doculan portal.

The system provides:

- **Unique Form ID** – Identifies the specific form for processing submissions.
- **Secure API Endpoint** – The endpoint URL used to submit form data programmatically.
- **Sample JSON Request Body** – A ready-to-use payload structure showing the required request format.
- **Sample JavaScript Integration Code** – Example code for submitting form data using JavaScript.
- **Sample React.js Integration Code** – Example implementation for integrating form submissions in React applications.
- **Sample JSON Response Body** – Example response returned by the API after a successful submission.

This integration allows users to:

* Access the form directly
* Complete and submit the form externally
* Avoid requiring Doculan portal access

<img src="screenshots\Form-Integration\Form-Integration3.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>


<img src="screenshots\Form-Integration\Form-Integration4.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

> The process provides a seamless and user-friendly submission experience.

---

# Submission Handling

Once users submit the integrated form:

* The completed form is automatically delivered via email through the platform
* Configured recipients receive instant notification alerts
* Submission records are securely stored within Doculan

<img src="screenshots\Form-Integration\Form-Integration5.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

---

# Reviewing Form Details in Doculan

Administrators can review all submitted forms directly from the Doculan platform.

## To View Details:

1. Navigate to the **Forms List**
2. Open the **Action Menu**
3. Click **Details**

<img src="screenshots\Form-Integration\Form-Integration6.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

The Details Section allows administrators to:

* View applicant details
* Review educational information
* Check academic performance
* Download resumes
* Manage application records

<img src="screenshots\Form-Integration\Form-Integration7.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

---

# Key Benefits

* Integrate forms directly into your website or application
* Allow users to complete and submit forms without portal access
* Automatically receive completed forms via email
* Configure submission notifications for multiple recipients
* Monitor and review all submissions from the Doculan Forms List

---

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

<div class="video-wrap" role="region" aria-label="Demo: Creating a form">
  <!-- Use a relative path like ./videos/demo.mp4 or an absolute URL -->
  <video controls poster="">
    <source src="https://doculan-storage-public.s3.us-east-1.amazonaws.com/demo_video/Forms/Web_Form_Integration.mp4" type="video/mp4">
    <source src="https://doculan-storage-public.s3.us-east-1.amazonaws.com/demo_video/Forms/Web_Form_Integration.webm" type="video/webm">
    <!-- Fallback link if browser can't play video -->
    Your browser does not support the video tag. 
    <a href="https://doculan-storage-public.s3.us-east-1.amazonaws.com/demo_video/Forms/Web_Form_Integration.mp4" target="_blank" rel="noopener">Download / Open video</a>
  </video>
</div>


© Doculan by [Virtualan Software](https://www.virtualan.io)