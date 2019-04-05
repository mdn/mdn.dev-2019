#!groovy

def syncS3(String bucket, String extra_args='') {
    stage ('s3 sync') {
        try {
            sh "bin/s3-sync.sh ${bucket} ${extra_args}"
        } catch(err) {
            sh "bin/irc-notify.sh --stage 's3 sync " + env.BRANCH_NAME + "' --status 'failed'"
            throw err
        }
        sh "bin/irc-notify.sh --stage 's3 sync " + env.BRANCH_NAME + "' --status 'shipped'"
    }
}

node {
    stage('Prepare') {
        checkout scm
    }
    stage('Deploy') {
        syncS3('mdn-dev-178589013767')
    }
}

