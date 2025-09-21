# Smart Content Aggregator API

## Overview
This is a backend API for a **content aggregator service**, built as part of a technical assessment. It allows users to:
- Create and fetch articles  
- Create user profiles  
- Record interactions (views/likes)  
- Automatically generate article summaries if one isn’t provided (stretch goal)  

---

## Tech Stack
- **Node.js + Express** → lightweight and flexible framework for building REST APIs.  
- **TypeScript** → ensures type safety and improves code maintainability.  
- **MongoDB + Mongoose** → NoSQL database for flexible schema design and quick prototyping.  
- **dotenv** → to manage environment variables securely.  
- **NLP Service (Custom Rule-Based)** → used to auto-generate summaries when missing.  

---

## Setup Instructions
1. Clone the repo:
   ```bash
   git clone <my-repo-url>
   cd Smart-Content-Aggregator-Api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run MongoDB locally or use MongoDB Atlas.  

4. At the root of your project (same level as package.json, README.md, etc.), create a file named: `.env`

5. Add this inside:
   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/smart-content
   PORT=5000
   ```
6. Start the dev server:
   ```bash
   npm run dev
   ```
7. The API will be available at:
   ```
   http://localhost:5000
   ```

---

## API Endpoints

### Users
- **POST /users** → create user  
  - Request body:
    ```json
    {
      "username": "yusuf",
      "interests": ["tech", "sports"]
    }
    ```

### Articles
- **POST /articles** → create new article  
  - Request body:
    ```json
    {
      "title": "Sample Article",
      "content": "Some article text...",
      "author": "Yusuf",
      "summary": ""   // optional
    }
    ```
  - If `summary` is missing or empty, the system auto-generates one from the content.  

- **GET /articles?limit=10&offset=0** → list articles (paginated)  

- **GET /articles/:id** → get article by ID  

### Interactions
- **POST /interactions** → record user interaction  
  - Request body:
    ```json
    {
      "user_id": "<MongoDB userId>",
      "article_id": "<MongoDB articleId>",
      "interaction_type": "like"
    }
    ```

---

## Stretch Goal: AI-Powered Summary Generation
For the stretch goal, I implemented **Option B: AI-powered summary generation**.  

### Approach:
- When creating an article, if the `summary` field is missing or empty:  
  1. The content is split into sentences.  
  2. The first 1–2 sentences are automatically selected to form a simple summary.  

- Example:  
  **Content:**  
  ```
  Artificial Intelligence is changing how backend systems work. It can generate summaries, recommend content, and optimize queries. If you understand distributed systems and backend architecture, i'm your guy.
  ```  
  **Generated Summary:**  
  ```
  Artificial Intelligence is changing how backend systems work. It can generate summaries, recommend content, and optimize queries.  
  ```

---

## What I Would Do Next
If I had more time, I would:
- Add **unit and integration tests** (Jest + Supertest).  
- Implement **JWT authentication** for securing endpoints.  
- Add **recommendation endpoint** (`/recommendations/:user_id`) based on interests and popular articles.  
- Enhance summary generation with **TF-IDF/TextRank** or integrate external **AI APIs**.  
- Deploy with **Docker + CI/CD pipeline**.  
- Add **logging & monitoring** (Winston, Morgan, or ELK stack).  

---

## Evaluation Checklist
- [x] RESTful API endpoints implemented  
- [x] TypeScript + Node.js + Express used  
- [x] MongoDB schema design completed  
- [x] Stretch goal (AI summary generation) implemented  
- [x] Documentation (this README)  
