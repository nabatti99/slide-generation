# Chương 6: Các hướng nghiên cứu trong khai phá dữ liệu

## Slide 1 — TITLE

**Tiêu đề**

> **CHƯƠNG 6: CÁC HƯỚNG NGHIÊN CỨU TRONG KHAI PHÁ DỮ LIỆU**

**Thông tin phụ**

- Học phần: Khai phá dữ liệu (STA5009N) — Chương trình Thạc sĩ
- Cấu trúc chương: 6.1 Hướng dữ liệu · 6.2 Hướng kỹ thuật · 6.3 Hướng ứng dụng · 6.4 Tóm tắt
- Tài liệu: TK1 — Shmueli et al., *Data Mining for Business Analytics*, Phần VII (Ch.19–20); TK2 — Han & Kamber, *Data Mining: Concepts and Techniques*, Ch.13
- Giảng viên: [Tên GV]

***

## Slide 2 — OBJECTIVE

**Tiêu đề**

> **MỤC TIÊU HỌC TẬP**

**Nội dung dạng list**

Sau khi hoàn thành chương này, học viên có thể:

- Phân biệt ba loại dữ liệu phức tạp: chuỗi (sequence), đồ thị/mạng (graph/network) và văn bản — đa phương tiện — không gian; nhận diện chúng trong bài toán kinh tế thực tế.
- Giải thích các bài toán khai phá điển hình trên từng loại dữ liệu: dự báo chuỗi thời gian, tìm motif, khai phá mẫu tuần tự, đo centrality, phát hiện cộng đồng, dự đoán liên kết, phân tích cảm xúc.
- Áp dụng các độ đo cơ bản (ACF/PACF, bốn chỉ số centrality, TF-IDF) trên tập dữ liệu mẫu bằng Python.
- Trình bày quan hệ giữa khai phá dữ liệu và thống kê cổ điển; nêu được năm quan điểm lý thuyết về nền tảng của khai phá dữ liệu, đặc biệt là quan điểm kinh tế vi mô — một mẫu chỉ có giá trị khi dẫn đến hành động sinh lợi.
- Mô tả vai trò của trực quan hoá dữ liệu và vị trí của học máy — học sâu hiện đại trong bức tranh khai phá dữ liệu ngày nay.
- Phân tích các ứng dụng tiêu biểu theo lĩnh vực: tài chính — ngân hàng, bán lẻ — viễn thông, khoa học — kỹ thuật, an ninh mạng và hệ thống gợi ý.
- Đánh giá tác động xã hội của khai phá dữ liệu: quyền riêng tư, ẩn danh hoá, khung pháp lý (Nghị định 13/2023/NĐ-CP, GDPR) và trách nhiệm đạo đức của nhà phân tích.
- Vận dụng tổng hợp các kỹ thuật của chương trên bộ dữ liệu giao dịch thẻ tín dụng xuyên suốt học phần để giải quyết chuỗi bài tập ôn chương.

Chương 6 tổng kết môn học bằng ba câu hỏi: khai phá **CÁI GÌ** (6.1), khai phá **BẰNG GÌ** (6.2) và khai phá **CHO AI** (6.3) — mỗi mục con trả lời một phần của ba câu hỏi đó.

***

## Slide 3 — CONTENT

**Tiêu đề**

> **TÌNH HUỐNG THỰC TẾ — HỆ THỐNG HỖ TRỢ QUYẾT ĐỊNH ĐẦU TƯ CỦA MỘT CÔNG TY CHỨNG KHOÁN**

**Bối cảnh**

Một công ty chứng khoán tại TP.HCM muốn xây dựng hệ thống hỗ trợ quyết định đầu tư. Bộ phận phân tích đang nắm trong tay ba nguồn dữ liệu rất khác nhau:

- **Nguồn 1:** Chuỗi giá VN-Index và giá cổ phiếu theo ngày suốt 10 năm → cần **dự báo xu hướng ngắn hạn**.
- **Nguồn 2:** Mạng lưới sở hữu chéo giữa các công ty niêm yết (ai là cổ đông của ai, công ty nào chung ban lãnh đạo) → cần **phát hiện rủi ro hệ thống và các "nhóm lợi ích"**.
- **Nguồn 3:** Hàng chục nghìn bài đăng, bình luận trên diễn đàn chứng khoán, Facebook, review Shopee/Tiki → cần **đo tâm lý thị trường (market sentiment)**.

Công ty quan tâm đến những câu hỏi như:

- Có thể dùng mô hình nào để dự báo VN-Index 10 phiên tới, và sai số chấp nhận được là bao nhiêu?
- Công ty nào giữ vị trí "trung tâm" trong mạng sở hữu chéo — nếu công ty đó gặp khủng hoảng thì rủi ro lan truyền đến đâu?
- Tâm lý nhà đầu tư trên diễn đàn có đi trước biến động giá hay chỉ chạy theo giá?
- Cả ba nguồn dữ liệu này có đưa được về dạng bảng để dùng phân lớp, phân cụm, luật kết hợp đã học không?

*Hình minh hoạ: sơ đồ 3 nguồn dữ liệu đổ về 1 hệ thống ra quyết định*

**Câu hỏi thảo luận**

> **Với các kỹ thuật đã học từ Chương 3 đến Chương 5, anh/chị giải quyết được nguồn dữ liệu nào trong ba nguồn trên? Vướng mắc nằm ở đâu?**

**Gợi ý cho giảng viên**

Cả ba nguồn đều KHÔNG xử lý trực tiếp được bằng kỹ thuật dạng bảng: Nguồn 1 vi phạm giả định các quan sát độc lập (giá hôm nay phụ thuộc hôm qua); Nguồn 2 chứa thông tin nằm ở liên kết giữa các dòng chứ không nằm trong từng dòng; Nguồn 3 hoàn toàn phi cấu trúc, không có cột nào. Ba vướng mắc này lần lượt dẫn vào 6.1.1, 6.1.2 và 6.1.3. Chốt lại: kỹ thuật cũ không sai, chỉ cần bước biểu diễn dữ liệu phù hợp trước khi áp dụng — đó chính là "nguyên tắc vàng" của mục 6.1.

***

## Slide 4 — CONTENT

**Tiêu đề**

> **CÂU HỎI GỢI MỞ — KỸ THUẬT ĐÃ HỌC CÓ ĐỦ DÙNG?**

**Nội dung dạng list**

- Ch.3–5 đã học: phân lớp, phân cụm, luật kết hợp — đều giả định dữ liệu **dạng bảng**: mỗi dòng một quan sát độc lập, mỗi cột một thuộc tính.
- Giá cổ phiếu hôm nay **phụ thuộc** hôm qua — thứ tự quan trọng → bảng không nắm được.
- Quan hệ sở hữu chéo là **liên kết giữa các dòng** → bảng không biểu diễn được.
- Review khách hàng là **văn bản phi cấu trúc** → không có cột nào cả.
- → Cần các hướng nghiên cứu chuyên biệt theo loại dữ liệu — Han & Kamber gọi là *Mining Complex Data Types* (Ch.13.1).

**Ghi chú giảng dạy**

Đặt câu hỏi cho lớp trước khi chiếu từng gạch đầu dòng (TLM14 — câu hỏi gợi mở); mỗi "lý do thất bại" tương ứng đúng một mục con của 6.1, giúp học viên tự suy ra cấu trúc bài học.

***

## Slide 5 — CONTENT

**Tiêu đề**

> **BỨC TRANH TỔNG THỂ CHƯƠNG 6 — BA HƯỚNG NGHIÊN CỨU**

**Nội dung dạng list**

Sơ đồ trung tâm "KHAI PHÁ DỮ LIỆU" toả ra 3 nhánh:

- **6.1 Hướng dữ liệu** — Khai phá *CÁI GÌ*? → dữ liệu chuỗi, đồ thị/mạng, văn bản/đa phương tiện/không gian.
- **6.2 Hướng kỹ thuật** — Khai phá *BẰNG GÌ*? → khai phá thống kê, nền tảng lý thuyết, khai phá trực quan/âm thanh, học máy — học sâu hiện đại.
- **6.3 Hướng ứng dụng** — Khai phá *CHO AI*? → tài chính, bán lẻ — viễn thông, khoa học — kỹ thuật, an ninh, hệ gợi ý, xã hội & quyền riêng tư.
- **6.4 Tóm tắt** — tổng kết ba hướng, xu hướng tương lai, bài tập ôn chương trên bộ dữ liệu thẻ tín dụng xuyên suốt.

*Hình minh hoạ: mindmap 3 nhánh từ tâm, tô đậm nhánh 6.1 đang học*

***

