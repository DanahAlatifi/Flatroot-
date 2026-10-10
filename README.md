# Flatroot — Beauty Store

موقع متجر تجميل ثابت (Static) بـ HTML و CSS و JavaScript بدون أي مكتبات، وجاهز للرفع مباشرة على GitHub Pages أو Vercel أو Netlify.

## هيكل الملفات

```
flatroot/
├── index.html          ← الصفحة الرئيسية (الواجهة + الأكثر مبيعاً)
├── skincare.html       ← منتجات العناية بالبشرة
├── bath-body.html      ← منتجات الاستحمام والجسم
├── hair.html           ← منتجات الشعر
├── ingredients.html    ← جدول المكونات
├── how-to-use.html     ← فيديو طريقة الاستخدام + التقييم
├── login.html          ← تسجيل الدخول (تجريبي)
├── assets/
│   ├── css/style.css   ← كل التنسيقات (مقسمة بأقسام مرقمة)
│   └── js/main.js      ← كل السكربتات (السلة، القائمة، الفورم)
└── README.md
```

## التقنيات

| التقنية | وين |
|---|---|
| **HTML5** | كل صفحات `.html` |
| **CSS3** (Flexbox، متغيرات CSS، Media Queries) | `assets/css/style.css` |
| **JavaScript** | `assets/js/main.js` |
| **Google Fonts** (خط Poppins) | أول سطر في `style.css` |
| **YouTube embed** | `how-to-use.html` |

## التشغيل محلياً
افتحي `index.html` في المتصفح مباشرة. ما يحتاج تثبيت أي شي.

## الرفع
- **GitHub Pages:** Settings → Pages → Branch: `main` / root → Save
- **Vercel / Netlify:** استوردي الريبو واضغطي Deploy، بدون أي إعدادات
