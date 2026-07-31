import { SlideGenerator } from "../../slide-generator.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide END
// ----------------------------------------------------
const endSlide = pptx.addSlide({ masterName: "END" });
endSlide.addText("Giảng viên: TS. Lê Diên Tuấn & TS. Nguyễn Thị Uyên Nhi", {
  placeholder: "email",
});
endSlide.addText("Email: tuanld@due.edu.vn | nhintiun@due.edu.vn", {
  placeholder: "phone",
});
endSlide.addText("KHAI PHÁ DỮ LIỆU (STA5009N)", {
  placeholder: "subject",
});
endSlide.addText("Khoa Thống kê - Tin học", {
  placeholder: "faculty",
});