import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 70 — CONTENT (Demo Python: Apriori)
// ----------------------------------------------------
const slide70Content = pptx.addSlide({ masterName: "CONTENT" });
slide70Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide70Content.addText("DEMO PYTHON: APRIORI", { placeholder: "title" });

addText(
  slide70Content,
  [
    { text: "💻 Tệp thực hành Demo:\n\n", options: { bold: true, fontSize: 13 } },
    { text: "• File Python: ", options: { bold: true } },
    { text: "demo_5_3_apriori.py / .ipynb\n\n" },
    { text: "• Thư viện cốt lõi: ", options: { bold: true } },
    { text: "pandas, mlxtend\n\n" },
    { text: "• Mục tiêu: ", options: { bold: true } },
    { text: "Triển khai quy trình Apriori tự động từ dữ liệu thô đến bảng luật kết hợp." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 15,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide70Content,
  [
    { text: "🔄 6 Bước Quy trình Code Python:\n\n", options: { bold: true, fontSize: 13 } },
    { text: "1. Đọc file `transactions.csv` bằng pandas.\n\n" },
    { text: "2. Gom sản phẩm theo transaction_id thành danh sách giỏ hàng.\n\n" },
    { text: "3. One-hot encoding thành ma trận 0/1 (TransactionEncoder).\n\n" },
    { text: "4. Chạy `apriori()` ➔ Trích xuất Frequent Itemsets.\n\n" },
    { text: "5. Chạy `association_rules()` ➔ Sinh Luật kết hợp.\n\n" },
    { text: "6. Lọc luật theo minconf & lift > 1." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 14,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.blue },
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide70Content,
  "💡 Định hướng: Kết nối lý thuyết tính tay Join/Prune với việc gọi hàm thực tế trong các dự án Phân tích Dữ liệu Kinh doanh.",
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
// Slide 71 — CONTENT (Chuẩn bị dữ liệu giao dịch)
// ----------------------------------------------------
const slide71Content = pptx.addSlide({ masterName: "CONTENT" });
slide71Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide71Content.addText("CHUẨN BỊ DỮ LIỆU GIAO DỊCH", { placeholder: "title" });

slide71Content.addTable(
  [
    [
      { text: "transaction_id", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "product", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "1001", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Sữa", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "1001", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Bánh mì", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "1001", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Trứng", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "1002", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Sữa", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "1002", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Cà phê", options: { fill: { color: "FFFFFF" } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(4.5), cmToInch(7.0)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide71Content,
  [
    { text: "📁 File thực thi: ", options: { bold: true, fontSize: 13 } },
    { text: "demo_5_3_apriori.py\n\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "⚙️ Thao tác gom nhóm:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Đọc file `transactions.csv` bằng `pandas`.\n\n" },
    { text: "• Gom sản phẩm theo `transaction_id`:\n" },
    { text: "  `df.groupby('transaction_id')['product'].apply(list)`\n\n" },
    { text: "🎯 Đầu ra: ", options: { bold: true } },
    { text: "Danh sách giỏ hàng (List of lists)\n" },
    { text: "  ➔ [['Sữa', 'Bánh mì', 'Trứng'], ['Sữa', 'Cà phê']]" }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 15,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.green, width: 2 },
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide71Content,
  "💡 Bản chất: Chuyển dữ liệu dòng thô (Long format) thành danh sách các 'giỏ hàng' (List of lists) để thuật toán xử lý.",
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
// Slide 72 — CONTENT (One-hot encoding dữ liệu)
// ----------------------------------------------------
const slide72Content = pptx.addSlide({ masterName: "CONTENT" });
slide72Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide72Content.addText("ONE-HOT ENCODING DỮ LIỆU", { placeholder: "title" });

addText(
  slide72Content,
  [
    { text: "📁 File thực thi: ", options: { bold: true, fontSize: 13 } },
    { text: "demo_5_3_apriori.py\n\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "⚙️ Thao tác Mã hóa Nhị phân:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Thư viện: `mlxtend.preprocessing.TransactionEncoder`\n\n" },
    { text: "• Cú pháp chính:\n" },
    { text: "  `te = TransactionEncoder()`\n" },
    { text: "  `encoded = te.fit(transactions).transform(transactions)`\n" },
    { text: "  `basket = pd.DataFrame(encoded, columns=te.columns_)`\n\n" },
    { text: "🎯 Đầu ra: ", options: { bold: true } },
    { text: "Ma trận One-hot 0/1 (Boolean)" }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 14,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

slide72Content.addTable(
  [
    [
      { text: "TID", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Bánh mì", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Cà phê", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Sữa", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Trứng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "1001", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "True", options: { fill: { color: "FFFFFF" } } }, { text: "False", options: { fill: { color: "FFFFFF" } } }, { text: "True", options: { fill: { color: "FFFFFF" } } }, { text: "True", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "1002", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "False", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "True", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "True", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "False", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "1003", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "True", options: { fill: { color: "FFFFFF" } } }, { text: "False", options: { fill: { color: "FFFFFF" } } }, { text: "False", options: { fill: { color: "FFFFFF" } } }, { text: "False", options: { fill: { color: "FFFFFF" } } }],
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(2.2), cmToInch(2.3), cmToInch(2.3), cmToInch(2.3), cmToInch(2.4)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide72Content,
  "💡 Quy ước: Thư viện mlxtend nhận ma trận True/False hoặc 1/0 làm đầu vào bắt buộc để chạy giải thuật Apriori.",
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
// Slide 73 — CONTENT (Chạy Apriori tìm frequent itemset)
// ----------------------------------------------------
const slide73Content = pptx.addSlide({ masterName: "CONTENT" });
slide73Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide73Content.addText("CHẠY APRIORI TÌM FREQUENT ITEMSET", { placeholder: "title" });

addText(
  slide73Content,
  [
    { text: "📁 File thực thi: ", options: { bold: true, fontSize: 13 } },
    { text: "demo_5_3_apriori.py\n\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "⚙️ Gọi hàm `apriori()`:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Hàm chính: `mlxtend.frequent_patterns.apriori()`\n\n" },
    { text: "• Tham số quan trọng:\n" },
    { text: "  - `basket`: Ma trận giỏ hàng One-hot 0/1\n" },
    { text: "  - `min_support = 0.10`: Ngưỡng support tối thiểu 10%\n" },
    { text: "  - `use_colnames = True`: Giữ tên sản phẩm trực quan\n\n" },
    { text: "🎯 Sắp xếp: `sort_values(by='support', ascending=False)`" }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 14,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.orange, width: 1 },
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

slide73Content.addTable(
  [
    [
      { text: "support", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "itemsets", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "0.38", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "frozenset({'Sữa'})", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "0.31", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "frozenset({'Bánh mì'})", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "0.14", options: { bold: true, color: DUE_COLORS.orange, fill: { color: "FFFFFF" } } }, { text: "frozenset({'Sữa', 'Bánh mì'})", options: { fill: { color: "FFFFFF" } } }],
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(3.5), cmToInch(8.0)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide73Content,
  "💡 Diễn giải: `support = 0.14` nghĩa là tổ hợp {Sữa, Bánh mì} xuất hiện cùng nhau trong 14% tổng số hóa đơn.",
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
// Slide 74 — CONTENT (Sinh luật kết hợp)
// ----------------------------------------------------
const slide74Content = pptx.addSlide({ masterName: "CONTENT" });
slide74Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide74Content.addText("SINH LUẬT KẾT HỢP", { placeholder: "title" });

addText(
  slide74Content,
  [
    { text: "📁 File thực thi: ", options: { bold: true, fontSize: 13 } },
    { text: "demo_5_3_apriori.py\n\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "⚙️ Sinh & Lọc Luật (`association_rules`):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Hàm: `association_rules(frequent_itemsets, metric='confidence', min_threshold=0.70)`\n\n" },
    { text: "• Lọc kép điều kiện:\n" },
    { text: "  - Confidence $\\ge$ 70%\n" },
    { text: "  - Lift > 1.0 (Loại liên kết âm & độc lập)\n\n" },
    { text: "🎯 Đầu ra: DataFrame chứa antecedents, consequents, support, confidence, lift." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 14,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.blue },
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

slide74Content.addTable(
  [
    [
      { text: "antecedents", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "consequents", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "conf", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "lift", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "frozenset({'Cà phê'})", options: { fill: { color: "FFFFFF" } } }, { text: "frozenset({'Bánh quy'})", options: { fill: { color: "FFFFFF" } } }, { text: "75%", options: { fill: { color: "FFFFFF" } } }, { text: "2.50", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "frozenset({'Bánh mì', 'Sữa'})", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "frozenset({'Trứng'})", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "66.7%", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "1.11", options: { fill: { color: DUE_COLORS.lightBg } } }],
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(3.5), cmToInch(3.5), cmToInch(2.0), cmToInch(2.5)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide74Content,
  "💡 Quy tắc thực hành: Luôn kết hợp lọc đồng thời `confidence >= minconf` và `lift > 1` để loại các luật độc lập/liên kết âm.",
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
// Slide 75 — CONTENT (Bài tập ứng dụng: thay đổi min_support)
// ----------------------------------------------------
const slide75Content = pptx.addSlide({ masterName: "CONTENT" });
slide75Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide75Content.addText("BÀI TẬP ỨNG DỤNG: THAY ĐỔI MIN_SUPPORT", { placeholder: "title" });

addText(
  slide75Content,
  [
    { text: "📁 File thực thi: ", options: { bold: true, fontSize: 13 } },
    { text: "demo_5_3_apriori.py\n\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "🧪 Thử nghiệm Thay đổi `min_support`:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Chạy vòng lặp kiểm thử với `min_sup` ∈ [0.10, 0.03].\n\n" },
    { text: "• Hàm đo thời gian thực thi: `time.perf_counter()`\n\n" },
    { text: "🎯 Nhận xét: ", options: { bold: true } },
    { text: "Khi giảm min_support từ 10% xuống 3%, số Frequent Itemsets và thời gian tính toán bùng nổ cấp số nhân!" }
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
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

slide75Content.addTable(
  [
    [
      { text: "min_support", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Số Itemsets", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Số Luật sau lọc", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Thời gian chạy", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "0.10 (Ngưỡng cao)", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Ít tập mục", options: { fill: { color: "FFFFFF" } } }, { text: "Ít luật", options: { fill: { color: "FFFFFF" } } }, { text: "⚡ Rất nhanh", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "0.03 (Ngưỡng thấp)", options: { bold: true, color: DUE_COLORS.orange, fill: { color: DUE_COLORS.lightBg } } }, { text: "Tăng vọt", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Tăng vọt", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "⏳ Lâu hơn nhiều", options: { fill: { color: DUE_COLORS.lightBg } } }],
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(3.5), cmToInch(2.5), cmToInch(2.8), cmToInch(2.7)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide75Content,
  "💡 Quan sát trực quan: Hạ min_support giúp phát hiện các mẫu hiếm ngách, nhưng khiến số ứng viên và thời gian chạy bùng nổ!",
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
// Slide 76 — CONTENT (Thông điệp từ demo Python)
// ----------------------------------------------------
const slide76Content = pptx.addSlide({ masterName: "CONTENT" });
slide76Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide76Content.addText("THÔNG ĐỆP TỪ DEMO PYTHON", { placeholder: "title" });

slide76Content.addTable(
  [
    [
      { text: "Bối cảnh thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Khuyên dùng chiến lược chọn ngưỡng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "CSDL lớn & Nhiều sản phẩm", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Bắt đầu với min_support tương đối cao để chạy nhanh và loại nhiễu.", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Muốn khám phá sản phẩm ngách", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Giảm dần min_support và theo dõi số lượng mẫu cùng RAM tiêu tốn.", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "Số lượng luật sinh ra quá nhiều", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Siết chặt min_confidence và bắt buộc lọc theo lift > 1.2.", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Ra quyết định kinh doanh", options: { bold: true, color: DUE_COLORS.orange, fill: { color: DUE_COLORS.lightBg } } }, { text: "Không tin tuyệt đối vào Confidence; luôn kiểm tra Lift và tính khả thi thử nghiệm A/B.", options: { fill: { color: DUE_COLORS.lightBg } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(7.5), cmToInch(16.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide76Content,
  "💡 Thông điệp kết luận: Không có giá trị min_support cố định cho mọi bài toán. Ngưỡng tối ưu phụ thuộc vào quy mô dữ liệu và bài toán kinh doanh!",
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
