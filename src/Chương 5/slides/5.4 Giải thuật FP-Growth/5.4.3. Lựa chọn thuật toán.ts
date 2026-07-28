import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 89 — CONTENT (Tình huống lựa chọn thuật toán)
// ----------------------------------------------------
const slide89Content = pptx.addSlide({ masterName: "CONTENT" });
slide89Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide89Content.addText("TÌNH HUỐNG LỰA CHỌN THUẬT TOÁN", { placeholder: "title" });

slide89Content.addTable(
  [
    [
      { text: "Tình huống thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Dấu hiệu nhận biết", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Thuật toán ưu tiên", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Lý do kỹ thuật cốt lõi", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Minh họa, giảng dạy", options: { bold: true } }, { text: "Dữ liệu nhỏ, ít item" }, { text: "Apriori" }, { text: "Quy trình Cₖ ➔ Lₖ rất dễ minh họa từng bước." }],
    [{ text: "Nhiều frequent 1-itemset", options: { bold: true } }, { text: "Hàng ngàn mục vượt minsup" }, { text: "FP-Growth" }, { text: "Apriori bị tràn RAM do bùng nổ C₂." }],
    [{ text: "Đặt minsup thấp", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Cần tìm mẫu hiếm ngách" }, { text: "FP-Growth" }, { text: "Tránh bùng nổ candidate khi hạ ngưỡng." }],
    [{ text: "Mẫu thường xuyên dài", options: { bold: true } }, { text: "Giỏ hàng có nhiều mục cùng xuất hiện" }, { text: "FP-Growth" }, { text: "Tăng trưởng mẫu đệ quy vượt trội hơn duyệt rộng." }],
    [{ text: "CSDL siêu lớn (I/O tốn kém)", options: { bold: true } }, { text: "Đọc đĩa cứng rất chậm" }, { text: "FP-Growth" }, { text: "Chỉ quét CSDL gốc đúng 2 lần để tạo cây." }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(5.5), cmToInch(5.5), cmToInch(4.0), cmToInch(8.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide89Content,
  "💡 Cây quyết định: Nếu Candidate set có nguy cơ bùng nổ hoặc minsup thấp ➔ Chọn FP-Growth! Ngược lại ➔ Apriori là lựa chọn đơn giản.",
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
