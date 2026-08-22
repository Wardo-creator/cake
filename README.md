# 妈妈的生日银河

基于 Three.js、GSAP 与 WebGL 粒子系统制作的沉浸式生日互动 H5。

## 体验流程

1. 进入持续漂浮、闪烁且带景深层次的银河星空。
2. 点击悬浮礼物，依次触发蓄光、星粒汇聚、噪声消散、金色爆发。
3. 蛋糕从银河下方升起，生日祝福从星光中浮现。
4. 拖动可旋转观察，移动鼠标产生视差，点击蛋糕会再次绽放粒子。

## 安装与运行

```bash
npm install
npm run dev
```

浏览器打开 Vite 输出的本地地址即可。生产构建：

```bash
npm run build
npm run preview
```

## 正式素材

将以下文件放入 `assets/`：

- `assets/gift.png`
- `assets/cake.png`
- `assets/music.mp3`

图片推荐使用透明背景 PNG。缺少图片时会自动启用 Canvas 生成的梦幻占位视觉；缺少音乐不会影响 3D 场景运行。

## 后续替换 GLB

主体验实例提供 `replaceCakeWithGLB(url)` 接口。加载成功后会隐藏图片蛋糕并将 GLB 模型挂载到蛋糕旋转容器中。
