pipeline {
  agent any

  environment {
    DOCKER_IMAGE = "football-standings-ui"
    IMAGE_TAG = "v1.0.${env.BUILD_NUMBER}"
    REGISTRY = "kalesapna"
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/Sapna-Kale/football-standings-ui.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build UI') {
      steps {
        sh 'npm run build -- --prod'
      }
    }

    stage('Docker Build') {
      steps {
        sh "docker build -t $DOCKER_IMAGE:$IMAGE_TAG ."
      }
    }

    stage('Push to Registry') {
      steps {
        sh "docker tag $DOCKER_IMAGE:$IMAGE_TAG $REGISTRY/$DOCKER_IMAGE:$IMAGE_TAG"
        sh "docker push $REGISTRY/$DOCKER_IMAGE:$IMAGE_TAG"
      }
    }
  }
}
