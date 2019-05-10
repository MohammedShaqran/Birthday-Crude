# Module: Birthday List

## Overview
Cognizant has been brought on to help UseLists, a company that specializes in providing minimalist list applications to the public.  The initial hit of their very minimalist Person List application has allowed them to gain another round of VC funding that they would like to use to launch Birthday List, the spiritual successor to Person List.  Birthday List will extend and improve the Person List application in two ways:  
Birthday List will allow you to track the birthday of each person in the list.
Birthday List will implement a new feature that was never seen in Person List:  The ability to delete an item from the list.

## Stories and acceptance criteria are included below.
### Your task
Your task is to implement the stories below starting with the code that is available here:

https://github.com/gSchool/Birthday-Crud

Please fork and then clone the above repository.  Once you are done with your work push it to your forked repo and fill in the form linked to at the bottom of these instructions.

### The stories to be implemented are as follows:

#### Birthday Field
As a birthday list user
I want to store a person’s birthday along with their name
So that I can keep track of this important date for each person in my list.

#### Acceptance Criteria
Scenario: Happy path
Given that I click on the “Add Person” link.
When I click the link
Then I am taken to a page that includes fields for First Name, Last Name and Birthday.

Scenario: Happy path
Given that I fill in the Add Person form with First Name, Last Name and Birthday.
When I click the “Save” button
Then I am taken back to the page that shows the list of individuals including their birthday.

Scenario: Happy path
Given that I click on a person’s name
When I click them
Then I am taken to the same page as when I click the Add Person button, but now it is populated with the information about the person whose name I clicked.

Scenario: Happy path
Given that I click on a person’s name and land on the edit person page
When I modify their name or birthday and click save
Then I am taken back to the page that lists their information, and the changed information is shown.

Scenario:  Flawed / Missing date
Given that I am on the Add/Edit person page
When I enter an invalid date or leave the date blank
Then the page notifies me of the bad date and provides an indication of the correct date format (actual date format is up to you).

#### Delete Person Feature
As a birthday list user
I want to be able to click a delete button on the Edit Person page
So that I can remove a person from my list.

#### Acceptance Criteria
Scenario: Happy path
Given that I click on a person’s name link.
When I click the link
Then I am taken to a page that includes the other UI components, but also includes a “Delete” button.

Scenario: Happy path
Given that I am on the “Edit person” page
When I click the “Delete” button
Then I am taken to the page that lists the persons, but now there person I deleted does not appear.

Scenario: Happy path
Given that I am on the “Add person” page
When I view the page
Then I do not see a Delete button (it only displays when I am editing a person, not when I am adding one).

## Notes
* Make suitable choices about layout and styling, layout and styling are less important than meeting the functional requirements, so only spend time on them if you have time.
* If you feel an acceptance criteria is vague, then please ask the instructor for clarification as XP values human interaction over written requirements.
* Work from top to bottom on the stories, they are ordered by value.  Doing the delete button ahead of the birthday field, for example, is bad because it doesn’t reflect the priorities of the customer.

## Technical requirements
* Use JavaScript
* Use Test Driven Development (write tests first!)
* Don’t worry about a DB, the founders of UseLists believe in the ephemeral nature of lists!

##How to submit your work

* Push to your cloned Github repository.
* Paste the URL to that repository in this Google Form: [Submit This Form](https://goo.gl/forms/ydjD85QnfJ2Qj2zd2)

 
