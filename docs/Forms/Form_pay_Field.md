# How to Use the Payment Field?

The **Payment Field** allows form creators to collect payments directly from respondents as part of the form submission process. It can be used for registrations, bookings, service requests, applications, and other transactions that require payment.

# Step 1: Configure Payment Providers
Before using the **Payment Field** in a form, configure the required payment provider from the **Doculan AI Dashboard**.
### Navigate to Payment Settings
1. Sign in to the **Doculan AI Dashboard**.
2. Navigate to **Settings**.
3. Select **Payment**.
4. The Payment settings page provides two payment provider configuration options:
   * **Stripe Configuration**
   * **PayPal Configuration**

<img src="screenshots\Payment-Field\Form_Payment_Field_Two_Type_Configuration.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

### Payment Provider Selection

After configuring one or both payment providers, return to the form and add the **Payment Field**. Select the appropriate payment provider based on the configured options.

> **Note:** The payment provider must be properly configured before it can be used to process payments through the Payment Field.

---

## Step 2: Configure Payment Providers

The **Payment Configuration** page allows administrators to connect and configure payment providers for processing payments through Doculan AI forms. You can configure **Stripe** or **PayPal** based on the payment provider you want to use.

 **Configure Stripe or PayPal**

1. Select the required payment provider:
   * **Stripe Configuration**
   * **PayPal Configuration**
2. Enter the required credentials in the respective fields.
3. Make sure all entered credentials are **correct and valid**.
4. Review the configuration details.
5. Click **Save Changes** to save the configuration.
6. Once successfully configured, the selected provider will be available in the **Payment Field**.

 **Stripe Configuration**

For Stripe, enter the required Stripe credentials in the respective fields and verify the information before saving.

<img src="screenshots\Payment-Field\Form_Payment_Field_Stripe.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

> **Security Note:** Stripe Secret Keys and Webhook Secrets are sensitive credentials. Store them securely and do not expose or share them publicly.

 **PayPal Configuration**

For PayPal, enter the required PayPal credentials and configuration details in the respective fields and verify the information before saving.

<img src="screenshots\Payment-Field\Form_Payment_Field_PayPal.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

> **Security Note:** PayPal Client IDs, Client Secrets, and Webhook credentials are sensitive configuration data. Store and manage them securely and do not share them publicly.


<!-- ### Payment Provider Selection

After successfully configuring a payment provider, return to the form and add the **Payment Field**. The configured provider can then be selected as the payment method.

> **Note:** Ensure that all payment credentials are entered correctly before saving the configuration. Keep sensitive payment credentials secure and do not share them publicly. -->

---

## Step 3: Payment Providers

The **Payment Providers** section allows administrators to view and manage the payment services configured for Doculan AI. It provides a centralized view of the available payment providers and their configuration status.

<img src="screenshots\Payment-Field\Form_Payment_Field_Configuration_Both.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

#### Stripe

The **Stripe** provider allows administrators to configure Stripe for processing form payments.

* Select **Configure Stripe** to manage the Stripe credentials and settings.
* A **Configured** status indicates that Stripe has been successfully configured.

#### PayPal

The **PayPal** provider allows administrators to configure PayPal for processing form payments.

* Select **Configure PayPal** to manage the PayPal credentials and settings.
* A **Configured** status indicates that PayPal has been successfully configured.

### Configuration Status

The **Configured** indicator helps administrators quickly verify whether a payment provider is ready to be used with the **Payment Field**.

Once a provider is configured, it can be selected when setting up the Payment Field in a form.

---

# Step 4: Choose a Form Creation Method

- Navigate to the **Doculan Dashboard** and click **Forms** from the main menu, or navigate to **Documents** and click **Forms** from the Create button. 
- Click **Create New Form** to manually design a form, or select **Generate with AI** to automatically create a form using **AI** assistance.

<img src="screenshots\Payment-Field\Form_Payment_Field_Create.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

---

# Step 5: Add the Payment Field

From the available field types, select the **Payment** field and add it to the form. The Payment Field enables respondents to complete the required payment as part of the form submission process.

<img src="screenshots\Payment-Field\Form_Payment_Field_Add.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

<img src="screenshots\Payment-Field\Form_Payment_Field_Add1.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

---

### Step 6: Configure the Payment Amount

The **Payment Field** supports **two methods** for determining the amount to be paid.

   - Fixed Amount
   - Ticket Total

#### 1. Fixed Amount

Select **Fixed Amount** when the payment amount is predetermined.

* Enter the required amount in the **Amount** field.
* The specified amount remains fixed for all users completing the form.
* This option is suitable for forms that require a standard or predefined payment.

<img src="screenshots\Payment-Field\Form_Payment_Field_Fixed_Amount.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

**Example:** If the fixed amount is set to **$500**, the user will be required to pay **$500**.

#### 2. Ticket Total

The **Ticket Total** section displays the items associated with the transaction and allows the user to adjust the items before payment.

* **Select or deselect items** using the checkboxes to include or exclude them from the payment.
* **Adjust item quantities** using the **–** and **+** buttons.
* The **item amount** is automatically updated based on the selected quantity.
* The **Total** is recalculated automatically based on the selected items and their quantities.
* The updated **Ticket Total** is used to determine the amount displayed in the **Payment Field**.

<img src="screenshots\Payment-Field\Form_Payment_Field_Fixed_Ticket_Total.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

---

# Step 7: Two Ways to Send a Form

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

<img src="screenshots\Payment-Field\Form_Payment_Field_Send_Email.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

The recipient receives a personalized email containing a secure link to access and complete the form.

### 2. Share an Anonymous Link

Use the **Anonymous Link** option when you want users to access the form without sending it to a specific email address.

1. Select **Anonymous Link**.
2. Configure the required access and validity settings.
3. Copy the generated link.
4. Share the link through the appropriate communication channel.

<img src="screenshots\Payment-Field\Form_Payment_Field_Anonymous_Link.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

Users can access the form directly through the shared link without requiring an individual email invitation.

> **Note:** The available fields, verification options, and access settings may vary depending on the form configuration.

---

### Step 8: Payment Amount Source

The **Payment Field** provides two options for determining the amount to be collected. Select the appropriate option based on how the payment amount should be calculated.

**Fixed Amount Select** - Fixed Amount to charge a predefined amount configured in the Payment Field.

**Ticket Total** - Select **Ticket Total** to calculate the payment amount based on the total value of the items selected in the ticket.

> **Note:** Both **Fixed Amount** and **Ticket Total** use the same **Payment Field**. The only difference is how the payment amount is determined.


### Payment Provider

After selecting the payment amount source, configure the available **Payment Provider**, such as **Stripe** or **PayPal**, to process the payment.

<img src="screenshots\Payment-Field\Form_Payment_Field_Select_Payment.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

---

# Step 9:How to Complete a Payment Using Stripe

After selecting **Pay with Stripe**, the payment page displays the amount due and provides available payment methods. Customers can select a card or another supported payment option and complete the payment securely.

1. **Open the Stripe Payment Page**
   Select **Pay with Stripe** from the Payment field.

2. **Verify the Amount Due**
   Review the **Amount Due** displayed on the payment page.

<img src="screenshots\Payment-Field\Form_Payment_Field_Pay_Stripe.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

3. **Select a Payment Method**
   Choose the available payment method, such as:

   * **Card**
   * **Amazon Pay**

<img src="screenshots\Payment-Field\Form_Payment_Field_Method.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

4. **Enter Card Details**
   If **Card** is selected, provide the required payment information:

   * Card number
   * Expiration date
   * Security code (CVC)
   * Country

<img src="screenshots\Payment-Field\Form_Payment_Field_Card_Details.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

<img src="screenshots\Payment-Field\Form_Payment_Field_Card_Details2.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

5. **Enter Optional Information**
   Depending on the payment option, you may provide additional information such as:

   * Email address
   * Mobile number
   * Full name

6. **Review the Payment Details**
   Verify that the payment amount and entered information are correct.

7. **Confirm the Payment**
   Click **Confirm Payment** to submit the payment.


8. **Complete the Payment**
   Follow any additional instructions provided by the payment provider to complete the transaction.

### Payment Information

The Stripe payment screen clearly displays the **Amount Due** before payment confirmation, helping customers verify the amount they are about to pay.

> **Note:** Payment methods and additional verification steps may vary depending on the payment provider and configuration.

---

## Step 10: Payment Confirmation and Form Submission

After the payment is successfully processed, the Payment field displays a confirmation message indicating that the required payment has been completed. The customer can then return to the form and submit it.

### Payment Confirmation

1. After completing the payment, the payment page displays a **Payment completed successfully!** confirmation.
2. Verify the **Amount Due** to ensure the correct amount was processed.
3. Click **Return to form now** to return to the form.
4. The Payment field displays a confirmation message indicating that the payment was successful.
   
<img src="screenshots\Payment-Field\Form_Payment_Field_Confirm_Payment.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

5. Select **View payment details** if you need to review the payment information.

   <img src="screenshots\Payment-Field\\Form_Payment_Field_Payment_Details.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>


6. Once the payment is confirmed, click **Submit Form** to complete the form submission.

   
<img src="screenshots\Payment-Field\Form_Payment_Field_Submit_Form.png" alt="Step 2 — view all Docs" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>

### Payment Status

The Payment field displays:

* **Amount to Pay:** Shows the payment amount.
* **Payment successful:** Confirms that the payment has been completed.
* **View payment details:** Allows the user to review the payment information.
* **Submit Form:** Allows the user to submit the completed form after successful payment.

> **Note:** A successful payment does not automatically submit the form. The user must return to the form and select **Submit Form** to complete the submission process.

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
    src="https://www.youtube.com/embed/bweFB9LVG5o?si=Bhh-fmLLRAoPQ_WN"
    title="Demo Video"
    allowfullscreen>
  </iframe>
</div>


© Doculan by [Virtualan Software](https://www.virtualan.io)
