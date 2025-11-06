import json
import boto3
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource('dynamodb')
TABLE_NAME = 'resumeVisits-Table'
table = dynamodb.Table(TABLE_NAME)

def lambda_handler(event, context):
    print("Received event:", event)
    
    if event['requestContext']['http']['method'] == 'GET':
        try:
            response = table.get_item(
                Key={'id': 'visitorCount'}
            )
            count = response['Item']['count'] if 'Item' in response else 0
            return {
                'statusCode': 200,
                'body': json.dumps({'count': int(count)})
            }
        except Exception as e:
            print(e)
            return {
                'statusCode': 500,
                'body': json.dumps({'error': 'Could not retrieve visitor count'})
            }

    elif event['requestContext']['http']['method'] == 'PUT':
        try:
            response = table.get_item(
                Key={'id': 'visitorCount'}
            )
            count = response['Item']['count'] if 'Item' in response else 0
            
            # Increment the count
            count += 1
            
            # Update the count in the database
            update_response = table.update_item(
                Key={'id': 'visitorCount'},
                UpdateExpression='set #c = :c',
                ExpressionAttributeNames={
                    '#c': 'count'
                },
                ExpressionAttributeValues={
                    ':c': count
                }
            )
            
            return {
                'statusCode': 200,
                'body': json.dumps({'new_count': int(count)})
            }
        except Exception as e:
            print(e)
            return {
                'statusCode': 500,
                'body': json.dumps({'error': 'Could not update visitor count'})
            }

    return {
        'statusCode': 400,
        'body': json.dumps({'error': 'Invalid request method'})
    }
