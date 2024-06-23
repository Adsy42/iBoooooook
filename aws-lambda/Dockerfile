# Use the official AWS Lambda Node.js 20 base image
FROM public.ecr.aws/lambda/nodejs:20

# Set the working directory to the Lambda task root directory
WORKDIR ${LAMBDA_TASK_ROOT}

# Copy package.json and package-lock.json into the Lambda task root directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the Lambda task root directory
COPY src/ .

# Set the CMD to the Lambda function handler
CMD ["src/index.bookClasses"]