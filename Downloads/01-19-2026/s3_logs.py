import boto3
import datetime
from botocore.exceptions import ClientError

# -------- CONFIG --------
BUCKET_NAME = "my-boto3-demo-bucket-jan-13"  
LOG_FILE = "s3_app_logs.txt"
REGION = "ap-south-1"


s3 = boto3.client("s3", region_name=REGION)


def ensure_bucket_exists():
    try:
        s3.head_bucket(Bucket=BUCKET_NAME)
        print(f"Bucket exists and is accessible: {BUCKET_NAME}")
        return

    except ClientError as e:
        error_code = e.response["Error"]["Code"]

        if error_code in ("404", "NoSuchBucket"):
            print(f"Bucket not found in your account. Creating: {BUCKET_NAME}")
            try:
                s3.create_bucket(
                    Bucket=BUCKET_NAME,
                    CreateBucketConfiguration={
                        "LocationConstraint": REGION
                    }
                )
                print("Bucket created successfully")

            except ClientError as create_error:
                if create_error.response["Error"]["Code"] == "BucketAlreadyExists":
                    print("Bucket name already taken globally.")
                    print("Choose a UNIQUE bucket name and try again.")
                    raise
                else:
                    raise
        else:
            raise


def log_to_s3(message):
    timestamp = datetime.datetime.now(datetime.UTC).isoformat()
    log_entry = f"{timestamp} | {message}\n"

    try:
        response = s3.get_object(Bucket=BUCKET_NAME, Key=LOG_FILE)
        old_logs = response["Body"].read().decode("utf-8")
    except ClientError as e:
        if e.response["Error"]["Code"] == "NoSuchKey":
            old_logs = ""
        else:
            raise

    s3.put_object(
        Bucket=BUCKET_NAME,
        Key=LOG_FILE,
        Body=old_logs + log_entry
    )


def upload_file():
    try:
        s3.upload_file("Hello.txt", BUCKET_NAME, "Hello.txt")
        log_to_s3("UPLOAD | Hello.txt | SUCCESS")
    except Exception as e:
        log_to_s3(f"UPLOAD | Hello.txt | FAILED | {str(e)}")


# -------- MAIN --------
ensure_bucket_exists()
upload_file()

print("Program Completed")
