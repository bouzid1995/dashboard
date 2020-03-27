define(function () {
    // Bangla
    return {
      errorLoading: function () {
        return 'ফলাফলগুলি লোড করা যায়নি।';
      },
      inputTooLong: function (args) {
        var overChars = args.input.length - args.maximum;
  
        var message = 'অনুগ্রহ করে ' + overChars + ' টি অক্ষর মুছে দিন।';
  
        if (overChars != 1) {
          message = 'অনুগ্রহ করে ' + overChars + ' টি অক্ষর মুছে দিন।';
        }
  
        return message;
      },
      inputTooShort: function (args) {
        var remainingChars = args.minimum - args.input.length;
  
        var message = remainingChars + ' টি অক্ষর অথবা অধিক অক্ষর লিখুন।';
  
        return message;
      },
      loadingMore: function () {
        return 'আরো ফলাফল লোড হচ্ছে ...';
      },
      maximumSelected: function (args) {
        var message = args.maximum + ' টি আইটেম নির্বাচন করতে পারবেন।';
  
        if (args.maximum != 1) {
          message = args.maximum + ' টি আইটেম নির্ব�define(function () {
    // Bangla
    return {
      errorLoading: function () {
        return 'ফলাফলগুলি লোড করা যায়নি।';
      },
      inputTooLong: function (args) {
        var overChars = args.input.length - args.maximum;
  
        var message = 'অনুগ্রহ করে ' + overChars + ' টি অক্ষর মুছে দিন।';
  
        if (overChars != 1) {
          message = 'অনুগ্রহ করে ' + overChars + ' টি অক্ষর মুছে দিন।';
        }
  
        return message;
      },
      inputTooShort: function (args) {
        var remainingChars = args.minimum - args.input.length;
  
        var message = remainingChars + ' টি অক্ষর অথবা অধিক অক্ষর লিখুন।';
  
        return message;
      },
      loadingMore: function () {
        return 'আরো ফলাফল লোড হচ্ছে ...';
      },
      maximumSelected: function (args) {
        var message = args.maximum + ' টি আইটেম নির্বাচন করতে পারবেন।';
  
        if (args.maximum != 1) {
          message = args.maximum + ' টি আইটেম নির্বাচন করতে পারবেন।';
        }
  
        return message;
      },
      noResults: function () {
        return 'কোন ফলাফল পাওয়া যায়নি।';
      },
      searching: function () {
        return 'অনুসন্ধান করা হচ্ছে ...';
      }
    };
  });
  