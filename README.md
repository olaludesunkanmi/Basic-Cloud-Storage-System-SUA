# Basic Cloud File Storage System
This is a basic cloud file storage system.

### Required Features
1. User can sign up.
2. User can create file.
3. User can read file created.
4. User can update file created.
5. User can delete file created.
6. User can read the logs in the folder created




### API Routes
S/N | Verb   | Endpoint         | Description                    |
---:| -------|------------------|--------------------------------|
  1 | Post   | /user            | Create a user account          |              |
  3 | Get    | /file            | Read a file                    |
  4 | Post   | /file            | Create a file                  |
  5 | Put    | /file            | Update a specific file content |
  6 | Delete | /file            | Delete a specific file         |