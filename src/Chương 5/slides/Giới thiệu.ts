import { SlideGenerator } from "../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 1: TITLE
// ----------------------------------------------------
const slide1 = pptx.addSlide({ masterName: "TITLE" });
slide1.addText("CHƯƠNG 5", { placeholder: "title" });
slide1.addText("LUẬT KẾT HỢP", { placeholder: "subtitle" });
slide1.addText("KHAI PHÁ DỮ LIỆU", { placeholder: "subject" });
slide1.addText("Khoa Thống kê-Tin học", { placeholder: "faculty" });

// ----------------------------------------------------
// Slide 2a: OBJECTIVE (1/2)
// ----------------------------------------------------
const slide2a = pptx.addSlide({ masterName: "OBJECTIVE" });
slide2a.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });

addText(
  slide2a,
  [
    { text: "• ", options: { bold: true } },
    { text: "Giải thích ", options: { bold: true } },
    { text: "mục tiêu, bối cảnh ứng dụng và quy trình khai phá luật kết hợp.\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Nhận diện ", options: { bold: true } },
    { text: "các khái niệm: transaction, item, itemset, frequent itemset, support, confidence, lift.\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Phân biệt ", options: { bold: true } },
    { text: "các loại luật: Boolean/định lượng, một chiều/đa chiều, đơn cấp/đa cấp.\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Biểu diễn ", options: { bold: true } },
    { text: "luật X → Y, tính toán và diễn giải support, confidence, lift.\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Phân tích ", options: { bold: true } },
    { text: "ý nghĩa của các ngưỡng minsup và minconf." },
  ],
  {
    placeholder: "content",
    x: cmToInch(8.5),
    y: cmToInch(3.2),
    w: cmToInch(15.0),
    h: cmToInch(8.0),
    fontSize: 11.5,
    color: DUE_COLORS.white,
    lineSpacing: 16,
    valign: "top",
  }
);

slide2a.addNotes(
  "Phần 1 Tập trung nắm vững nền tảng khái niệm, thước đo độ hỗ trợ (support), độ tin cậy (confidence) và độ nâng (lift)."
);

// ----------------------------------------------------
// Slide 2b: OBJECTIVE (2/2)
// ----------------------------------------------------
const slide2b = pptx.addSlide({ masterName: "OBJECTIVE" });
slide2b.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });

addText(
  slide2b,
  [
    { text: "• ", options: { bold: true } },
    { text: "Mô tả & Thực hiện ", options: { bold: true } },
    { text: "các bước giải thuật Apriori: candidate generation, support counting, Join, Prune.\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Giải thích ", options: { bold: true } },
    { text: "nguyên lý FP-Growth: frequent items, FP-tree, conditional pattern base.\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "So sánh ", options: { bold: true } },
    { text: "Apriori và FP-Growth về hiệu năng và bối cảnh áp dụng.\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Đánh giá ", options: { bold: true } },
    { text: "chất lượng luật & nhận biết trường hợp confidence cao nhưng lift ≤ 1.\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Vận dụng ", options: { bold: true } },
    { text: "trên dữ liệu giao dịch thẻ tín dụng để đề xuất hàm ý quản trị." },
  ],
  {
    placeholder: "content",
    x: cmToInch(8.5),
    y: cmToInch(3.2),
    w: cmToInch(15.0),
    h: cmToInch(8.0),
    fontSize: 11.5,
    color: DUE_COLORS.white,
    lineSpacing: 16,
    valign: "top",
  }
);

slide2b.addNotes(
  "Phần 2 Tóm tắt hai giải thuật cốt lõi Apriori và FP-Growth cùng phương pháp đánh giá thực tiễn."
);

// ----------------------------------------------------
// Slide 3a: CONTENT (TÌNH HUỐNG THỰC TẾ: DỮ LIỆU THẺ)
// ----------------------------------------------------
const slide3a = pptx.addSlide({ masterName: "CONTENT" });
slide3a.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide3a.addText("TÌNH HUỐNG THỰC TẾ: DỮ LIỆU THẺ", { placeholder: "title" });

// Left Card: Banking Context (Y = 2.0 to 9.0 cm)
addText(
  slide3a,
  [
    { text: "💳 Bối cảnh bài toán Ngân hàng:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Phân tích dữ liệu giao dịch thẻ tín dụng để tìm tổ hợp đặc trưng xuất hiện cùng nhau.\n\n" },
    { text: "• Mục tiêu: ", options: { bold: true } },
    { text: "Nhận diện mẫu giao dịch bình thường và gian lận.\n\n" },
    { text: "• Dữ liệu: ", options: { bold: true } },
    { text: "Credit Card Transactions Dataset (Kaggle)." },
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.0),
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

// Right Card: Preprocessed Itemset (Y = 2.0 to 9.0 cm)
addText(
  slide3a,
  [
    { text: "📦 Dữ liệu sau tiền xử lý (Itemset):\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "Giao dịch bình thường (FRAUD_0):\n", options: { bold: true } },
    { text: "{ CAT_grocery, TIME_Evening, AMT_High, FRAUD_0 }\n\n" },
    { text: "Giao dịch nghi gian lận (FRAUD_1):\n", options: { bold: true } },
    { text: "{ CAT_online, TIME_Dawn, AMT_Very_high, FRAUD_1 }" },
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.0),
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

// Bottom Banner: Height = 1.9 cm, Y = 10.0 cm
addText(
  slide3a,
  "💡 Ý nghĩa: Chuyển đổi hóa đơn/giao dịch thô thành các tập mục (itemset) là bước đầu tiên để khai phá luật kết hợp.",
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

slide3a.addNotes("Giảng viên giải thích cách chuyển từ bản ghi giao dịch thô sang tập các thuộc tính/mục.");

// ----------------------------------------------------
// Slide 3b: CONTENT (TÌNH HUỐNG THỰC TẾ: CÂU HỎI & THẢO LUẬN)
// ----------------------------------------------------
const slide3b = pptx.addSlide({ masterName: "CONTENT" });
slide3b.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide3b.addText("TÌNH HUỐNG THỰC TẾ: CÂU HỎI & THẢO LUẬN", { placeholder: "title" });

addText(
  slide3b,
  [
    { text: "🔍 Câu hỏi nghiệp vụ Ngân hàng:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Nhóm ngành hàng nào thường xuất hiện cùng khung giờ?\n\n" },
    { text: "• Tổ hợp đặc trưng nào thường đi kèm với FRAUD_1?\n\n" },
    { text: "• Hạ ngưỡng minsup quá thấp thì số luật thay đổi ra sao?\n\n" },
    { text: "• Với hàng triệu giao dịch, chọn Apriori hay FP-Growth?" }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.0),
    fontSize: 11,
    lineSpacing: 15,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.blue, width: 1 },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide3b,
  [
    { text: "❓ THẢO LUẬN TÌNH HUỐNG:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "“Nếu một luật có Confidence = 80% nhưng Lift = 1,02, ngân hàng có nên dùng quy tắc này để tự động chặn giao dịch không? Vì sao?”" }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.0),
    fontSize: 11,
    lineSpacing: 15,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.blue },
    bold: true,
    italic: true,
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide3b,
  "💡 Định hướng: Cần đánh giá kết hợp cả Support, Confidence và Lift để tránh chặn nhầm giao dịch hợp lệ.",
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

slide3b.addNotes(
  "Gợi ý giảng viên:\n" +
  "Không nên chặn tự động dựa trên luật có Lift ≈ 1 (vì xác suất vế phải khi có vế trái gần như bằng xác suất nền). Lựa chọn minsup và minconf cần cân bằng giữa việc không bỏ sót rủi ro và không tạo luật rác."
);
