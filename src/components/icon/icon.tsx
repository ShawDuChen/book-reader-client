import Icon from "@ant-design/icons";
import { ICON_MAP } from "@/utils/constants";

export default function IconFont(props: { name?: string }) {
  return props.name ? <Icon component={ICON_MAP[props.name]} /> : null;
}
