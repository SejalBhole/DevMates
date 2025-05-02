This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

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

