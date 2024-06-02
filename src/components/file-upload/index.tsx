import { httpHeader } from "@/utils/constants";
import { checkFileType } from "@/utils/tool";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Upload, UploadProps, message } from "antd";
import { useState } from "react";

type FileUploadProps = {
  value?: string;
  onChange?: (_: string) => void;
};

export default function ImageUpload({ value, onChange }: FileUploadProps) {
  const [loading, setLoading] = useState(false);

  const beforeUpload: UploadProps["beforeUpload"] = (file) => {
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error("Image must smaller than 10MB!");
    }
    return isLt10M;
  };

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      setLoading(false);
      onChange && onChange(info.file.response.filename);
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const isIMAGE = (filename: string) =>
    checkFileType(filename, [".jpg", ".jpeg", ".png", ".gif"]);

  const isVIDEO = (filename: string) =>
    checkFileType(filename, [".mp4", ".avi", ".mov", ".mkv"]);

  const isAUDIO = (filename: string) =>
    checkFileType(filename, [".mp3", ".wav", ".flac", ".ogg"]);

  const getFileName = (url: string) => {
    return url.split("/").pop();
  };

  return (
    <Upload
      name="file"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="/api/upload/file"
      beforeUpload={beforeUpload}
      onChange={handleChange}
      headers={httpHeader}>
      {value ? (
        isIMAGE(value) ? (
          <img
            src={value}
            alt="avatar"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        ) : isVIDEO(value) ? (
          <video
            src={value}
            autoPlay={false}
            controls={false}
            loop={false}
            muted
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        ) : isAUDIO(value) ? (
          <audio
            src={value}
            autoPlay={false}
            controls
            loop={false}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <a
            href={value}
            target="_blank"
            title={value}
            className="text-blue-500 hover:underline text-ellipsis overflow-hidden text-nowrap">
            {getFileName(value)}
          </a>
        )
      ) : (
        uploadButton
      )}
    </Upload>
  );
}
