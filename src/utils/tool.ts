export const checkFileType = (filename: string, extendsions: string[]) => {
  const extension = filename.split(".").pop();
  return extension ? extendsions.includes("." + extension) : false;
};
