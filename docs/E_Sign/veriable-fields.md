# How to use Variable field?

The **Variable Field** feature allows you to create reusable dynamic placeholders within a document. These placeholders automatically populate the same value wherever they appear, eliminating the need to enter repetitive information multiple times.

Variable fields improve efficiency, accuracy, and consistency—especially in contracts, agreements, and form-based documents.

---

## Step 1: Access the Variable Registry

1. Navigate to the **Doculan Dashboard**.

<img src=" screenshots\Variable-Fields\variable-field1.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

2. From the main menu, click **Variable Registry** to access the centralized repository of **Global Variables**.

<img src=" screenshots\Variable-Fields\variable-field2.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

> This section allows you to create, manage, and maintain reusable variable resources across your documents.

---

## Step 2: Configure the Variable Registry

3. Click the **Create Variable** button in the top-right corner to add a new variable.

A pop-up window will appear prompting you to:
- Select the appropriate **Scope**.
- Choose the previously created **Variable** from the list.
- Select the appropriate **Field Type**, then enter the required **Label** and **Value** as needed.<br>
Ensure all information is accurate before saving, as the entered value will apply according to the selected scope.

<img src=" screenshots\Variable-Fields\variable-field4.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

4. Click **Save** to apply and store the new variable.

<img src=" screenshots\Variable-Fields\variable-field5.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

> Once configured, the variable field will be properly linked and ready for use within the document.

---

## Step 3: Add a Required Variable Field

5. Drag and drop the **Variable Field** into the document at the desired location.
6. Click on the inserted field to open the **Settings** panel.<br>
- A pop-up window will appear prompting you to:
  - Select the appropriate **Scope**.
  - Choose the required **Variable** from the Variable Details list.
  - Select the relevant **Label** for the field.

<img src=" screenshots\Variable-Fields\variable-field6.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">


<details open>
 <summary><b>Select the Required Scope</b></summary>

Select the required Scope based on your use case:

* **Global** – Applies the variable value across the entire document (and wherever the same global variable is used).
* **Current** – Applies the value only to the selected field instance without affecting other variables.

</details>

> Choose the appropriate scope to control how and where the variable value is applied.

---

## Step 4: Using the "Current" Scope in a Field

7. To apply a value only to a specific field instance:

- Open another **Variable Field** and access its **Settings panel**.
- Select the **Scope** as **Current**.
- Enter the relevant **Value** for the field.

<img src=" screenshots\Variable-Fields\variable-field7.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

> The value entered will update according to the selected scope rules.

---

## Step 5: Recipient Signing Experience

8. When your recipient receives the email:

- They click the **document link** in the email.
- Predefined variable values will be automatically populated throughout the document.

<img src=" screenshots\Variable-Fields\variable-field10.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

- The recipient is required to complete only the **signature field**, as all other details have been pre-populated using **variable fields**.

<img src=" screenshots\Variable-Fields\variable-field11.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

- For the second recipient, only the signature field requires completion, since all other details have been pre-populated through variable fields.”

<img src=" screenshots\Variable-Fields\variable-field13.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

> These **Variable Fields** are used to predefine and manage consistent values within a document.

---

## Step 6: After Submission

- A confirmation pop-up message will appear indicating that the **submission was successful**.
- You may then choose to view the signed document or download it as a ZIP file.

<img src=" screenshots\Variable-Fields\variable-field15.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

**The document has been successfully signed using the configured variable fields.**

> They allow you to set a value once and automatically apply it wherever the same variable appears, ensuring accuracy, reducing repetition, and maintaining consistency throughout the document.

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
    <source src="https://doculan-storage-public.s3.us-east-1.amazonaws.com/demo_video/E_Signature/DefaultSignature.mp4" type="video/mp4">
    <source src="https://doculan-storage-public.s3.us-east-1.amazonaws.com/demo_video/E_Signature/DefaultSignature.webm" type="video/webm">
    <!-- Fallback link if browser can't play video -->
    Your browser does not support the video tag. 
    <a href="https://doculan-storage-public.s3.us-east-1.amazonaws.com/demo_video/E_Signature/DefaultSignature.mp4" target="_blank" rel="noopener">Download / Open video</a>
  </video>
</div> 

> The above **video** demonstrates how to use the **Variable Field** feature in e-sign documents, providing a clear step-by-step walkthrough on how to create, configure, and apply variable fields within a document.

© Doculan by [Virtualan Software](https://www.virtualan.io)