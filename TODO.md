## Stackoverflow Light - Backend

### Functional requirements
- [x] The app should make it possible to ask questions and allow other users to answer them
- [x] People can upvote or downvote questions (Patch)
- [ ] The most popular questions are at the top. You can define your own definition of popularity.
- [x] When opening the application, the user expects to see a list of questions asked. Questions should also visualize the number of answers & votes.
- [x] Users can click on questions and see a detailed screen of the questions with the answers given by other users. You can also upvote/downvote answers
- [x] Users can not pose questions or give answers without authenticating
- [ ] Nice to have: the ability to push real-time updates for questions, answers & votes to the client
- [ ] Allow users to view some metrics regarding:
  - [ ] Most popular day of the week
  - [ ] Average votes, questions, answers/users
  - [ ] Total questions, votes, and answers
- [x] The ability to improve the API without breaking the client’s applications when new updates are rolled out
- [x] Any kind of application should be able to interact via a REST interface

### Technical Requirements
- [x] Provide technical architecture of the platform and a fluent way to present the created API
- [x] Use git during development and provide us read-only access to the repository or the repositories
- [x] You’re free to choose which frameworks, libraries, databases, and/or services to engineering the solution, but we expect you to be able to defend the choices you’ve made.
- [ ] Make use of an OpenID connect provider for authentication
- [x] It must be possible to deploy the application on Google Cloud, Azure or AWS. Guide us through the possible services that you will need to run your solution in the cloud.
- [x] Ability to scale up or down based on activity and keep caching in mind.
- [x] Use Docker and/or docker-compose to run your solution locally. You may assume an internet connection is present in order to integrate with other services.

### Additional Guidelines & Tips
- [x] The technical structure/architecture of the application is by far the most important part of this exercise. Make sure your code is clean, well-tested and well-structured.
- [x] Don’t lose too much time on details.
- [x] Guide us through your code, the technical design choices (e.g. in a README) and the deployment process. We should be able to deploy your solution with relative ease.
