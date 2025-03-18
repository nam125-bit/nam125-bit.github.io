document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const aboutSection = document.querySelector('#about .content p');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (e.target.getAttribute('href') === '#about') {
                aboutSection.textContent = "Object trong JavaScript là một kiểu dữ liệu phức tạp, cho phép lưu trữ các cặp key-value. Nó là nền tảng cho nhiều cấu trúc dữ liệu và là một phần quan trọng trong lập trình JavaScript.";
            }
        });
    });
});