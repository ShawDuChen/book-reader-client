import { CopyOutlined } from "@ant-design/icons";
import { message } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Clipboard({
  text,
  children,
  className,
}: {
  text?: string;
  children?: React.ReactNode;
  className?: React.HTMLAttributes<HTMLSpanElement>["className"];
}) {
  return (
    <CopyToClipboard
      text={text || ""}
      onCopy={() => message.success("Copy Successfully!")}>
      <span className={`cursor-pointer text-blue-500 ${className}`}>
        {children ? children : <CopyOutlined />}
      </span>
    </CopyToClipboard>
  );
}
