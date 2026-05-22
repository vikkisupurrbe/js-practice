/*

Build a dynamic form that 
  - adds/removes input fields on click, 
  - validates all fields on submit, 
  - and renders results on the page. 

Use event delegation for dynamically created elements.

Questions to answer before building:
What triggers adding a new input field?
  - User clicking on "+", a handler function renders a new child node under the parent node "form-container", DOM updates the change
What does the new field look like in HTML?
  - <input type="text">
What triggers removing a field?
  - User clicking on "-", a handler function removes a new child node under the parent node "form-container", DOM updates the change
How do I know which field to remove?
  - Each field has an id, the handler transmits the id to the JS logic to check the presence of the id, then removes it from the JS memory
What triggers validation?
  - User clicking on "Submit", <button class="submit-btn" onSubmit=handleSubmit()>, the handler will run the JS logic to check the data
What counts as valid?
  - Filled
  - Right data type, no number in the text field, no text in the number field
What do I render after a valid submit?
  - Render the whole form with the latest submission
  - Clear the form after submit
  Do you clear the form after submit?
    - Yes, clear the form after submit
  Where does the result appear — above the form, below it, in a separate div?
    - In a separate div
  What does one result look like — just the values listed?
    - I want to build a people + age form, results show the number of people and the average age of all people

Title: User Name and Age
Name    Age
Alex    19  (-)
George  56  (-)
Sarah   42  (-)
Henry   23  (-)
            (+)
Results:
Number of people: 4
Average age: 35

*/

