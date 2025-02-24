Ecommerce-Follow-Along

#### **Description and Summary**

Welcome to the **Ecommerce-Follow-Along** project! It's an exciting, mentor-guided journey in which we build a complete e-commerce platform with the MERN stack. Through this process, we will engage in creating scalable APIs, securing authentication, creating database schemas, and setting up the backend in Node.js using Express.

---
##  **Milestone 1: Project Overview**
### Why the MERN Stack?   The MERN stack is one of the most popularly used full stacks in web development for the following reasons:
- It is built using **JavaScript** throughout (frontend + backend), making it beginner-friendly.  
- Every component is powerful yet lightweight, letting us build modern, scalable web applications.
 
Here's what MERN contains:  
- **MongoDB**: A NoSQL database to store our application data.  
- **Express**: A framework for building the backend logic.  
- **React**: A library for building our user interface.
- **Node.js**: A runtime environment for executing JavaScript on the server.  

---

### **What This Project Builds**  

#### **REST API Structure and Endpoints**  
APIs (Application Programming Interfaces) let the frontend and backend communicate. We’ll build a REST API that supports:  
1. **User Authentication**: Allowing users to register and log in securely.  
2. **Product Management**: Adding, updating, and retrieving product details.
3. Order Handling:  Seamless handling of customer orders.

The APIs would connect to our MongoDB database and get data back out, returning data formatted in JSON-JSON makes them more accessible and thus easier to be tested.

#### Database Schema Design
The databases are an absolute necessity to having everything go properly. For this MongoDB project:  
- Define all your collections: examples include products, users, or orders.
 Structure relationships that have to do with features like: user orders as well as products categories.

#### **Role of Authentication**  
Authentication is all about verifying who the user is. It’s what keeps an e-commerce site safe and ensures users can make purchases, view orders, or access personal data securely. We’ll implement secure login and registration features that protect sensitive information.

---

### **What I Learned**  
This project will help you:
- Design scalable APIs for real-world applications.
- Build a strong backend using Node.js and Express.
- Design structured databases with MongoDB. 
- Implement secure authentication mechanisms. 
- Use React to build a modern, user-friendly interface. 

---

---

### **Milestone 2: Project Setup and Login Page** 

Day 2: Login Page Implementation
What I Did Today
On Day 2 of the follow-along project, I worked on implementing a LoginPage component using React. Below are the details of what was accomplished:

Key Features
State Management:

Utilized the useState hook to manage user credentials (email and password).
Dynamic Input Handling:

Added a handleChange function to dynamically update the state as the user types in the form fields.
Form Submission:

Created a handleClickLogin function to handle form submission. (Currently, API integration is commented out for future implementation.)
Responsive Design:

Designed the login page using Tailwind CSS for a modern and responsive layout.

```const [credentials, setCreds] = useState({
  email: "",
  password: ""
});

const handleChange = (event) => {
  const { name, value } = event.target;
  setCreds({
    ...credentials,
    [name]: value
  });
};

const handleClickLogin = (event) => {
  event.preventDefault();
  console.log("Submitted Credentials:", credentials);
};
```

User Interface
The login page includes:
Email Input Field: For users to enter their email address.
Password Input Field: For users to enter their password.
Submit Button: To initiate the login process.
Challenges Faced
Tailwind CSS Setup:

Ensured the Tailwind setup was correctly configured in tailwind.config.js.
Imported required Tailwind directives in the project’s main CSS file.
Backend API Integration:

While initially planning to use Axios, API integration is postponed, and the Axios import is commented out for now.
Next Steps
Integrate backend API for user authentication.
Implement proper error handling and form validation.
Enhance UI/UX by displaying success or error messages after login attempts.

# Milestone 3: Backend Project Setup and Key Features

## Overview
In this milestone, I have successfully implemented several key features for the backend of the project. These include the organization of the backend folder structure, setting up the Node.js server, integrating MongoDB, and implementing error handling. Below is a detailed breakdown of each accomplishment.

## Key Features Implemented

### 1. **Backend Folder Structure**
I have meticulously organized the backend project files, creating a well-defined hierarchy to ensure a clean and manageable codebase. This structure includes separate directories for:
- **Routes**
- **Controllers**
- **Models**
- **Middleware**

This setup not only enhances code readability and maintainability but also establishes a solid foundation for scaling the application as new features are added. During this phase, I also began exploring concepts such as **utils** and **middlewares**, which are crucial for efficient backend development.

### 2. **Node.js Server Setup**
To handle API requests efficiently, I set up a Node.js server using Express. The server is configured to listen on a designated port, enabling smooth communication between the client and server. This setup serves as the backbone for backend operations and will act as a gateway for future API integrations and functionalities.

### 3. **MongoDB Integration**
MongoDB has been successfully integrated into the project to manage data storage efficiently. The integration process involved setting up a connection between the server and the database, which has been thoroughly tested. This step lays the groundwork for robust CRUD (Create, Read, Update, Delete) operations and ensures reliable data management across the application.

### 4. **Error Handling Implementation**
Recognizing the importance of a resilient application, I implemented basic error-handling mechanisms. These include:
- Clear error messages to improve debugging
- User-friendly feedback to enhance the overall experience

The error-handling setup ensures the application is more reliable and developer-friendly, laying the groundwork for smoother troubleshooting and future enhancements.

---

This milestone marks a significant step forward in the backend development process, and I am excited to continue building on this foundation in future milestones.

---
# Milestone 4: Livebooks Backend Web Development

by the end of this milestone:

- **Create a User Model**: Think of it as the blueprint for storing user data like name, email, and password in the database.
- **Create a User Controller**: This will help you manage user-related actions like adding new users and fetching their details.
- **Enable and Configure Multer**: Want users to upload profile pictures? Multer’s got your back!
- **Update the README File**: Don’t forget to document your progress here.

---

## What’s the Plan?

### 1. What’s a Model?
A model is like a blueprint. It defines how data is structured in your database. Imagine designing a house—you need a plan first, right?

In MongoDB, we use schemas to define models. For example:

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);
```

### 2. What’s a Controller?
Think of a controller as the manager of your app. It decides how to handle incoming requests and what responses to send back.

For example, here’s a simple controller to create a new user:

```javascript
const createUser = (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });

  newUser.save()
    .then(() => res.status(201).send('User created successfully!'))
    .catch(err => res.status(500).send(err));
};

module.exports = { createUser };
```

### 3. File Uploads with Multer
Multer is a game-changer for handling file uploads. It lets users upload files, like profile pictures, to your server.

Here’s how you set it up:

```javascript
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });
module.exports = upload;
```

---

## Steps to Rock Milestone 4 📝

Here’s the plan:

1. **User Model**: Build and implement the user schema with Mongoose.
2. **User Controller**: Write functions to handle user operations (like creating and retrieving users).
3. **Multer Magic**: Enable file uploads and set up storage for user files.
4. **Document It**: Update this README to reflect your progress.

---



# Milstone 5

# React Signup Page

This is a simple React-based signup page that allows users to register with their full name, email, password, and avatar image. The component also includes a password visibility toggle and validates the form before submission.

## Features
- User input fields for Full Name, Email, and Password.
- Password visibility toggle for easy password entry.
- Avatar upload functionality.
- Form submission with `multipart/form-data` for file upload.
- A link to redirect users to the login page if they already have an account.

## Tech Stack
- React
- React Icons (`react-icons`)
- Axios for API requests
- Tailwind CSS for styling

## File Structure
- `SignupPage.js`: Main component for the signup form.
- `style.js`: Custom styling for the page (ensure it is properly linked).

## Setup

1. **Install Dependencies**:
   Ensure you have `react-icons` and `axios` installed in your project. If not, you can install them using npm:

   ```bash
   npm install react-icons axios

---

# Milestone 6: Secure User Signup - Livebooks Project
Overview
Features Implemented
Password Encryption

Implemented bcrypt to hash user passwords during the signup process.
Stored the hashed passwords in the database to ensure security and prevent unauthorized access.
Secure User Data Storage

Collected and securely saved the following user data:
Name
Email
Encrypted Password
Ensured compliance with industry standards for secure data handling.
Learning Goals Achieved
Password Encryption:
Learned how to securely hash passwords using bcrypt and the importance of encryption in protecting user data.

Data Security:
Gained experience in securely storing user information while adhering to privacy regulations.

Why Password Encryption is Important
User Protection:
Protects sensitive data in case of a database breach.

Privacy:
Prevents passwords from being exposed to unauthorized individuals.

Compliance:
Ensures adherence to security laws and regulations, such as GDPR and PCI-DSS.

Prevention of Password Theft:
Makes it significantly harder for attackers to crack passwords.

Steps Taken
Password Hashing:

Used bcrypt.hash() to encrypt passwords before saving them to the database.
Data Storage:

Stored user details (name, email, and hashed password) securely in the MongoDB database.
Testing:

Verified the functionality by creating test users and checking the stored hashed passwords in the database.


---

## Milestone 6: Backend Web Development [V2] - Deploying Your API (Local and Production)

### Overview
This milestone focuses on creating a secure backend endpoint for the Signup page. The primary goals were to securely store user data, including encrypting passwords, and to ensure compliance with modern security standards.

### Learning Goals 🎯
By the end of this milestone, I achieved the following:
- **Password Encryption:** Learned how to encrypt passwords using `bcrypt` before saving them.
- **Secure Data Storage:** Successfully stored user data securely in the database.
- **Understanding Security Best Practices:**
  - Protecting user data from unauthorized access.
  - Ensuring compliance with regulations like GDPR and PCI-DSS.
  - Mitigating password theft risks through encryption.

### Why Encrypt Passwords?
- **Protect User Data:** Encrypting ensures that even if the database is compromised, passwords remain safe.
- **Privacy:** Prevents visibility of user passwords to anyone, including developers.
- **Compliance:** Adheres to security laws and regulations.
- **Mitigation Against Theft:** Makes it significantly harder for attackers to steal or guess passwords.

### Steps Completed in Milestone 6 📝
1. **Encrypt the Password:**
   - Implemented password hashing using `bcrypt` during the signup process.
   - Stored hashed passwords in the database instead of plain text for enhanced security.

2. **Store Complete User Data:**
   - Ensured secure storage of user details such as name, email, and password.
   - Maintained encrypted password storage to protect sensitive information.

---

## **Milestone 7!** 🌟  

Today, we’re diving into one of the most important parts of any backend system: user login. The goal here is to validate user credentials and securely verify passwords stored in your database. Let’s make it happen! 🚀  

---

## What I Learned? 🎯

By the end of this milestone, you’ll:  
- Understand how to validate user credentials during login.  
- Learn how to compare encrypted passwords with user inputs securely.

---

## Why Do We Encrypt Passwords? 🛡️

Here’s why password encryption is such a big deal:  
1. **Protect User Data:** Even if the database is compromised, passwords remain safe.  
2. **Privacy:** Passwords won’t be stored in plain text (a major security no-no).  
3. **Compliance:** Meets standards like GDPR and PCI-DSS.  
4. **Prevents Password Theft:** Hashed passwords are tough to crack, which keeps things secure.

---

## How Does Login Authentication Work? 🔑

Here’s a quick breakdown of the login process:

1. **User Enters Their Credentials:**  
   - On the login page, users type their email/username and password.

2. **Fetch User Data from the Database:**  
   - The backend checks for the user in the database using the provided email/username.  
   - If no user is found, the system responds: *"User does not exist."*

3. **Compare Encrypted Passwords:**  
   - The system processes the entered password using the same hashing algorithm (like bcrypt).  
   - The hashed password is then compared with the one stored in the database.  
   - If the hashes match, login succeeds. If not, the user gets an error.  

**Fun fact:** Passwords are not "decrypted" because hashing is a one-way process. Instead, hashes are matched!

---

## Steps for Milestone 7 📝

1. **Build the Login Endpoint:**  
   - Accept user credentials (email/username and password).  
   - Retrieve the user’s data from the database.  

2. **Validate the Password:**  
   - Use bcrypt (or a similar library) to hash the input password.  
   - Compare the hashed password to the stored one.  
   - Authenticate the user if they match.  

---

## * Milestone 8 *
In **Milestone 8**, we’ll build a **reusable card component** and design a **homepage** to display product cards.

---

## 🎯 Goals
- Create reusable **card components**.
- Dynamically display cards on the homepage.

---

## Why Card Components?
- **Show Products Clearly**: Neat and appealing display.  
- **Reusable Design**: Use across pages.  
- **Better UX**: Simplifies browsing.  
- **Organized Layout**: Clean homepage structure.

---

## Steps

### 1. Build the Card Component
- Add props for product **name**, **image**, and **price**.

### 2. Design Homepage Layout
- Use **grid** or **flexbox** for a neat arrangement of cards.

---
# 📦 Product Form Creation (Milestone 9)
# Milestone **9**

---

## 🤔 Why Build a Product Form?  
- The product form is crucial for collecting detailed information about each product.  
- These details will be stored in the database and displayed on the product homepage we created in the previous milestone.  
- This task forms the foundation of your product management feature.  

---

## 📝Complete Milestone 9  

1. **Create the Form for Products**  
   - Design a frontend form that collects all the necessary product details (e.g., name, price, description).  

2. **Handle Multiple Images**  
   - Add functionality to allow users to upload multiple product images.  

---
# 🛠️ Mongoose Schema and Endpoint Creation (Milestone 10)

# **Milestone 10,** 

---

## 📚 What I have Done:  

### **1. Product Schema**  
- Define the structure for your product data, including fields like:  
  - **Name**: The name of the product.  
  - **Description**: A short overview of the product.  
  - **Price**: The product price.  
  - **Image URLs**: URLs for product images.  
- Add **validations** for each field, such as:  
  - Making required fields mandatory.  
  - Ensuring correct data types (e.g., strings, numbers).  

### **2. Endpoint Creation**  
- Build a `POST` endpoint that will:  
  1. Accept product data from the frontend.  
  2. Validate the incoming data using the schema.  
  3. Save the valid data into your MongoDB database.  

---

## 🔒 Why Validation Matters  

- **Data Integrity**: Ensures only clean, accurate, and valid data gets stored in the database.  
- **Error Prevention**: Helps catch mistakes early, improving application reliability.  

---
# Milestone 11: Fetch and Display Products 📝

## Overview
In this milestone, we will implement an API endpoint to send all product data to the frontend. On the frontend, we will fetch this data and dynamically render it using the Product Card component.

## Steps to Complete Milestone 11

### Backend (API Endpoint)
1. Create a new API route in your backend server to fetch all product data.
2. Query the database to retrieve all products.
3. Send the product data as a JSON response.

#### Example (Node.js with Express & MongoDB)
```javascript
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products" });
    }
});
```

### Frontend (Fetching Data & Displaying Products)

1. Write a function to fetch product data from the API.
2. Store the fetched data in a state variable.
3. Pass the data to the Product Card component and render it dynamically.

#### Example (React)
```javascript
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            {products.map(product => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
```

### Product Card Component
Ensure that the `ProductCard` component correctly receives and displays the product data.

```javascript
const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductCard;
```

## Summary
✅ Created an API endpoint to fetch all products.
✅ Implemented a function to retrieve product data in the frontend.
✅ Displayed the products dynamically using the `ProductCard` component.

Milestone 11 complete! 🎉

---

# Milestone 12: My Products Page 🌟

## Milestone 12! 🌟

In this milestone, we will create a "My Products" page that displays all the products added by a specific user based on their email. We will write an API endpoint that fetches products associated with the logged-in user's email, stored in MongoDB.

--

## Steps for Milestone 12 📝

### Backend (Filtering Products by User Email)
1. Create a new API route in the backend to fetch products filtered by the user's email.
2. Query MongoDB to retrieve products that match the logged-in user's email.
3. Send the filtered product data as a JSON response.

#### Example (Node.js with Express & MongoDB)
```javascript
app.get('/api/my-products', async (req, res) => {
    try {
        const { email } = req.query;
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }
        const products = await Product.find({ userEmail: email });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products" });
    }
});
```

### Frontend (Fetching and Displaying User-Specific Products)

1. Write a function to fetch product data for the logged-in user.
2. Store the fetched data in a state variable.
3. Pass the data to the Product Card component and render it dynamically.

#### Example (React)
```javascript
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const MyProducts = ({ userEmail }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchMyProducts = async () => {
            try {
                const response = await fetch(`/api/my-products?email=${userEmail}`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        if (userEmail) {
            fetchMyProducts();
        }
    }, [userEmail]);

    return (
        <div>
            {products.map(product => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    );
};

export default MyProducts;
```

### Product Card Component
Ensure that the `ProductCard` component correctly receives and displays the product data.

```javascript
const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductCard;
```

## Summary
✅ Created an API endpoint to fetch user-specific products.
✅ Implemented a function to retrieve filtered product data in the frontend.
✅ Displayed the products dynamically using the `ProductCard` component.

This lesson helps in understanding how to filter data with specific constraints and send it to the client efficiently. 🎯

Milestone 12 complete! 

---


# Milestone 13 - Edit Uploaded Products 🌟

Today, we will add functionality to edit the uploaded products. We will add an edit button and then write a backend endpoint to update the new details inside the MongoDB database.

## Learning Goals 🎯

- How to write an endpoint that updates existing data in MongoDB.  
- How to auto-fill the form with previous data and provide an option to edit.

## Steps for Milestone 13 📝

1. Write an endpoint that receives new data and updates the existing data inside MongoDB.  
2. In the frontend, add an edit button to the product card.  
3. When the edit button is clicked, send the existing data to the form, auto-fill it, and allow editing.  
4. Save the updated data back to the database. 


---

# Milestone 14 - Delete Products from MongoDB 🗑️

In this milestone, we will implement functionality to delete a product using its specific ID from MongoDB.

## Learning Goals 🎯


- How to write an endpoint that deletes a product using its ID from MongoDB.

## Steps for Milestone 14 📝

1. Write an endpoint that deletes data from MongoDB using the product ID.  
2. In the frontend, add a delete button to the product card.  
3. When the delete button is clicked, send the product ID to the server endpoint.  

**Note:** This lesson will help you understand the delete operation in detail.  

---

# Milestone 15: Navigation Component 📝

### 1. Create a New `Nav` Component
- The `Nav` component should contain links to the following pages:
  - Home
  - My Products
  - Add Product
  - Cart

### 2. Make the Navbar Responsive
- Ensure the `Nav` component is fully responsive across all screen sizes.
- Use CSS media queries or a framework like Tailwind CSS or Bootstrap for styling.

### 3. Add the `Nav` Component to All Pages
- Include the `Nav` component in all pages of the application.
- Implement smooth navigation to ensure a seamless user experience.

## Learning Outcomes
- Understand  to create a navigation bar in a web application.
- Learn to implement responsive design for better usability.
- Enhance your skills in linking multiple pages for smooth navigation.

---

# Milestone 16 - Product Info Page  

### will create a product info page that displays all the product data, allows users to choose the quantity, and includes an "Add to Cart" button.  

## Learning Goals 🎯  
By the end of this milestone:  
- How to create a new page to display each product.  
- How to add a quantity selector and an "Add to Cart" button.  

## Steps for Milestone 16 📝  
1. Create a new page that displays all the product data.  
2. Implement a quantity selector for each product.  
3. Add an "Add to Cart" button to allow users to add products with the selected quantity.


---

# Milestone 17: Cart Functionality

## Overview
In this milestone,work on implementing cart functionality. The goal is to store product details in a user's cart and create an endpoint to receive and store these details in the database.

## Steps for Milestone 17 📝

### 1. Edit the User Schema to Store Cart Products
- Modify the user schema to include a field that will hold product details in the cart.

### 2. Write the Cart Schema to Store Products
- Create a new schema for the cart that can store product details such as product ID, quantity, and other necessary attributes.

### 3. Write an Endpoint to Receive and Store Product Details in the Cart
- Create a new endpoint that will receive product details from the frontend and store them in the database, specifically in the cart.

---

# Milestone 18: Cart Functionality - Backend Endpoints

## Overview
In this milestone, work on backend functionality for the cart. The goal is to create endpoints that handle requests from the cart page and retrieve product details for a user’s cart.

## By the End of This Milestone,

- Create an endpoint to receive requests from the cart page.
- Create a backend endpoint to fetch all the products inside the cart based on the user's email.

## Steps for Milestone 18 📝

### 1. Create a Backend Endpoint for Cart Page
- Implement an endpoint that will receive requests from the frontend (cart page) and store/update products in the user's cart.

### 2. Write an Endpoint to Get Products Inside Cart for a User
- Create a new endpoint that will fetch and return all the products inside the cart for a specific user, identified by their email.

---






