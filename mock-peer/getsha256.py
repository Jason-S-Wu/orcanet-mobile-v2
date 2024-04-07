import hashlib

def sha256sum(filename):
    with open(filename, 'rb', buffering=0) as f:
        return hashlib.file_digest(f, 'sha256').hexdigest()
    

if __name__ == '__main__':
    import sys
    print(sha256sum(sys.argv[1]))
    