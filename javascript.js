function Login() {
    let mail = document.querySelector('[name="mail"]').value;
    let password = document.querySelector('[name="password"]').value;
    if (!mail || !password) {
        alert('請輸入電子郵件帳號和密碼');
        return false;
    }
    window.location.href = "https://www.google.com/search?q=%E5%80%8B%E8%B3%87%E8%A2%AB%E7%9B%9C&sca_esv=f73e6ca5e1446b75&rlz=1C1GCEA_enTW860TW860&sxsrf=ADLYWIJZKWU9tfsbllXFzv3sKHyhnxwV8A%3A1714909865656&ei=qXI3ZvfWJ8uhvr0Pt8sB&oq=%E5%80%8B%E8%B3%87%E8%A2%AB%E9%A8%99&gs_lp=Egxnd3Mtd2l6LXNlcnAiDOWAi-izh-iiq-momSoCCAIyBRAAGIAEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIESI9FUABYrkNwBHgBkAEAmAHQAaAB6AuqAQYxOC4wLjG4AQHIAQD4AQGYAhSgAuMKqAIKwgIIEAAYgAQYsQPCAgsQABiABBixAxiDAcICBBAAGAPCAggQLhiABBixA8ICCxAuGIAEGLEDGIMBwgIOEAAYgAQYsQMYgwEYigXCAgcQIxgnGOoCwgIFEC4YgATCAgsQLhiABBjHARivAcICBxAAGIAEGA3CAggQABiiBBiJBZgDEJIHBDE5LjGgB9Q5&sclient=gws-wiz-serp";
    return false;
}
function QR() {
    window.location.href = "https://i.postimg.cc/L6J0x7NX/qr-code.png";
    return false;
}