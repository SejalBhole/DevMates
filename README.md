# DevMates

DevMates is a full-stack application built with Next.js and MongoDB to help tech teams manage their members. You can add, edit, and delete team members, as well as keep track of their skills and availability.

## Features
- **Add Member**: Add new members to your team with their name, role, tech stack, and availability.
- **Edit Member**: Update existing member information, such as their role or availability.
- **Delete Member**: Remove members from your team.
- **Search**: Filter members by name, role, or tech stack.

## Technologies Used
- **Next.js**: A React framework for building server-side rendered and statically generated web applications.
- **MongoDB**: A NoSQL database used to store team member information.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **React**: JavaScript library for building user interfaces.
- **JavaScript (ES6)**: Modern JavaScript for building interactive web applications.

## Setup Instructions
1. Clone the repo:
    ```bash
    git clone https://github.com/your-username/devmates.git
    ```

2. Navigate to the project directory:
    ```bash
    cd DevMates_inner
    ```

3. Add MongoDB connection in `.env.local`:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

    Visit `http://localhost:3000` in your browser.


## Future Improvements
- **User Authentication**: Add login and registration functionality for team managers.
- **Pagination and Sorting**: Implement pagination and sorting of team members for better user experience.
- **Modal View for Profiles**: Add a modal to view and edit team member profiles more interactively.
- **Dark Mode Toggle**: Implement a dark mode feature for a better user experience in low light conditions.

## Code Example
```bash
npm run dev

