import { SlideGenerator } from "../slide-generator.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide END
// ----------------------------------------------------
const endSlide = pptx.addSlide({ masterName: "END" });
endSlide.addText("EMAIL: canhdtn@due.edu.vn", {
  placeholder: "email",
});
endSlide.addText("SĐT: 0909090909", {
  placeholder: "phone",
});
endSlide.addText("KHAI PHÁ DỮ LIỆU", {
  placeholder: "subject",
});
endSlide.addText("Khoa Thống kê-Tin học", {
  placeholder: "faculty",
});