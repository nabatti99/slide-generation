# 6.2 Hướng kỹ thuật — Mở đầu

## Slide 43 — SECTION

**Tiêu đề**

> **6.2. HƯỚNG KỸ THUẬT**
> Các phương pháp luận khai phá dữ liệu (Other Methodologies of Data Mining)

**Đề từ**

> Mục 6.1 trả lời "khai phá CÁI GÌ?" — Mục 6.2 trả lời "khai phá BẰNG GÌ?": cùng một bộ dữ liệu, có nhiều trường phái kỹ thuật để tiếp cận.

***

## Slide 44 — CONTENT

**Tiêu đề**

> **HƯỚNG KỸ THUẬT LÀ GÌ? — VÌ SAO PHẢI HỌC?**

**Nội dung dạng list**

- Khai phá dữ liệu là lĩnh vực **giao thoa** của nhiều cộng đồng nghiên cứu: thống kê, học máy, cơ sở dữ liệu, trực quan hoá — mỗi cộng đồng mang đến một trường phái kỹ thuật và một cách nhìn riêng về "thế nào là khai phá tốt".
- Hệ quả thực tế trong doanh nghiệp: cùng một bài toán, nhà thống kê, kỹ sư dữ liệu và chuyên viên BI sẽ đề xuất ba lời giải khác nhau — nhà quản lý cần hiểu cả ba để **chọn đúng công cụ và đối thoại được với từng đội**.
- Lợi ích với học viên kinh tế:
  - Định vị lại kiến thức thống kê/kinh tế lượng đã có trong bức tranh khai phá dữ liệu.
  - Biết khi nào cần mô hình giải thích được, khi nào cần mô hình chính xác tối đa.
  - Cập nhật các thuật ngữ hiện đại (machine learning, deep learning) để đọc tài liệu và làm việc thực tế.

**Ghi chú giảng dạy**

*Hình minh hoạ: sơ đồ Venn "Thống kê ∩ Học máy ∩ CSDL ∩ Trực quan hoá = Data Mining".* (Nguồn: Han & Kamber, mục 13.2)

***

## Slide 45 — CONTENT

**Tiêu đề**

> **CÂU HỎI GỢI MỞ — BA CHUYÊN GIA, MỘT BÀI TOÁN**

**Nội dung dạng list**

Bài toán: dự đoán khách hàng rời bỏ (churn) cho một nhà mạng.

- **Nhà thống kê:** hồi quy logistic, kiểm định ý nghĩa từng hệ số, đọc odds ratio → ưu tiên **suy diễn và giải thích**.
- **Kỹ sư học máy:** Random Forest, Gradient Boosting, tinh chỉnh siêu tham số, cross-validation → ưu tiên **độ chính xác dự báo**.
- **Chuyên gia trực quan hoá:** vẽ phân bố, ma trận tương quan, hành vi theo thời gian → ưu tiên **phát hiện mẫu bằng mắt** trước khi mô hình hoá.
- → Không trường phái nào "đúng nhất"; dự án thực tế cần CẢ BA: khám phá bằng mắt → mô hình dễ giải thích làm chuẩn → mô hình phức tạp nếu cần thêm độ chính xác.

**Câu hỏi thảo luận**

> **Ngân hàng cần mô hình chấm điểm tín dụng phải GIẢI TRÌNH ĐƯỢC với cơ quan giám sát — anh/chị chọn trường phái nào? Vì sao?**

**Gợi ý cho giảng viên**

Bối cảnh có ràng buộc giải trình (tín dụng, bảo hiểm, y tế) → ưu tiên mô hình thống kê dù kém vài điểm accuracy; bối cảnh gợi ý sản phẩm, quảng cáo → có thể dùng mô hình hộp đen. Thông điệp: tiêu chí chọn kỹ thuật gồm độ chính xác + khả năng diễn giải + chi phí + quy định pháp lý — sẽ quay lại ở 6.3.1 (TLM14 — hỏi lớp trước khi chốt).

***

## Slide 46 — CONTENT

**Tiêu đề**

> **LỘ TRÌNH MỤC 6.2 — BỐN TRƯỜNG PHÁI KỸ THUẬT**

**Nội dung dạng list**

- **6.2.1 Khai phá dữ liệu thống kê:** kho vũ khí thống kê cổ điển — hồi quy, GLM, ANOVA, phân tích nhân tố, phân tích phân biệt, survival analysis — và ba "cảnh giác thống kê" cho người làm dữ liệu lớn.
- **6.2.2 Nền tảng lý thuyết của khai phá dữ liệu:** 5 quan điểm trả lời "về bản chất, khai phá dữ liệu LÀ gì?" — với nhà kinh tế, đáng chú ý nhất là quan điểm **kinh tế vi mô**: một mẫu chỉ đáng khai phá khi dẫn đến hành động sinh lợi.
- **6.2.3 Khai phá dữ liệu trực quan & âm thanh:** dùng thị giác con người như một "thuật toán" khám phá — data visualization, visual data mining.
- **6.2.4 Tích hợp học máy & học sâu hiện đại:** bức tranh cập nhật sau giáo trình (nội dung GV bổ sung): từ mô hình cổ điển → deep learning → ứng dụng trong tài chính, marketing.
- Mạch nối với tình huống mở đầu chương: sau khi biết dữ liệu của công ty chứng khoán là GÌ (6.1), giờ chọn TRƯỜNG PHÁI kỹ thuật nào để khai phá từng nguồn.

**Ghi chú giảng dạy**

*Hình minh hoạ: mindmap chương 6 tô đậm nhánh 6.2, liệt kê 4 mục con như 4 trạm dừng.*

***