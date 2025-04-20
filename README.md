# NITP Resources

## Overview

NITP Resources is a web platform for **National Institute of Technology Patna (NITP)** students, providing access to academic resources such as notes, previous year question papers, syllabi, and other study materials, organized by academic year and department.

**Website URL**: [https://nitpresources.deepakportfolio.me/](https://nitpresources.deepakportfolio.me/)
**portfolio URL**: [https://deepakportfolio.me/](https://deepakportfolio.me/)

## Features

- **Organized Resources**: Browse and download notes, question papers, and syllabi for 1st to 4th-year students across NITP departments.
- **Downloadable Files**: Access PDF files and other resources for offline use.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Community-Driven**: A contributors section to recognize those sharing resources.

## Tech Stack

- **Backend**: [Node.js](https://nodejs.org/) for server-side logic and API handling.
- **Frontend**: [EJS (Embedded JavaScript)](https://ejs.co/) for dynamic templating.
- **Database**: [MongoDB](https://www.mongodb.com/) for storing resource metadata and other data.
- **File Storage**: [Cloudinary](https://cloudinary.com/) for hosting resource files (e.g., PDFs, images).
- **Styling**: Custom CSS.
- **Deployment**: Hosted on [Microsoft Azure](https://azure.microsoft.com/) for production.
- **API**: Custom-built API (details to be revealed soon).

## API Information

This project uses a custom API to enhance functionality. Detailed API documentation and access information will be revealed soon. 
## Installation and Setup

For developers looking to run the project locally. No Microsoft Azure account is required for local development.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/) (locally installed or use a cloud instance like [MongoDB Atlas](https://www.mongodb.com/atlas))
- [Cloudinary](https://cloudinary.com/) account (required for file storage)

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Deepak-kumar-2023/nitpresources.git
   cd nitpresources
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up MongoDB**:

   - Install MongoDB locally or create a free [MongoDB Atlas](https://www.mongodb.com/atlas) account.
   - Start the MongoDB server locally (`mongod`) or obtain the connection string from MongoDB Atlas.

4. **Set Up Cloudinary**:

   - Create a free [Cloudinary](https://cloudinary.com/) account.
   - Obtain your Cloudinary credentials (Cloud Name, API Key, API Secret) from the Cloudinary dashboard.

5. **Set Environment Variables**:

   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=3000
   MONGODB_URI=[your-mongodb-connection-string]
   CLOUDINARY_CLOUD_NAME=[your-cloudinary-cloud-name]
   CLOUDINARY_API_KEY=[your-cloudinary-api-key]
   CLOUDINARY_API_SECRET=[your-cloudinary-api-secret]
   API_KEY=[your-api-key-if-required]
   ```

   - Replace `[your-mongodb-connection-string]` with your local MongoDB URI (e.g., `mongodb://localhost:27017/nitp-resources`) or Atlas URI.
   - Replace Cloudinary variables with your credentials from the Cloudinary dashboard.
   - Contact the project maintainer for API key details if needed for local testing.

6. **Run the Development Server**:

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Deployment

For production deployment, the project is hosted on [Microsoft Azure](https://azure.microsoft.com/). To deploy:

- Use [Azure App Service](https://azure.microsoft.com/services/app-service/) or Azure Web Apps.
- Configure via Azure CLI:

  ```bash
  az webapp up --name nitp-resources --resource-group NITPResources --sku B1
  ```

- Set environment variables (e.g., `MONGODB_URI`, Cloudinary credentials, API keys) in the Azure portal.
- Refer to [Azure documentation](https://docs.microsoft.com/azure/) for detailed steps.

## Contributing

Contributions from the NITP community are welcome! Add resources, fix bugs, or enhance features.

### How to Contribute

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add your message"
   ```

4. Push to the branch:

   ```bash
   git push origin feature/your-feature
   ```

5. Open a Pull Request with a clear description.

### Guidelines

- Verify resource accuracy (e.g., notes, papers).
- Follow the existing code style (e.g., EJS, MongoDB schema, Cloudinary integration).
- Test changes locally with MongoDB and Cloudinary configured before submitting.


## SEO and Analytics

To improve visibility and track usage:

- **SEO**: Meta tags and structured content are implemented. Submit to [Google Search Console](https://search.google.com/search-console) for indexing.
- **Sitemap**: Include a `sitemap.xml` for search engine crawling.


## Future Improvements

- Add search functionality for quick resource lookup.
- Implement user authentication for secure resource uploads.
- Create a blog section for NITP study tips and exam guides.
- Enhance SEO with keyword research and backlinks.

## Contact

For feedback, queries, or resource contributions:

- **Email**: [your-email@example.com](mailto:deepakk.ug23.cs@nitp.ac.in) (replace with your email).



## Acknowledgments

- Thanks to NITP students and contributors for sharing academic resources.
- Built with ❤️ by [Deepak].
