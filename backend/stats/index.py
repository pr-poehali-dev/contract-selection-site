import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Get site statistics (visitors, applications, and time-based visitor counts)
    Args: event with httpMethod
          context with request_id attribute
    Returns: HTTP response with statistics data
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    dsn = os.environ.get('DATABASE_URL')
    schema = os.environ.get('DB_SCHEMA', 't_p47203058_contract_selection_s')
    
    if method == 'GET':
        conn = psycopg2.connect(dsn)
        cur = conn.cursor()
        cur.execute(f'SELECT total_visitors, total_applications FROM {schema}.site_statistics LIMIT 1')
        row = cur.fetchone()
        
        if row:
            total_visitors = row[0]
            total_applications = row[1]
        else:
            total_visitors = 0
            total_applications = 0
        
        cur.execute(f"SELECT COUNT(*) FROM {schema}.visit_log WHERE visited_at >= CURRENT_TIMESTAMP - INTERVAL '7 days'")
        week = cur.fetchone()[0]
        
        cur.execute(f"SELECT COUNT(*) FROM {schema}.visit_log WHERE visited_at >= CURRENT_TIMESTAMP - INTERVAL '1 day'")
        day = cur.fetchone()[0]
        
        cur.execute(f"SELECT COUNT(*) FROM {schema}.visit_log WHERE visited_at >= CURRENT_TIMESTAMP - INTERVAL '5 minutes'")
        online = cur.fetchone()[0]
        
        stats = {
            'visitors': total_visitors,
            'applications': total_applications,
            'week': week,
            'day': day,
            'online': online
        }
        
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps(stats)
        }
    
    if method == 'POST':
        conn = psycopg2.connect(dsn)
        cur = conn.cursor()
        cur.execute(f"UPDATE {schema}.site_statistics SET total_visitors = total_visitors + 1, last_updated = CURRENT_TIMESTAMP WHERE id = 1")
        cur.execute(f"INSERT INTO {schema}.visit_log (visited_at) VALUES (CURRENT_TIMESTAMP)")
        conn.commit()
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'success': True})
        }
    
    return {
        'statusCode': 405,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'isBase64Encoded': False,
        'body': json.dumps({'error': 'Method not allowed'})
    }
