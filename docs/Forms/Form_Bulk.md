# How to Send Bulk Form in Doculan?

The **Bulk Form** feature in Doculan allows you to send a single form to multiple recipients simultaneously, making it easy to collect responses at scale. You can upload recipient details, configure email settings, schedule delivery, and track submission status from a centralized dashboard. This feature is ideal for surveys, registrations, feedback collection, and other mass-distribution form workflows.

---

##  Step 1: Open the Bulk Mail Setup

1. Navigate to your **Dashboard**.
2. Open the **Forms** section. 
3. Click the **Create Form** to enter the configuration page.  
4. Select **Bulk Form** to open the bulk distribution page.
5. Click **Send Form** to begin sending the form to multiple recipients.

---

##  Step 2: Prepare Your Document Fields

Before proceeding, ensure that the form contains all necessary fields, such as:

- Name
- Email
- Phone Number
- Date
- Dropdown Fields
- Checkbox Fields
- Text Fields
- Any additional custom fields

All fields must be correctly configured and saved before sending the form in bulk.

> **Tip:** Save the form as a reusable template to maintain consistency across future distributions.


---

##  Step 3: Prepare Recipient Data

Doculan provides two methods for adding recipients:  

---

###  Option 1: Upload CSV File

Uploading a **CSV file** is the most efficient method when sending forms to a large number of recipients.
<details open>
  <summary><b>Steps to Upload CSV File</b></summary>

Click **Upload CSV File.**
Select a properly formatted **CSV file** from your device.
The system will interpret each row as an individual recipient.
Review the preview table to verify recipient information.
Click Validate to confirm proper email formatting and data structure.
</details>

####  CSV File Format Example

<p>
  <a href="files/Bulk_Mail_CSV_File.csv" target="_blank"
     style="display:inline-block; background-color:#007bff; color:white; padding:10px 20px; border-radius:6px; text-decoration:none;">
    📄 Download CSV Example
  </a>
</p>



**Each row in the CSV file represents one recipient and generates one unique form invitation.**  
> *All form invitations are securely delivered to recipients individually.*
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

</details>

<img src=" screenshots\E-Sign_Images\Bulk_Mail_Form_CSV.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">


<!-- > *This method offers flexibility when handling a limited number of recipients.* -->
---

## Step 4: Configure Email Settings

- Enter the email Subject.
- Customize the email Message.
- Configure any required notification settings.
- Review the recipient list.
- Click Send Form to distribute the form.

---

## Step 5: Bulk Form Scheduler
- Upon clicking Send Form, you will be automatically redirected to the Bulk Scheduler page to manage and monitor bulk form distribution.
- The system sends form invitations to recipients one at a time, maintaining a 30-second interval between each email.
- If any form invitation fails to be delivered, you can resend it directly from the Bulk Scheduler page using the Resend option in the Actions menu.

<img src=" screenshots\E-Sign_Images\Bulk_Mail_Dashboard_Form.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document"><br>

<img src=" screenshots\E-Sign_Images\Bulk_Mail_Scheduler_Form.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document"><br>


<img src=" screenshots\E-Sign_Images\Bulk_Mail_Form_Resend.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---

##  Step 6: Track Bulk Document Status

Once the forms have been sent, navigate to the Forms list page, locate the corresponding bulk batch, and click *Audit* to view detailed delivery and submission tracking information.


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



 **You've Successfully Sent a Bulk Form!**

> You can now efficiently distribute forms to multiple recipients and monitor responses from a centralized dashboard using Doculan's Bulk Form feature.

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
    src="https://www.youtube.com/embed/ueKbp7MaAVQ"
    title="Demo Video"
    allowfullscreen>
  </iframe>
</div>

> The above **Video** represent that how to **send a document using the bulk email feature**.

© Doculan by [Virtualan Software](https://www.virtualan.io)
