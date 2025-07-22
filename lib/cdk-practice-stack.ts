import { Stack, StackProps } from 'aws-cdk-lib';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';

export class CdkPracticeStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // defines an AWS Instance resource
    const hello = new Function(this, "HelloHandler", {
      runtime: Runtime.NODEJS_22_X,
      code: Code.fromAsset("lambda"),
      handler: "hello.handler",
    })

    //defines an API Gateway REST API resource backed by our "hello" function
    const gateway = new LambdaRestApi(this, "Endpoint", {
      handler: hello
    })

  }
}
