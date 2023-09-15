## Add at least 3 Project features ##
There are three  features of this project is given below:
 * Course Selection Interface:
Users can see a  list of nine  courses cards on the right side of the interface. Each course card  includes information such as the course name,course image, description,price value , credit value and select button.
Users should be able to interact with these course cards, possibly through a button, to select the courses they want to add to their cart.

* Cart Management:On the left side of the interface, there is a cart section that displays the names of the selected courses and their total credits,total remaining and total price.
As users select courses, the cart updates in real-time to reflect the courses chosen and their cumulative credit value.

* Toast Notifications for Validation:The system includes a validation mechanism that checks the cart for certain conditions. Specifically, it checks if a course has been selected more than once and if the total credits in the cart exceed 20.
When such conditions are met, a toast notification is triggered and displayed to the user. This toast provides a clear and user-friendly message informing the user of the issue.


## Discuss how you managed the state in your assignment project.

State is managed at the component level. Each component can have its own local state, which is used to store data and control the component's behavior. State can be changed uesState hook.
UseState is a function that takes an initial state value as its argument and returns an array with two elements.The first element of the array is the current state value, and the second element is a function to update that state.
In the assignment project,I managed the state using React's useState hook.
I have created a state variable called allCourse in the Course component.its initial value is empty array. i updated the data through the setAllCourse function and stored it in the state variable.
Again ,I have created three state variables of the App component,they are selectCourses,
totalCredits,remainingCredits and totalPrices.
I created state variables to track the selected course,total credit hours and total price.These state variables were updated in response to user action,



