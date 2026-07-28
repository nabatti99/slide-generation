## Slide 4 — SECTION

**Tiêu đề**

> **5.1. TỔNG QUAN VỀ KHAI PHÁ LUẬT KẾT HỢP**

**Tiêu đề phụ**

> **Từ dữ liệu giao dịch đến gợi ý hành động kinh doanh**

**Câu hỏi dẫn nhập**

> **Trong tập giao dịch lớn, những sản phẩm, sự kiện hoặc hành vi nào thường xuất hiện đồng thời?**

**Nội dung**

- Khai phá luật kết hợp (*association rule mining*) tìm các mẫu đồng xuất hiện lặp lại trong dữ liệu.
- Trong bán lẻ, bài toán thường được gọi là **phân tích giỏ hàng** (*market basket analysis*): tìm các mặt hàng khách hàng thường mua cùng nhau trong một lần thanh toán.
- Kết quả khai phá thường có dạng: “Khách hàng có \(X\) thì thường đồng thời có \(Y\)”.
- Các luật tìm được có thể hỗ trợ thiết kế combo, bố trí hàng hóa, gợi ý mua kèm, tiếp thị chéo và cá nhân hóa ưu đãi.
- Trong ngân hàng, giáo dục hoặc y tế, “mục” không nhất thiết là sản phẩm; nó có thể là dịch vụ sử dụng, hành vi, thuộc tính khách hàng, triệu chứng hoặc kết quả xét nghiệm.

**Phân biệt với các nhiệm vụ khác**

| Nhiệm vụ khai phá | Câu hỏi điển hình | Kết quả |
|---|---|---|
| **Luật kết hợp** | Những gì thường đi cùng nhau? | \(\{Bánh\ mì,\ Sữa\}\rightarrow\{Trứng\}\) |
| **Phân lớp** | Giao dịch này có phải gian lận không? | `FRAUD_0` hoặc `FRAUD_1` |
| **Dự báo** | Doanh thu tháng tới là bao nhiêu? | Một giá trị dự báo |
| **Phân cụm** | Có những nhóm khách hàng hành vi tương tự nào? | Các cụm khách hàng |

**Thông điệp chốt**

> Luật kết hợp là một nhiệm vụ **khai phá mô tả**: tìm và diễn giải các quan hệ đồng xuất hiện trong dữ liệu, không trực tiếp dự báo một nhãn kết quả cho từng quan sát.

Frequent itemsets và association rules giúp khám phá các tập mục thường xuất hiện cùng nhau trong dữ liệu giao dịch; đây là một dạng khai phá mô tả, khác với các nhiệm vụ dự báo như phân lớp và hồi quy. 