# 🚀 Version 0.5.0 – New Enhancements

1. **Generate QR Code for E-Sign Documents** – QR Code generation provides quick, direct access to E-Sign documents by embedding party details, allowing recipients to open and sign the document instantly using a simple device scan.
2. **Generate QR Code for Forms** – QR Codes enable seamless access to forms by embedding essential participant information, allowing recipients to retrieve and submit the form instantly via a device scan.

---
## 1️⃣ Generate QR Code for E-Sign Documents
QR Code generation enables streamlined, **direct access to E-Sign documents** without requiring manual navigation. The generated code includes essential party details and can be scanned from any compatible device to immediately open and complete the document.
### Steps to Generate a QR Code
1. Open the required **E-Sign Document** from the list.
2. Click the **⋮ (three-dot)** icon under the **Actions** column.
3. Select **QR Code** to generate the code.

**Screenshot 1:**  

<img src="screenshots/releaseNotes/QR_Code1_Esign.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">

**Screenshot 2:**

<img src="screenshots/releaseNotes/QR_Code2_Esign.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">

> The above **Screenshots** represent that **QR Code Generation for E-Sign Documents.**

4. The generated QR Code contains the following **party information:**

- **Party ID**
- **Name**
- **Email**

5. You can **download** the QR Code for sharing or offline use.  

6. Scanning the QR code from any device allows users to instantly **access, complete, and submit the E-Sign document.**

> **Note:** QR Code generation is available **only when the E-Sign document status is _Pending_ and _Shared_**

---

## 2️⃣ Generate QR Code for Forms
QR Codes provide an efficient method for participants to **access and submit forms with minimal effort**. The generated code contains the required participant information and allows instant form retrieval through a simple device scan.
### Steps to Generate a QR Code

1. Open the required **Form** from the list.
2. Click the **⋮ (three-dot)** icon under the **Actions** column.
3. Select **QR Code** to create the code.

**Screenshot 1:**  

<img src="screenshots/releaseNotes/QR_Code1_Form.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">

**Screenshot 2:**

<img src="screenshots/releaseNotes/QR_Code2_Form.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="PDF Scrolling">

> The above **Screenshots** represent that **QR Code Generation for Forms.**

4. The generated QR Code includes the following **participant details:**

- **Name**
- **Email**

5. You can **download** the QR Code for easy distribution.  

6. Users can scan the QR Code on any device to quickly **open, complete, and submit the form.**

> **Note:** QR Codes for Forms can be generated only when the form status is **Opened**, **Sent**, or **Resent**.

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
    src="https://www.youtube.com/embed/RM4qmyB5jgs?si=iopox3nqwM__MsgQ"
    title="Demo Video"
    allowfullscreen>
  </iframe>
</div>

> The above **Video** represent the how to use the **Generate QR Code for Forms** feature in Doculan.