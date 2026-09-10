const rawScores = [
    { name: "张伟", subject: "数学", score: 92 },
    { name: "李娜", subject: "数学", score: 85 },
    { name: "王强", subject: "数学", score: 78 },
    { name: "赵敏", subject: "数学", score: "缺考" },
    { name: "陈杰", subject: "数学", score: 66 },
    { name: "刘洋", subject: "数学", score: "" },
    { name: "孙丽", subject: "数学", score: 105 },
    { name: "周鹏", subject: "数学", score: 59 },
    { name: "吴静", subject: "数学", score: 88 },
    { name: "郑爽", subject: "数学", score: 45 }
];
console.log("原始数据：", rawScores);
function cleanScores(list) {
    return list.filter(function (item) {
        return typeof item.score === "number"
            && item.score >= 0
            && item.score <= 100;
    });
}
function calcStats(list) {
    const count = list.length;
    if (count === 0) {
        return { count: 0, total: 0, avg: 0, max: 0, min: 0 };
    }
    const total = list.reduce(function (sum, item) {
        return sum + item.score;
    }, 0);
    const scores = list.map(function (item) {
        return item.score;   // map：取出所有分数字段
    });
    return {
        count: count,
        total: total,
        avg: total / count,
        max: Math.max.apply(null, scores),
        min: Math.min.apply(null, scores)
    };
}
const validScores = cleanScores(rawScores);
const stats = calcStats(validScores);
console.log("清洗后数据：", validScores);
console.log("统计结果：", stats);