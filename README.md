# LOGIN/REGISTER

URL : loginregisteryomans.netlify.app

## Intro

All pages file is saved to folder based on route, there is no index.html on default folder. 404.html is used to redirect to default route. If there is no index.html on default folder, it will routing to 404.html.

## Pages 
- Login Page
- Register Page
- Admin Page

## Login Page
Email input: email must be a valid email format

Password input: password must meet the requirements. Password must be at least one of Uppercase Letter, Lowercase Letter, and Number

Email and Password requirement is live-check method using JavaScript oninput

If email and password didn't meet the requirement, the button can't be clicked

Email and Password data is saved to local storage. If we clear the data on local storage, it will be generate default value (email: admin@gmail.com, pass: Admin123).

If email is not in local storage, it will return error

## Register Page
Email input: email must be a valid email format

Password input: password must meet the requirements. Password must be at least one of Uppercase Letter, Lowercase Letter, and Number

Email and Password requirement is live-check method using JavaScript oninput

If email and password didn't meet the requirement, the button can't be clicked

After Click Sign Up, email and password data will be stored at local storage 

Password Match Check also using JavaScript oninput

## Admin Page

All of admin data is stored at local storage

CRUD feature is available on admin page

At admin page also display the user name based on email

User email is stored to session storage when log in

There is default data if data on local storage is null

We can't enter the admin page if not signed in. if you type the admin page link without log in, it will redirect to log in page