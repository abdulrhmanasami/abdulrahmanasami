document.addEventListener('DOMContentLoaded', function() {
  // تفاعل معاينة المكونات
  document.querySelectorAll('.component-preview .btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Komponente funktioniert!');
    });
  });

  // نسخ الأكواد تلقائيًا
  document.querySelectorAll('.code-snippet').forEach(snippet => {
    snippet.addEventListener('click', function() {
      navigator.clipboard.writeText(this.textContent);
      showToast('Code kopiert!');
    });
  });
}); 