//S3 Config
export const s3Config = {
    bucketName: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME as string,
    region: process.env.NEXT_PUBLIC_AWS_REGION as string,
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY as string,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY as string
}