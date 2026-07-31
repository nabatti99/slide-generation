import { SlideGenerator } from "../../slide-generator.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 21: END
// ----------------------------------------------------
const slideEnd = pptx.addSlide({ masterName: "END" });
slideEnd.addText("KHAI PHÁ DỮ LIỆU (STA5009N)", { placeholder: "subject" });
slideEnd.addText("Khoa Thống kê - Tin học", { placeholder: "faculty" });
slideEnd.addText("due@due.edu.vn", { placeholder: "email" });
slideEnd.addText("0236.xxx.xxx", { placeholder: "phone" });
