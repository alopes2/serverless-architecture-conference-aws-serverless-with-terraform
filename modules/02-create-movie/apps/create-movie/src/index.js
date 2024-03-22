import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';

const tableName = 'movies';

export const handler = async (event) => {
  let newMovie;
  try {
    newMovie = JSON.parse(event.body);
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Request body invalid',
      }),
    };
  }

  if (!newMovie) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Request body invalid',
      }),
    };
  }

  console.log('Received request: ', newMovie);

  newMovie.id = uuidv4();

  const client = new DynamoDBClient({});
  const docClient = DynamoDBDocumentClient.from(client);

  const command = new PutCommand({
    TableName: tableName,
    Item: {
      ID: newMovie.id,
      Title: newMovie.name,
      Rating: newMovie.rating,
      Generes: newMovie.Genres,
    },
  });

  try {
    const dynamoResponse = await docClient.send(command);

    const response = {
      statusCode: 201,
      body: JSON.stringify(newMovie),
    };

    return response;
  } catch (e) {
    console.log('Error calling PutItem: ', e);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: e.message,
      }),
    };
  }
};
