$(document).ready(function(){
  // عند الضغط على زر "Sign In" (الزر الأيسر)
  $("#left").click(function(){
      $(".signin").show();  // عرض نموذج تسجيل الدخول
      $(".signup").hide();  // إخفاء نموذج التسجيل
  });

  // عند الضغط على زر "Sign Up" (الزر الأيمن)
  $("#right").click(function(){
      $(".signin").hide();  // إخفاء نموذج تسجيل الدخول
      $(".signup").show();  // عرض نموذج التسجيل
  });
});
