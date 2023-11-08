# EMAIL TESTER APP

### Requirements
- Docker
- Env file with following variables
  - PORT
  - SENDINBLUE_USER_EMAIL
  - SENDINBLUE_USER_PASSWORD
  - SMTP_HOST
  - RECIPIENT_EMAIL

### How to start
- Run `docker-compose up --build`
- Run `curl localhost:3030/health` to check if api is running
- Paste the email template in template.html
- Run `curl localhost:3030/send_email`



