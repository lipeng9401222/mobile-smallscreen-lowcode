
const generateIndex = (data: Record<string, any>[], curIndex = 0) => {
  data.forEach((item) => {
    item._index = curIndex++;
    if (item.children) {
      curIndex = generateIndex(item.children, curIndex);
    }
  });
  return curIndex;
};

export const transformToTreeData = (data: Record<string, any>[], idField: string, parentField: string, isGenerateIndex?: boolean) => {
  const treeData: Record<string, any>[] = [];
  const copyData = JSON.parse(JSON.stringify(data)) as Record<string, any>[];
  //建立快速索引
  const idHash: Record<string, any> = {};
  copyData.forEach((item) => {
    idHash[item[idField]] = item;
  });

  //数组转树形
  copyData.forEach((item) => {
    if (item.isLeaf === false && !item.children) {
      item.children = [];
    }
    const pid = item[parentField];
    const pNode = idHash[pid];
    if (!pNode) {
      treeData.push(item);
    } else {
      if (!pNode.children) {
        pNode.children = [];
      }
      pNode.children.push(item);
    }
  });

  isGenerateIndex && generateIndex(treeData);

  return treeData;
};