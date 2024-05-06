# Ping

Ping is a real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) along with Socket.io for real-time messaging. It also utilizes TailwindCSS and Daisy UI for styling.

![Preview](https://github.com/danish101-sohail/Ping/assets/121930033/717cf45d-11b9-4a09-ac9e-142b3cc92478)

## Features

- **Authentication and Authorization:** Ping implements JWT-based authentication and authorization for secure user authentication.
- **Real-time Messaging:** Utilizing Socket.io, Ping enables real-time messaging, allowing users to communicate instantly.
- **Online User Status:** Ping displays the online status of users in real-time, enhancing the user experience.
![image](https://github.com/danish101-sohail/Ping/assets/121930033/fbc00b21-5ca7-4121-a1e1-32eb5a78d6e6)
- **Global State Management:** Zustand is used for global state management, ensuring efficient state handling across the application.
- **Error Handling:** Robust error handling mechanisms are implemented on both the server and client sides to provide a seamless user experience.
- **And Much More:** Ping offers a range of other features aimed at delivering a comprehensive and intuitive chat experience.


## Getting Started

To run Ping locally:

1. Clone the repository: `git clone https://github.com/danish101-sohail/Ping.git`
2. Navigate to the project directory: `cd Ping`
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. Open the application in your browser: `http://localhost:3000`

## .env Setup

To run the application locally, you'll need to set up your .env file. Create a `.env` file in the root directory of the project and add the following variables:

```env
PORT=...
MONGO_URI=...
JWT_SECRET=your_jwt_secret
NODE_ENV=...
```
## Contributing

Contributions are welcome! If you'd like to suggest improvements, report bugs, or contribute new features, please feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
