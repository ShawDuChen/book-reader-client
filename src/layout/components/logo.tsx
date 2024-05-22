import { HomeOutlined } from "@ant-design/icons";

export default function Logo({ collapsed }: { collapsed?: boolean }) {
  return (
    <div
      className="flex flex-row items-center justify-center h-16 m-1"
      style={{
        width: collapsed ? 80 : 200,
      }}>
      {collapsed ? (
        <HomeOutlined className="text-white text-xl" />
      ) : (
        <div className=" text-xl text-white font-bold whitespace-nowrap">
          {import.meta.env.VITE_APP_TITLE}
        </div>
      )}
    </div>
  );
}
