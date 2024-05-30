import { listTreeMenu } from "@/api/system/menu";
import { bindMenus, getRoleMenus } from "@/api/system/role";
import { useQuery } from "@tanstack/react-query";
import {
  Button,
  Drawer,
  DrawerProps,
  Spin,
  Tree,
  TreeProps,
  message,
} from "antd";
import { Menu } from "app";
import { useState } from "react";

interface MenuDrawerProps extends DrawerProps {
  role_id: number;
}

export default function MenuDrawer({ role_id, ...props }: MenuDrawerProps) {
  const { isLoading, data: menuTree } = useQuery({
    queryKey: ["drawer-menu-tree"],
    queryFn: listTreeMenu,
  });

  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);

  const onCheck: TreeProps<Menu>["onCheck"] = (checkedKeys) => {
    if (Array.isArray(checkedKeys)) {
      setCheckedKeys(checkedKeys);
    } else {
      setCheckedKeys(checkedKeys.checked);
    }
  };

  const { data: _roleMenus } = useQuery({
    queryKey: ["drawer-menu-checked-keys", role_id],
    queryFn: async () => {
      const lists = await getRoleMenus(role_id!);
      setCheckedKeys(lists.map((item) => item.id));
      return lists;
    },
    enabled: !!role_id,
  });

  const confirm: React.MouseEventHandler<HTMLElement> = async (e) => {
    bindMenus(role_id, checkedKeys as number[]).then(() => {
      message.success("绑定成功");
      props.onClose!(e);
    });
  };

  return (
    <Drawer
      title="权限分配"
      width={"40%"}
      {...props}
      footer={
        <div className="flex justify-end items-center space-x-2">
          <Button onClick={props.onClose}>取消</Button>
          <Button type="primary" onClick={confirm}>
            确定
          </Button>
        </div>
      }>
      {isLoading ? (
        <Spin spinning={isLoading}></Spin>
      ) : (
        <Tree
          treeData={menuTree?.lists}
          fieldNames={{
            title: "name",
            key: "id",
            children: "children",
          }}
          defaultExpandAll
          multiple
          checkable
          checkStrictly
          blockNode
          checkedKeys={checkedKeys}
          onCheck={onCheck}
        />
      )}
    </Drawer>
  );
}
