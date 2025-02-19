# Weather Api Experimenting with Redis 
## Overview
The Weather API is a simple RESTFUL service that provides real-time weather data for cities worldwide. It integrates caching with REDIS to enhance performance and reduce external API calls.

## Features
- Fetch current weather data for any city
- Uses REDIS caching to store recent API responses, improving response time and efficiency.
- Built with Node.js and Express.js.
- Fetches data from an external weather API(Visual Crossing Api).

## Tech Stack
- Node.js
- Express.js
- Redis(Caching)
- Axios (For external Api call)
- Dotenv(For environmental variables)

# Installation
## Prerequisities
Ensure you have the following installed:
- Node.js
- Redis

# Setup
1. Clone the repsoitory
```bash
    git clone [https://github.com/idongesit98/Weather-Api.git]
    cd into the directory
```
2. npm install 
3. Set up your environmental variables: Create a .env in the root directory and add:
- WEATHER_API_KEY = your weather api key
- REDIS_URL = redis url
- PORT = 8000
4. Start the Redis Server
5. Run the API

# Usage
## Get Weather Data
```
    GET /weather/:city
    <--E.g-->
    GET /weather/london
```    

## Caching Mechanism
- The Api first checks REDIS for cached weather data
- If data is cached, it returns the stored Response
-  If not cached, it fetches data from the external weather API,stores it in Redis, and then returns the response.

# Improvements and Future Enhancements
- Implement historical weather data storage
- Add support for forecast predictions
- Enhance error handling and logging
- Testing (Unit testing)