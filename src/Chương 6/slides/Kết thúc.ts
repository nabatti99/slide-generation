import { SlideGenerator } from "../../slide-generator.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 21: END
// ----------------------------------------------------
const slideEnd = pptx.addSlide({ masterName: "END" });
slideEnd.addText("KHAI PHÁ DỮ LIỆU", { placeholder: "subject" });
slideEnd.addText("Khoa Thống kê - Tin học", { placeholder: "faculty" });
slideEnd.addText("Email: canhdtn@due.edu.vn", { placeholder: "email" });
slideEnd.addText("Điện thoại: 0909090909", { placeholder: "phone" });
