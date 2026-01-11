document$.subscribe(function() {
  // 初始化第三方库
  console.log("Initialize third-party libraries here");
  // 初始化音频（如果存在）
  if (typeof essentialAudio !== 'undefined') {
    essentialAudio.initAll();
  }
});