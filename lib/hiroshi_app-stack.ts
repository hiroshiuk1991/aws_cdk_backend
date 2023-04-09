import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as cognito from "@aws-cdk/aws-cognito";

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class HiroshiAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create a new user pool
    const userPool = new cognito.UserPool(this, "MyUserPool", {
      userPoolName: " my-user-pool",
      selfSignUpEnabled: true,
      autoVerify: { email: true },
      signInAliases: { email: true },
      passwordPolicy: {
        minLength: 8,
        requireLowercase: true,
        requireDigits: true,
        requireSymbols: false,
        requireUppercase: true,
      },
    });
    // create a user pool client
    const userPoolClient = new cognito.userPoolClient(
      this,
      "MyUSerPoolClient",
      {
        userPool,
        userPoolClientName: "my-user-pool-client",
        generateSecret: false,
      }
    );

    // create an output for the user pool client ID
    new cdk.CfnOutput(this, "UserPoolClientId", {
      value: userPoolClient.userPoolClientId,
      exportName: `${this.stackName}-UserPoolClientID`,
    });

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'HiroshiAppQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
