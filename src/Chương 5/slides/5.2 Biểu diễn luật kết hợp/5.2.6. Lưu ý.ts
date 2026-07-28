import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 45 — CONTENT (Từ luật kỹ thuật đến thông tin quản trị)
// ----------------------------------------------------
const slide45Content = pptx.addSlide({ masterName: "CONTENT" });
slide45Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide45Content.addText("TỪ LUẬT KỸ THUẬT ĐẾN THÔNG TIN QUẢN TRỊ", { placeholder: "title" });

addText(
  slide45Content,
  [
    { text: "❌ Chỉ Báo cáo Kỹ thuật thuần túy:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "  {Bánh mì, Sữa} → {Trứng}, confidence = 66,7%\n\n" },
    { text: "• Hạn chế: ", options: { bold: true } },
    { text: "Chưa trả lời được cho nhà quản trị:\n" },
    { text: "  - Luật ảnh hưởng bao nhiêu hóa đơn?\n" },
    { text: "  - Mức liên kết có thực sự đáng chú ý?\n" },
    { text: "  - Doanh nghiệp nên làm gì tiếp theo?" }
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
    line: { color: DUE_COLORS.orange, width: 2 },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide45Content,
  [
    { text: "✅ Báo cáo Thông tin Phục vụ Quyết định:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Phát hiện: ", options: { bold: true } },
    { text: "Khách mua bánh mì + sữa có xu hướng mua trứng.\n\n" },
    { text: "• Quy mô: ", options: { bold: true } },
    { text: "Phủ 40% tổng hóa đơn (Support = 40%).\n\n" },
    { text: "• Đề xuất: ", options: { bold: true } },
    { text: "Thử nghiệm combo Bữa sáng nhanh quy mô nhỏ.\n\n" },
    { text: "• KPI: ", options: { bold: true } },
    { text: "Tỷ lệ mua kèm & Doanh thu tăng thêm." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 15,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide45Content,
  "💡 Thông điệp: Khai phá dữ liệu chỉ tạo ra giá trị khi được chuyển thành thông tin dễ hiểu, thử nghiệm được và đo lường được.",
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
// Slide 46 — CONTENT (Cách báo cáo một luật kết hợp)
// ----------------------------------------------------
const slide46Content = pptx.addSlide({ masterName: "CONTENT" });
slide46Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide46Content.addText("CÁCH BÁO CÁO MỘT LUẬT KẾT HỢP", { placeholder: "title" });

slide46Content.addTable(
  [
    [
      { text: "Thành phần báo cáo", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Cách trình bày trong báo cáo quản trị", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Phát hiện nghiệp vụ", options: { bold: true } }, { text: "Khách mua bánh mì và sữa có xu hướng mua thêm trứng." }],
    [{ text: "Phạm vi tác động", options: { bold: true } }, { text: "Support = 40%: Phủ 40% tổng số hóa đơn trong mẫu nghiên cứu." }],
    [{ text: "Độ tin cậy", options: { bold: true } }, { text: "Confidence = 66.7%: Trong hóa đơn có bánh mì và sữa, 66.7% có trứng." }],
    [{ text: "Mức độ liên kết", options: { bold: true } }, { text: "Lift = 1.11: Liên kết dương nhẹ." }],
    [{ text: "Hành động đề xuất", options: { bold: true, color: DUE_COLORS.green } }, { text: "Thử nghiệm combo “Bữa sáng nhanh” gồm Bánh mì + Sữa + Trứng." }],
    [{ text: "KPI theo dõi", options: { bold: true } }, { text: "Tỷ lệ mua kèm, Doanh thu tăng thêm và Biên lợi nhuận." }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(7.0), cmToInch(16.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide46Content,
  "💡 Lời nói với Nhà quản trị: “Khách mua bánh mì và sữa có xu hướng mua trứng. Tuy nhiên Lift = 1.11 nên hãy bắt đầu bằng thử nghiệm nhỏ thay vì ưu đãi đại tràn.”",
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
// Slide 47 — CONTENT (Từ phát hiện đến hành động)
// ----------------------------------------------------
const slide47Content = pptx.addSlide({ masterName: "CONTENT" });
slide47Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide47Content.addText("TỪ PHÁT HIỆN ĐẾN HÀNH ĐỘNG", { placeholder: "title" });

slide47Content.addTable(
  [
    [
      { text: "Bước quy trình", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Câu hỏi cần trả lời thực tế", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "1. Phát hiện", options: { bold: true } }, { text: "Khách hàng nào có xu hướng mua trứng kèm?" }],
    [{ text: "2. Hành động", options: { bold: true } }, { text: "Có nên gợi ý hoặc giảm giá trứng khi khách mua bánh mì và sữa?" }],
    [{ text: "3. Thử nghiệm", options: { bold: true } }, { text: "Thử tại một số cửa hàng hoặc nhóm khách hàng nhất định." }],
    [{ text: "4. Đo lường KPI", options: { bold: true } }, { text: "Tỷ lệ mua trứng kèm có tăng không? Lợi nhuận tăng không?" }],
    [{ text: "5. Quyết định", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Hiệu quả tăng thêm có đủ lớn để nhân rộng chương trình không?" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(6.0), cmToInch(17.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide47Content,
  "💡 Nhắc nhở sinh viên: Luật kết hợp KHÔNG tự chứng minh ưu đãi sẽ làm tăng doanh số. Doanh nghiệp bắt buộc phải thử nghiệm A/B để kiểm chứng.",
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
