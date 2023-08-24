class File {
  constructor(name, type, extension = null) {
    this.name = name;
    this.type = type;
    if (extension !== null) {
      this.extension = extension;
    }
    if (type === "folder") {
      this.children = [];
    }
  }
}

function ProvideRoutes(filePath) {
  const root = new File("", "folder");

  function addObgtoBranch(pathParts, currentFolder) {
    const part = pathParts.shift();
    if (!part) return;

    const isFile = part.includes(".");
    let childrenNode = currentFolder.children.find(
      (node) => node.name === part
    );
    if (childrenNode === undefined) {
      const type = isFile ? "document" : "folder";
      const extension = isFile ? part.split(".").pop() : null;
      childrenNode = new File(part, type, extension);
      currentFolder.children.push(childrenNode);
    }
    if (childrenNode.type === "folder") {
      addObgtoBranch(pathParts, childrenNode);
    }
  }
  for (let filePath of filePaths) {
    const parts = filePath.split("/");
    addObgtoBranch(parts, root);
  }
  return root.children;
}   

const filePaths = [
  "newFolder/Hello/test.docx",
  "newFolder/testFolder/hel.docx",
  "newFolder/testFolder/heddddl.html",
  "newFolder/testFdddolder/",
];

const obg = ProvideRoutes(filePaths);
