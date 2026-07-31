import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 116: SECTION
// ----------------------------------------------------
const slide116Section = pptx.addSlide({ masterName: "SECTION" });
slide116Section.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide116Section.addText("6.3.6. KHAI PHÁ DỮ LIỆU VÀ XÃ HỘI", { placeholder: "title" });
slide116Section.addText("Data Mining and Society — Quyền riêng tư, Pháp lý và Đạo đức dữ liệu", { placeholder: "content" });
slide116Section.addText(
  "\"Khép vòng mục 6.3 — Sau khi thấy KPDL phục vụ tài chính, bán lẻ, an ninh, gợi ý — Giờ đặt câu hỏi: Xã hội trả giá gì?\"\n\n" +
  "Khai phá Vô hình  |  GDPR & Nghị định 13/2023  |  Trách nhiệm Quản trị Dữ liệu",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 117: CONTENT (KHAI PHÁ DỮ LIỆU "KHẮP NƠI VÀ VÔ HÌNH")
// ----------------------------------------------------
const slide117Content = pptx.addSlide({ masterName: "CONTENT" });
slide117Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide117Content.addText("KHAI PHÁ DỮ LIỆU VÔ HÌNH", { placeholder: "title" });

addText(
  slide117Content,
  [
    { text: "👁️ Hiện diện Vô hình trong Đời sống:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Hiện diện khắp nơi: ", options: { bold: true } },
    { text: "Google search, Bảng tin Facebook, Giá vé máy bay động, Duyệt tín dụng tự động, Chống spam.\n\n" },
    { text: "• Sự bất đối xứng thông tin: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Người dùng hưởng tiện lợi nhưng KHÔNG BIẾT dữ liệu của mình được thu thập, phân tích và chia sẻ ra sao." }
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
  slide117Content,
  [
    { text: "✈️ Giá động & Phân biệt Đối xử (Dynamic Pricing):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Định giá động (Dynamic Pricing):\n", options: { bold: true } },
    { text: "  Cùng 1 chuyến bay, 2 người dùng thấy 2 giá khác nhau dựa trên lịch sử duyệt web.\n\n" },
    { text: "• Thảo luận Kinh tế vi mô: ", options: { bold: true } },
    { text: "Đây là hiệu quả tối ưu thị trường hay là hành vi Phân biệt đối xử bằng giá (Price Discrimination) xâm phạm người tiêu dùng?" }
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
  slide117Content,
  "💡 Ranh giới quản trị: Phân định giữa Cá nhân hóa hữu ích vs Giám sát thao túng hành vi người dùng.",
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

slide117Content.addNotes(
  "Kết nối với khái niệm Price Discrimination trong Kinh tế vi mô — điểm thảo luận liên môn đắt giá."
);

// ----------------------------------------------------
// Slide 118: CONTENT (QUYỀN RIÊNG TƯ & NGHỊ ĐỊNH 13/2023)
// ----------------------------------------------------
const slide118Content = pptx.addSlide({ masterName: "CONTENT" });
slide118Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide118Content.addText("QUYỀN RIÊNG TƯ & NGHỊ ĐỊNH 13/2023", { placeholder: "title" });

addText(
  slide118Content,
  [
    { text: "🔒 Privacy-Preserving Data Mining & GDPR:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Kỹ thuật bảo vệ quyền riêng tư: ", options: { bold: true } },
    { text: "k-Anonymity (làm nhiễu), Thêm nhiễu ngẫu nhiên, Khai phá phân tán (Federated learning).\n\n" },
    { text: "• Khung chuẩn quốc tế (GDPR - EU):\n", options: { bold: true } },
    { text: "  Quyền được đồng ý rõ ràng, Tối thiểu hóa dữ liệu, Quyền được quên (Right to be forgotten)." }
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
  slide118Content,
  [
    { text: "🇻🇳 Khung Pháp lý tại Việt Nam:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Nghị định 13/2023/NĐ-CP & Luật Bảo vệ Dữ liệu cá nhân:\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "  Doanh nghiệp khai phá dữ liệu khách BẮT BUỘC có sự đồng ý, tuân thủ nguyên tắc mục đích rõ ràng và bảo mật lưu trữ.\n\n" },
    { text: "• Lợi thế cạnh tranh: ", options: { bold: true } },
    { text: "Tuân thủ pháp lý là 'Lợi thế cạnh tranh về Niềm tin' dài hạn." }
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
  slide118Content,
  "💡 Thông điệp quản trị: Tuân thủ Nghị định 13/2023 không chỉ là nghĩa vụ mà là tài sản niềm tin với khách hàng.",
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

slide118Content.addNotes(
  "Giảng viên nhấn kỹ Nghị định 13/2023/NĐ-CP về Bảo vệ dữ liệu cá nhân tại Việt Nam."
);

// ----------------------------------------------------
// Slide 119: CONTENT (THẢO LUẬN NHÓM: ĐẠO ĐỨC DỮ LIỆU CỦA BẠN)
// ----------------------------------------------------
const slide119Content = pptx.addSlide({ masterName: "CONTENT" });
slide119Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide119Content.addText("THẢO LUẬN NHÓM: ĐẠO ĐỨC DỮ LIỆU", { placeholder: "title" });

// Card 1: Top-Left (Y = 2.0 cm, H = 3.5 cm)
addText(
  slide119Content,
  [
    { text: "🏦 Nhóm 1: Scorecard Mạng Xã hội:\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Ngân hàng muốn dùng dữ liệu MXH để chấm điểm tín dụng ➔ Nên hay không? Ranh giới nằm ở đâu?" }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(3.5),
    fontSize: 10.5,
    lineSpacing: 13.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 6,
    rectRadius: 0.1,
    valign: "top",
  }
);

// Card 2: Top-Right (Y = 2.0 cm, H = 3.5 cm)
addText(
  slide119Content,
  [
    { text: "🛍️ Nhóm 2: Case Target Bầu bí:\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Sàn TMĐT biết khách hàng mang thai trước cả gia đình họ ➔ Gợi ý sản phẩm thế nào cho tinh tế?" }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(3.5),
    fontSize: 10.5,
    lineSpacing: 13.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.orange, width: 1 },
    shape: "roundRect",
    margin: 6,
    rectRadius: 0.1,
    valign: "top",
  }
);

// Card 3: Bottom-Left (Y = 5.8 cm, H = 3.5 cm)
addText(
  slide119Content,
  [
    { text: "⌚ Nhóm 3: Phí Bảo hiểm theo Đồng hồ Smartwatch:\n", options: { bold: true, color: DUE_COLORS.blue } },
    { text: "Công ty bảo hiểm định phí theo nhịp tim/bước chân ➔ Công bằng hay Phân biệt đối xử?" }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(5.8),
    w: cmToInch(11.5),
    h: cmToInch(3.5),
    fontSize: 10.5,
    lineSpacing: 13.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.blue, width: 1 },
    shape: "roundRect",
    margin: 6,
    rectRadius: 0.1,
    valign: "top",
  }
);

// Card 4: Bottom-Right (Y = 5.8 cm, H = 3.5 cm)
addText(
  slide119Content,
  [
    { text: "📞 Nhóm 4: Bán Insight Thuê bao Viễn thông:\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Nhà mạng bán dữ liệu insight vị trí/hành vi ẩn danh cho bên quảng cáo ➔ Hợp pháp & Đạo đức không?" }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(5.8),
    w: cmToInch(11.5),
    h: cmToInch(3.5),
    fontSize: 10.5,
    lineSpacing: 13.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 6,
    rectRadius: 0.1,
    valign: "top",
  }
);

// Bottom Banner (Y = 10.0 cm, H = 1.9 cm)
addText(
  slide119Content,
  "💡 Khung trình bày nhóm 3 phút: Lợi ích ➔ Rủi ro ➔ Điều kiện chấp nhận ➔ Đối chiếu Nghị định 13/2023 & GDPR.",
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

slide119Content.addNotes(
  "Hoạt động đỉnh của mục 6.3: 4 tình huống thực tế áp dụng khung Nghị định 13/2023."
);

// ----------------------------------------------------
// Slide 120: CONTENT (TỔNG KẾT 6.3.6 — CÔNG NGHỆ ĐI TRƯỚC, PHÁP LÝ VÀ ĐẠO ĐỨC PHẢI THEO KỊP)
// ----------------------------------------------------
const slide120Content = pptx.addSlide({ masterName: "CONTENT" });
slide120Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide120Content.addText("TÓM TẮT 6.3.6: PHÁP LÝ & ĐẠO ĐỨC", { placeholder: "title" });

slide120Content.addTable(
  [
    [
      { text: "Khía cạnh Đạo đức", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Vấn đề thách thức chính", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Giải pháp / Khung tham chiếu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [
      { text: "Nhận thức người dùng", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Khai phá vô hình — người dùng không biết bị phân tích" },
      { text: "Minh bạch hóa chính sách & đồng ý rõ ràng" },
    ],
    [
      { text: "Quyền riêng tư kỹ thuật", options: { bold: true, color: DUE_COLORS.green } },
      { text: "Nguy cơ tái định danh, phân biệt đối xử ẩn" },
      { text: "Privacy-preserving: k-anonymity, randomization" },
    ],
    [
      { text: "Khung Pháp lý", options: { bold: true, color: DUE_COLORS.blue } },
      { text: "Thiếu chế tài hoặc chưa tuân thủ quy định" },
      { text: "GDPR (EU), Nghị định 13/2023/NĐ-CP (Việt Nam)" },
    ],
    [
      { text: "Chiến lược doanh nghiệp", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Áp lực khai thác dữ liệu vs Giữ niềm tin khách" },
      { text: "Xem Tuân thủ pháp lý là Lợi thế cạnh tranh dài hạn" },
    ],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.5),
    fontSize: 10.5,
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide120Content,
  "💡 Khép lại Mục 6.3 Hướng ứng dụng (CHO AI): Đã đi qua CÁI GÌ (6.1), BẰNG GÌ (6.2), và CHO AI (6.3)!",
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

slide120Content.addNotes(
  "Tóm tắt 4 khía cạnh cốt lõi của mục 6.3.6 và chốt trọn vẹn Mục 6.3 Hướng ứng dụng."
);
