import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_ID!,
    secretAccessKey: process.env.AWS_SECRET_ID!,
  },
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const fileBuffer = await file.arrayBuffer();
    const fileName = `${file.name}-${Date.now()}`;

    const command = new PutObjectCommand({
      Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
      Key: fileName,
      Body: Buffer.from(fileBuffer),
      ContentType: file.type,
      CacheControl: "public, max-age=31536000",
      StorageClass: "INTELLIGENT_TIERING",
    });

    await s3Client.send(command);

    const fileUrl = `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${fileName}`;

    return NextResponse.json({ url: fileUrl });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
