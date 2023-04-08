import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  console.log("proxy lambda executed", event);

  return {
    body: "OK",
    statusCode: 200,
  };
};
