# URL Shortener Backend

A simple backend application for a URL shortener service built with Node.js and Express.

## Features
- Shorten long URLs into short, unique identifiers.
- Redirect users from a short URL to the original long URL.
- Easily extendable with expiration, analytics, or custom short IDs.

## Endpoints

### Shorten a URL
**BaseUrl** `/url`

- **Request Body** (JSON):
  {
    "originalURL": "https://example.com/some-really-long-url"
  }

- **Response** (JSON):
  {
  "message": "URL already shortened" | "Short URL created successfully",
    "shortURL": "short url",
    "urlData": {
        "originalURL": "https://online-courses.club/",
        "shortId": "_fUTkDimm",
        "clicks": 0,
        "expiresAt": "2025-01-28T20:09:43.145Z",
        "createdAt": "2025-01-27T20:10:06.757Z",
    }
  }