console.log("\n===== 任务 2：正则表达式 =====");
const dirtyText = "  张伟    数学   88  分  ";
const cleaned = dirtyText.trim().replace(/\s+/g, " ");
console.log("清洗前：[" + dirtyText + "]");
console.log("清洗后：[" + cleaned + "]");
function validatePhone(phone) {
    return /^1[3-9]\d{9}$/.test(phone);
}
console.log("手机号 13800138000：" + validatePhone("13800138000"));
console.log("手机号 12345：" + validatePhone("12345"));
console.log("手机号 12987654321：" + validatePhone("12987654321"));
function validateEmail(email) {
    return /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email);
}
console.log("邮箱 zhang@qq.com：" + validateEmail("zhang@qq.com"));
console.log("邮箱 bad@.com：" + validateEmail("bad@.com"));
console.log("邮箱 no-at.com：" + validateEmail("no-at.com"));