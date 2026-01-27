const http = require("http")
const fs = require("fs");
const path = require("path");

// Mock data for courses
const courses = [
    // Frontend
    { id: 1, title: "HTML & CSS", description: "Learn the basics of building web pages with HTML and CSS.", image: "http://localhost:8080/cover/HTMLandCSS.jpg" },
    { id: 2, title: "JavaScript", description: "Master JavaScript fundamentals and DOM manipulation.", image: "http://localhost:8080/cover/JavaScript.png" },
    { id: 3, title: "React", description: "Build dynamic front-end applications using React.", image: "http://localhost:8080/cover/React.jpg" },
    { id: 4, title: "Vue.js", description: "Learn Vue.js for building interactive UIs.", image: "http://localhost:8080/cover/Vuejs.png" },
    { id: 5, title: "Angular", description: "Angular framework for large-scale front-end applications.", image: "http://localhost:8080/cover/Angular.jpg" },
    { id: 6, title: "Svelte", description: "Build fast and reactive apps with Svelte.", image: "http://localhost:8080/cover/Svelte.jpg" },
    { id: 7, title: "Next.js", description: "React framework for SSR and static site generation.", image: "http://localhost:8080/cover/next-js.png" },

    // Backend
    { id: 8, title: "Node.js", description: "Server-side JavaScript with Node.js.", image: "http://localhost:8080/cover/nodejs.jpg" },
    { id: 9, title: "Express.js", description: "Build RESTful APIs with Express.js.", image: "http://localhost:8080/cover/Expressjs.jpg" },
    { id: 10, title: "Django", description: "Python-based web framework for backend development.", image: "http://localhost:8080/cover/django.jpg" },
    { id: 11, title: "Flask", description: "Lightweight Python framework for web apps and APIs.", image: "http://localhost:8080/cover/Flask.png" },
    { id: 12, title: "Spring Boot", description: "Java framework for building production-ready backend services.", image: "http://localhost:8080/cover/SpringBoot.png" },

    // Database
    { id: 13, title: "MySQL", description: "Relational database fundamentals with MySQL.", image: "http://localhost:8080/cover/MySQL.jpg" },
    { id: 14, title: "PostgreSQL", description: "Learn SQL and relational database design with PostgreSQL.",image: "http://localhost:8080/cover/PostgreSQL.png" },
    { id: 15, title: "MongoDB", description: "NoSQL database for storing JSON-like documents.",image: "http://localhost:8080/cover/MongoDB.jpg"},
    { id: 16, title: "Redis", description: "In-memory database for caching and fast data operations.",image: "http://localhost:8080/cover/Redis.jpg" },

    // Mobile
    { id: 17, title: "React Native", description: "Build cross-platform mobile apps with React Native.",image: "http://localhost:8080/cover/ReactNative.jpg" },
    { id: 18, title: "Flutter", description: "Cross-platform mobile apps using Flutter and Dart.", image: "http://localhost:8080/cover/Top-Flutter-App-Examples.webp" },
    { id: 19, title: "Swift", description: "iOS development using Swift programming language.",image: "http://localhost:8080/cover/Swift.jpg" },
    { id: 20, title: "Kotlin", description: "Android development with Kotlin.",image: "http://localhost:8080/cover/Kotlin.jpg"},

    // DevOps & Cloud
    { id: 21, title: "Docker", description: "Containerization of applications using Docker.", image: "http://localhost:8080/cover/Docker.png" },
    { id: 22, title: "Kubernetes", description: "Orchestrate containerized apps with Kubernetes.", image: "http://localhost:8080/cover/Kubernetes.jpg" },
    { id: 23, title: "AWS", description: "Cloud computing services with Amazon Web Services.", image: "http://localhost:8080/cover/AWS.jpg" },
    { id: 24, title: "Azure", description: "Microsoft cloud platform for hosting and services.", image: "http://localhost:8080/cover/Azure.jpg" },
    { id: 25, title: "CI/CD", description: "Continuous integration and deployment pipelines.", image: "http://localhost:8080/cover/CI-CD.jpg" },

    // Other important topics
    { id: 26, title: "TypeScript", description: "Typed JavaScript for better scalability and maintainability.", image: "http://localhost:8080/cover/TypeScript.png" },
    { id: 27, title: "GraphQL", description: "Query language for APIs and runtime for executing those queries.", image: "http://localhost:8080/cover/GraphQL.jpg" },
    { id: 28, title: "Web Security", description: "Learn about securing web applications against attacks.", image: "http://localhost:8080/cover/WebSecurity.jpg" },
    { id: 29, title: "Testing & Jest", description: "Automated testing of applications using Jest and other tools.", image: "http://localhost:8080/cover/TestingJest.png" },
    { id: 30, title: "Machine Learning", description: "Introduction to ML concepts for software engineers.", image: "http://localhost:8080/cover/MachineLearning.jpg" },
];

function serveStaticFile(res, filePath) {
    fs.readFile(filePath, (err, data) => {
        if(err){
            res.writeHead(404);
            res.end("File not found");
        } else {
            const ext = path.extname(filePath).toLowerCase();
            let contentType = "application/octet-stream";
            if(ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";
            else if(ext === ".png") contentType = "image/png";
            else if(ext === ".gif") contentType = "image/gif";
            res.writeHead(200, {"Content-Type": contentType});
            res.end(data);
        }
    });
}

// Create a simple HTTP server to serve static files and JSON data
http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Content-Type", "application/json");

    if (req.url.startsWith("/cover/")) {
        const filePath = path.join(__dirname, "public", req.url); // مسیر واقعی فایل
        return serveStaticFile(res, filePath);
    }

    if (req.url === "/courses") {
        // Return all courses
        res.end(JSON.stringify(courses));
    } else if (req.url === "/courses/1") {
        res.end(JSON.stringify(courses[0]));
    } else if (req.url === "/courses/2") {
        res.end(JSON.stringify(courses[1]));
    } else if (req.url === "/courses/3") {
        res.end(JSON.stringify(courses[2]));
    } else {
        res.end(JSON.stringify({message: "404 Not Found"}));
    }
}).listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});