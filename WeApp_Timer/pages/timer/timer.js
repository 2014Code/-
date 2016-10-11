var timer
Page({
  data: {
    hour: '00',
    minute: '00',
    second: '00',
    millisecond: '00',
    disabled_star: false,
    disabled_pause: true,
    disabled_reset: true,
    txt_star: "开始计时",
    txt_pause: "暂停计时",
    txt_reset: "重新计时",
    state: "准备计时"
  },
  timer_start: function () {
    this.setData({
      disabled_star: true,
      disabled_pause: false,
      disabled_reset: false,
      state: "正在计时",
    })
    var self = this;
    var hour = self.data.hour;
    var minute = self.data.minute;
    var second = self.data.second;
    var millisecond = self.data.millisecond;
    timer = setInterval(function () {
      console.log("======")
      millisecond++;

      if (millisecond == 100) {
        millisecond = "00";
        second++;
        if (second > 0 && second < 10) {
          self.setData({
            millisecond: millisecond,
            second: "0" + second
          });
        } else {
          self.setData({
            millisecond: millisecond,
            second: second
          });
        }
        millisecond = "00"
        if (second == 60) {
          minute++;
          millisecond = "00"
          second = "00";
          if (minute > 0 && minute < 10) {
            self.setData({
              millisecond: millisecond,
              second: second,
              minute: "0" + minute
            });
          } else {
            self.setData({
              millisecond: millisecond,
              second: second,
              minute: minute
            });
          }

          if (minute == 60) {
            minute = "00"
            millisecond = "00"
          second = "00";
            hour++;

          if (hour > 0 && hour < 10) {
            self.setData({
              millisecond: millisecond,
              second: second,
              minute:minute,
              hour: "0" + hour
            });
          } else {
            self.setData({
              millisecond: millisecond,
              second: second,
              minute: minute,
              hour:hour
            });
          }
          }
        }
      } else {
        if (millisecond > 0 && millisecond < 10) {
          self.setData({
            millisecond: "0" + millisecond,
          });
        } else {
          self.setData({
            millisecond: millisecond,
          });
        }
      }
    }, 10)
  },
  timer_pause: function () {
    this.setData({
      disabled_star: false,
      disabled_pause: true,
      disabled_reset: false,
      txt_star: "继续计时",
      state:"暂停计时"
    })
    clearInterval(timer);
  },
  timer_reset: function () {
    this.setData({
      disabled_star: false,
      disabled_pause: false,
      disabled_reset: false,
      txt_star: "开始计时",
      state:"准备计时"
    })
    clearInterval(timer);
    this.setData({
      hour:"00",
      minute:"00",
      second:"00",
      millisecond:"00"
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})