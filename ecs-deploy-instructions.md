# AWS ECS (Fargate) Deployment Instructions

1. Create two ECR repositories: one for the backend and one for the frontend.
2. Add the following GitHub secrets to your repository:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_REGION`
   - `ECR_REPOSITORY_BACKEND`
   - `ECR_REPOSITORY_FRONTEND`
3. Update `ecs-task-definition.json` with your actual ECR registry and repository names.
4. Create an ECS cluster and a Fargate service using the task definition.
5. Set up a load balancer (optional, but recommended for production).
6. Update your service/task to use the latest image tags after each deployment.

Refer to AWS ECS documentation for detailed steps or use the AWS Console for setup.
