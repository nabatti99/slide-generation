import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 41 — CONTENT (Bài tập tính toán xen kẽ)
// ----------------------------------------------------
const slide41Content = pptx.addSlide({ masterName: "CONTENT" });
slide41Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide41Content.addText("BÀI TẬP TÍNH TOÁN XEN KẼ", { placeholder: "title" });

slide41Content.addTable(
  [
    [
      { text: "Thông tin giao dịch quan sát", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Số lượng hóa đơn", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Có cả Cà phê và Bánh quy count(Cà phê, Bánh quy)", options: { bold: true } }, { text: "18" }],
    [{ text: "Có Cà phê count(Cà phê)", options: { bold: true } }, { text: "24" }],
    [{ text: "Có Bánh quy count(Bánh quy)", options: { bold: true } }, { text: "30" }],
    [{ text: "Tổng số hóa đơn mẫu N", options: { bold: true, color: DUE_COLORS.orange } }, { text: "100" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(8.5), cmToInch(3.0)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide41Content,
  [
    { text: "📝 Yêu cầu bài tập:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "Đánh giá luật kết hợp: {Cà phê} → {Bánh quy}\n\n" },
    { text: "1. Tính Support của luật.\n\n" },
    { text: "2. Tính Confidence của luật.\n\n" },
    { text: "3. Tính Lift của luật.\n\n" },
    { text: "4. Diễn giải kết quả dưới góc độ kinh doanh." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 15,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide41Content,
  "💡 Nhắc lại: Support = (Đơn có cả 2) / N; Confidence = (Đơn có cả 2) / (Đơn có vế trái); Lift = Confidence / support(Vế phải).",
  {
    x: cmToInch(0.8),
    y: cmToInch(9.8),
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

// ----------------------------------------------------
// Slide 42 — CONTENT (Đáp án: Tính Support và Confidence)
// ----------------------------------------------------
const slide42Content = pptx.addSlide({ masterName: "CONTENT" });
slide42Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide42Content.addText("ĐÁP ÁN: TÍNH SUPPORT VÀ CONFIDENCE", { placeholder: "title" });

addText(
  slide42Content,
  [
    { text: "1️⃣ Bước 1 — Tính Support:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Công thức: support(Cà phê → Bánh quy) = count(Cà phê, Bánh quy) / N\n\n" },
    { text: "• Tính toán: 18 / 100 = 18%.\n\n" },
    { text: "• Diễn giải: ", options: { bold: true } },
    { text: "18% tổng số hóa đơn đồng thời có cả Cà phê và Bánh quy." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 15,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.green, width: 2 },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide42Content,
  [
    { text: "2️⃣ Bước 2 — Tính Confidence:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Công thức: confidence = count(Cà phê, Bánh quy) / count(Cà phê)\n\n" },
    { text: "• Tính toán: 18 / 24 = 75%.\n\n" },
    { text: "• Diễn giải: ", options: { bold: true } },
    { text: "Trong nhóm khách mua Cà phê, có 75% khách hàng mua kèm Bánh quy." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 15,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.blue },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide42Content,
  "💡 Tóm tắt: Support (18%) cho biết mức độ bao phủ toàn CSDL; Confidence (75%) cho biết độ tin cậy trong nhóm mua Cà phê.",
  {
    x: cmToInch(0.8),
    y: cmToInch(9.8),
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

// ----------------------------------------------------
// Slide 43 — CONTENT (Đáp án: Tính và đọc Lift)
// ----------------------------------------------------
const slide43Content = pptx.addSlide({ masterName: "CONTENT" });
slide43Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide43Content.addText("ĐÁP ÁN: TÍNH VÀ ĐỌC LIFT", { placeholder: "title" });

addText(
  slide43Content,
  [
    { text: "3️⃣ Bước 3 & 4 — Tính và Đọc Lift:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Support của Bánh quy (Vế phải): ", options: { bold: true } },
    { text: "support(Bánh quy) = 30 / 100 = 30%.\n\n" },
    { text: "• Tính Lift: ", options: { bold: true } },
    { text: "lift = confidence / support(Bánh quy) = 75% / 30% = 2,5!\n\n" },
    { text: "• Diễn giải: ", options: { bold: true } },
    { text: "Khách mua Cà phê có khả năng mua Bánh quy CAO GẤP 2,5 LẦN mức trung bình toàn bộ khách hàng!" }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 15,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.orange, width: 1 },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

slide43Content.addTable(
  [
    [
      { text: "Thước đo", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Kết quả", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Nhận định quản trị", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "Support", options: { bold: true } }, { text: "18%" }, { text: "Bao phủ 18 trên 100 hóa đơn" }],
    [{ text: "Confidence", options: { bold: true } }, { text: "75%" }, { text: "3 trong 4 khách mua cà phê mua thêm bánh quy" }],
    [{ text: "Lift", options: { bold: true, color: DUE_COLORS.orange } }, { text: "2.50" }, { text: "Liên kết dương rất mạnh giữa Cà phê và Bánh quy" }],
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(3.2), cmToInch(2.5), cmToInch(5.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide43Content,
  "💡 Kết luận: Lift = 2,5 cho thấy sự xuất hiện của Cà phê thúc đẩy việc mua Bánh quy rất rõ rệt.",
  {
    x: cmToInch(0.8),
    y: cmToInch(9.8),
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

// ----------------------------------------------------
// Slide 44 — CONTENT (Từ chỉ số đến quyết định kinh doanh)
// ----------------------------------------------------
const slide44Content = pptx.addSlide({ masterName: "CONTENT" });
slide44Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide44Content.addText("TỪ CHỈ SỐ ĐẾN QUYẾT ĐỊNH KINH DOANH", { placeholder: "title" });

addText(
  slide44Content,
  [
    { text: "❓ Câu hỏi thảo luận chiến lược:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "“Với Lift = 2,5 nhưng Support = 18%, cửa hàng nên áp dụng ưu đãi đại trà hay thử nghiệm trên nhóm mua cà phê?”\n\n" },
    { text: "• Khuyến nghị: ", options: { bold: true } },
    { text: "Nên ưu tiên thử nghiệm trên NHÓM KHÁCH MUA CÀ PHÊ.\n\n" },
    { text: "• Lý do: ", options: { bold: true } },
    { text: "Khách mua cà phê có xu hướng mua bánh quy rất rõ (Conf=75%), nhưng Support=18% chưa đủ đại trà cho mọi khách." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 15,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.blue },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide44Content,
  [
    { text: "🚀 Thiết kế thử nghiệm A/B Đề xuất:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "1. Hiển thị gợi ý: “Thêm bánh quy dùng cùng cà phê” khi khách chọn cà phê.\n\n" },
    { text: "2. Chỉ áp dụng cho đơn hàng đã có cà phê.\n\n" },
    { text: "3. Đo lường KPI: Tỷ lệ mua bánh quy kèm, doanh thu tăng thêm và lợi nhuận ròng sau chi phí ưu đãi." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 16,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide44Content,
  "💡 Thông điệp: Lift cho biết tiềm năng liên kết; Support cho biết quy mô tác động. Quyết định kinh doanh cần xem cả hai!",
  {
    x: cmToInch(0.8),
    y: cmToInch(9.8),
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
