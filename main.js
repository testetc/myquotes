// حدد زر واتساب
 whats1 = document.getElementById("whats1");
 whats2 = document.getElementById("whats2");
 whats3 = document.getElementById("whats3");
 whats4 = document.getElementById("whats4");
 whats5 = document.getElementById("whats5");
const reloadBtn= document.getElementById("reload");

// قم بإضافة مستمع الحدث للنقر
// whatsAppButton.addEventListener("click",asd);

// نسخ العبارة إلى الحافظة عند النقر على زر النسخ
function copyToClipboard(elementId) {
  const element = document.getElementById(elementId);
  const storage = document.createElement('textarea');
  storage.value = element.innerHTML;
  element.appendChild(storage);
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.removeChild(storage);
}

['copy1', 'copy2', 'copy3', 'copy4','copy5'].forEach(buttonId => {
  document.getElementById(buttonId).addEventListener('click', () => copyToClipboard(buttonId.replace('copy', 'quote')));
});

// إعادة تحميل العبارات عند النقر على زر إعادة التحميل
function generateQuotes(){
  fetch('https://type.fit/api/quotes')
    .then((response) => response.json())
    .then((data) => {
      for (i = 1; i <= 5; i++) {
        randomQuotes = Math.trunc(Math.random() * data.length);
        quotesElement = document.getElementById(`quote${i}`);
        quotesElement.textContent = data[randomQuotes].text;
        authorElement = document.getElementById(`author${i}`);
        authorElement.textContent = data[randomQuotes].author || "Unknown";
      }
      function shareQuote1() {
  
        // استخرج النص من العبارة الحالية
        const currentQuote = document.getElementById("quote1").textContent;
        
        // إنشاء رابط مشاركة الحالة
        const whatsappLink = `whatsapp://send?text=${currentQuote}`;
        
        // قم بفتح الرابط في نافذة جديدة
        window.open(whatsappLink);
        
      }
      whats1.addEventListener("click", shareQuote1)


      function shareQuote2() {
  
        // استخرج النص من العبارة الحالية
        const currentQuote = document.getElementById("quote2").textContent;
        
        // إنشاء رابط مشاركة الحالة
        const whatsappLink = `whatsapp://send?text=${currentQuote}`;
        
        // قم بفتح الرابط في نافذة جديدة
        window.open(whatsappLink);
        
      }
      whats2.addEventListener("click", shareQuote2)
      


      function shareQuote3() {
  
        // استخرج النص من العبارة الحالية
        const currentQuote = document.getElementById("quote3").textContent;
        
        // إنشاء رابط مشاركة الحالة
        const whatsappLink = `whatsapp://send?text=${currentQuote}`;
        
        // قم بفتح الرابط في نافذة جديدة
        window.open(whatsappLink);
        
      }
      whats3.addEventListener("click", shareQuote3)



      function shareQuote4() {
  
        // استخرج النص من العبارة الحالية
        const currentQuote = document.getElementById("quote4").textContent;
        
        // إنشاء رابط مشاركة الحالة
        const whatsappLink = `whatsapp://send?text=${currentQuote}`;
        
        // قم بفتح الرابط في نافذة جديدة
        window.open(whatsappLink);
        
      }
      whats4.addEventListener("click", shareQuote4)


      function shareQuote5() {
  
        // استخرج النص من العبارة الحالية
        const currentQuote = document.getElementById("quote5").textContent;
        
        // إنشاء رابط مشاركة الحالة
        const whatsappLink = `whatsapp://send?text=${currentQuote}`;
        
        // قم بفتح الرابط في نافذة جديدة
        window.open(whatsappLink);
        
      }
      whats5.addEventListener("click", shareQuote5)
     
    });
}

// إنشاء عبارات جديدة عند تحميل الصفحة
generateQuotes();

// إعادة تحميل العبارات عند النقر على زر إعادة التحميل
reloadBtn.addEventListener("click", generateQuotes);




