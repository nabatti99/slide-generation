## Slide 1 — SECTION

**Tiêu đề**

> **1.2. MỘT SỐ THÁCH THỨC TRONG KHAI PHÁ DỮ LIỆU**

**Thông điệp trung tâm**

> Dữ liệu nhiều chỉ tạo ra quyết định tốt hơn khi dữ liệu đủ tin cậy, được xử lý đúng cách và kết quả có thể đưa vào hành động.

**Câu hỏi dẫn nhập**

> “Một ngân hàng số có hàng triệu giao dịch mỗi ngày: vì sao vẫn có thể bỏ sót gian lận hoặc đưa ra cảnh báo sai?”

***

## Slide 2 — CONTENT

**Tiêu đề**

> **CÁC THÁCH THỨC**

**Nội dung chính**

Khai phá dữ liệu không chỉ là lựa chọn thuật toán. Một dự án có thể thất bại nếu dữ liệu quá lớn, chất lượng thấp, thiếu liên kết, thay đổi liên tục, khó diễn giải hoặc được sử dụng thiếu trách nhiệm. Các tài liệu nền tảng cũng nhấn mạnh yêu cầu về hiệu quả, khả năng mở rộng và xử lý nhiều dạng dữ liệu trong các hệ thống khai phá hiện đại. 

| Nhóm thách thức | Câu hỏi cần đặt ra |
|---|---|
| **Quy mô và tốc độ** | Dữ liệu có quá lớn hoặc phát sinh quá nhanh để xử lý kịp không? |
| **Chất lượng dữ liệu** | Dữ liệu có thiếu, sai, nhiễu, trùng lặp hoặc không nhất quán không? |
| **Tích hợp và đa dạng** | Các nguồn dữ liệu có được liên kết đúng và biểu diễn phù hợp không? |
| **Dữ liệu động** | Hành vi, môi trường và quy luật có thay đổi theo thời gian không? |
| **Hiệu năng và diễn giải** | Mô hình có đủ nhanh, ổn định và dễ giải thích để vận hành không? |
| **Đánh giá kết quả** | Mẫu phát hiện có thực sự mới, hữu ích và có thể hành động không? |
| **Quyền riêng tư và đạo đức** | Việc sử dụng dữ liệu có hợp pháp, công bằng và an toàn không? |

**Liên hệ: hệ thống ngân hàng số**

```text
Giao dịch thẻ + ứng dụng di động + thông tin tín dụng + vị trí thiết bị
                              ↓
     Dữ liệu lớn, đa nguồn, phát sinh liên tục và có tính nhạy cảm cao
                              ↓
      Cần phát hiện rủi ro chính xác, đủ nhanh và có thể giải trình
```

**Thông điệp chốt**

> Một mô hình tốt không thể bù đắp hoàn toàn cho dữ liệu kém, quy trình yếu hoặc cách sử dụng thiếu trách nhiệm.

**Thiết kế**

- Dùng sơ đồ trung tâm: “Dự án khai phá dữ liệu” ở giữa, bao quanh bởi bảy nhóm thách thức.
- Mỗi nhóm dùng một icon: dữ liệu lớn, chổi làm sạch, mảnh ghép, đồng hồ/dòng chảy, tốc kế, kính lúp đánh giá, lá chắn.
- Góc dưới đặt mini-case ngân hàng số gồm bốn nguồn dữ liệu.

**Prompt tạo SVG**

```text
Create a hub-and-spoke SVG infographic, no text, showing data mining project challenges.
Center: analytics engine with data mining magnifying glass.
Around it: seven icons representing scale, data quality, integration, streaming change, performance, insight evaluation, privacy and ethics.
At the bottom, show a digital banking mini-case with card transaction, smartphone app, credit profile, and location pin feeding into the engine.
Style: modern university business analytics infographic, white background, navy blue and cyan, orange warnings, green secure action.
```