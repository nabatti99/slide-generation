## Slide 77 — SECTION 5.4. Giải thuật FP-Growth

### Câu hỏi dẫn nhập

> **“Có thể tìm tập mục thường xuyên mà không cần tạo và kiểm tra một danh sách dài các ứng viên như Apriori không?”**

Apriori rất trực quan, nhưng khi dữ liệu có nhiều sản phẩm hoặc đặt ngưỡng `minsup` thấp, số candidate itemset có thể tăng nhanh và việc quét cơ sở dữ liệu lặp lại trở nên tốn kém.

```text
Apriori
Sinh ứng viên → Đếm support → Sinh ứng viên lớn hơn → Lặp lại
```

### Một cách tiếp cận khác

**FP-Growth** (*Frequent Pattern Growth*) trả lời **có** cho câu hỏi trên:

```text
Không sinh candidate itemset hàng loạt
                ↓
Nén các giao dịch thành FP-tree
                ↓
Khai phá trực tiếp các mẫu thường xuyên
```

FP-Growth là phương pháp khai phá theo **tăng trưởng mẫu** (*pattern growth*): trước hết nén cơ sở dữ liệu giao dịch thành **FP-tree**, sau đó khai phá đệ quy các mẫu từ những phần dữ liệu liên quan thay vì dùng chiến lược “sinh và kiểm tra” của Apriori.

### Ba từ khóa của phần này

| Khái niệm | Ý nghĩa trực giác |
|---|---|
| **FP-tree** | Cây nén các giao dịch có tiền tố sản phẩm chung |
| **Pattern growth** | Mở rộng dần mẫu từ các mẫu/pattern fragment đã có |
| **Không sinh ứng viên** | Tránh tạo danh sách \(C_2, C_3, \ldots\) có thể rất lớn |

> **Thông điệp trọng tâm:** thay vì tạo mọi tổ hợp có khả năng xảy ra, FP-Growth tổ chức và nén dữ liệu trước, rồi chỉ khai phá các nhánh mẫu có ý nghĩa.

### Mục tiêu học phần

Sau phần này, học viên có thể:

- Giải thích vì sao FP-Growth khắc phục hai điểm nghẽn của Apriori: bùng nổ candidate itemset và quét dữ liệu nhiều lần
- Mô tả vai trò của FP-tree trong việc nén dữ liệu giao dịch
- Trình bày ý tưởng khai phá frequent itemset bằng conditional pattern base và conditional FP-tree
- So sánh trực giác giữa chiến lược **generate-and-test** của Apriori và **compress-and-grow** của FP-Growth

FP-Growth sử dụng FP-tree để lưu thông tin về các itemset thường xuyên, sau đó chia bài toán thành các cơ sở dữ liệu điều kiện nhỏ hơn và khai phá chúng đệ quy; cách tiếp cận này tránh chi phí sinh ứng viên của Apriori.