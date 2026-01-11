

# **几个免费静态网站托管平台对比**

- Vercel、Netlify、Github Pages、Cloudflare Pages、Azure Static Web Apps
- 对比主要针对中国大陆网络的访问

<!-- uptoc -->

## **各家情况**

### Vercel和Netlify

- 没什么特殊需求这两家伙差不多，每月带宽100G，构建时长或次数有限制，自动从Git部署啥的都有，十分方便。这两都支持绑定域名，Vercel必须得绑定不然无法访问(国内)，速度这两其实挺快的，用的是亚马逊的CDN，大多走的是新加坡or日本这里。对于小网站来说挺推荐的。

### Github Pages

- 每月也是100GB(软限制，[详见官方文档](https://githubdocs.cn/en/pages/getting-started-with-github-pages/about-github-pages?utm_source=chatgpt.com#usage-limits){target="_blank"})。功能也不是很多，基本就做做简单博客、文档。速度和CF Pages差不多一言难尽，不太推荐。

### Cloudflare Pages

- 著名慈善家，基于Cloudflare网络，全球超低延迟，性能极佳。<span class="ctxt">除中国大陆</span>。不用担心被被打流量用完啥的，也是从git自动部署的，文档写也写的好棒，如果群体不是在中国那这个选择就很棒。

### Azure Static Web Apps

- 目前对于我这轻量级网站来说，综合下来居然是这位最优，月带宽100G，超额免费(可能有软限制？)，不过其实根本用不完。创建的时候可以选地区，走的是微软云香港or美国，可以走A解析不用泛播，可以基本在香港，晚高峰稳定性延时和速度也很棒。

---

## **测试总结**

- 如果主要面向中国大陆推荐排除Cloudflare Pages、Github Pages，总体不佳。
    - Cloudflare Pages(联通很糟糕<移动<电信)
    - Github Pages(电信很糟糕<联通<移动)
- Vercel和Netlify推荐
    - Vercel(电信良好<联通<移动优秀)
    - Netlify(电信良好<联通<移动优秀)
- Azure Static Web Apps再推荐
    - 三网都挺优秀，电信高峰会有点丢包，但是比起来已经很棒了。

测试结果参考如下：

??? tip "用于测试的网页"

    - 均使用同一版本部署测试，[测试用页面下载](https://github.com/U2t5SGlnaA/SkyHigh/releases/tag/3.0.1){target="_blank"}
    - Vercel：[vercel.skyhigh.moe](https://vercel.skyhigh.moe/){target="_blank"}
    - Netlify：[netlify.skyhigh.moe](https://netlify.skyhigh.moe/){target="_blank"}
    - Github Pages：[u2t5sglnaa.github.io](https://u2t5sglnaa.github.io/){target="_blank"}
    - Cloudflare Pages：[skyhigh.pages.dev](https://skyhigh.pages.dev/){target="_blank"}
    - Azure Static Web Apps：[skyhigh.moe](https://skyhigh.moe/){target="_blank"}


## **网站测速**

使用了itdog.cn和boce.com(标B)测试。

???+ info "时间:中午左右"

    === "Azure"

        ![a](https://mypic.skyhigh.moe/blog/staticwebhost/azure.spi.webp)

    === "B"

        ![a](https://mypic.skyhigh.moe/blog/staticwebhost/azure.spc.webp)

    === "Vercel"

        ![v](https://mypic.skyhigh.moe/blog/staticwebhost/vercel.spi.webp)

    === "B"

        ![v](https://mypic.skyhigh.moe/blog/staticwebhost/vercel.spc.webp)

    === "Netlify"

        ![n](https://mypic.skyhigh.moe/blog/staticwebhost/netlify.spi.webp)

    === "B"

        ![n](https://mypic.skyhigh.moe/blog/staticwebhost/netlify.spc.webp)

    === "CF.Pages"

        ![c](https://mypic.skyhigh.moe/blog/staticwebhost/cf.spi.webp)

    === "B"

        ![c](https://mypic.skyhigh.moe/blog/staticwebhost/cf.spc.webp)

    === "GH.Pages"

        ![g](https://mypic.skyhigh.moe/blog/staticwebhost/github.spi.webp)

    === "B"

        ![g](https://mypic.skyhigh.moe/blog/staticwebhost/github.spc.webp)





## **持续TCPing**

### boce.com

???+ abstract "时间:前为早11.左右,后为晚9.左右"

    === "Azure"

        ![a](https://mypic.skyhigh.moe/blog/staticwebhost/azure.tcp11.webp)

    === "晚"

        ![a](https://mypic.skyhigh.moe/blog/staticwebhost/azure.tcp9.webp)

    === "Vercel"

        ![v](https://mypic.skyhigh.moe/blog/staticwebhost/vercel.tcp11.webp)

    === "晚"

        ![v](https://mypic.skyhigh.moe/blog/staticwebhost/vercel.tcp9.webp)

    === "Netlify"

        ![n](https://mypic.skyhigh.moe/blog/staticwebhost/netlify.tcp11.webp)

    === "晚"

        ![n](https://mypic.skyhigh.moe/blog/staticwebhost/netlify.tcp9.webp)

    === "CF.Pages"

        ![c](https://mypic.skyhigh.moe/blog/staticwebhost/cf.tcp11.webp)

    === "晚"

        ![c](https://mypic.skyhigh.moe/blog/staticwebhost/cf.tcp9.webp)

    === "GH.Pages"

        ![g](https://mypic.skyhigh.moe/blog/staticwebhost/github.tcp11.webp)

    === "晚"

        ![g](https://mypic.skyhigh.moe/blog/staticwebhost/github.tcp9.webp)

### itdog.cn

???+ abstract "时间:前为早12.左右,后为晚10.左右"

    === "Azure"

        ![a](https://mypic.skyhigh.moe/blog/staticwebhost/azure.tcp12.webp)

    === "晚"

        ![a](https://mypic.skyhigh.moe/blog/staticwebhost/azure.tcp10.webp)

    === "Vercel"

        ![v](https://mypic.skyhigh.moe/blog/staticwebhost/vercel.tcp12.webp)

    === "晚"

        ![v](https://mypic.skyhigh.moe/blog/staticwebhost/vercel.tcp10.webp)

    === "Netlify"

        ![n](https://mypic.skyhigh.moe/blog/staticwebhost/netlify.tcp12.webp)

    === "晚"

        ![n](https://mypic.skyhigh.moe/blog/staticwebhost/netlify.tcp10.webp)

    === "CF.Pages"

        ![c](https://mypic.skyhigh.moe/blog/staticwebhost/cf.tcp12.webp)

    === "晚"

        ![c](https://mypic.skyhigh.moe/blog/staticwebhost/cf.tcp10.webp)

    === "GH.Pages"

        ![g](https://mypic.skyhigh.moe/blog/staticwebhost/github.tcp12.webp)

    === "晚"

        ![g](https://mypic.skyhigh.moe/blog/staticwebhost/github.tcp10.webp)

## **HTTP监控**

???+ abstract "时间:晚9.至0.左右,15m/次"

    === "Azure"

        ![a](https://mypic.skyhigh.moe/blog/staticwebhost/azure.200.webp)

    === "Vercel"

        ![v](https://mypic.skyhigh.moe/blog/staticwebhost/vercel.200.webp)

    === "Netlify"

        ![n](https://mypic.skyhigh.moe/blog/staticwebhost/netlify.200.webp)

    === "CF Pages"

        ![c](https://mypic.skyhigh.moe/blog/staticwebhost/cf.200.webp)

    === "GH Pages"

        ![g](https://mypic.skyhigh.moe/blog/staticwebhost/github.200.webp)


