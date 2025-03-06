# Beluga: Malware Detector Login Page

Beluga is a web application designed to provide a secure and user-friendly login interface for a malware detection system. This project focuses on the authentication aspect, ensuring that users can access the malware detection features safely and efficiently.

## Features

- **User Authentication:** Secure login functionality using Firebase Authentication.
- **Responsive Design:** Optimized for various devices, ensuring a seamless user experience across desktops, tablets, and mobile phones.
- **Integration-Ready:** Easily integrable with existing malware detection backends or services.

## Demo

Experience the live application: [Beluga Login Page](https://beluga-login.vercel.app)

## Getting Started

To set up the project locally, follow these steps:

### Prerequisites

Before setting up the project, install the following dependencies:

- **[Node.js](https://nodejs.org/):** Follow the [official installation guide](https://nodejs.org/en/download/).
- **[npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)** or **[yarn](https://classic.yarnpkg.com/en/docs/install/)** for package management.
- **[Tailwind CSS](https://tailwindcss.com/):** Follow the [official setup guide](https://tailwindcss.com/docs/installation).
- **[Vercel CLI](https://vercel.com/docs/cli):** Follow the [installation guide](https://vercel.com/docs/cli) to deploy the project.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aryapg/beluga_login.git
   cd beluga_login
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

   Alternatively, install dependencies using the provided `requirements.txt`:

   ```bash
   npm install $(cat requirements.txt)
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your Firebase configuration details:

   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

   Replace the placeholder values with your actual Firebase project credentials. Refer to the [Firebase setup guide](https://firebase.google.com/docs/web/setup) for more details.

4. **Start the development server:**

   Using npm:

   ```bash
   npm start
   ```

   Or using yarn:

   ```bash
   yarn start
   ```

   The application will be accessible at `http://localhost:3000`.

## Deployment

Beluga can be deployed on various hosting platforms. For instance, to deploy on Vercel:

1. **Install the Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Log in to Vercel:**

   ```bash
   vercel login
   ```

3. **Deploy the application:**

   ```bash
   vercel
   ```

   Follow the prompts to complete the deployment.

## Technologies Used

- **React:** Frontend library for building user interfaces.
- **Firebase Authentication:** Secure authentication service.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **PostCSS:** Tool for transforming CSS with JavaScript plugins.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/your_feature_name
   ```

3. Make your changes.
4. Commit your changes:

   ```bash
   git commit -m 'Add your feature'
   ```

5. Push to the branch:

   ```bash
   git push origin feature/your_feature_name
   ```

6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, please contact [aryapg](https://github.com/aryapg).

---

*Note: Ensure that your Firebase project is properly set up and that the authentication methods you intend to use are enabled in the Firebase console.*

