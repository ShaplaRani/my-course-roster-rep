# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
## Add at least 3 Project features ##
There are three  features of this project is given below:
 * Course Selection Interface:
Users can see a  list of 9  courses cards on the right side of the interface. Each course card  includes information such as the course name,course image, description,price value , credit value and select button.
Users should be able to interact with these course cards, possibly through a button, to select the courses they want to add to their cart.

* Cart Management:On the left side of the interface, there is a cart section that displays the names of the selected courses and their total credits,total remaining and total price.
As users select courses, the cart updates in real-time to reflect the courses chosen and their cumulative credit value.

* Toast Notifications for Validation:The system includes a validation mechanism that checks the cart for certain conditions. Specifically, it checks if a course has been selected more than once and if the total credits in the cart exceed 20.
When such conditions are met, a toast notification is triggered and displayed to the user. This toast provides a clear and user-friendly message informing the user of the issue.


## Discuss how you managed the state in your assignment project.