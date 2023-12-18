pipeline {
    agent any

    environment {
        VM_IP = '10.128.0.6'
        VITE_API_BASE_URL='http://34.36.244.103/'
    }
    triggers {
        pollSCM '* * * * *'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scmGit(branches:[[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/RipanRenaldi25/fe-sid.git', credentialsId: 'github-auth']])
            }
        }
        stage('Build') {
            steps {
                sh '''
                    docker build -t react-build:latest --target=build .
                    docker images
                '''
            }
        }
        stage('Package') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-auth', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh '''
                        docker build -t $DOCKER_USERNAME/react-app:latest --target=deploy .
                        echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin
                        docker push $DOCKER_USERNAME/react-app:latest
                        docker images
                    '''
                }
            }
        }
        stage('deploy') {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: 'be-vm', keyFileVariable: 'PRIVATE_KEY', usernameVariable: 'USERNAME'), usernamePassword(credentialsId: 'docker-auth', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no -i $PRIVATE_KEY $USERNAME@$$VM_IP """
                            docker rm -f react-app
                            docker image rm -f $DOCKER_USERNAME/react-app:latest
                            docker pull $DOCKER_USERNAME/react-app:latest
                            docker run -dp 80:80 --name react-app -e VITE_API_BASE_URL=$VITE_API_BASE_URL
                            docker ps
                        """
                    '''
                }
            }
        }
    }
}