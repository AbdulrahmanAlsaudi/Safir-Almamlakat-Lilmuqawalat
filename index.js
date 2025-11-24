const form = document.getElementById("orderForm");
const loader = document.getElementById("loader");
const successPopup = document.getElementById("successPopup");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // ==== VALIDATION ====
  const name = document.getElementById("customer_name").value.trim();
  const phone = document.getElementById("customer_phone").value.trim();
  const address = document.getElementById("customer_address").value.trim();
  const service = document.getElementById("customer_service").value;
              // ==== كود الايميل اجباري ====
  //const email = document.getElementById("customer_email").value.trim();
//if (!name || !phone || !address || !email) {
   // alert("يرجى تعبئة جميع الحقول المطلوبة.");
   // return;
  //}
  
          // ==== كود الايميل غير اجباري ====
const email = document.getElementById("customer_email").value.trim() || "لم يتم إدخال بريد إلكتروني";

if (!name || !phone || !address) {
  alert("يرجى تعبئة جميع الحقول المطلوبة.");
  return;
}

  

  // Phone Validation (إجباري أرقام فقط)
  if (!/^[0-9+]{7,15}$/.test(phone)) {
    alert("يرجى إدخال رقم هاتف صحيح.");
    return;
  }

  loader.style.display = "block"; // show loader

  // ==== SEND EMAIL USING EMAILJS ====
  emailjs.send("service_4dra8xl", "template_ieu4q8s", {
      customer_name: name,
      customer_phone: phone,
      customer_address: address,
      customer_service: service,
      customer_email: email
    })
    .then(() => {
      loader.style.display = "none";
      openPopup();
      form.reset();
    })
    .catch((error) => {
      loader.style.display = "none";
      alert("حدث خطأ أثناء الإرسال: " + JSON.stringify(error));
    });
});

// ==== POPUP FUNCTIONS ====
function openPopup() {
  successPopup.style.display = "block";
}

function closePopup() {
  successPopup.style.display = "none";
}