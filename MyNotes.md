# To add code to GitHub:

A. git add file_name
B. git commit -m "message"
C. git push origin master

1. Parcel is a bundler which is doing Hot Module Replacement (HMR) whenever we save our file using the File Watching Algotrithm made in C++

2. Install Parcel
   npm i -D parcel

3. Run the App
   npx parcel index.html

4. Things that Parcel does: https://parceljs.org/
   => HMR
   => File Watching Algorithm
   => Caching leades to faster build
   => Image Optimization
   => Minimization
   => Bundling
   => Compressing
   => Consistent Hashing
   => Code Splitting
   => Differential Bundling
   => Error Handling
   => Ability to use HTTPS
   => Tree Shaking Algorithm {remove unused code}
   => Different dv and production bundles

5. To run project => npm run start
   Inside package.json
   "start": "parcel index.html",
   "build": "parcel build index.html"

   # npx parcel index.html

   # npx run start

6. JSX is not HTML inside JavaScript.
7. JSX is HTML/XML like syntax only.
8. Execution of JSX:
   JSX Code => React.createElement() => React Element JS Object => HTML Element
9. Babel is inside parcel and installed by parcel only
10. Babel converts JSX Code => React.createElement()
11. There is always camelCase syntax for attributes in JSX
12. Functional Element : A function that returns a piece of JSX code
13. What is Config Driven UI ?
    Config driven UI means if you have some data, then based on this data we will show different components
14. What is Optional Chaining ?
    Optional chaining allows you to read the value of deeply nested properties of an object without throwing an error

    const {attribute1_inside_array,attribute2_inside_array } = food?.array_inside_food

