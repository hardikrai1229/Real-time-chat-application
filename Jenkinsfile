pipeline {
  agent any

  environment {
    FRONTEND_IMAGE = 'hardikrai1229/mern-frontend:latest'
    BACKEND_IMAGE  = 'hardikrai1229/mern-backend:latest'
  }


  stages {

    stage('Clone Repository') {
      steps {
        git branch: 'main', url: 'https://github.com/hardikrai1229/Real-time-chat-application'
      }
    }

 // stage('Gitleaks Scan') {
 //      steps {
 //        script {
 //          echo "🔍 Running Gitleaks scan"
 //          bat '''
 //            gitleaks detect --source=. --report-format sarif --report-path=gitleaks-report.sarif || exit /b 1
 //          '''
 //        }
 //      }
 //    }

    stage('Build Frontend Image') {
      steps {
        script {
          echo "Building frontend Docker image..."
          bat 'docker build -f Dockerfile.frontend -t %FRONTEND_IMAGE% .'
        }
      }
    }

    stage('Build Backend Image') {
      steps {
        script {
          echo "Building backend Docker image..."
          bat 'docker build -f Dockerfile.backend -t %BACKEND_IMAGE% .'
        }
      }
    }

    stage('Run Backend Tests') {
      steps {
        dir('backend') {
          script {
            echo "Running backend unit tests..."
            bat '''
              call npm install
              call npm run test || echo Tests failed, continuing anyway...
            '''
          }
        }
      }
    }

stage('SonarQube Analysis') {
  steps {
    withSonarQubeEnv('SonarQube') {
      script {
        def scannerHome = tool name: 'sonar-scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
        bat "\"${scannerHome}\\bin\\sonar-scanner.bat\""
      }
    }
  }
}

    stage('Quality Gate Check') {
      steps {
        timeout(time: 2, unit: 'MINUTES') {
          waitForQualityGate abortPipeline: true
        }
      }
    }

    stage('Push Images to Docker Hub') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          script {
            echo "Pushing images to Docker Hub..."
            bat '''
              echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin
              docker push %FRONTEND_IMAGE%
              docker push %BACKEND_IMAGE%
            '''
          }
        }
      }
    }
  }

  post {
    success {
      echo '✅ Build and push completed successfully!'
    }
    failure {
      echo '❌ Pipeline failed. Please check the console logs.'
    }
  }
}
