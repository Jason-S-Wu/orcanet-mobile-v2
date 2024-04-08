import json
from flask import Flask, send_file, Response, request

app = Flask(__name__)

@app.route('/video')
def stream_video():
    hash_value = request.args.get('hash')
    fileName = request.args.get('fileName') # this is just temporary for testing

    if hash_value is None:
        video_path = f"./sample-videos/{fileName}.mp4"
    else:
        with open('./sample-videos/hashes.json') as f:
            hash_to_filename = json.load(f)

        video_path = f"./sample-videos/{hash_to_filename[hash_value]}.mp4"

    
    chunk_size = 8 * 1024 * 1024  # 8MB chunks

    return Response(stream_with_chunks(video_path, chunk_size), mimetype='video/mp4')

def stream_with_chunks(path, chunk_size):
    with open(path, 'rb') as f:
        while True:
            chunk = f.read(chunk_size)
            if not chunk:
                break
            yield chunk

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
