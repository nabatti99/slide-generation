import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 142 — SECTION (BÀI TẬP CUỐI CHƯƠNG — CHUẨN BỊ DỮ LIỆU GIAO DỊCH)
// ----------------------------------------------------
const slide142Section = pptx.addSlide({ masterName: "SECTION" });
slide142Section.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide142Section.addText("BÀI TẬP CUỐI CHƯƠNG — CHUẨN BỊ DỮ LIỆU GIAO DỊCH", { placeholder: "title" });
slide142Section.addText(
  "Tải bộ dữ liệu thực tế Credit Card Transactions Dataset trên Kaggle (priyamchoksi/credit-card-transactions-dataset)",
  { placeholder: "content" }
);
slide142Section.addText(
  "Quy mô dữ liệu: 1.296.675 bản ghi giao dịch, 24 biến thô. Mục tiêu: Thực hiện 4 Nhiệm vụ lớn từ làm sạch, chuẩn hóa giỏ hàng, khai phá luật gian lận đến so sánh hiệu năng Apriori vs FP-Growth.",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 143 — CONTENT (Quy ước dữ liệu gốc & Bối cảnh)
// ----------------------------------------------------
const slide143Content = pptx.addSlide({ masterName: "CONTENT" });
slide143Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide143Content.addText("QUY ƯỚC DỮ LIỆU GỐC & BỐI CẢNH", { placeholder: "title" });

slide143Content.addTable(
  [
    [
      { text: "Tên biến", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Quy ước & Ý nghĩa nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Hướng xử lý kỹ thuật", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "trans_num", options: { bold: true } }, { text: "Mã giao dịch duy nhất (Transaction ID)" }, { text: "Dùng làm mã đơn vị giao dịch" }],
    [{ text: "cc_num / amt", options: { bold: true } }, { text: "Mã thẻ / Số tiền giao dịch" }, { text: "Rời rạc hóa amt thành 4 nhóm phân vị" }],
    [{ text: "category / merchant", options: { bold: true } }, { text: "Nhóm ngành hàng / Đơn vị chấp nhận thẻ" }, { text: "Dùng category làm item chính (tránh nổ item)" }],
    [{ text: "is_fraud", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Nhãn gian lận (0: Bình thường, 1: Gian lận)" }, { text: "Biến mục tiêu cho bài toán khai phá gian lận" }],
    [{ text: "Unnamed: 0", options: { bold: true } }, { text: "Cột chỉ mục dư thừa" }, { text: "❌ Bắt buộc loại bỏ ngay từ đầu" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10,
    colW: [cmToInch(5.0), cmToInch(10.5), cmToInch(8.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide143Content,
  "💡 Bối cảnh: Khai phá tổ hợp hành vi chi tiêu (Khung giờ, Nhóm tiền, Ngành hàng, Gian lận). Không dùng merchant đơn lẻ làm item chính!",
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
// Slide 144 — CONTENT (Nhiệm vụ 1 — Tạo bảng dữ liệu làm việc)
// ----------------------------------------------------
const slide144Content = pptx.addSlide({ masterName: "CONTENT" });
slide144Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide144Content.addText("NHIỆM VỤ 1 — TẠO BẢNG DỮ LIỆU LÀM VIỆC", { placeholder: "title" });

slide144Content.addTable(
  [
    [
      { text: "Các bước xử lý", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Nội dung kỹ thuật thực hiện", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "Bước 1.1 — Tải & Kiểm tra", options: { bold: true } }, { text: "Lưu credit_card_transactions_raw.csv gốc. Lập bảng từ điển dữ liệu (Data dictionary)." }],
    [{ text: "Bước 1.2 — Loại biến dư", options: { bold: true } }, { text: "Loại Unnamed: 0, first, last, street để bảo vệ riêng tư. Lưu credit_card_transactions_working.csv." }],
    [{ text: "Bước 1.3 — Kiểm tra chất lượng", options: { bold: true } }, { text: "Đếm số dòng trùng, giá trị thiếu, amt <= 0. Lập bảng báo cáo chất lượng dữ liệu." }],
    [{ text: "Bước 1.4 — Biến đổi thời gian", options: { bold: true } }, { text: "Tạo trans_date, hour, day_of_week, month và time_slot (Dawn, Morning, Afternoon, Evening)." }],
    [{ text: "Bước 1.5 — Rời rạc hóa amt", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Tạo amt_group dựa trên 4 phân vị Q1, Q2, Q3 (Low, Medium, High, Very_high)." }],
    [{ text: "Bước 1.6 — Biến đổi dân số", options: { bold: true } }, { text: "Tạo city_pop_group (Small_city, Medium_city, Large_city). Giữ nguyên lat/long cho bài sau." }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10,
    colW: [cmToInch(6.5), cmToInch(17.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide144Content,
  "💡 Mục đích Nhiệm vụ 1: Thực hành quy trình làm sạch, rời rạc hóa và quản trị dữ liệu tái sử dụng cho các chương sau.",
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
// Slide 145 — CONTENT (Nhiệm vụ 1 — Sản phẩm nộp)
// ----------------------------------------------------
const slide145Content = pptx.addSlide({ masterName: "CONTENT" });
slide145Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide145Content.addText("NHIỆM VỤ 1 — SẢN PHẨM NỘP", { placeholder: "title" });

addText(
  slide145Content,
  [
    { text: "📦 5 File Sản phẩm Bắt buộc Nộp:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "1. credit_card_transactions_raw.csv (Dữ liệu gốc ban đầu)\n\n" },
    { text: "2. credit_card_transactions_working.csv (Dữ liệu đã làm sạch)\n\n" },
    { text: "3. data_dictionary.xlsx / .csv (Từ điển dữ liệu chi tiết)\n\n" },
    { text: "4. data_quality_report.pdf (Báo cáo chất lượng dữ liệu)\n\n" },
    { text: "5. Notebook / Python script tái lập 100% quy trình xử lý." }
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
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide145Content,
  [
    { text: "🎯 Yêu cầu Quản trị Dữ liệu:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Không được ghi đè lên tệp dữ liệu gốc.\n\n" },
    { text: "• Mọi quyết định xử lý dòng thiếu hoặc biến đổi đều phải có căn cứ nghiệp vụ.\n\n" },
    { text: "• Code Python phải chạy từ đầu đến cuối không phát sinh lỗi." }
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
  slide145Content,
  "💡 Chuẩn hóa: Đảm bảo bộ dữ liệu sạch được tạo ra chuẩn xác để dùng làm đầu vào cho Nhiệm vụ 2 & Nhiệm vụ 3.",
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
// Slide 146 — CONTENT (Nhiệm vụ 2 — Tạo dữ liệu cho luật kết hợp)
// ----------------------------------------------------
const slide146Content = pptx.addSlide({ masterName: "CONTENT" });
slide146Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide146Content.addText("NHIỆM VỤ 2 — TẠO DỮ LIỆU CHO LUẬT KẾT HỢP", { placeholder: "title" });

addText(
  slide146Content,
  [
    { text: "🛒 Định dạng Giỏ hàng Item:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "Mỗi giao dịch trans_num được tiền tố hóa thành:\n\n" },
    { text: "• CAT_<category>\n" },
    { text: "• TIME_<time_slot>\n" },
    { text: "• AMT_<amt_group>\n" },
    { text: "• GENDER_<gender>\n" },
    { text: "• POP_<city_pop_group>\n" },
    { text: "• FRAUD_<is_fraud>\n\n" },
    { text: "Ví dụ: {CAT_grocery_pos, TIME_Evening, AMT_High, GENDER_F, POP_Medium_city, FRAUD_0}" }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 10,
    lineSpacing: 13,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.green, width: 2 },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

slide146Content.addTable(
  [
    [
      { text: "Tập dữ liệu mẫu xuất ra", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Quy mô & Mục đích sử dụng", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "association_all_sample.csv", options: { bold: true } }, { text: "Lấy mẫu phân tầng 100.000 giao dịch (giữ nguyên tỷ lệ fraud) để khai phá luật tổng quát." }],
    [{ text: "association_fraud_sample.csv", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Lấy tối đa 20.000 giao dịch gian lận (is_fraud=1) để mô tả riêng mẫu gian lận." }],
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(5.0), cmToInch(6.5)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide146Content,
  "💡 Lưu ý phương pháp: Các luật ở đây mô tả ĐẶC TRƯNG ĐỒNG THỜI CỦA 1 GIAO DỊCH, không diễn giải thành khách mua nhiều ngành hàng!",
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
// Slide 147 — CONTENT (Nhiệm vụ 3 — Khai phá luật kết hợp)
// ----------------------------------------------------
const slide147Content = pptx.addSlide({ masterName: "CONTENT" });
slide147Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide147Content.addText("NHIỆM VỤ 3 — KHAI PHÁ LUẬT KẾT HỢP", { placeholder: "title" });

slide147Content.addTable(
  [
    [
      { text: "Cấu hình thử nghiệm", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "minsup", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "minconf", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Yêu cầu khai phá & Báo cáo", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Cấu hình A", options: { bold: true } }, { text: "5.0%" }, { text: "50.0%" }, { text: "Giữ luật độ dài 2-4 items; báo cáo số Frequent Itemsets, số luật, time chạy." }],
    [{ text: "Cấu hình B", options: { bold: true } }, { text: "2.0%" }, { text: "60.0%" }, { text: "Báo cáo 5 luật có Lift cao nhất." }],
    [{ text: "Cấu hình C", options: { bold: true } }, { text: "1.0%" }, { text: "70.0%" }, { text: "So sánh sự bùng nổ số lượng luật giữa 3 cấu hình." }],
    [{ text: "Khai phá Gian lận", options: { bold: true, color: DUE_COLORS.orange } }, { text: "0.1%" }, { text: "5.0%" }, { text: "Chỉ lọc vế phải FRAUD_1, support count >= 30 đơn, chọn 15 luật Lift cao nhất." }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10,
    colW: [cmToInch(4.5), cmToInch(2.5), cmToInch(2.5), cmToInch(14.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide147Content,
  "💡 Yêu cầu diễn giải: Chọn 3 luật gian lận FRAUD_1, viết 100-150 từ diễn giải mẫu, so sánh với tỷ lệ nền, giải thích Lift & hàm ý quản trị rủi ro.",
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
// Slide 148 — CONTENT (Nhiệm vụ 4 — So sánh thuật toán)
// ----------------------------------------------------
const slide148Content = pptx.addSlide({ masterName: "CONTENT" });
slide148Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide148Content.addText("NHIỆM VỤ 4 — SO SÁNH THUẬT TOÁN APRIORI & FP-GROWTH", { placeholder: "title" });

slide148Content.addTable(
  [
    [
      { text: "Tiêu chí so sánh Benchmark", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Giải thuật Apriori", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Giải thuật FP-Growth", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "Số lượt quét dữ liệu", options: { bold: true } }, { text: "Nhiều lượt (Mỗi mức k quét 1 lượt)" }, { text: "Đúng 2 lượt quét CSDL gốc" }],
    [{ text: "Sinh Candidate Itemsets", options: { bold: true } }, { text: "Có (Sinh C₁, C₂, ..., Cₖ)" }, { text: "❌ Không sinh Candidate" }],
    [{ text: "Số Frequent Itemsets", options: { bold: true } }, { text: "Phải ĐỒNG NHẤT 100%" }, { text: "Phải ĐỒNG NHẤT 100%" }],
    [{ text: "Thời gian chạy (phút/giây)", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Đo thực tế bằng perf_counter" }, { text: "Đo thực tế bằng perf_counter" }],
    [{ text: "Dung lượng RAM tối đa (MB)", options: { bold: true } }, { text: "Đo bằng memory_profiler" }, { text: "Đo bằng memory_profiler" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(6.5), cmToInch(8.65), cmToInch(8.65)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide148Content,
  "💡 Yêu cầu kết luận: Viết 200-250 từ nhận xét thuật toán nào tối ưu hơn và dự báo sự thay đổi hiệu năng khi tăng mẫu lên 300.000 đơn.",
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
// Slide 149 — CONTENT (Tiêu chí đánh giá và thang điểm)
// ----------------------------------------------------
const slide149Content = pptx.addSlide({ masterName: "CONTENT" });
slide149Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide149Content.addText("TIÊU CHÍ ĐÁNH GIÁ VÀ THANG ĐIỂM", { placeholder: "title" });

slide149Content.addTable(
  [
    [
      { text: "Tiêu chí đánh giá bài tập lớn", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Trọng số điểm", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Yêu cầu chất lượng chi tiết", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "1. Chuẩn bị & Kiểm tra dữ liệu", options: { bold: true } }, { text: "25%" }, { text: "Đầy đủ 5 file sản phẩm N1, báo cáo chất lượng dữ liệu sạch." }],
    [{ text: "2. Tạo Transactions / Items", options: { bold: true } }, { text: "20%" }, { text: "Tạo đúng tiền tố item, chia file mẫu all và fraud chính xác." }],
    [{ text: "3. Khai phá & Báo cáo chỉ số", options: { bold: true } }, { text: "25%" }, { text: "Đầy đủ 3 cấu hình A/B/C, bảng kết quả fraud và so sánh Apriori vs FP-Growth." }],
    [{ text: "4. Diễn giải & Hàm ý quản trị", options: { bold: true, color: DUE_COLORS.orange } }, { text: "20%" }, { text: "Đoạn văn 100-150 từ diễn giải 3 luật gian lận sắc bén, có phê phán nhân quả." }],
    [{ text: "5. Code tái lập & Đạo đức dữ liệu", options: { bold: true } }, { text: "10%" }, { text: "Code sạch, không lỗi, tuân thủ nguyên tắc bảo mật thông tin cá nhân." }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(7.0), cmToInch(3.0), cmToInch(13.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide149Content,
  "💡 Thông điệp kết thúc Chương 5: Chúc các bạn sinh viên hoàn thành xuất sắc bài tập cuối chương và làm chủ kỹ năng khai phá luật kết hợp!",
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
