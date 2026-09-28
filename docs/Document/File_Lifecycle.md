# How to Manage the File Lifecycle?

Doculan AI provides **File Lifecycle Management** to help users control how long a file remains active and automatically manage its deletion based on configured rules. This feature helps maintain an organized document repository and ensures files are retained only for the required duration.

### Accessing Retention Settings
To configure a retention policy for a specific file:

- Navigate to the Documents module from the left-hand sidebar.
- Locate the desired file in the document list.
- Click the Three-dot menu **(⋮)** under the Actions column on the far right of the file row.
- Select Info from the dropdown menu.

<img src="screenshots\Document\FIle Lifecycle.png" alt="Step 1 — Create a New Document" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

---

### Configuring a Retention Policy
Upon selecting **"Info"** a modal window will appear displaying file metadata and retention options.

#### Step 1: Initial Setup
- If no retention policy is currently active, the modal will display a Retention section with a prompt to update.
- Click the blue Update button next to the "Retention" label.

<img src="screenshots\Document\FIle Lifecycle1.png" alt="Step 1 — Create a New Document" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

#### Step 2: Define Duration and Action
Once in edit mode, you can define the specific rules for the document:
1. Duration: Enter a numerical value in the "Duration" field (e.g., 5).
2. **Unit:** Select the time unit from the dropdown menu. Options include:

    - Days
    - Months
    - Years (Selected in the example)

<img src="screenshots\Document\FIle Lifecycle2.png" alt="Step 1 — Create a New Document" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

3. Select Lifecycle Action: Choose one or both of the following checkboxes:

    - **Enable Archive:** Automatically archives the document after the retention period expires.

    <img src="screenshots\Document\FIle Lifecycle3.png" alt="Step 1 — Create a New Document" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

    - **Enable Deletion:** Automatically deletes the document after the retention period expires.

    <img src="screenshots\Document\FIle Lifecycle4.png" alt="Step 1 — Create a New Document" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

>Note: You can enable either Archive, Deletion, or both simultaneously depending on your compliance workflow.


#### Step 3: Save Changes
- Once the duration and actions are configured, click the blue Save Changes button to apply the policy.

---

### Monitoring Active Retention
After saving, the Info modal will update to reflect the active policy status:

- Status Indicator: A green ACTIVE badge will appear next to the policy summary (e.g., "5 YEARS Retention").
- Retention Period: Displays the total days calculated (e.g., 1825 days).
- Lifecycle Information:

    - Expires At: The exact date and time the retention period ends (e.g., 09/26/2031).
    - Deleted At: Will display a timestamp if the document has been deleted (otherwise shows —).

<img src="screenshots\Document\FIle Lifecycle5.png" alt="Step 1 — Create a New Document" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

---

### Disabling a Retention Policy
If a document no longer requires a retention policy, you can disable it without deleting the file.

1. Open the Info modal for the document.
2. Scroll to the bottom of the modal.
3. Click the Disable Retention button.

---

### Confirmation
Upon clicking, the system will process the request. A success notification will appear at the top of the screen stating: **"Retention policy disabled."**

The modal will then update to show:
- Status: INACTIVE
- Button action changes to Enable Retention (allowing you to re-activate it later).

<img src="screenshots\Document\FIle Lifecycle6.png" alt="Step 1 — Create a New Document" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

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
    src="https://www.youtube.com/embed/I8QggsOtqNs"
    title="Demo Video"
    allowfullscreen>
  </iframe>
</div>

© Doculan by [Virtualan Software](https://www.virtualan.io)

