# AWS ECS (Fargate) Deployment Instructions

1. **Create ECR Repositories**:
   - Create two ECR repositories: one for the backend and one for the frontend.

   ![Create ECR Repositories Screenshot](./screenshots/ECR%20-%20create%20repos.png)
   ![Authenticate ECR Repositories Screenshot](./screenshots/ECR%20-%20push%20repos%201.png)

2. **Add GitHub Secrets**:
   - Add the following GitHub secrets to your repository:
     - `AWS_ACCESS_KEY_ID`
     - `AWS_SECRET_ACCESS_KEY`
     - `AWS_REGION`
     - `ECR_REPOSITORY_BACKEND`
     - `ECR_REPOSITORY_FRONTEND`
     - `AWS_ACCOUNT_ID`
   - These secrets will be used in the GitHub Actions workflow to authenticate and push Docker images to ECR.

     ![GitHub Secrets Screenshot](./screenshots/Github%20-%20Repo%20Secret%20created.png)

3. **Update Task Definition**:
   - Update `ecs-task-definition.json` with your actual ECR registry and repository names.

4. **Create ECS Cluster and Service**:
   - Create an ECS cluster and a Fargate service using the task definition.
   - Note: No load balancer was set up. Services will be accessible directly via the public IPs of the tasks.
   ![Create ECS Cluster Screenshot](./screenshots/ECS%20-%20Cluster%20ready.png)
   ![Create ECS Service Screenshot](./screenshots/ECS%20-%20create%20Service.png)

5. **Deploy Updated Images**:
   - After making changes to the application, build and push the updated Docker images:

     ```bash
     docker build -t <ecr-repo-backend> ./backend
     docker build -t <ecr-repo-frontend> ./frontend
     docker push <ecr-repo-backend>
     docker push <ecr-repo-frontend>
     ```

   - Update the ECS service to use the latest image tags:

     ```bash
     aws ecs update-service --cluster <cluster-name> --service <service-name> --force-new-deployment
     ```

6. **Access the Services**:
   - Use the public IPs of the ECS tasks to access the services:
     - Backend API: `http://<task-public-ip>:3000`
     ![Backend API Screenshot](./screenshots/NodeJs%20backend%20-%20via%20network%20address.png)
     - Frontend: `http://<task-public-ip>:80`
     ![Frontend Screenshot](./screenshots/React%20App%20frontend%20-%20via%20network%20address.png)
     - Prometheus: `http://<task-public-ip>:9090`
     ![Prometheus Screenshot](./screenshots/Prometheus%20UI%20-%20via%20network%20address.png)
     - Grafana: `http://<task-public-ip>:3001`
     ![Grafana Screenshot](./screenshots/Grafana%20UI%20-%20via%20network%20address.png)

Refer to AWS ECS documentation for detailed steps or use the AWS Console for setup.
