# How to Use the Zelle Payment Method?

The **Zelle Payment Method** in Doculan AI enables users to make payments conveniently through **bank-to-bank transfers** using Zelle. Users can scan a QR code or enter the recipient's Zelle email address through their banking app to transfer the required amount directly from their bank account. After completing the transfer, users can submit the transaction ID for payment verification. Administrators can review payment records and use the **Zelle Reconciliation** feature to verify multiple transactions against uploaded bank statements.

## Step 1: Payment Settings

The **Payment Settings** section allows administrators to configure and manage payment providers in Doculan, enabling payment processing through forms using Stripe, PayPal, and Zelle.

### Navigation

Navigate to **Settings → Payment** to access the available payment providers.

### Payment Providers

The Payment tab displays the supported providers as individual configuration cards:

- **Stripe:** Configure Stripe for online payment processing.
- **PayPal:** Configure PayPal for online transactions.
- **Zelle:** Configure Zelle as a payment option.

### Provider Configuration

1. Select **Configure** on the required payment provider.
2. Enter the required provider details and credentials.
3. Save the configuration to complete the setup.
4. Return to the Payment tab to verify the configuration status.

### Configuration Status

Each provider displays its current configuration status:

- **Configured:** A green indicator confirms that the provider's configuration has been saved successfully.
- **Not Configured:** Indicates that the provider setup has not been completed.

<img src="screenshots\Zelle_Paymentfield\Payment_Providers.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">


Administrators can configure each provider independently based on their payment requirements.

---

# Step 2: Zelle Configuration

The **Zelle Configuration** section allows administrators to connect their Zelle payment account with Doculan by configuring the notification email, Gmail App Password, and Zelle QR code.

### Zelle Setup Steps

1. **Email Address:** Enter the Gmail address associated with bank Zelle payment notifications. This address is displayed to payers as the payment recipient.
2. **Password:** Enter the Gmail App Password to allow Doculan to retrieve and verify payment notifications. Use a Google-generated App Password instead of the regular Gmail password.
3. **Zelle QR Code:** Upload the Zelle QR code obtained from the banking application's **Receive** section. Supported formats: PNG, JPEG, and WebP (maximum 512 KB).
4. **Enable Zelle Payment:** Turn on the **Enabled** toggle to make Zelle available as a payment option.
5. **Save Configuration:** Click **Save Changes** to apply the configuration.


### Available Actions

- **Cancel:** Discard unsaved changes.
- **Remove:** Remove the existing Zelle configuration.
- **Save Changes:** Save and apply the updated settings.

<img src="screenshots\Zelle_Paymentfield\Zelle_Configuration.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

**Note:** If an App Password is already saved, leave the password field blank to retain the existing password. The configuration must be saved before the updated settings take effect.

---

# Step 3: Create New Form

- Navigate to the **Doculan Dashboard** and click **Forms** from the main menu, or navigate to **Documents** and click **Forms** from the Create button. 
- Click **Create New Form** to manually design a form, or select **Generate with AI** to automatically create a form using **AI** assistance.

<img src="screenshots\Zelle_Paymentfield\Create_New_Form.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

---

# Step 4: Add Ticket Field and Payment Field

The **Ticket Field** and **Payment Field** allow form creators to manage ticket information and collect payments directly through Doculan forms.

### 1. Ticket Field

The **Ticket Field** and **Payment Field** allow form creators to manage ticket purchases and collect payments directly through DocuLan forms. These fields provide options to configure ticket pricing, select payment amounts, link ticket fields, and enable supported payment methods.

**Field Settings**

- **Label:** Enter the display name for the ticket field.
- **Ticket Items:** Add ticket names and their corresponding prices.
- **Add Ticket Item:** Add multiple ticket options as required.
- **Allow Coupon Codes:** Enable this option to let users enter coupon codes and apply eligible discounts to their ticket purchases.
- **Required Field:** Make ticket selection mandatory for form submission.

<img src="screenshots\Zelle_Paymentfield\TP_Field.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

Configured ticket items and prices are displayed in the form preview.

### 2. Payment Field

The **Payment Field** enables payment collection based on a fixed amount or the total ticket price.

<!-- <img src="screenshots\Zelle_Paymentfield\TP_Field_2.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br> -->

**Field Settings**

- **Label:** Enter the display name for the payment field.

**Payment Amount Source**

Choose the required payment calculation method:

- **Fixed Amount:** Set a predefined payment amount.
- **Ticket Total:** Automatically calculate the payment amount based on the selected tickets. Choose the relevant Ticket Field from the dropdown.

When **Ticket Total** is selected:

1. Select the Ticket Total option.
2. Choose the appropriate Ticket Field from the dropdown list.
3. The selected Ticket Field will be linked to the Payment Field.
4. The payment amount will automatically reflect the total calculated from the linked Ticket Field.


**Payment Methods**

Select the required payment providers:

- **Stripe**
- **PayPal**
- **Zelle**

Enable the required payment methods using their respective checkboxes. Users can choose from the enabled payment options when completing the payment.

**Field Rules**

- **Required Field:** Payment fields are always required. Users must complete the payment process as part of form submission.

Both fields can be customized according to the form requirements before publishing or sharing the form.

### 3. Multiple Payment Field Configuration

Form creators can add multiple Payment Fields to the same form and configure each field independently.

For example:

- **Ticket-Based Payment:** Link the Payment Field to a Ticket Field to automatically calculate the payment amount.
- **Fixed Amount Payment:** Configure a specific payment amount, such as $10.00, for a separate Payment Field.

This allows form creators to configure different payment amounts and sources within a single form.

### 4. Configure and Preview

Follow these steps to configure ticket purchases and payments:

1. Add the **Ticket Field** to the form.
2. Enter the ticket names and prices.
3. Enable coupon codes if discounts are required.
4. Add the **Payment Field** and select the payment amount source.
5. If **Ticket Total** is selected, link the appropriate Ticket Field.
6. Enable the required payment providers.
7. Use **Form Preview** to verify ticket options, pricing, discounts, and payment settings.
8. Click **Send Form** to distribute the form to recipients.

<img src="screenshots\Zelle_Paymentfield\TP_Field_3.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

**Note:** Coupon codes allow users to apply eligible discounts during ticket purchases. The final payment amount is calculated based on the applicable ticket pricing and discount.

---

# Step 5: Two Ways to Send a Form

After configuring the form, you can share it with recipients using **two methods**.

### 1. Send via Email

Use the **Email** option when the form needs to be sent directly to a specific recipient.

1. Enter the **Recipient Name**.
2. Enter the **Recipient Email Address**.
3. Set the **Validity Date**.
4. Configure the **Reminder** schedule.
5. Enable **OTP Verification**, if required.
6. Use **Generate Email Content** to create the email subject and message.
7. Review the details and click **Send**.

<img src="screenshots\Zelle_Paymentfield\Send_via_Email.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

The recipient receives a personalized email containing a secure link to access and complete the form.


### 2. Share an Anonymous Link

Use the **Anonymous Link** option when you want users to access the form without sending it to a specific email address.

1. Select **Anonymous Link**.
2. Configure the required access and validity settings.
3. Copy the generated link.
4. Share the link through the appropriate communication channel.

<img src="screenshots\Zelle_Paymentfield\Anonymous_Link.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">


Users can access the form directly through the shared link without requiring an individual email invitation.

> **Note:** The available fields, verification options, and access settings may vary depending on the form configuration.

---

# Step 6: Payment Amount Source

The **Payment Field** provides two options for determining the amount to be collected. Select the appropriate option based on how the payment amount should be calculated.

**Fixed Amount Select** - Fixed Amount to charge a predefined amount configured in the Payment Field.

**Ticket Total** - Select **Ticket Total** to calculate the payment amount based on the total value of the items selected in the ticket.

> **Note:** Both **Fixed Amount** and **Ticket Total** use the same **Payment Field**. The only difference is how the payment amount is determined.

## Payment Provider
After selecting the payment amount source, choose the required **Payment Provider**, such as **Stripe**, **PayPal**, or **Zelle**, to process payments.


### 1. Form Details

Enter the required information in the following fields:

- **Name:** Enter your full name.
- **Mobile Number:** Enter a valid mobile number.
- **Email Address:** Enter a valid email address.
- **Date:** Select the required date using the date picker.

### 2. Ticket Selection

The **Ticket** section allows users to select available items and specify the required quantities.

- **Product Selection:** Select the required items using the checkboxes.
- **Quantity:** Use the **+** and **−** buttons to adjust the quantity.
- **Item Price:** Displays the price of each item.
- **Total:** Automatically calculates the amount based on the selected items and quantities.

### 3. Payment Details

The **Payment** section displays the total payable amount and available payment methods.

- **Amount to Pay:** Displays the total amount due.
- **Stripe:** Complete the payment through Stripe.
- **PayPal:** Complete the payment through PayPal.
- **Zelle:** Complete the payment using Zelle.

Select an available payment method to proceed with the transaction.


### 4. Multiple Payment Fields

When multiple Payment Fields are configured in the form, each field is displayed separately with its respective payment amount and available payment methods.

For example:

**Payment Field 1**: Displays $7.00 based on the selected Ticket Total.

**Payment Field 2**: Displays a fixed payment amount of $10.00.

<img src="screenshots\Zelle_Paymentfield\Payment_Provider.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>


<img src="screenshots\Zelle_Paymentfield\Payment_Provider_2.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

Each Payment Field provides its own payment options, allowing users to identify the amount associated with each payment section.

---

# Step 7:  How to Complete a Payment Using Zelle

The **Pay with Zelle** option allows users to complete payments through their Zelle-enabled banking application. Users must provide their personal details and follow the payment instructions to complete and verify the transaction.

### 1: Open Zelle Payment

Select **Pay with Zelle** from the Payment section to view the total amount due.

### 2: Enter Personal Details

Provide the required information:

- **First Name:** Enter your first name as registered with your bank.
- **Last Name:** Enter your last name as registered with your bank.
- **Email:** Verify the displayed email address.

Ensure your name matches your banking details for accurate payment verification.

### 3: Get Payment Instructions

Click **Get Zelle Payment Instructions** to view the recipient details and instructions for completing the payment.

<img src="screenshots\Zelle_Paymentfield\Pay_with_Zelle.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

---

# Step 8: Complete Zelle Payment and Verify Transaction

After entering the required personal details and clicking **Get Zelle Payment Instructions**, users are redirected to the Zelle payment page to complete the transaction and submit it for verification.


<!-- <img src="screenshots\Zelle_Paymentfield\Verify_Transaction.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br> -->


### 1: Review Payment Details

The payment page displays the following information:

- **Amount Due:** Displays the total payable amount.
- **Zelle QR Code:** Scan the QR code using your banking application's Zelle feature.
- **Zelle Email:** Displays the recipient's registered Zelle email address.
- **Amount:** Displays the exact payment amount in USD.
- **Memo / Reference:** Displays a unique payment reference. Use **Copy** to copy the reference if required.

### 2: Complete the Zelle Transfer

1. Open your banking application and navigate to Zelle.
2. Scan the QR code or enter the provided Zelle email address.
3. Enter the exact payment amount displayed on the page.
4. Ensure the payer name matches the details entered in the form.
5. Complete the transfer through your banking application.

### 3: Enter Transaction ID

Retrieve the transaction ID from your banking application's payment confirmation.

- **Transaction ID:** Enter the transaction ID associated with the completed payment.
- **Verify Payment:** Click to submit the transaction details for verification.

### 4: Verify Payment Status

The payment page displays **Verifying Payment** while Doculan checks the transaction against the received Zelle payment notification.

The verification process checks:

- **Transaction ID**
- **Payer Name**
- **Payment Amount**

**Verification Outcomes:**

- **Successful:** The transaction details match the payment notification, and the payment is confirmed.
- **Pending:** Verification is still in progress. Wait for the payment status to update.
- **Failed:** The transaction could not be verified due to missing or mismatched details.

**If Verification Fails:** Check the transaction ID, payer name, and payment amount. Ensure the Zelle transfer is completed successfully and retry verification with the correct details. If the issue persists, contact the administrator for assistance.

<img src="screenshots\Zelle_Paymentfield\Verify_Transaction_2.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

---

# Step 9: Payment Received

Once the submitted transaction ID is successfully matched with the Zelle payment notification, Doculan displays a payment confirmation message.

The confirmation page provides the following details:

- **Transaction ID:** Displays the verified transaction ID associated with the payment.
- **Payment Received:** Displays a confirmation message indicating that the Zelle payment has been successfully received.
- **Received Status:** A green status indicator confirms that the payment has been received.

###  Return to Form

Click **Return to Form** to navigate back to the payment form and continue with the form submission process.


<img src="screenshots\Zelle_Paymentfield\Payment_Confirmation.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

**Note:** The payment is considered received once Doculan successfully verifies the transaction details against the corresponding Zelle payment notification.

---

# Step 10: Payment Confirmation and Form Submission

After successful payment verification, Doculan updates the payment status to **Paid**, confirming that the transaction is complete and the form is ready for submission.

### 1: Review Payment Status

The Payment section displays the following details:

- **Amount to Pay:** Displays the total payment amount.
- **Paid:** A green status indicator confirms successful payment.
- **Payment Successful:** Indicates that the payment is confirmed and the form is ready for submission.
- **View Payment Details:** Click to access and review the payment transaction details.

### 2: View Payment Details

Click **View Payment Details** to review the transaction information associated with the completed payment.


### 3. Multiple Payment Confirmations

When **Multiple Payment** Fields are configured, each field displays its payment amount and confirmation status independently.

Example:

**Payment Field 1**: $7.00 – Ticket Total.

**Payment Field 2**: $10.00 – Fixed Amount.

Each Payment Field maintains its own payment status and transaction details.

### 4: Submit the Form

Once payment is confirmed and all required fields are completed:

1. Review the entered information and payment details.
2. Click **Submit Form** to submit the completed form.
3. Doculan records the submitted response.

<img src="screenshots\Zelle_Paymentfield\Payment_Conform.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

**Note:** Payment must be successfully verified before form submission. Once the response is recorded, the submission process is complete.

---

# Step 11: Review Form Details

1. Navigate to the **Forms** section and open the required form.
2. Click the **Action Menu** associated with the form.
3. Select **Details** to view the form information.

<img src="screenshots\Zelle_Paymentfield\Review_Form_Details.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">


### Payment Details

The table displays the following information:

- **First Name & Last Name:** Displays the payer's name.
- **Transaction Status:** Shows the payment status, such as Received and Not Verified.
- **Total Paid:** Displays the amount received from the customer.
- **Transaction Date:** Shows the date and time of the transaction.
- **Gateway:** Identifies the payment method used, such as Zelle.
- **Action:** Displays the available transaction action.
- **Reviewed At:** Shows when the transaction was reviewed.

### Zelle Reconciliation

1. Click **Zelle Reconcile** to access the Zelle payment reconciliation option.
2. Review the transaction details, including the payer's information, transaction ID, and payment amount.
3. Verify the payment information against the submitted transaction.
4. Use the available reconciliation options to review the payment status.

### Additional Options

- **Table:** View submitted payment transactions in a tabular format.
- **Summary:** View a summarized overview of submissions.
- **Search Submissions:** Search for specific payment records.
- **Refresh:** Reload the transaction details.
- **Download:** Download the available form details.

<img src="screenshots\Zelle_Paymentfield\Verify_form_details.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

<img src="screenshots\Zelle_Paymentfield\Verify_form_details_2.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

**Note:** Payments marked as **Received** and **Not Verified** indicate that the payment has been received but still requires verification.

---

# Step 12: Verify and Review Zelle Payment

The **Payment Verification** window allows administrators to review Zelle transactions, verify payment details, and accept or reject payment submissions.


### Payment Details

The window displays the following information:

- **Provider Reference:** Displays the unique payment reference.
- **First Name & Last Name:** Displays the payer's name.
- **Payment Date:** Shows the transaction date and time.
- **Payment Status:** Displays the payment gateway, received amount, and verification status.
- **Transaction ID:** Displays the transaction reference received from Zelle.

### Verify Payment

1. Review the payer details, payment amount, and transaction ID.
2. Match the transaction ID against the submitted payment information.
3. Select **Yes** or **No** to confirm whether the transaction IDs match.
4. Review the **Updated By** and **Updated On** details.

### Review and Submit

1. Enter additional comments in **Notes** (optional).
2. Select **Accept** to approve or **Reject** to decline the payment.
3. Click **Submit** to save the verification decision.

### Additional Options

- **Download CSV:** Export the payment verification details.
- **Cancel:** Close the verification window without submitting changes.

<img src="screenshots\Zelle_Paymentfield\Verify_Zelle_Payment.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

**Note:** Verify the transaction ID and payment amount before accepting or rejecting a payment.

---

# Step 13: Zelle Reconciliation – Bulk Payment Verification

The **Zelle Reconciliation** feature allows administrators to verify multiple Zelle payments in bulk by uploading a bank statement in PDF format. The system automatically extracts transaction IDs and payment amounts, compares them with the expected payment details, and displays the verification results.

### Upload Bank Statement

1. Click **Zelle Reconcile** in the form submissions view.
2. Download your Zelle transaction statement from your bank in PDF format (maximum file size: 10 MB).
3. Click **Browse** or drag and drop the PDF file into the upload area.
4. The system automatically reads the transaction IDs and payment amounts from the uploaded statement.

### Review Reconciliation Results

After processing the PDF, the reconciliation results are displayed in a table containing the following details:

- **Transaction ID:** Displays the transaction reference extracted from the bank statement.
- **Amount (PDF):** Shows the payment amount identified in the uploaded statement.
- **Expected Amount:** Displays the amount expected from the form submission.
- **Recipient Email:** Identifies the recipient associated with the payment.
- **Result:** Indicates the verification status of the transaction.

**Verified**

Payments are automatically marked as **Verified** when the transaction ID and payment amount match the expected payment details.

**Not Verified**

Payments that do not match remain **Not Verified** and require manual review.

### Complete Reconciliation

- Click **Audit** to review the reconciliation activity.
- Click **Upload another PDF** to process another bank statement.
- Click **Done** to complete the reconciliation process.

<img src="screenshots\Zelle_Paymentfield\Zelle_Reconciliation.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

<img src="screenshots\Zelle_Paymentfield\Zelle_Reconciliation_2.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

**Note:** Only payments with matching transaction IDs and amounts are automatically marked as verified. Other transactions must be reviewed manually.

---

# Step 14: Review Zelle Payment Reconciliation Status

The **Payment Submissions** table allows administrators to review Zelle payment details and verify the reconciliation status of submitted transactions. Once the bank statement reconciliation is completed, the updated payment statuses are reflected in the submissions table.

### **Payment Details**

The table displays the following information:

- **First Name:** Displays the customer's first name.
- **Last Name:** Displays the customer's last name.
- **Transaction Status:** Shows the payment transaction ID along with its payment and verification statuses.
- **Total Paid:** Displays the total amount received.
- **Transaction Date:** Indicates the date and time of the transaction.
- **Gateway:** Identifies the payment gateway used, such as Zelle.
- **Action:** Displays available actions for the payment record.
- **Reviewed At:** Shows the date and time when the payment was reviewed.

### **Payment Status Indicators**

The system displays two status indicators for each transaction:

**Received**

Indicates that the payment has been received.

**Verified**

Confirms that the transaction has been successfully verified through Zelle reconciliation.

### **Additional Options**

- **Zelle Reconcile:** Upload a bank statement to reconcile and verify multiple Zelle transactions.
- **Search Submissions:** Search for specific payment records.
- **Refresh:** Reload the submission records to view the latest payment statuses.
- **Download:** Export the submission data for reporting and record-keeping.
- **Cancel:** Close the submissions view.

<img src="screenshots\Zelle_Paymentfield\Payment_Submissions.png" alt="Step 1 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

**Note:** Successfully reconciled transactions display both **Received** and **Verified** statuses, allowing administrators to easily identify confirmed payments.
