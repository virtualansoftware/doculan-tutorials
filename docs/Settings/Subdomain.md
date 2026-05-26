# How to Create a Subdomain?

This guide explains how to create an organization-specific **subdomain** and access its dedicated login portal. It enables organizations to establish a branded and secure workspace using a custom subdomain, providing streamlined and seamless access for authorized users. The subdomain-based portal ensures a centralized entry point for organizational operations, improving identity control, security, and user experience within a unified environment.

---

## What is the Organization Subdomain Feature?

The Organization Subdomain feature allows administrators to:

- Create a dedicated workspace URL for their organization
- Provide branded access for internal users
- Improve security and workspace separation
- Enable easier user access through a custom login portal
- Restrict portal access to authorized domain users only

---

## Step 1: Navigate to Settings

- From the left-side navigation menu, click on **Settings**.
- Select the **Subdomain** configuration section.

<img src=" screenshots\Subdomain\Subdomain.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

The Subdomain Settings page will appear.

---

## Step 2: Create the Organization Subdomain

- Locate the **Create New Subdomain** section.

<img src=" screenshots\Subdomain\Subdomain1.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

- Enter your preferred subdomain name in the input field.

**Example:**

```
organization-name
```

- Review the generated URL preview shown below the input field.
- Click **Save Changes** to confirm and activate the subdomain.


### Subdomain URL Structure

The platform automatically generates a dedicated URL in the following format:

```
https://<subdomain>.doculan.com
```

**Example:**

```
https://virtualteams.doculan.com
```

<img src=" screenshots\Subdomain\Subdomain3.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---

## Step 3: Access the Dedicated Login Page

- Copy the generated subdomain URL.
- Open the URL in a browser.
- The organization-specific login page will be displayed.
- Enter your user credentials:
  - **Email Address** — use your organization email
  - **Password**
  - Complete the **CAPTCHA** verification if prompted.
- Click **Sign In**.

<img src=" screenshots\Subdomain\Subdomain4.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---

## Step 4: Successful Login

After successful authentication:

- Users will be redirected to the **organization dashboard**.
- Organization-specific data and workflows will become accessible.
- Workspace access will remain isolated to the configured organization.

<img src=" screenshots\Subdomain\Subdomain5.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">

---

## Additional Information

<img src=" screenshots\Subdomain\Subdomain6.png" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;" alt="Screenshot for Document">


> **Important:** Only users with an email address belonging to the configured organization domain can access this portal. External domain users (e.g., Gmail or other organization emails) will not be granted access.


| Aspect | Details |
|---|---|
| Access Restriction | Only authorized organization domain users can log in |
| URL Format | `https://<subdomain>.doculan.com` |
| CAPTCHA | May be prompted for additional security verification |
| Dashboard | Redirects to organization-specific workspace upon login |

---

## Notes

- Only administrators have permission to create or modify subdomain settings.
- Once a subdomain is saved, it becomes the official login entry point for the organization.
- Ensure the subdomain name is unique and reflects your organization's identity.
- Contact your platform administrator if you encounter access issues after subdomain creation.


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
    <source src="https://doculan-storage-public.s3.us-east-1.amazonaws.com/demo_video/Settings/Sub_Domain.mp4" type="video/mp4">
    <source src="https://doculan-storage-public.s3.us-east-1.amazonaws.com/demo_video/Settings/Sub_Domain.webm" type="video/webm">
    <!-- Fallback link if browser can't play video -->
    Your browser does not support the video tag. 
    <a href="https://doculan-storage-public.s3.us-east-1.amazonaws.com/demo_video/Settings/Sub_Domain.mp4" target="_blank" rel="noopener">Download / Open video</a>
  </video>
</div>


© Doculan by [Virtualan Software](https://www.virtualan.io)