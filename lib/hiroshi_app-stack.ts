import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

import * as cognito from "@aws-cdk/aws-cognito";

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class HiroshiAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const userPool = new cognito.UserPool(this, "UserPool", {
      selfSignUpEnabled: true,
      signInAliases: { email: true },
    });

    const identityPool = new cognito.CfnIdentityPool(this, "IdentityPool", {
      allowUnauthenticatedIdentities: false,
      cognitoIdentityProviders: [
        {
          clientId: userPool.UserPoolClientId,
          providerName: userPool.userPoolProviderName,
        },
      ],
    });

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'HiroshiAppQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
