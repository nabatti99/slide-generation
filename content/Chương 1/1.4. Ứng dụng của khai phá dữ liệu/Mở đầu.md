## Slide 1 — SECTION

# 1.4. ỨNG DỤNG CỦA KHAI PHÁ DỮ LIỆU

> “Dữ liệu chỉ thực sự có giá trị khi giúp tổ chức đưa ra quyết định tốt hơn.”

Khai phá dữ liệu không chỉ nhằm tạo ra mô hình, biểu đồ hay bảng chỉ số. Mục tiêu cuối cùng là phát hiện tri thức từ dữ liệu để hỗ trợ tổ chức dự báo, lựa chọn hành động và cải thiện kết quả hoạt động.

**Câu hỏi dẫn nhập**

Một doanh nghiệp có hàng triệu giao dịch, hàng trăm nghìn khách hàng và nhiều báo cáo doanh thu. Liệu doanh nghiệp đó đã thật sự hiểu:

- Khách hàng nào có nguy cơ rời bỏ?
- Nhóm khách hàng nào cần ưu tiên chăm sóc?
- Sản phẩm nào nên được bán kèm?
- Nhu cầu tháng tới sẽ thay đổi như thế nào?
- Giao dịch nào cần được kiểm tra vì có dấu hiệu bất thường?

## Slide 2 — CONTENT

# BẢN ĐỒ ỨNG DỤNG: TỪ DỮ LIỆU ĐẾN QUYẾT ĐỊNH

```text
Dữ liệu
    ↓
Khai phá dữ liệu
    ↓
Tri thức / mẫu phát hiện được
    ↓
Quyết định và hành động
    ↓
Kết quả kinh doanh hoặc xã hội
```

| Thành phần | Nội dung minh họa |
|---|---|
| **Dữ liệu** | Hóa đơn bán hàng, lịch sử giao dịch, hồ sơ khách hàng, dữ liệu ứng dụng, dữ liệu cảm biến |
| **Khai phá dữ liệu** | Phân lớp, dự báo, phân cụm, luật kết hợp, phát hiện bất thường |
| **Tri thức** | Khách hàng có nguy cơ rời bỏ cao; sản phẩm thường mua cùng nhau; giao dịch bất thường |
| **Hành động** | Gửi ưu đãi giữ chân; gợi ý sản phẩm; kiểm tra giao dịch; điều chỉnh tồn kho |
| **Kết quả** | Tăng doanh thu, giảm chi phí, hạn chế rủi ro, cải thiện trải nghiệm khách hàng |

**Phân biệt cần nhớ**

| Có dữ liệu | Biết hành động dựa trên dữ liệu |
|---|---|
| Có lịch sử hóa đơn | Biết khách nào sắp ngừng mua |
| Có dữ liệu giỏ hàng | Biết nên gợi ý sản phẩm nào |
| Có lịch sử trả nợ | Biết hồ sơ nào cần xem xét kỹ hơn |
| Có dữ liệu giao dịch | Biết giao dịch nào có dấu hiệu gian lận |
| Có doanh số quá khứ | Biết cần đặt bao nhiêu hàng cho kỳ tới |

**Thông điệp chốt**

> Dữ liệu không tự tạo ra giá trị; giá trị đến từ khả năng biến dữ liệu thành tri thức có thể hành động.

***

## Slide 3 — CONTENT

# KHUNG ĐỌC MỘT ỨNG DỤNG KHAI PHÁ DỮ LIỆU: 5 CÂU HỎI

| Câu hỏi | Ý nghĩa | Ví dụ trong bán lẻ |
|---|---|---|
| **1. Vấn đề nghiệp vụ là gì?** | Tổ chức muốn cải thiện hoặc giảm rủi ro ở điểm nào? | Làm sao giảm số khách hàng ngừng mua? |
| **2. Dữ liệu nào cần có?** | Dữ liệu nào phản ánh bài toán? | Hóa đơn, thẻ thành viên, ứng dụng, phản hồi khuyến mại |
| **3. Nhiệm vụ khai phá nào?** | Cần dự báo, phân nhóm, tìm liên hệ hay phát hiện bất thường? | Phân lớp khách hàng thành nhóm có hoặc không rời bỏ |
| **4. Kết quả đầu ra là gì?** | Kỹ thuật trả về thông tin nào? | Xác suất hoặc điểm rủi ro rời bỏ |
| **5. Hành động nào?** | Ai sử dụng kết quả và làm gì tiếp theo? | Gửi ưu đãi, gọi chăm sóc, điều chỉnh thông điệp |

```text
Vấn đề nghiệp vụ
        ↓
Dữ liệu phù hợp
        ↓
Nhiệm vụ khai phá
        ↓
Kết quả đầu ra
        ↓
Hành động và đánh giá hiệu quả
```

**Lưu ý**

- Không bắt đầu bằng câu hỏi: “Thuật toán nào tốt nhất?”
- Bắt đầu bằng câu hỏi: “Tổ chức cần đưa ra quyết định nào tốt hơn?”
- Mô hình cung cấp thông tin hỗ trợ quyết định; không mặc nhiên thay thế quyết định quản trị.

**Thông điệp chốt**

> Bắt đầu từ quyết định cần hỗ trợ, không bắt đầu từ thuật toán muốn sử dụng.
