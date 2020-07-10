/*
 * 公用校验方法
 * 使用大驼峰命名规范
*/

/**
 * @desc validate IDcard
 * @param idCard 身份证号码 15位或者18位
 * @returns boolean
 */
export function CheckIDcard(idCard) { /* 验证身份证号码 */
	// 15位和18位身份证号码的正则表达式
	let regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
	// 如果通过该验证，说明身份证格式正确，但准确性还需计算
	if (regIdCard.test(idCard)) {
		if (idCard.length == 18) {
			let idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); // 将前17位加权因子保存在数组里
			let idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); // 这是除以11后，可能产生的11位余数、验证码，也保存成数组
			let idCardWiSum = 0; // 用来保存前17位各自乖以加权因子后的总和
			for (let i = 0; i < 17; i++) {
				idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
			}
			let idCardMod = idCardWiSum % 11; // 计算出校验码所在数组的位置
			let idCardLast = idCard.substring(17); // 得到最后一位身份证号码
			// 如果等于2，则说明校验码是10，身份证号码最后一位应该是X
			if (idCardMod == 2) {
				if (idCardLast == "X" || idCardLast == "x") {
					return true;
				} else {
					return false;
				}
			} else { // 用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
				if (idCardLast == idCardY[idCardMod]) {
					return true;
				} else {
					return false;
				}
			}
		}
	} else {
		return false;
	}
}
/**
 * @desc 正则验证
 * @param {str} 需要验证的字符串
 * @param {type} {字符串} 需要验证的类型
 * @return boolean
 */
export function CheckType(str, type) {
	switch (type) {
		case 'email': // 电子邮箱
			return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
		case 'phone': // 手机号码
			return /^1(2|3|4|5|6|7|8|9)\d{9}$/.test(str);
		case 'tel': // 固定电话
			return /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(str);
		case 'number': // 数字
			return /^[0-9]$/.test(str);
		case 'english':
			return /^[a-zA-Z]+$/.test(str);
		case 'text':
			return /^\w+$/.test(str);
		case 'chinese':
			return /^[\u4E00-\u9FA5]+$/.test(str);
		case 'lower':
			return /^[a-z]+$/.test(str);
		case 'upper':
			return /^[A-Z]+$/.test(str);
		case 'post':
			return /^[1-9][0-9]{5}$/.test(str);
		case 'qq':
			return /^[1-9][0-9]{4,9}$/.test(str);
		case 'ykaccount':
			return /^[0-9]{19}$/.test(str);
		default:
			return false;
	}
}