import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 121: SECTION
// ----------------------------------------------------
const slide121Section = pptx.addSlide({ masterName: "SECTION" });
slide121Section.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide121Section.addText("6.4. TÓM TẮT CHƯƠNG 6", { placeholder: "title" });
slide121Section.addText("Tổng kết chương và định hướng tương lai của Khai phá dữ liệu", { placeholder: "content" });
slide121Section.addText(
  "\"Đã hoàn thành hành trình CÁI GÌ (6.1) — BẰNG GÌ (6.2) — CHO AI (6.3); giờ nhìn lại toàn cảnh và nhìn về phía trước.\"\n\n" +
  "Tổng kết 3 Hướng nghiên cứu  |  Xu hướng Tương lai (2026+)  |  Bài tập & Thảo luận Ôn chương",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 122: CONTENT (BỨC TRANH TỔNG THỂ MỤC 6.4)
// ----------------------------------------------------
const slide122Content = pptx.addSlide({ masterName: "CONTENT" });
slide122Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide122Content.addText("BỨC TRANH TỔNG THỂ MỤC 6.4", { placeholder: "title" });

addText(
  slide122Content,
  [
    { text: "🗺️ Ba Bước Khép lại Chương 6:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• 6.4.1 Tổng kết 3 hướng nghiên cứu: ", options: { bold: true } },
    { text: "Hệ thống hóa toàn bộ chương qua khung CÁI GÌ - BẰNG GÌ - CHO AI bằng bản đồ liên kết.\n\n" },
    { text: "• 6.4.2 Xu hướng phát triển tương lai: ", options: { bold: true } },
    { text: "Đặt KPDL trong bối cảnh AI tạo sinh, Big Data & Đạo đức dữ liệu 2026+.\n\n" },
    { text: "• 6.4.3 Ôn tập & Thảo luận: ", options: { bold: true } },
    { text: "Hệ thống câu hỏi & Bài tập thực hành tổng hợp." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide122Content,
  [
    { text: "🎯 Mục tiêu Tổng kết:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Chuyển đổi tư duy: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Từ học các kiến thức kỹ thuật rời rạc sang nhìn thấy một HỆ THỐNG LIỀN MẠCH.\n\n" },
    { text: "• Hoàn thiện năng lực: ", options: { bold: true } },
    { text: "Giúp học viên thạc sĩ kinh tế tự tin đặt bài toán, chọn phương pháp và quản trị rủi ro dự án dữ liệu." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.blue, width: 1 },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide122Content,
  "💡 Mục tiêu 6.4: Hệ thống hóa toàn bộ tri thức Chương 6 thành một khung tư duy thực hành hoàn chỉnh.",
  {
    x: cmToInch(0.8),
    y: cmToInch(10.0),
    w: cmToInch(23.8),
    h: cmToInch(1.9),
    fontSize: 13.5,
    lineSpacing: 18,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    bold: true,
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "middle",
  }
);

slide122Content.addNotes(
  "Giảng viên dừng lại đối chiếu slide mindmap tổng quan đầu chương để tạo cảm giác quay lại điểm xuất phát."
);
