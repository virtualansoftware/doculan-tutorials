# How to use Dynamic Form Conditions?

The **Dynamic Form Conditions** feature allows forms to automatically display, hide, enable, or disable fields based on a user's responses. This creates a more personalized and efficient form-filling experience by showing only the fields that are relevant to the selected options.

By applying conditional logic, organizations can build intelligent forms that adapt dynamically to user input, improve data accuracy, reduce form complexity, and streamline information collection.

---

## Step 1: Open the Form Editor

- Navigate to the Forms module.
- Create a new form or open an existing form.
- Open the Form Editor.
- Drag and drop the required fields into the form.



<img src="screenshots/Forms/Form-Condition1.png" alt="Step 2 — Clone the Form" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">


---

 
## Step 2. Select the field to add a conditions

Open the field you want to attach logic to in the **Field Settings** panel on the right. In this example, the **Professional Level** radio button field has three options: `Student`, `Fresher`, and `Experience`.

Click **Conditions** in the Field Settings panel to open the Conditions builder.


<img src="screenshots/Forms/Form-Condition2.png" alt="Step 2 — Clone the Form" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">


---

## 1. Open the Conditions modal

The **Conditions** modal appears with three empty sections:

- **IF** — the rule(s) that trigger the logic
- **(threshold selector)** — whether *All* or *Any* of the IF rules must match
- **DO** — the action(s) to perform when the rule(s) match

Click **+ Add IF Rule** to begin building a condition.

**Next, configure the *Do* condition. Select the required action, choose the trigger field, and then select the target field(s) to apply the condition.**


<img src="screenshots/Forms/Form-Condition3.png" alt="Step 2 — Clone the Form" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>


<img src="screenshots/Forms/Form-Condition4.png" alt="Step 2 — Clone the Form" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

---



---

## 2. Add the first action

In the **Do** section, click  Add Action*. For each action, select the **Action**, choose the **Trigger Value(s)**, and select the **Target Field**. The **Target Field** list identifies fields already in use, such as **Used in IF Condition** or **Already Used in Another Action**, to help prevent conflicting rules.


Three separate **Show** actions are configured:

| Trigger Value | Target Field |
|---|---|
| `Student` | Academic Year |
| `Fresher` | Year of Graduation |
| `Experience` | Total Years of Experience |


This means: selecting **Student** reveals the *Academic Year* field, selecting **Fresher** reveals *Year of Graduation*, and selecting **Experience** reveals *Total Years of Experience*. Once configured, click *Save Condition*.



<img src="screenshots/Forms/Form-Condition5.png" alt="Step 2 — Clone the Form" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">

---

## Step 3. The Condition is Failed 


 - The condition cannot be applied because a field used in the If condition cannot also be selected as a Do target.

<img src="screenshots/Forms/Form-Condition-Failed1.png" alt="Step 2 — Clone the Form" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>


 - The condition cannot be applied because a field used in the Do condition cannot also be selected as an If field. 

<img src="screenshots/Forms/Form-Condition-Failed2.png" alt="Step 2 — Clone the Form" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">



## Step 4. Send the form 

Once conditions are saved, use **Send Form** to deliver the form to a recipient. In the **Send Form** dialog, the **Single** tab lets you add a recipient's **Name** and **Email**, with an option to **+ Add Another Recipient**. This is step 1 of 4 (Add Recipients → Set Reminder → Security → Mail).


<img src="screenshots/Forms/Form-Condition6.png" alt="Step 2 — Clone the Form" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">



---

## Step 5. Recipient view : Base form

The recipient opens the **Job Application** form. Initially only the base fields are visible: Name, Mobile Number, Email Address, Educational Qualification, and Professional Level (with its three radio options). No conditional fields are shown yet, since no selection has been made.



<img src="screenshots/Forms/Form-Condition7.png" alt="Step 2 — Clone the Form" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;">



---

## Step 6. Recipient selects the appropriate Conditions

When the recipient selects the **Student** option under Professional Level, the conditional rule fires and the **Academic Year** field is not yet visible in this view — the form still shows the base fields with Student selected, confirming the trigger value was captured correctly.

After selecting **Student**, the **Academic Year** text field dynamically appears below Professional Level, exactly as configured in the Show action.


<img src="screenshots/Forms/Form-Condition8.png" alt="Step 2 — Clone the Form" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>


Selecting **Experience** displays the **Total Years of Experience** field, completing the three-way conditional flow. Switching the radio button automatically updates the displayed field based on the selected option.



<img src="screenshots/Forms/Form-Condition10.png" alt="Step 2 — Clone the Form" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"><br>



<!-- <img src="screenshots/Forms/Form-Condition12.png" alt="Step 2 — Clone the Form" style="border:2px solid black; border-radius:4px; width:100%; max-width:800px;"> -->

---


## Summary

| Step | IF condition | Action |
|---|---|---|
| Rule 1 | Professional Level Is Equal To `Student` | Show → Academic Year |
| Rule 1 | Professional Level Is Equal To `Fresher` | Show → Year of Graduation |
| Rule 1 | Professional Level Is Equal To `Experience` | Show → Total Years of Experience |
| Rule 2 (chained) | Year of Graduation Is Filled | Show → CGPA (%) |

Conditional logic in the Doculan Form Builder allows fields to be:
- **Compared** against a fixed value or another field's value
- **Combined** using All/Any matching across multiple IF rules
- **Chained** so that a field revealed by one rule can itself trigger further rules
- **Resolved** through Show, Hide, Show Multiple, and Hide Multiple actions, with built-in warnings when a field is already referenced elsewhere in the logic

---

## Benefits
- Creates smarter and more interactive forms.
- Improves user experience.
- Reduces unnecessary data entry.
- Increases form completion rates.
- Collects accurate and relevant information.
- Eliminates the need for multiple form versions.

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
    src="https://www.youtube.com/embed/492wegvBSXc?si=NMvVpY7O3LX5d3Xh"
    title="Demo Video"
    allowfullscreen>
  </iframe>
</div>


Result

Dynamic Form Conditional Logic automatically adapts the form based on user input, ensuring recipients only see fields that are relevant to their responses, making form completion faster and more efficient.

---