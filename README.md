Live Link-https://dragon-news-resources-iota.vercel.app/category/01

Dragoon News is a responsive front-end web application build with react that delivers real-time news articles on a variety of topics, complete with user authentication for personalized access. Built with modern web technologies, the app ensures a seamless user experience across devices and secure login functionality using firebase authentication.let's build the project together. 😎

Base URL
The base URL for the API is: https://openapi.programming-hero.com/api

Endpoints
Get All News Categories

URL: /news/categories
Full URL: https://openapi.programming-hero.com/api/news/categories
Method: GET
Description: Retrieves a list of all available news categories.
Get All News in a Category

URL Format: /news/category/{category_id}
Full URL Example: https://openapi.programming-hero.com/api/news/category/01
Method: GET
Description: Retrieves all news articles within a specified category.
Path Parameter:
category_id (string): The unique ID of the category.
Get News Detail by ID

URL Format: /news/{news_id}
Full URL Example: https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a
Method: GET
Description: Retrieves detailed information about a specific news article.
Path Parameter:
news_id (string): The unique ID of the news article.
