# 6.3 Hướng ứng dụng — Mở đầu

## Slide 76 — SECTION

**Tiêu đề**

> **6.3. HƯỚNG ỨNG DỤNG**
> Khai phá dữ liệu trong các lĩnh vực (Data Mining Applications)

**Đề từ**

> 6.1 hỏi "khai phá CÁI GÌ?", 6.2 hỏi "khai phá BẰNG GÌ?" — 6.3 trả lời câu hỏi cuối cùng và quan trọng nhất với nhà quản lý: khai phá **CHO AI?**

***

## Slide 77 — CONTENT

**Tiêu đề**

> **HƯỚNG ỨNG DỤNG LÀ GÌ? — KHOẢNG CÁCH TỪ NGUYÊN LÝ ĐẾN CÔNG CỤ NGÀNH**

**Nội dung dạng list**

- Nhận định của Han & Kamber (mục 13.3): khai phá dữ liệu là lĩnh vực trẻ, ứng dụng rộng — vẫn tồn tại **khoảng cách không nhỏ** giữa các nguyên lý tổng quát và công cụ khai phá **hiệu quả cho từng ngành cụ thể**.
- Hàm ý: không có "một thuật toán cho mọi ngành" — mỗi lĩnh vực đòi hỏi:
  - **Dữ liệu đặc thù:** giao dịch tài chính khác hồ sơ bệnh án, khác log mạng viễn thông.
  - **Ràng buộc đặc thù:** pháp lý (ngân hàng), thời gian thực (an ninh mạng), quy mô (TMĐT).
  - **Tiêu chí thành công đặc thù:** lợi nhuận, tỷ lệ giữ chân khách, số vụ gian lận chặn được.
- Với học viên thạc sĩ kinh tế: mục 6.3 là "phòng trưng bày" — xem các kỹ thuật của 6.1 và 6.2 được lắp ráp thành giải pháp ngành như thế nào, để hình dung bài toán của CHÍNH đơn vị mình.

**Ghi chú giảng dạy**

Hỏi mở đầu (TLM14): "Anh/chị đang làm ngành nào — ngân hàng, bán lẻ, viễn thông, cơ quan nhà nước?" — ghi lên bảng, cuối mục quay lại đối chiếu xem ngành nào đã được "điểm danh".

***

## Slide 78 — CONTENT

**Tiêu đề**

> **LỘ TRÌNH MỤC 6.3 — SÁU TRẠM DỪNG**

**Nội dung dạng list**

- **6.3.1 Phân tích dữ liệu tài chính:** chấm điểm tín dụng, phát hiện gian lận, phân khúc khách hàng ngân hàng — gần chuyên ngành nhất, học kỹ.
- **6.3.2 Bán lẻ & viễn thông:** giỏ hàng, khuyến mãi, dự đoán rời bỏ (churn) — nơi khai phá dữ liệu sinh ra và trưởng thành, học kỹ.
- **6.3.3 Khoa học & kỹ thuật:** tin sinh học, thiên văn, giám sát công trình — mở rộng tầm nhìn, học lướt.
- **6.3.4 Phát hiện & ngăn chặn xâm nhập:** an ninh mạng như bài toán phát hiện bất thường — học lướt.
- **6.3.5 Hệ thống gợi ý (recommender systems):** động cơ doanh thu của Amazon, Netflix, Shopee — kết tinh của nhiều kỹ thuật đã học, học kỹ.
- **6.3.6 Khai phá dữ liệu và xã hội:** quyền riêng tư, ẩn danh hoá, pháp lý và đạo đức — bắt buộc với mọi nhà quản lý dữ liệu.
- Mạch nối tình huống mở đầu chương: công ty chứng khoán chính là một "khách hàng" của 6.3.1; dữ liệu review Shopee/Tiki dẫn sang 6.3.2 và 6.3.5.

**Ghi chú giảng dạy**

*Hình minh hoạ: bản đồ 6 trạm theo vòng cung, 3 trạm tô đậm (6.3.1, 6.3.2, 6.3.5) = trọng tâm thi; 6.3.6 gắn cờ đỏ "bắt buộc".*

***

## Slide 79 — CONTENT

**Tiêu đề**

> **CÂU HỎI GỢI MỞ — CÙNG MỘT KỸ THUẬT, MỖI NGÀNH MỘT SỐ PHẬN**

**Nội dung dạng list**

Cùng là bài toán PHÂN LỚP (Ch.4), nhưng:

- **Ngân hàng — duyệt vay:** sai một khoản vay lớn = mất vốn thật; đòi giải trình từng quyết định → mô hình phải minh bạch, ngưỡng chặt.
- **TMĐT — gợi ý sản phẩm:** gợi ý sai chỉ tốn một cú click; hàng triệu dự đoán mỗi giây → ưu tiên tốc độ và độ phủ, chấp nhận hộp đen.
- **An ninh mạng — chặn xâm nhập:** kẻ tấn công LIÊN TỤC đổi chiến thuật → mô hình phải cập nhật thời gian thực, chịu được dữ liệu lệch cực độ.
- → Ba yếu tố làm nên "số phận" khác nhau: **chi phí của sai lầm** · **yêu cầu giải trình** · **tốc độ thay đổi của môi trường**.

**Câu hỏi thảo luận**

> **Trong ngành của anh/chị, một dự đoán SAI đắt nhất là gì — và điều đó nên thay đổi cách chọn mô hình như thế nào?**

**Gợi ý cho giảng viên**

Dẫn dắt về khung "ma trận chi phí" (cost matrix): ngành nào chi phí sai lầm bất đối xứng càng lớn (tín dụng, y tế, an ninh) càng phải tối ưu theo chi phí kỳ vọng thay vì accuracy — khung này sẽ dùng xuyên suốt 6.3.1 (gian lận thẻ) và bài tập BT4 cuối chương. Đây cũng chính là quan điểm kinh tế vi mô (6.2.2) hiện hình lần nữa.

***