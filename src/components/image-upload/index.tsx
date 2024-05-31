import { getToken } from "@/utils/token";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Upload, UploadProps, message } from "antd";
import { useState } from "react";

type ImageUploadProps = {
  value?: string;
  onChange?: (_: string) => void;
};

export default function ImageUpload({ value, onChange }: ImageUploadProps) {
  const [loading, setLoading] = useState(false);

  const beforeUpload: UploadProps["beforeUpload"] = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
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

  return (
    <Upload
      name="file"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="/api/upload/file"
      beforeUpload={beforeUpload}
      onChange={handleChange}
      headers={{
        Authorization: `Bearer ${getToken()}`,
      }}>
      {value ? (
        <img
          src={value}
          alt="avatar"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  );
}
