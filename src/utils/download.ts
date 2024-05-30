import { debounce } from "lodash-es";
let downloadTimer: NodeJS.Timeout | null = null;

export const saveBlobToFile = (
  blob: Blob,
  fileName: string,
  suffix: string,
) => {
  downloadTimer && clearTimeout(downloadTimer);
  const file = new File(
    [blob],
    `${fileName}-${new Date().getTime()}${suffix}`,
    {
      type: blob.type,
    },
  );
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = file.name;
  link.style.display = "none";
  document.body.appendChild(link);

  link.click();

  downloadTimer = setTimeout(() => {
    URL.revokeObjectURL(url);
    document.body.removeChild(link);
  }, 2000);
};

export const donwload = debounce(function (
  exportApi: () => Promise<Blob>,
  fileName: string = "file",
  suffix: string = ".xlsx",
) {
  exportApi().then((res) => {
    saveBlobToFile(res, fileName, suffix);
  });
}, 200);
