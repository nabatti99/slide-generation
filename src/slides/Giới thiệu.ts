import { SlideGenerator } from "../slide-generator.ts";
import { addText, DUE_COLORS } from "../template/due-template.ts";
import { cmToInch } from "../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 1: TITLE
// ----------------------------------------------------
const slide1 = pptx.addSlide({ masterName: "TITLE" });
slide1.addText("CHƯƠNG 1", {
  placeholder: "title",
});
slide1.addText("TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "subtitle",
});
slide1.addText("KHAI PHÁ DỮ LIỆU", {
  placeholder: "subject",
});
slide1.addText("Khoa Thống kê-Tin học", {
  placeholder: "faculty",
});

// ----------------------------------------------------
// Slide 2: OBJECTIVE
// ----------------------------------------------------
const slide2 = pptx.addSlide({ masterName: "OBJECTIVE" });

// Since placeholder text does not use coordinate computation, we use standard addText options
const objectivesText = 
  "Sau khi hoàn thành mục này, học viên có thể:\n\n" +
  "• Giải thích khái niệm và đặc trưng của khai phá dữ liệu.\n" +
  "• Phân biệt khai phá dữ liệu với phân tích dữ liệu truyền thống.\n" +
  "• Nhận diện các tác vụ khai phá dữ liệu phổ biến trong kinh tế.\n" +
  "• Mô tả được quy trình KDD và quy trình CRISP-DM.\n" +
  "• Trình bày được các thành phần của hệ thống khai phá dữ liệu.\n" +
  "• Liên hệ được bài toán thực tế với tác vụ khai phá phù hợp.";

addText(slide2, objectivesText, {
  placeholder: "content",
  x: cmToInch(8.5),
  y: cmToInch(3.2),
  w: cmToInch(15.0),
  h: cmToInch(8.0),
  fontSize: 13,
  bold: true,
  color: DUE_COLORS.white,
});
