# E-Commerce Website

## Overview
This project is a fully functional e-commerce website built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).
It features comprehensive CRUD (Create, Read, Update, Delete) operations for managing products, user authentication, and an admin panel for administrative tasks.

## Features
- *User Authentication*: Secure user login and registration using JWT (JSON Web Token).
- *Product Management*: Add, view, update, and delete products.
- *Shopping Cart*: Add products to the cart and manage quantities.
- *Checkout Process*: Seamless checkout process integrating with payment gateways.
- *Order Management*: Users can view their order history and status updates.
- *Admin Panel*: Dedicated admin interface for managing users, products, and orders.
- *Responsive Design*: Fully responsive design ensuring usability on both desktop and mobile devices.

## Technologies Used
- *MongoDB*: Database for storing product and user data.
- *Express.js*: Backend framework for handling server-side logic.
- *React.js*: Frontend library for building dynamic user interfaces.
- *Node.js*: Runtime environment for executing JavaScript code on the server side.
  
## Installation
1. *Clone the repository:*
   bash
   git clone https://github.com/yourusername/e-commerce-website.git
   
2. *Navigate to the project directory:*
   bash
   cd e-commerce-website
   
3. *Install server dependencies:*
   bash
   cd backend
   npm install
   
4. *Install client dependencies:*
   bash
   cd ../frontend
   npm install
   
5. *Configure environment variables:*
   Create a .env file in the root of the backend directory and add the following:
   
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PAYPAL_CLIENT_ID=your_paypal_client_id
   STRIPE_SECRET_KEY=your_stripe_secret_key
   

## Usage
1. *Run the server:*
   bash
   cd backend
   npm start
   
2. *Run the client:*
   bash
   cd frontend
   npm start
   
3. *Access the application:*
   Open your browser and go to http://localhost:5000.

## Contributing
Contributions are welcome! Please fork this repository and submit pull requests for any enhancements, bug fixes, or new features.

## License
This project is licensed under the MIT License.

## Contact
For any questions or suggestions, feel free to reach out via email at bhatabhishek126@gmail.com.

---
