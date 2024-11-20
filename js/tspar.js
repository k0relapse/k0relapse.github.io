import { tsParticles } from "@tsparticles/engine";

// 初始化粒子效果
const tsparticles = new tsParticles({
    background: {
      color: "#2c3e50", // 设置背景颜色
    },
    particles: {
      number: {
        value: 150, // 雪花数量
      },
      color: {
        value: "#ffffff", // 雪花颜色
      },
      shape: {
        type: "circle", // 雪花形状
      },
      size: {
        value: 5, // 雪花大小
      },
      move: {
        enable: true,
        speed: 1, // 雪花下落速度
        direction: "bottom", // 雪花下落方向
        outMode: "out", // 超出画布的行为
      },
      opacity: {
        value: 0.7, // 雪花透明度
      },
      collisions: {
        enable: true, // 开启碰撞检测
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: {
          enable: true,
          mode: "bubble", // 点击时产生气泡效果
        }
      },
      modes: {
        bubble: {
          size: 10, // 气泡大小
          distance: 100, // 气泡产生距离
          duration: 2, // 气泡持续时间
          opacity: 0.8, // 气泡透明度
        },
      },
    },
  });


// 将粒子效果添加到特定元素中
tsparticles.init('particles-container');