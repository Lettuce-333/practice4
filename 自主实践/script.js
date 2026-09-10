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
        return item.score;
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
function getLevel(score) {
    if (score >= 90) return "优秀";
    if (score >= 80) return "良好";
    if (score >= 70) return "中等";
    if (score >= 60) return "及格";
    return "不及格";
}
function calcLevelDist(list) {
    return list.reduce(function (dist, item) {
        const level = getLevel(item.score);
        dist[level] = dist[level] + 1;
        return dist;
    }, { "优秀": 0, "良好": 0, "中等": 0, "及格": 0, "不及格": 0 });
}
function buildReport(validList, stats, dist, rawCount) {
    const invalidCount = rawCount - stats.count;
    const passCount = stats.count - dist["不及格"];
    const passRate = stats.count === 0 ? 0 : (passCount / stats.count * 100);
    let report = "";
    report += "========== 数学成绩统计报告 ==========\n";
    report += "原始记录数：" + rawCount + " 条\n";
    report += "无效记录：" + invalidCount + " 条（已剔除缺考/空值/超范围）\n";
    report += "有效人数：" + stats.count + " 人\n";
    report += "--------------------------------------\n";
    report += "总分：" + stats.total + " 分\n";
    report += "平均分：" + stats.avg.toFixed(2) + " 分\n";
    report += "最高分：" + stats.max + " 分\n";
    report += "最低分：" + stats.min + " 分\n";
    report += "及格率：" + passRate.toFixed(1) + "%\n";
    report += "--------------------------------------\n";
    report += "等级分布：\n";
    report += "  优秀：" + dist["优秀"] + " 人\n";
    report += "  良好：" + dist["良好"] + " 人\n";
    report += "  中等：" + dist["中等"] + " 人\n";
    report += "  及格：" + dist["及格"] + " 人\n";
    report += "  不及格：" + dist["不及格"] + " 人\n";
    report += "======================================";
    return report;
}
const dist = calcLevelDist(validScores);
const report = buildReport(validScores, stats, dist, rawScores.length);
console.log(report);