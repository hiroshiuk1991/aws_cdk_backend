import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class HiroshiAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const app = new cdk.App();
    new HiroshiAppStack(app, "MyStack", {
      env: {
        account: "946864375267",
        region: "eu-west-2",
      },
    });

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'HiroshiAppQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
