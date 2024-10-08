# EverestShop

EverestShop is my first e-commerce smartphone web application, built using Node.js, Express, Bootstrap, EJS, and MongoDB. This project serves as a learning experience in developing a full-stack web application with modern technologies.

## Features

- Browse smartphone products
- User authentication
- Shopping cart functionality
- Responsive design using Bootstrap

## Technologies Used

- Node.js
- Express.js
- MongoDB
- EJS (Embedded JavaScript templates)
- Bootstrap
- Docker

## Prerequisites


- Docker and Docker Compose
- Having a basic understanding of Node.js and MongoDB

## Setup and Installation

Follow these steps to get your development environment set up:

1. Clone the repository and navigate to the project directory:
   ```
   git clone https://github.com/rustybrozen/EverestShop && cd EverestShop
   ```


2. Create env file or use the default env file in root:
   ```
   mv .env_default .env
   ```


3. Build the Docker containers and Start the application:
   ```
   sudo docker compose up -d
   ```



## Usage

After setting up the project, you can access the application by opening a web browser and navigating to `http://localhost:<port>`, where `<port>` is the port number specified in your configuration. (Default is 3000)

## Contributing

Contributions to EverestShop are welcome. Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
