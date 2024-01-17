pipeline {
    agent any

    environment {
        VM_IP = '192.168.10.6'
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
                        echo $VITE_API_BASE_URL
                        ssh -o StrictHostKeyChecking=no -i $PRIVATE_KEY $USERNAME@$VM_IP """
                            sudo docker rm -f react-app
                            sudo docker image rm -f $DOCKER_USERNAME/react-app:latest
                            sudo docker pull $DOCKER_USERNAME/react-app:latest
                            sudo docker run -dp 80:80 --name react-app $DOCKER_USERNAME/react-app:latest
                            sudo docker ps
                        """
                    '''
                }
            }
        }
    }
}