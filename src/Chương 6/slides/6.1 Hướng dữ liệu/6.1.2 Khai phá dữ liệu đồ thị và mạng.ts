import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 21: SECTION
// ----------------------------------------------------
const slide21Section = pptx.addSlide({ masterName: "SECTION" });
slide21Section.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide21Section.addText("6.1.2. KHAI PHÁ DỮ LIỆU ĐỒ THỊ VÀ MẠNG", { placeholder: "title" });
slide21Section.addText("Giải quyết Nguồn 2 của tình huống mở đầu: mạng sở hữu chéo các công ty niêm yết", { placeholder: "content" });
slide21Section.addText(
  "\"Trong dữ liệu mạng, giá trị không nằm trong từng đối tượng — mà nằm ở QUAN HỆ giữa các đối tượng.\"\n\n" +
  "Bốn chỉ số Centrality  |  Phát hiện cộng đồng  |  Dự đoán liên kết",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 22: CONTENT (ĐỒ THỊ VÀ MẠNG: KHÁI NIỆM CƠ BẢN)
// ----------------------------------------------------
const slide22Content = pptx.addSlide({ masterName: "CONTENT" });
slide22Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide22Content.addText("ĐỒ THỊ VÀ MẠNG: KHÁI NIỆM CƠ BẢN", { placeholder: "title" });

addText(
  slide22Content,
  [
    { text: "🕸️ Khái niệm & Biến thể Đồ thị G = (V, E):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Đỉnh V (Node) & Cạnh E (Edge):\n", options: { bold: true } },
    { text: "  V là tập đối tượng, E là tập quan hệ giữa hai đối tượng.\n\n" },
    { text: "• Các biến thể quan trọng:\n", options: { bold: true } },
    { text: "  - Có hướng / Vô hướng: Sở hữu cổ phần (có hướng) vs Bạn bè (vô hướng).\n  - Có trọng số: Cạnh mang giá trị (tỷ lệ sở hữu 15%, giao dịch 2 tỷ).\n  - Đồ thị hai phía (Bipartite): Khách hàng ↔ Sản phẩm, Chủ thẻ ↔ Cửa hàng." }
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
  slide22Content,
  [
    { text: "💼 Ví dụ Kinh tế tiêu biểu:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Mạng sở hữu chéo: ", options: { bold: true } },
    { text: "Công ty A nắm giữ cổ phần công ty B (có hướng, trọng số).\n\n" },
    { text: "• Mạng giao dịch liên ngân hàng: ", options: { bold: true } },
    { text: "Dòng tiền chuyển khoản giữa các ngân hàng.\n\n" },
    { text: "• Mạng Khách hàng — Sản phẩm: ", options: { bold: true } },
    { text: "Đồ thị hai phía làm nền tảng cho Hệ gợi ý (6.3.5)." }
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
    line: { color: DUE_COLORS.orange, width: 1 },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide22Content,
  "💡 Bản chất dữ liệu mạng: Mô hình hóa các đối tượng (đỉnh) và mối liên kết thực tế giữa chúng (cạnh).",
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

slide22Content.addNotes(
  "Giảng viên vẽ nhanh 3 mạng nhỏ 5-6 đỉnh lên bảng để học viên nhận diện có hướng, vô hướng và bipartite."
);

// ----------------------------------------------------
// Slide 23: CONTENT (VÌ SAO CẦN KHAI PHÁ MẠNG KINH TẾ?)
// ----------------------------------------------------
const slide23Content = pptx.addSlide({ masterName: "CONTENT" });
slide23Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide23Content.addText("VÌ SAO CẦN KHAI PHÁ MẠNG KINH TẾ?", { placeholder: "title" });

addText(
  slide23Content,
  [
    { text: "🌐 3 Hiện tượng Kinh tế bản chất Mạng:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Rủi ro hệ thống: ", options: { bold: true } },
    { text: "Khủng hoảng 2008 lan truyền qua mạng tài sản chéo — 1 ngân hàng đổ kéo theo chuỗi.\n\n" },
    { text: "• Hiệu ứng lan tỏa Marketing: ", options: { bold: true } },
    { text: "Khách mới đến từ người quen giới thiệu (referral), ảnh hưởng từ KOL.\n\n" },
    { text: "• Gian lận có tổ chức: ", options: { bold: true } },
    { text: "Giao dịch VÒNG TRÒN giữa các tài khoản — nhìn lẻ thì bình thường, nhìn mạng mới thấy bất thường." }
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
  slide23Content,
  [
    { text: "🎯 So sánh Dữ liệu Bảng vs Mạng & 4 Bài toán:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Dữ liệu bảng: ", options: { bold: true } },
    { text: "Trả lời 'khách hàng này THẾ NÀO?' (nhân khẩu học, thu nhập).\n\n" },
    { text: "• Dữ liệu mạng: ", options: { bold: true } },
    { text: "Trả lời 'khách hàng này QUEN AI, ẢNH HƯỞNG AI?'.\n\n" },
    { text: "• 4 Bài toán chính:\n", options: { bold: true } },
    { text: "  (1) Tầm quan trọng (Centrality) · (2) Cộng đồng (Community) · (3) Dự đoán liên kết · (4) Đồ thị con." }
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
  slide23Content,
  "💡 Phân biệt cốt lõi: Dữ liệu bảng trả lời 'khách hàng THẾ NÀO?'; dữ liệu mạng trả lời 'khách hàng QUEN AI, ẢNH HƯỞNG AI?'.",
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

slide23Content.addNotes(
  "Thảo luận mở: Ngân hàng từ chối cho vay vì người quen nợ xấu — hợp lý hay bất công? (Liên hệ Nghị định 13 và gieo mầm cho 6.3.6)."
);

// ----------------------------------------------------
// Slide 24: CONTENT (BÀI TOÁN 1: BỐN CHỈ SỐ CENTRALITY)
// ----------------------------------------------------
const slide24Content = pptx.addSlide({ masterName: "CONTENT" });
slide24Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide24Content.addText("BÀI TOÁN 1: BỐN CHỈ SỐ CENTRALITY", { placeholder: "title" });

slide24Content.addTable(
  [
    [
      { text: "Chỉ số Centrality", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Ý tưởng cốt lõi", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Câu hỏi kinh doanh trả lời", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [
      { text: "Degree centrality", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Đếm số kết nối trực tiếp" },
      { text: "Công ty nào nhiều quan hệ sở hữu nhất? KOL nào nhiều follower nhất?" },
    ],
    [
      { text: "Betweenness centrality", options: { bold: true, color: DUE_COLORS.green } },
      { text: "Nằm trên nhiều đường đi ngắn nhất giữa các cặp đỉnh" },
      { text: "Ai là 'cầu nối' cắt đi thì mạng vỡ? Điểm nghẽn chuỗi cung ứng?" },
    ],
    [
      { text: "Closeness centrality", options: { bold: true, color: DUE_COLORS.blue } },
      { text: "Khoảng cách trung bình ngắn nhất tới mọi đỉnh khác" },
      { text: "Từ ai lan truyền thông tin nhanh nhất? Chọn ai phát động campaign viral?" },
    ],
    [
      { text: "Eigenvector / PageRank", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Quan trọng vì QUEN NGƯỜI QUAN TRỌNG" },
      { text: "Công ty nào có ảnh hưởng thực chất (được các 'ông lớn' nắm giữ)?" },
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
  slide24Content,
  "💡 Nguyên tắc lựa chọn: Mỗi chỉ số centrality trả lời một câu hỏi kinh doanh riêng biệt, không có chỉ số 'tốt nhất' tuyệt đối.",
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

slide24Content.addNotes(
  "Giảng viên chiếu 1 mạng nhỏ 8-10 đỉnh trong đó đỉnh Degree cao nhất khác đỉnh Betweenness cao nhất để hỏi lớp nhận diện người nổi tiếng vs người quyền lực ngầm."
);

// ----------------------------------------------------
// Slide 25: CONTENT (BÀI TOÁN 2 — PHÁT HIỆN CỘNG ĐỒNG)
// ----------------------------------------------------
const slide25Content = pptx.addSlide({ masterName: "CONTENT" });
slide25Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide25Content.addText("BÀI TOÁN 2: PHÁT HIỆN CỘNG ĐỒNG", { placeholder: "title" });

addText(
  slide25Content,
  [
    { text: "🧩 Cộng đồng & Thuật toán Louvain:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Định nghĩa Cộng đồng: ", options: { bold: true } },
    { text: "Nhóm đỉnh kết nối DÀY ĐẶC bên trong, THƯA THỚT với bên ngoài ('phân cụm trên mạng').\n\n" },
    { text: "• Độ đo Modularity: ", options: { bold: true } },
    { text: "So sánh mật độ cạnh trong cộng đồng với kỳ vọng ngẫu nhiên.\n\n" },
    { text: "• Thuật toán Louvain: ", options: { bold: true } },
    { text: "Tối ưu modularity, tốc độ nhanh, được sử dụng phổ biến nhất hiện nay." }
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
  slide25Content,
  [
    { text: "💡 Ứng dụng & So sánh K-means vs Louvain:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Ứng dụng thực tế:\n", options: { bold: true } },
    { text: "  - Phát hiện 'nhóm lợi ích' trong sở hữu chéo.\n  - Phân đoạn khách hàng theo quan hệ tương tác.\n  - Phát hiện đường dây gian lận giao dịch nội bộ.\n\n" },
    { text: "• So sánh nghiệp vụ:\n", options: { bold: true } },
    { text: "  - K-means (Ch.4): Chia nhóm theo ĐỘ GIỐNG NHAU thuộc tính.\n  - Louvain (Ch.6): Chia nhóm theo QUAN HỆ tương tác thực tế." }
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
    line: { color: DUE_COLORS.orange, width: 1 },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide25Content,
  "💡 So sánh nghiệp vụ: K-means (Ch.4) chia nhóm theo ĐỘ GIỐNG NHAU về thuộc tính; Louvain chia nhóm theo QUAN HỆ thực tế.",
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

slide25Content.addNotes(
  "Gợi ý giảng viên: Chọn mô hình theo bài toán: Nhắm quảng cáo hồ sơ -> K-means; Lan truyền viral/giới thiệu -> Louvain."
);

// ----------------------------------------------------
// Slide 26: CONTENT (BÀI TOÁN 3 — DỰ ĐOÁN LIÊN KẾT)
// ----------------------------------------------------
const slide26Content = pptx.addSlide({ masterName: "CONTENT" });
slide26Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide26Content.addText("BÀI TOÁN 3: DỰ ĐOÁN LIÊN KẾT MẠNG", { placeholder: "title" });

addText(
  slide26Content,
  [
    { text: "🔗 Các Chỉ số Láng giềng Cơ bản:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Mục tiêu: ", options: { bold: true } },
    { text: "Dự đoán cặp đỉnh nào chưa có cạnh nhưng nhiều khả năng nối nhau trong tương lai.\n\n" },
    { text: "• Common neighbors: ", options: { bold: true } },
    { text: "Đếm số bạn chung — càng nhiều bạn chung càng dễ kết nối.\n\n" },
    { text: "• Jaccard coefficient: ", options: { bold: true } },
    { text: "Số bạn chung / Tổng số bạn của cả hai.\n\n" },
    { text: "• Adamic-Adar index: ", options: { bold: true } },
    { text: "Bạn chung được ĐÁNH TRỌNG SỐ — bạn chung 'ít quen biết' chỉ báo cao hơn." }
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
  slide26Content,
  [
    { text: "🚀 Ứng dụng Kinh tế Thực tiễn:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• 'People you may know': ", options: { bold: true } },
    { text: "Gợi ý kết bạn trên LinkedIn, Facebook tăng độ tương tác.\n\n" },
    { text: "• Nền tảng Hệ gợi ý (Recommender Systems):\n", options: { bold: true } },
    { text: "  Dự đoán cạnh mới trên đồ thị Bipartite (Khách ↔ Sản phẩm) = Dự đoán món hàng khách sắp mua.\n\n" },
    { text: "• Dự đoán quan hệ tín dụng/đối tác B2B." }
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
  slide26Content,
  "💡 Trực giác Adamic-Adar: Bạn chung 'ít quen biết' mang sức chỉ báo kết nối cao hơn nhiều so với bạn chung 'quen cả thế giới'.",
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

slide26Content.addNotes(
  "Giảng viên đưa bảng tính nhỏ 6 đỉnh để học viên thấy cách tính Common neighbors và Jaccard."
);

// ----------------------------------------------------
// Slide 27: CONTENT (BÀI TOÁN 4: ĐỒ THỊ CON & GNN)
// ----------------------------------------------------
const slide27Content = pptx.addSlide({ masterName: "CONTENT" });
slide27Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide27Content.addText("BÀI TOÁN 4: ĐỒ THỊ CON & GNN", { placeholder: "title" });

addText(
  slide27Content,
  [
    { text: "🔍 Frequent Subgraph Mining:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Ý tưởng: ", options: { bold: true } },
    { text: "Tìm cấu trúc con lặp lại nhiều lần trong tập đồ thị — đóng vai trò 'Apriori trên đồ thị' (đối chiếu Ch.5).\n\n" },
    { text: "• Ứng dụng thực tế:\n", options: { bold: true } },
    { text: "  - Phát hiện mô-típ rửa tiền (tiền chuyển vòng A ➔ B ➔ C ➔ A).\n  - Khai phá cấu trúc phân tử trong hóa dược." }
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
  slide27Content,
  [
    { text: "🤖 Hướng Hiện đại (GNN & Embedding):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Graph Embedding (node2vec):\n", options: { bold: true } },
    { text: "  Biến mỗi đỉnh thành 1 vector số ➔ Tái sử dụng mọi kỹ thuật Ch.3–5 (Đúng nguyên tắc vàng!).\n\n" },
    { text: "• Graph Neural Networks (GNN):\n", options: { bold: true } },
    { text: "  Học sâu trực tiếp trên đồ thị — chuẩn công nghiệp hiện nay cho phát hiện gian lận thanh toán & gợi ý." }
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
    line: { color: DUE_COLORS.orange, width: 1 },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide27Content,
  "💡 Tiến hóa kỹ thuật: Chuỗi phát triển từ 'chỉ số thủ công ➔ node2vec ➔ GNN', nhưng 4 chỉ số centrality vẫn dễ diễn giải nhất.",
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

slide27Content.addNotes(
  "Giảng viên giải thích sơ đồ 3 nấc tiến hóa của graph mining, nhấn mạnh tính diễn giải kinh doanh của 4 chỉ số centrality."
);

// ----------------------------------------------------
// Slide 28: CONTENT (DEMO 2 — PHÂN TÍCH MẠNG SỞ HỮU CHÉO VỚI NETWORKX)
// ----------------------------------------------------
const slide28Content = pptx.addSlide({ masterName: "CONTENT" });
slide28Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide28Content.addText("DEMO 2: MẠNG SỞ HỮU CHÉO (NETWORKX)", { placeholder: "title" });

addText(
  slide28Content,
  [
    { text: "💻 Quy trình Thực hành Python:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Bước 1: ", options: { bold: true } },
    { text: "Dựng đồ thị có hướng 15 công ty niêm yết; vẽ đồ thị bằng `networkx` + `matplotlib`.\n\n" },
    { text: "• Bước 2: ", options: { bold: true } },
    { text: "Tính 4 chỉ số Centrality; lập bảng xếp hạng top 5 công ty theo từng chỉ số.\n\n" },
    { text: "• Bước 3: ", options: { bold: true } },
    { text: "Chạy Louvain (`python-louvain`) phát hiện các 'nhóm lợi ích'.\n\n" },
    { text: "• Bước 4: ", options: { bold: true } },
    { text: "Stress test: Xóa đỉnh Betweenness cao nhất ➔ Mạng vỡ thành mấy mảnh?" }
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
  slide28Content,
  [
    { text: "❓ Thảo luận Giám sát Thị trường:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "“Nếu là cán bộ giám sát của UBCK, anh/chị sẽ theo dõi chặt nhất công ty đứng đầu theo chỉ số nào? Vì sao?”\n\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "• Gợi ý trả lời:\n", options: { bold: true } },
    { text: "  - Nên chọn Betweenness (điểm nghẽn lan truyền rủi ro) hoặc Eigenvector (ảnh hưởng thực chất).\n  - KHÔNG chọn Degree — nhiều kết nối chưa chắc nguy hiểm nhất." }
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
  slide28Content,
  "💡 Bài học quản trị: Công ty có nhiều quan hệ (Degree) chưa chắc là mắt xích nguy hiểm nhất bằng công ty đóng vai trò cầu nối (Betweenness).",
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

slide28Content.addNotes(
  "Giảng viên chiếu file demo_6_1_2_network_centrality.py và minh họa thao tác stress test trên mạng."
);

// ----------------------------------------------------
// Slide 29: CONTENT (ỨNG DỤNG THỰC TẾ KHAI PHÁ MẠNG)
// ----------------------------------------------------
const slide29Content = pptx.addSlide({ masterName: "CONTENT" });
slide29Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide29Content.addText("ỨNG DỤNG THỰC TẾ KHAI PHÁ MẠNG", { placeholder: "title" });

// Card 1: Top-Left (Y = 2.0 cm, H = 3.5 cm)
addText(
  slide29Content,
  [
    { text: "🏦 Sở hữu chéo Ngân hàng:\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "NHNN tái cơ cấu 2011-2015 dùng phân tích mạng nhận diện cụm sở hữu vòng tròn giữa các ngân hàng." }
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
  slide29Content,
  [
    { text: "📣 Influencer Marketing:\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "YouNet Media chọn KOL/KOC theo mức lan tỏa thực tế (reach/closeness) thay vì chỉ đếm follower (degree)." }
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
  slide29Content,
  [
    { text: "💳 Chống Gian lận Ví điện tử:\n", options: { bold: true, color: DUE_COLORS.blue } },
    { text: "MoMo, ZaloPay dùng Community Detection phát hiện cụm tài khoản giao dịch vòng tròn để cày KM." }
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
  slide29Content,
  [
    { text: "🚚 Bản đồ Chuỗi cung ứng:\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Doanh nghiệp lập bản đồ nhà cung cấp nhiều tầng để tìm điểm nghẽn đơn nguồn (single point of failure)." }
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
  slide29Content,
  "💡 Thực tiễn Việt Nam: Phân tích mạng giúp nhận diện rủi ro hệ thống và gian lận có tổ chức mà dữ liệu bảng bỏ sót.",
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

slide29Content.addNotes(
  "Hỏi nhanh lớp: Đơn vị anh/chị có mạng nào đáng vẽ ra không — khách giới thiệu, phòng ban phối hợp, nhà cung cấp?"
);

// ----------------------------------------------------
// Slide 30: CONTENT (BÀI TẬP 6.1.2: MẠNG CHỦ THẺ — CỬA HÀNG)
// ----------------------------------------------------
const slide30Content = pptx.addSlide({ masterName: "CONTENT" });
slide30Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide30Content.addText("BÀI TẬP 6.1.2: MẠNG CHỦ THẺ — CỬA HÀNG", { placeholder: "title" });

addText(
  slide30Content,
  [
    { text: "📝 Đề bài Thực hành Python (Credit Card Dataset):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Câu 1: ", options: { bold: true } },
    { text: "Dựng đồ thị hai phía (Bipartite): Đỉnh = Chủ thẻ & Cửa hàng, Cạnh = Giao dịch.\n\n" },
    { text: "• Câu 2: ", options: { bold: true } },
    { text: "Chiếu về mạng Cửa hàng (nối nếu chung khách). Tính Degree & Betweenness.\n\n" },
    { text: "• Câu 3: ", options: { bold: true } },
    { text: "Chạy Louvain phân cụm cửa hàng ➔ So sánh cộng đồng với cột `category`.\n\n" },
    { text: "• Câu 4: ", options: { bold: true } },
    { text: "Gian lận (`is_fraud = 1`) có tập trung ở cộng đồng cửa hàng nào không?" }
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
  slide30Content,
  [
    { text: "🎯 Gợi ý Giảng viên & Định hướng:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Bài học từ Câu 3:\n", options: { bold: true } },
    { text: "  Cộng đồng Louvain trùng 1 phần ngành hàng nhưng cắt ngang (khách đi chợ + xăng + ăn uống cùng khu vực).\n\n" },
    { text: "• Bài học từ Câu 4:\n", options: { bold: true } },
    { text: "  Degree của cửa hàng và tỷ lệ fraud lịch sử của cộng đồng là đặc trưng mạnh cho bài tập Fraud ở 6.4.3." }
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
    line: { color: DUE_COLORS.orange, width: 1 },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide30Content,
  "💡 Luyện tập: Dựng mạng đồ thị hai phía (Bipartite Graph) để trích xuất đặc trưng mạng lưới cho mô hình phát hiện gian lận.",
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

slide30Content.addNotes(
  "Giảng viên hướng dẫn học viên thực hành file bt6_2_network.py."
);

// ----------------------------------------------------
// Slide 31: CONTENT (TÓM TẮT 6.1.2 — ĐỒ THỊ & MẠNG)
// ----------------------------------------------------
const slide31Content = pptx.addSlide({ masterName: "CONTENT" });
slide31Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide31Content.addText("TÓM TẮT 6.1.2 — ĐỒ THỊ & MẠNG", { placeholder: "title" });

addText(
  slide31Content,
  [
    { text: "📌 Tổng kết Nội dung Mục 6.1.2:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Khái niệm: ", options: { bold: true } },
    { text: "Đồ thị = Đỉnh + Cạnh (Có hướng, trọng số, Bipartite).\n\n" },
    { text: "• 4 Bài toán chính:\n", options: { bold: true } },
    { text: "  1. Centrality (4 chỉ số trả lời 4 câu hỏi kinh doanh)\n  2. Cộng đồng (Louvain - Phân cụm trên mạng)\n  3. Dự đoán liên kết (Common neighbors, Jaccard, Adamic-Adar)\n  4. Khai phá đồ thị con thường xuyên\n\n" },
    { text: "• Bộ công cụ Python: ", options: { bold: true } },
    { text: "`networkx`, `python-louvain`." }
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
  slide31Content,
  [
    { text: "🚀 Chuyển giao tiếp theo — Mục 6.1.3:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Nguyên tắc vàng lặp lại: ", options: { bold: true } },
    { text: "Mạng ➔ Chỉ số / Vector đặc trưng ➔ Tái dùng Ch.3–5.\n\n" },
    { text: "• Bài học tiếp theo (6.1.3):\n", options: { bold: true } },
    { text: "  - Khai phá dữ liệu chiếm ~80% doanh nghiệp nhưng hoàn toàn phi cấu trúc: Văn bản (Text Mining).\n  - Đo tâm lý thị trường từ bài đăng, review." }
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
  slide31Content,
  "💡 Bước tiếp theo: Chuyển sang 6.1.3 — Khai phá dữ liệu văn bản phi cấu trúc chiếm ~80% dữ liệu doanh nghiệp.",
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

slide31Content.addNotes(
  "Tóm tắt 6.1.2 và dẫn dắt học viên chuyển sang mục 6.1.3 Khai phá dữ liệu văn bản."
);
