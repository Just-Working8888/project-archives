// // Input: ['newFolder/Hello/test.docx', 'newFolder/testFolder/hel.docx']
// output: {
//     name: 'newFolder',
//     type: 'folder',
//     children: [
//       {
//         name: 'Hello',
//         type: 'folder',
//         children: [
//           {
//             name: 'test.docx',
//             extension: 'docx',
//             type: 'document',
//           },
//         ],
//       },
//       {
//         name: 'testFolder',
//         type: 'folder',
//         children: [
//           {
//             name: 'hel.docx',
//             extension: 'docx',
//             type: 'document',
//           },
//         ],
//       },
//     ],
//   };

// // сделай функцию которая будет принимать массив путей файлов и на выводе  ты должен построить его структуру папок
// class Folder {
//   constructor({ name, type, children }) {
//     this.name = name;
//     this.type = type;
//     this.children = children;
//   }
// }
// function File({ name, type, extension }) {
//   this.name = name;
//   this.type = type;
//   this.extension = extension;
// }
// function ObgektRoute(path) {
//   const arr = [];
//   for (let i = 0; i < path.length; i++) {
//     arr.push(path[i].split("/"));
//   }
// console.log(arr);

// }

// ObgektRoute(["newFolder/Hello/test.docx", "newFolder/testFolder/hel.docx"]);
// const folderr = () => {
//   const path = ["newFolder/Hello/test.docx", "newFolder/testFolder/hel.docx"];

//   const routes = [];

//   for (let i = 0; i < path.length; i++) {
//     var pathArray = path[i].split("/");
//     routes.push(path[i].split("/"));
//   }

//   console.log(routes);
//   const name = pathArray[pathArray.length - 2];
//   var type = name.split(".").length > 1 ? "document" : "folder";
//   const children = [];

//   for (let i = 0; i < pathArray.length - 2; i++) {
//     children.push({
//       name: pathArray[i],
//       type: pathArray[i].split(".").length > 1 ? "document" : "folder",
//       children: [],
//     });
//   }
//   console.log({ name, type, children });
//   return {
//     name,
//     type,
//     children,
//   };
// };

// function File({ name, type, extension }) {
//   this.name = name;
//   this.type = type;
//   this.extension = extension;
// }

// const Routes = (path) => {
//   // const path = ["newFolder/Hello/test.docx", "newFolder/testFolder/hel.docx","test/Hello/test.docx","test/Hello/test.html"];

//   const newRoutArray = [];
//   for (let i = 0; i < path.length; i++) {
//         newRoutArray.push(path[i].split("/"));
//   }
//   console.log(newRoutArray);

//   const name = newRoutArray[0][0];
//   let type;
//   const children = [];

//   for (let i = 0; i < newRoutArray.length; i++) {
//     type = newRoutArray[i][0].split(".").length > 1 ? "document" : "folder";

//     for (let j = 0; j < newRoutArray[i].length - 2; j++) {
//       children.push({
//         name: newRoutArray[i][j + 1],
//         type: newRoutArray[i][j].split(".").length > 1 ? "document" : "folder",
//         children:
//           newRoutArray[i][j + 2].split(".").length > 1
//             ? new File({
//                 name: newRoutArray[i][j + 2],
//                 type: "document",
//                 extension: newRoutArray[i][j + 2].split(".")[1],
//               })
//             : new Folder({ name, type, children }),
//       });
//       // console.log(newRoutArray[i][j+2].split("."), "d");
//     }
//   }
//   console.log(new Folder({ name: name, children: children, type: type }));
// };

// // Routes([
// //   "newFolder/Hello/test.docx",
// //   "newFolder/testFolder/hel.docx",
// //   "newFolder/HELLO/hello.html",
// // ]);

// const sourceArray = [
//   ["newFolder", "Hello", "test.docx"],
//   ["newFolder", "Hello", "test.docx"],
//   ["newFolder", "testFolder", "hel.docx"],
//   ["test", "Hello", "test.docx"],
//   ["test", "Hello", "test.html"],
// ];

// const resultObject = {};

// sourceArray.forEach((nestedArray) => {
//   const firstElement = nestedArray[0];

//   if (resultObject[firstElement]) {
//     resultObject[firstElement].push(nestedArray);
//   } else {
//     resultObject[firstElement] = [nestedArray];
//   }
// });

// // Создаем переменные на основе объекта
// for (const key in resultObject) {
//   if (resultObject.hasOwnProperty(key)) {
//     window[`${key}_arrays`] = resultObject[key];
//   }
// }

// // Теперь у вас есть переменные newFolder_arrays и test_arrays,
// // в которых хранятся соответствующие массивы

// // console.log(resultObject);

// const childrenArray = (data) => {
//   if (data.type === "folder") {
//     return new Folder({
//       name: data.name,
//       type: data.type,
//       children: childrenArray(data.name),
//     });
//   } else {
//     return new File({
//       name: data.name,
//       type: data.type,
//       extension: data.extension,
//     });
//   }
// };

// const recursion = (path) => {
//   const Fold = {
//     name: path[0],
//     type: path[0].split(".").length > 1 ? "document" : "folder",
//     children: [],
//   };
//   for (let i = 1; i < path.length; i++) {
//     if (path[i].split(".").length > 1) {
//       Fold.children.push(
//         new File({
//           name: path[i],
//           type: path[i].split(".").length > 1 ? "document" : "folder",
//           extension: path[i].split(".")[1],
//         })
//       );
//     } else {
//       Fold.children.push(
//         childrenArray({
//           name: path[i],
//           type: path[i].split(".").length > 1 ? "document" : "folder",
//           extension: path[i].split(".")[1],
//         })
//       );
//     }
//   }

//   console.log(Fold);
// };

// const data = ["newFolder", "Hello", "HAHAHAH", "test.docx"];

// recursion(data);

// function buildFileTree(filePaths) {
//   const fileTree = {};

//   for (const filePath of filePaths) {
//     const parts = filePath.split('/');
//     let currentNode = fileTree;

//     for (let i = 0; i < parts.length; i++) {
//       const part = parts[i];

//       if (!currentNode[part]) {
//         const newNode = {
//           name: part,
//           type: i === parts.length - 1 ? 'document' : 'folder',
//           children: [],
//         };
//         if (i === parts.length - 1) {
//           const extension = part.split('.').pop();
//           newNode.extension = extension;
//         }
//         currentNode[part] = newNode;
//         currentNode = newNode.children;
//       } else {
//         currentNode = currentNode[part].children;
//       }
//     }
//   }

//   return fileTree;
// }

// const filePaths = ["newFolder/Hello/test.docx", "newFolder/testFolder/hel.docx"];
// const fileTree = buildFileTree(filePaths);
// console.log(JSON.stringify(fileTree, null, 2));

// function createFileStructure(filePaths) {
//   const structure = {};

//   for (const filePath of filePaths) {
//     const pathParts = filePath.split('/');
//     let currentFolder = structure;

//     for (let i = 0; i < pathParts.length; i++) {
//       const part = pathParts[i];
//       const isLastPart = i === pathParts.length - 1;
//       const extensionMatch = part.match(/\.(.+)$/);

//       if (!currentFolder[part]) {
//         if (isLastPart) {
//           currentFolder[part] = {
//             name: part,
//             extension: extensionMatch ? extensionMatch[1] : undefined,
//             type: 'document',
//           };
//         } else {
//           currentFolder[part] = {
//             name: part,
//             type: 'folder',
//             children: {},
//           };
//         }
//       }

//       currentFolder = currentFolder[part].children;
//     }
//   }

//   return convertToNestedArray(structure);
// }

// function convertToNestedArray(obj) {
//   const result = [];

//   for (const key in obj) {
//     if (obj[key].type === 'folder') {
//       obj[key].children = convertToNestedArray(obj[key].children);
//     }
//     result.push(obj[key]);
//   }

//   return result;
// }

// const filePaths = ["newFolder/Hello/sdsdsds/sdsds/test.docx", "newFolder/testFolder/hel.docx","newFolder/testFolder/hedasdasdasl.docx"];
// const fileStructure = createFileStructure(filePaths);

// console.log(JSON.stringify(fileStructure, null, 2));
// class File {
//   constructor(name, type, extension = null) {
//     this.name = name;
//     this.type = type;
//     if (extension !== null) {
//       this.extension = extension;
//     }
//     if (type === 'folder') {
//       this.children = [];
//     }
//   }
// }
// function createFileStructure(filePaths) {
//   const root = new File('', 'folder');

//   function addToStructure(pathParts, currentFolder) {
    
//     const part = pathParts.shift();
//     if (!part) return;

//     const isFile = part.includes('.');


//     let existingNode = currentFolder.children.find(node => node.name === part);
//     if (existingNode === undefined) {
//       const type = isFile ? 'document' : 'folder';
//       const extension = isFile ? part.split('.').pop() : null;
//       existingNode = new File(part, type, extension);
//       currentFolder.children.push(existingNode);
//     }

//     if (existingNode.type === 'folder') {
//       addToStructure(pathParts, existingNode); // Рекурсивно для детей папок
//     }
//   }

//   for (const filePath of filePaths) {
//     const parts = filePath.split('/');
//     addToStructure(parts, root); // Добавляем пути в структуру
//    }
  
//   return root.children; // Возвращаем детей корневой папки
// }

// const filePaths = ["newFolder/Hello/test.docx", "newFolder/testFolder/hel.docx","newFolder/testFolder/heddddl.html","newFolder/testFdddolder/"];

// const fileStructure = createFileStructure(filePaths);
// console.log(JSON.stringify(fileStructure, null, 2));

// class File {
//   constructor(name, type, extension = null) {
//     this.name = name;
//     this.type = type;
//     if (extension !== null) {
//       this.extension = extension;
//     }
//     if (type === "folder") {
//       this.children = [];
//     }
//   }
// }

// function ProvideRoutes(filePath) {
//   const root = new File("", "folder");

//   function addChildren(pathParts, currentFolder) {
//     const part = pathParts.shift();
//     if (!part) return;

//     const isFile = part.includes(".");
//     let childrenNode = currentFolder.children.find(
//       (node) => node.name === part
//     );
//     if (childrenNode === undefined) {
//       const type = isFile ? "document" : "folder";
//       const extension = isFile ? part.split(".").pop() : null;
//       childrenNode = new File(part, type, extension);
//       currentFolder.children.push(childrenNode);
//     }
//     if (childrenNode.type === "folder") {
//       addChildren(pathParts, childrenNode);
//     }
//   }
//   for (let filePath of filePaths) {
//     const parts = filePath.split("/");
//     addChildren(parts, root);
//   }
//   return root.children;
// }

// const filePaths = [
//   "newFolder/Hello/test.docx",
//   "newFolder/testFolder/hel.docx",
//   "newFolder/testFolder/heddddl.html",
//   "newFolder/testFdddolder/",
// ];

// const obg = ProvideRoutes(filePaths);

// console.log(obg);


// function File(name,type, obj){
//   this.name = name;
//   this.type = type;

//   if(typeof obj === 'object'){
//     this.children = [obj]
//   }else if(obj === 'children'){
//     this.children = []
//   }else {
//     this.extension = obj
//   }
// }

// let objFolders = filePaths.map(item =>{
//   let address = item.split('/')
//   return (function (arr){
//     let end = arr.length-1
//     let index = 0
//     return (function getObj(i){
//       if(i === end){
//          return new File(arr[i], arr[i].includes('.' ) ? 'document' : 'folder', arr[i].includes('.') ? arr[i].split('/').at(-1) : 'children')
//       }else{
//         index += 1
//         return new File(arr[i], 'folder', getObj(index))
//       }
//     })(index)
//   })(address)
// })

Array.prototype.MyMap = function(callback, /*thisArg*/){
  if(!callback){
    throw new Error('')
  }

  let O = this
  let len = O.length >>> 0
  let thisArg = arguments[1]? arguments[1]: undefined
  let arr = []
  let k = 0
  while(k < len){
    if(callback.call(thisArg,O[k],k, O)){
      arr.push(callback.call(thisArg,O[k],k, O))
    }

    k++
  }
  return arr;
}

let arr = [1,2,3].MyMap(function(item){
  console.log(this.name);
}, {name: 'Bekbolot'})

console.log(JSON.stringify(objFolders,null,2));
// output: {
//     name: 'newFolder',
//     type: 'folder',
//     children: [
//       {
//         name: 'Hello',
//         type: 'folder',
//         children: [
//           {
//             name: 'test.docx',
//             extension: 'docx',
//             type: 'document',
//           },
//         ],
//       },
//       {
//         name: 'testFolder',
//         type: 'folder',
//         children: [
//           {
//             name: 'hel.docx',
//             extension: 'docx',
//             type: 'document',
//           },
//         ],
//       },
//     ],
//   };
