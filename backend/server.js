const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const posts = [
  {
    id: 1,
    title: "تحول دیجیتال در ایران",
    summary: "نقش فناوری‌های نوین در رشد کسب‌وکارهای ایرانی در عصر دیجیتال.",
    image: "https://fanava.net/wp-content/uploads/2023/09/digital.jpg"
  },
  {
    id: 2,
    title: "هوش مصنوعی و آینده ارتباطات",
    summary: "چگونه AI باعث تغییر در ساختار شبکه‌ها و خدمات ارتباطی می‌شود.",
    image: "https://fanava.net/wp-content/uploads/2023/09/ai.jpg"
  },
  {
    id: 3,
    title: "امنیت داده در دنیای مدرن",
    summary: "نگاهی به اهمیت امنیت اطلاعات در سازمان‌ها و کسب‌وکارها.",
    image: "https://fanava.net/wp-content/uploads/2023/09/security.jpg"
  }
];

// ✅ مسیر لیست همه پست‌ها
app.get("/api/posts", (req, res) => {
  console.log("درخواست به /api/posts رسید");
  res.json(posts);
});

// ✅ مسیر جزئیات هر پست
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);
  if (!post) return res.status(404).json({ message: "پست پیدا نشد" });

  post.content =
    "این متن کامل مقاله است. شما می‌توانید در این بخش محتوای طولانی‌تری از مقاله مورد نظر را نمایش دهید.";
  res.json(post);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
