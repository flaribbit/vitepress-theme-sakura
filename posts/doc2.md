---
title: doc2
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
