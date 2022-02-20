---
title: 测试文档
tags: [测试, 算法]
cover: https://tva2.sinaimg.cn/large/0060lm7Tly1fpx1skrabaj31hc0u01kx.jpg
---

二分查找 `binsearch`

```ts
//[l, r)
function search(nums: number[], target: number): number { 
    let l = 0, r = nums.length;
    while (l < r) {
        let c = (l + r) >> 1;
        if (nums[c] > target) {
            r = c;
        } else if (nums[c] < target) {
            l = c + 1;
        } else {
            return c;
        }
    }
    return -1;
}
```
