const form = document.getElementById("orderForm");
  const loader = document.getElementById("loader");
  const popup = document.getElementById("successPopup");
  const submitBtn = document.querySelector(".submit-btn");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // إظهار Loader وتعطيل الزر
    loader.style.display = "block";
    submitBtn.disabled = true;

    let params = {
      customer_name: document.getElementById("customer_name").value,
      customer_service: document.getElementById("customer_service").value,
      customer_email: document.getElementById("customer_email").value
    };

    emailjs.send("service_we5gph7", "template_wy9b8uk", params)
      .then(function(response) {

          // إخفاء Loader
          loader.style.display = "none";

          // إظهار Popup نجاح
          popup.style.display = "block";

          // إغلاق تلقائي بعد 3 ثواني
          setTimeout(() => {
            popup.style.display = "none";
          }, 3000);

          // إعادة تفعيل الزر
          submitBtn.disabled = false;

          // تفريغ الحقول
          form.reset();

      }, function(error) {
          loader.style.display = "none";
          submitBtn.disabled = false;
          alert("حدث خطأ أثناء الإرسال.");
      });
  });