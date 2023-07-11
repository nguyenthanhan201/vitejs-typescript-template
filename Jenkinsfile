pipeline {
  agent any{
    tools{
      nodejs "nodejs"
    }

    stages{
      stage("install"){
        steps{
          sh "npm install"
        }
      }
      stage("build"){
        steps{
          sh "npm run build"
        }
      }
    }

    post{
      success{
        echo "Build success"
      }
      failure{
        echo "Build failed"
      }
    }
  }
}