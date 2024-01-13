---
title: 测试文档
tags: [测试, 算法, 测试1, 测试2, 测试3, 测试4, 测试5, 测试6, 测试7]
cover: /vitepress-theme-sakura/60651947_p0.jpg
---

## 代码测试

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

## 2 级标题

### 3 级标题

#### 4 级标题

有序列表
1. First item
2. Second item
3. Third item
4. Fourth item

无序列表
- First item
- Second item
- Third item
- Fourth item

## katex 测试

正态分布的概率密度函数均值为 $\mu$  方差为 $\sigma^2$ (或标准差 $\sigma$ )，是高斯函数的一个实例：

$$f(x;\mu,\sigma)=\frac{1}{\sigma\sqrt{2\pi}} \exp \left( -\frac{(x- \mu)^2}{2\sigma^2} \right)$$

如果一个随机变量 $X$ 服从这个分布，我们写作 $X \sim N(\mu, \sigma^2)$ 。如果 $\mu =0$ 并且 $\sigma =1$ ，这个分布被称为标准正态分布，这个分布能够简化为
$$f(x) = \frac{1}{\sqrt{2\pi}} \exp\left(-\frac{x^2}{2} \right)$$

累积分布函数是指随机变量 $X$ 小于或等于 $x$ 的概率，用概率密度函数表示为
$$F(x;\mu,\sigma)=\frac{1}{\sigma\sqrt{2\pi}}\int_{-\infty}^x \exp \left( -\frac{(t - \mu)^2}{2\sigma^2}\ \right) dt$$

正态分布的累积分布函数能够由一个叫做误差函数的特殊函数表示：
$$\Phi (z)={\frac  12}\left[1+\operatorname {erf}\left({\frac  {z-\mu }{\sigma {\sqrt  2}}}\right)\right]$$
