"# Smart-Content-Aggregator-API" 

## Setup Instructions
1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run MongoDB locally or use MongoDB Atlas. 

4. At the root of your project (same level as package.json, README.md, etc.), create a file named: .env

5. And add this inside

   ```
   MONGO_URI=mongodb://127.0.0.1:27017/smart-content
   PORT=5000
   ```
5. Start the dev server:
   ```bash
   npm run dev
   ```
   
   ## API Endpoints
- **POST /users** → create user  
- **POST /articles** → create new article  
- **GET /articles?limit=10&offset=0** → list articles (paginated)  
- **GET /articles/:id** → get article by ID  
- **POST /interactions** → record user interaction  