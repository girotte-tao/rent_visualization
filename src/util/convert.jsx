const regionMap = {
    '南山区': 'nanshanqu',
    '罗湖区': 'luohuqu',
    '福田区': 'futianqu',
    '盐田区': 'yantianqu',
    '宝安区': 'baoanqu',
    '龙华区': 'longhuaqu',
    '龙岗区': 'longgangqu',
    '坪山区':'pingshanqu',
    '大鹏新区': 'dapengxinqu',
    '光明区': 'guangmingqu',
    '深圳': 'shenzhen'
}

export const convertRegion = (name_cn) => {
    return regionMap[name_cn]
}

export default convertRegion


