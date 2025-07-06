  $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true
      });
    });

    function showSection(name) {
  // ✅ أخفي كل الأقسام
  const sections = document.querySelectorAll('[id^="section-"]');
  sections.forEach(sec => sec.classList.add('hidden'));

  // ✅ أظهر القسم المطلوب
  const target = document.getElementById('section-' + name);
  if (target) target.classList.remove('hidden');

  
  // ✅ إزالة التفعيل من كل الأزرار
  const buttons = document.querySelectorAll('[data-section]');
  buttons.forEach(btn => btn.classList.remove('text-white'));

  // ✅ تفعيل الزر الحالي
  const activeButton = document.querySelector(`[data-section="${name}"]`);
  if (activeButton) activeButton.classList.add('text-white');

  }



    // شاشة الاعدادات

      const settingsPanel = document.getElementById('settingsPanel');
  const closeBtn = document.getElementById('closeSettings');
  const openBtn = document.getElementById('openSettings'); // نفترض أن لديك زر بهذا المعرف


  openBtn.addEventListener('click', () => {
    settingsPanel.classList.remove('translate-x-full');
  });

  closeBtn.addEventListener('click', () => {
    settingsPanel.classList.add('translate-x-full');
  });

     // شاشة الحساب

      const accountPanel = document.getElementById('accountPanel');
  const closeBtn2 = document.getElementById('closeAccount');
  const openBtn2 = document.getElementById('openAccount'); // نفترض أن لديك زر بهذا المعرف


  openBtn2.addEventListener('click', () => {
    accountPanel.classList.remove('translate-x-full');
  });

  closeBtn2.addEventListener('click', () => {
    accountPanel.classList.add('translate-x-full');
  });


// شاشة التاكيد
  const signOutBtn = document.getElementById('signOutBtn');
  const modal = document.getElementById('confirmModal');
  const confirmNo = document.getElementById('confirmNo');
  const confirmYes = document.getElementById('confirmYes');

 
  signOutBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  // إغلاق عند الضغط على No
  confirmNo.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // عند الضغط على Yes (نفذ أي شيء مثل logout)
  confirmYes.addEventListener('click', () => {
    modal.classList.add('hidden');
    alert("You have been logged out!"); 
    window.location.href = "Home.html"; 
  });



  // الرسم البياني
  const ctx = document.getElementById('barChart');

  if (ctx) {
    const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(59,130,246,1)');   // blue-500
    gradient.addColorStop(1, 'rgba(255,255,255,1)');  // white

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
          label: 'BTC Volume',
          data: [2, 4, 6, 8, 10, 6, 4],
          backgroundColor: gradient,
          borderColor: '#2463ea',     
          borderWidth: 1,            
          borderRadius: 0,
          categoryPercentage: 1.0,
          barPercentage: 1.0
        }]
      },
      options: {
        scales: {
          y: {
            ticks: { display: false },
            grid: { display: false },
            // border: { display: false }
          },
          x: {
            grid: { display: false },
            // border: { display: false }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }




// قائمة list

  function toggleDropdown() {
    document.getElementById("listDropdown").classList.toggle("hidden");
  }

    document.querySelectorAll('#listDropdown button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('listDropdown').classList.add('hidden');
    });
  });



  // الوضع الليلي

  const toggle = document.getElementById("darkToggle");

  toggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");

    // لو بدك تحفظ التفضيل للمستقبل
    if (this.checked) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // عند تحميل الصفحة: استرجاع التفضيل
  window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      toggle.checked = true;
    }
  });


