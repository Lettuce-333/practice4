const sortData = [
    { name: "张伟", subject: "数学", score: 88 },
    { name: "李娜", subject: "数学", score: 92 },
    { name: "王强", subject: "数学", score: 88 },
    { name: "赵敏", subject: "语文", score: 78 },
    { name: "陈杰", subject: "语文", score: 90 },
    { name: "刘洋", subject: "数学", score: 66 },
    { name: "孙丽", subject: "语文", score: 78 }
];
console.log("\n===== 任务 1：排序研究 =====");
console.log("默认 sort([11, 2, 100]) 的坑：", [11, 2, 100].sort());
console.log("正确数值排序：", [11, 2, 100].sort((a, b) => a - b));
function multiFieldSort(list) {
    return [...list].sort(function (a, b) {
        if (a.subject !== b.subject) {
            return a.subject < b.subject ? -1 : 1;
        }
        return b.score - a.score;
    });
}
const sortedResult = multiFieldSort(sortData);
console.log("按学科升序 + 分数降序：");
sortedResult.forEach(function (item) {
    console.log("  " + item.subject + " " + item.score + " " + item.name);
});