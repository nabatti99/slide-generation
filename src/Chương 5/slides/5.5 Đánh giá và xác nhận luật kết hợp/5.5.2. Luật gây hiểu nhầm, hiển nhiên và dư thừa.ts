import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 111 — SECTION (5.5.2. LUẬT GÂY HIỂU NHẦM, HIỂN NHIÊN VÀ DƯ THỪA)
// ----------------------------------------------------
const slide111Section = pptx.addSlide({ masterName: "SECTION" });
slide111Section.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide111Section.addText("5.5.2. LUẬT GÂY HIỂU NHẦM, HIỂN NHIÊN VÀ DƯ THỪA", { placeholder: "title" });
slide111Section.addText(
  "Nhận diện và lọc bỏ 3 nhóm luật 'rác' thống kê không tạo ra giá trị hành động kinh doanh thực tế",
  { placeholder: "content" }
);
slide111Section.addText(
  "3 nhóm luật rác: Luật gây hiểu nhầm (Lift ≤ 1), Luật hiển nhiên (theo định nghĩa), Luật dư thừa (không thêm thông tin so với luật tổng quát).",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 112 — CONTENT (Luật gây hiểu nhầm: Confidence cao nhưng Lift <= 1)
// ----------------------------------------------------
const slide112Content = pptx.addSlide({ masterName: "CONTENT" });
slide112Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide112Content.addText("LUẬT GÂY HIỂU NHẦM: CONFIDENCE CAO NHƯNG LIFT ≤ 1", { placeholder: "title" });

slide112Content.addTable(
  [
    [
      { text: "Chỉ số", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Giá trị", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Giải thích bản chất", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Tỷ lệ mua Sữa nền P(Sữa)", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "90%", options: { fill: { color: "FFFFFF" } } }, { text: "Cứ 100 khách thì 90 người mua sữa.", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Luật: {Bánh mì} → {Sữa}", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Conf = 85%", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "85% người mua bánh mì cũng mua sữa.", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "Giá trị Lift", options: { bold: true, color: DUE_COLORS.orange, fill: { color: "FFFFFF" } } }, { text: "Lift = 0.94", options: { fill: { color: "FFFFFF" } } }, { text: "0.85 / 0.90 = 0.94 (< 1.0) ➔ LIÊN KẾT ÂM!", options: { fill: { color: "FFFFFF" } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(7.5), cmToInch(4.0), cmToInch(12.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide112Content,
  "💡 Cảnh báo: Confidence 85% có vẻ 'mạnh' nhưng Lift 0.94 chứng tỏ mua Bánh mì thực chất làm GIẢM khả năng mua Sữa! Loại bỏ ngay!",
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
// Slide 113 — CONTENT (Luật hiển nhiên: Đúng nhưng không có giá trị)
// ----------------------------------------------------
const slide113Content = pptx.addSlide({ masterName: "CONTENT" });
slide113Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide113Content.addText("LUẬT HIỂN NHIÊN: ĐÚNG NHƯNG KHÔNG CÓ GIÁ TRỊ", { placeholder: "title" });

slide113Content.addTable(
  [
    [
      { text: "Luật phát hiện", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Confidence", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Bản chất thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "{Sách nấu ăn Ý} → {Sách nấu ăn}", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "100%", options: { fill: { color: "FFFFFF" } } }, { text: "Sách Ý đương nhiên là Sách nấu ăn.", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "{Bảo hành mở rộng Dell} → {Laptop Dell}", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "100%", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Gói bảo hành Dell gắn liền với máy Dell.", options: { fill: { color: DUE_COLORS.lightBg } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(6.0), cmToInch(2.2), cmToInch(3.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide113Content,
  [
    { text: "🚫 Vấn đề của Luật Hiển nhiên:\n\n", options: { bold: true, fontSize: 13 } },
    { text: "• Có đúng không? ➔ Có.\n\n" },
    { text: "• Có confidence 100% không? ➔ Có.\n\n" },
    { text: "• Có cung cấp tri thức mới nào không? ➔ KHÔNG!\n\n" },
    { text: "➔ Loại bỏ vì không tạo ra bất kỳ hành động bán chéo mới nào." }
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
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide113Content,
  "💡 Phân biệt: Cần phân biệt 'Đúng theo định nghĩa phân loại' với 'Phát hiện mới từ dữ liệu'. Luật hiển nhiên không giúp thay đổi quyết định.",
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
// Slide 114 — CONTENT (Luật dư thừa: Không bổ sung thông tin)
// ----------------------------------------------------
const slide114Content = pptx.addSlide({ masterName: "CONTENT" });
slide114Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide114Content.addText("LUẬT DƯ THỪA: KHÔNG BỔ SUNG THÔNG TIN", { placeholder: "title" });

slide114Content.addTable(
  [
    [
      { text: "Chỉ tiêu so sánh", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Luật Tổng quát", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Luật Cụ thể (Laptop Dell)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Luật kết hợp", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "{Máy tính xách tay} → {Máy in}", options: { fill: { color: "FFFFFF" } } }, { text: "{Laptop Dell} → {Máy in}", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Support", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "8.0%", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "2.0%", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "Confidence", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "70.0%", options: { fill: { color: "FFFFFF" } } }, { text: "72.0% (Gần như bằng 70%)", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Tỷ trọng Dell trong Laptop", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "-", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "25.0%", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "Support Kỳ vọng", options: { bold: true, color: DUE_COLORS.orange, fill: { color: "FFFFFF" } } }, { text: "-", options: { fill: { color: "FFFFFF" } } }, { text: "8% × 25% = 2.0% (BẰNG NHAU!)", options: { fill: { color: "FFFFFF" } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(6.5), cmToInch(8.5), cmToInch(8.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide114Content,
  "💡 Kết luận Dư thừa: Vì Confidence (72% ≈ 70%) và Support (2% = 2%) đúng mức kỳ vọng, luật 'Laptop Dell → Máy in' là DƯ THỪA. Loại bỏ!",
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
// Slide 115 — CONTENT (Phân biệt 3 loại luật cần loại bỏ)
// ----------------------------------------------------
const slide115Content = pptx.addSlide({ masterName: "CONTENT" });
slide115Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide115Content.addText("PHÂN BIỆT 3 LOẠI LUẬT CẦN LOẠI BỎ", { placeholder: "title" });

slide115Content.addTable(
  [
    [
      { text: "Loại luật Rác", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Dấu hiệu nhận biết đặc trưng", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Ví dụ minh họa", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Vấn đề cốt lõi", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "1. Gây hiểu nhầm", options: { bold: true, color: DUE_COLORS.orange, fill: { color: "FFFFFF" } } }, { text: "Conf cao nhưng Lift ≤ 1", options: { fill: { color: "FFFFFF" } } }, { text: "Sữa → Bánh mì", options: { fill: { color: "FFFFFF" } } }, { text: "Vế phải vốn đã quá phổ biến nền.", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "2. Hiển nhiên", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Đúng theo quan hệ phân loại/định nghĩa", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Sách nấu ăn Ý → Sách nấu ăn", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Không tạo ra tri thức hành vi mới.", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "3. Dư thừa", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Luật cụ thể có chỉ số đúng mức kỳ vọng", options: { fill: { color: "FFFFFF" } } }, { text: "Laptop Dell → Máy in", options: { fill: { color: "FFFFFF" } } }, { text: "Không bổ sung thông tin so với luật cha.", options: { fill: { color: "FFFFFF" } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(4.5), cmToInch(6.5), cmToInch(5.5), cmToInch(7.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide115Content,
  "💡 Nguyên tắc rút gọn: Danh sách 20 luật thực chất giá trị hơn danh sách 2.000 luật rác! Ưu tiên tập luật ngắn gọn, không chồng chéo.",
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
// Slide 116 — CONTENT (Bài tập: Luật nào nên giữ?)
// ----------------------------------------------------
const slide116Content = pptx.addSlide({ masterName: "CONTENT" });
slide116Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide116Content.addText("BÀI TẬP: LUẬT NÀO NÊN GIỮ?", { placeholder: "title" });

slide116Content.addTable(
  [
    [
      { text: "Luật ứng viên", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Support", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Conf", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Lift", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Phân loại & Khuyến nghị", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "1. {Cà phê} → {Nước đóng chai}", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "18%", options: { fill: { color: "FFFFFF" } } }, { text: "75%", options: { fill: { color: "FFFFFF" } } }, { text: "0.99", options: { fill: { color: "FFFFFF" } } }, { text: "❌ Luật Gây hiểu nhầm (Lift < 1 ➔ LOẠI)", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "2. {Sách KH Dữ liệu} → {Sách}", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "6%", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "100%", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "1.20", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "❌ Luật Hiển nhiên (Phân cấp sản phẩm ➔ LOẠI)", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "3. {Điện thoại cao cấp} → {Tai nghe không dây}", options: { bold: true, color: DUE_COLORS.green, fill: { color: "FFFFFF" } } }, { text: "4%", options: { fill: { color: "FFFFFF" } } }, { text: "42%", options: { fill: { color: "FFFFFF" } } }, { text: "2.40", options: { fill: { color: "FFFFFF" } } }, { text: "✅ GIỮ LẠI (Lift 2.40 mạnh ➔ Thử nghiệm combo!)", options: { fill: { color: "FFFFFF" } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(7.5), cmToInch(2.2), cmToInch(2.2), cmToInch(2.2), cmToInch(9.7)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide116Content,
  "💡 Thông điệp chốt: Một luật đáng giữ phải vừa thể hiện liên kết đáng tin cậy, vừa mới, vừa không trùng lặp và gắn liền với hành động kinh doanh!",
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
