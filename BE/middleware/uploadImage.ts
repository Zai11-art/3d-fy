import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client, S3ClientConfig } from "@aws-sdk/client-s3";

const s3Config: S3ClientConfig = {
  region: process.env.AWS_REGION as string,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
};

const s3 = new S3Client(s3Config);

export const upload = (path: string) =>
  multer({
    storage: multerS3({
      s3,
      bucket: `${process.env.BUCKET_NAME}`,
      metadata: function (_, file, cb) {
        cb(null, { fieldName: file.filename });
      },
      key: function (_, file, cb) {
        const newFile = `3dFy-${file.originalname}-${Date.now()}.jpeg`;
        const fullName = `${path}/${newFile}`;
        cb(null, fullName);
      },
      contentType: multerS3.AUTO_CONTENT_TYPE,
    }),
  });
