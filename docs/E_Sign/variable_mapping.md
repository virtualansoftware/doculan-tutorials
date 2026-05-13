# How to Use Variable Mapping in a CSV File?

Variable mapping enables dynamic personalization of bulk emails or documents by linking template placeholders to corresponding data fields in a CSV file. Each row in the CSV represents a unique recipient, allowing the system to generate customized content at scale.

---

## Step 1: Configure the E-Sign

- Navigate to Documents and select the appropriate folder.
- Open the file action menu and click E-Sign.
- Add a Required Variable Field.
- Drag and drop the required field into the document at the desired location.

<img src=" screenshots\Variable_Mapping\Variable_Mapping.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---

## Step 2: Configure Field Scope (Current)

 To assign values specific to individual recipients:

- Add another Variable Field to the document.
- Open the Settings Panel for the field.
- Set the Scope to **Current**.
- Enter a relevant Label Name for identification

<img src=" screenshots\Variable_Mapping\Variable_Mapping2.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---

## Step 2: Send Bulk Mail

- After configuring the E-Sign document, click Send Mail.
- Select the Bulk Mail option.
- Enable the **Include Variables in CSV File** option.

<img src=" screenshots\Variable_Mapping\Variable_Mapping4.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---

## Step 3: Configure Recipient Data

###  Option 1: Upload CSV File

Uploading a CSV file is the most efficient method for large-scale distribution.
<details open>
  <summary><b>Steps to Upload CSV File</b></summary>

1. Click Upload CSV File.
2. Select a properly formatted CSV file.
3. Each row will be treated as a unique recipient.
4. Click Validate to verify email format and data structure.

####  CSV File Format Example

- CSV File Format Example
- Column headers must match the variable label names defined in the document.
- Each row should contain recipient-specific values.

<p>
  <a href="files/Variable_Mapping_CSV_File.csv" target="_blank"
     style="display:inline-block; background-color:#007bff; color:white; padding:10px 20px; border-radius:6px; text-decoration:none;">
    📄 Download CSV Example
  </a>
</p>


<img src=" screenshots\Variable_Mapping\Variable_Mapping4.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">


###  Option 2: Enter Recipients Manually

For smaller distributions, recipient details can be entered manually.

<details open>
  <summary><b>Steps to Enter Recipients Manually</b></summary>

1. Enter recipient details in the Recipients text area.
2. Follow the on-screen sample format.
3. Enter Details for each recipient.
4. Each line represents one recipient.

</details>

> Party 1 Fullname,Party 1 Email Address,Party 1 Name,Party 1 Address,Party 1 Mobile Number <br>
> John Doe,johndoe@example.com,John Doe,910 Pine Road Dallas TX 75201 USA,5552136984 <br>
> John Thompson,johnthompson@example.com,John Thompson,245 Cedar Lane Albany NY 12207 USA,3336548972

**Screenshot 1**

<img src=" screenshots\Variable_Mapping\Variable_Mapping5.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

**Screenshot 2**

<img src=" screenshots\Variable_Mapping\Variable_Mapping6.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---

## Step 3: variable registry

- When using Current Scope, all variable fields are processed per recipient.
- Values are dynamically populated from the CSV file for each row.
- No global variable registry is required in this configuration.

<img src=" screenshots\Variable_Mapping\Variable_Mapping7.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---

## Step 4: Recipient View

- Each recipient receives a personalized document.
- All mapped variables are replaced with corresponding CSV values.
- The final document reflects accurate, recipient-specific data.

**Bulk Recipient 1**

<img src=" screenshots\Variable_Mapping\Variable_Mapping10.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

**Bulk Recipient 2**

<img src=" screenshots\Variable_Mapping\Variable_Mapping11.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

> The above **Screenshots** represent that how to **Create an Variable Mapping in the CSV File**.

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

<div class="video-wrap" role="region" aria-label="Demo: Creating a E-Sign">
  <!-- Use a relative path like ./videos/demo.mp4 or an absolute URL -->
  <video controls poster="">
    <source src="https://doculan-storage-public.s3.us-east-1.amazonaws.com/demo_video/Variable_Registry/Bulk_Variable.mp4" type="video/mp4">
    <source src=https://doculan-storage-public.s3.us-east-1.amazonaws.com/demo_video/Variable_Registry/Bulk_Variable.webm" type="video/webm">
    <!-- Fallback link if browser can't play video -->
    Your browser does not support the video tag. 
    <a href="https://doculan-storage-public.s3.us-east-1.amazonaws.com/demo_video/Variable_Registry/Bulk_Variable.mp4" target="_blank" rel="noopener">Download / Open video</a>
  </video>
</div>

> The above **Video** represent that how to **Create an Variable Mapping in the CSV File**.

© Doculan by [Virtualan Software](https://www.virtualan.io)