Đúng, **Chương 5 bắt đầu từ slide 95**. Dưới đây là phần mở đầu Mục 5.5 được đánh lại số slide từ **Slide 95**.

## 5.5. Đánh giá và xác nhận luật kết hợp

### Slide 95 — Tiêu đề mục

**5.5. ĐÁNH GIÁ VÀ XÁC NHẬN LUẬT KẾT HỢP**

*Không chỉ tìm luật mạnh — cần chọn luật đáng để hành động*

**Mục tiêu phần học**

Sau phần này, học viên có thể:

- Đánh giá luật kết hợp bằng support, confidence và lift.
- Nhận diện luật có confidence cao nhưng không phù hợp để khuyến mãi chéo.
- Phân biệt luật có ý nghĩa thống kê với luật tạo giá trị kinh doanh.
- Xác nhận độ ổn định của luật trên dữ liệu mới trước khi triển khai.

**Lời giảng gợi ý**

> Các phần trước giúp chúng ta khai phá các tập phổ biến và sinh luật kết hợp. Tuy nhiên, kết quả khai phá có thể chứa hàng trăm hoặc hàng nghìn luật. Nhiệm vụ tiếp theo không phải là giữ tất cả các luật, mà là xác định luật nào thực sự đáng tin, có ý nghĩa mới và có thể dẫn đến hành động quản trị. Một mẫu chỉ được xem là thú vị khi dễ hiểu, còn đúng trên dữ liệu mới, hữu ích và có tính mới. 

***

### Slide 96 — Câu hỏi dẫn nhập

**Một luật có confidence 90% có chắc chắn là luật tốt để triển khai khuyến mãi không?**

Giả sử doanh nghiệp phát hiện luật:

\[
\{\text{Mua A}\} \rightarrow \{\text{Mua B}\}
\]

với:

\[
\text{confidence} = 90\%
\]

**Thảo luận nhanh**

- Có nên lập tức khuyến mãi B cho khách mua A?
- Nếu 95% toàn bộ khách hàng vốn đã mua B thì confidence 90% còn có ý nghĩa tích cực không?
- Cần xem xét thêm những yếu tố nào trước khi ra quyết định?

**Thông điệp**

> **Không. Confidence cao chỉ nói rằng B thường xuất hiện khi A xuất hiện; nó chưa chứng minh A làm xác suất mua B tăng lên.**

Một luật có confidence cao vẫn có thể kém giá trị nếu sản phẩm ở vế phải vốn đã xuất hiện rất phổ biến trong dữ liệu. 

**Lời giảng gợi ý**

> Có thể mời học viên biểu quyết nhanh “Có” hoặc “Không”. Sau đó đặt tình huống: nếu hầu như mọi khách hàng đều đã mua B, thì 90% không phải là bằng chứng cho một cơ hội bán chéo. Đây là lý do phải dùng lift và đánh giá luật trong bối cảnh kinh doanh.

***

### Slide 97 — Luật mạnh chưa chắc hữu ích

**Một luật “mạnh” thường thỏa hai điều kiện**

\[
\text{support}(X \rightarrow Y) \geq \text{minsup}
\]

\[
\text{confidence}(X \rightarrow Y) \geq \text{minconf}
\]

Tuy nhiên, luật vẫn có thể:

- Có confidence cao chỉ vì \(Y\) rất phổ biến.
- Không có liên kết dương thực sự giữa \(X\) và \(Y\).
- Phản ánh một mối quan hệ hiển nhiên hoặc đã biết.
- Có quy mô quá nhỏ để tạo tác động kinh doanh.
- Không ổn định khi áp dụng cho dữ liệu ở giai đoạn mới.
- Không thể chuyển thành hành động sinh lợi.

**Chuyển đổi câu hỏi**

| Chỉ nhìn kết quả thuật toán | Đánh giá phục vụ quản trị |
|---|---|
| Luật có vượt minsup? | Luật tác động đến bao nhiêu giao dịch hoặc khách hàng? |
| Luật có vượt minconf? | Liên kết có tốt hơn mức thông thường không? |
| Luật có lift cao? | Có thể triển khai hành động nào? |
| Có bao nhiêu luật? | Luật nào tạo lợi ích ròng cao nhất? |

Các ngưỡng support và confidence là tiêu chí phổ biến để sàng lọc luật, nhưng cần phân tích thêm tương quan và tính thú vị của luật trước khi sử dụng. 

***

### Slide 98 — Khung đánh giá bốn lớp

**Một luật chỉ nên được cân nhắc triển khai sau bốn lớp đánh giá**

| Lớp đánh giá | Câu hỏi cần trả lời | Căn cứ đánh giá |
|---|---|---|
| **1. Phổ biến** | Luật có xuất hiện ở quy mô đủ lớn không? | Support |
| **2. Tin cậy** | Khi có \(X\), \(Y\) có thường xuất hiện không? | Confidence |
| **3. Liên kết thực** | Có \(X\) có làm xác suất xuất hiện \(Y\) tăng không? | Lift |
| **4. Giá trị hành động** | Có nên và có thể hành động dựa trên luật không? | Lợi nhuận, chi phí, khả năng triển khai, rủi ro |

**Thông điệp chốt**

> Một luật tốt không chỉ **đúng trong dữ liệu**, mà còn cần **có giá trị trong bối cảnh quản trị**.

Support đo tỷ lệ giao dịch chứa đồng thời \(X\) và \(Y\); confidence đo xác suất có \(Y\) khi \(X\) xuất hiện; lift so sánh xác suất đồng xuất hiện quan sát được với mức kỳ vọng nếu \(X\) và \(Y\) độc lập. 

***

### Slide 99 — Ba thước đo cốt lõi

| Thước đo | Công thức với luật \(X \rightarrow Y\) | Câu hỏi trả lời | Hạn chế nếu dùng riêng |
|---|---|---|---|
| **Support** | \(\text{support}(X \rightarrow Y)=P(X \cap Y)\) | Luật phổ biến đến mức nào? | Có thể bỏ qua luật hiếm nhưng lợi nhuận cao |
| **Confidence** | \(\text{confidence}(X \rightarrow Y)=P(Y\mid X)\) | Nếu có \(X\), xác suất có \(Y\) là bao nhiêu? | Có thể cao vì \(Y\) vốn phổ biến |
| **Lift** | \(\text{lift}(X,Y)=\frac{P(Y\mid X)}{P(Y)}\) | Có \(X\) có làm khả năng có \(Y\) tăng không? | Không đo trực tiếp lợi nhuận hay khả năng triển khai |

**Diễn giải lift**

- \( \text{lift} > 1 \): liên kết dương.
- \( \text{lift} = 1 \): hai sự kiện gần như độc lập.
- \( \text{lift} < 1 \): liên kết âm.

**Ghi nhớ**

> Support trả lời về **quy mô**; confidence trả lời về **xác suất có điều kiện**; lift trả lời về **mức tăng so với bình thường**.

Lift lớn hơn 1 cho thấy \(X\) và \(Y\) cùng xuất hiện nhiều hơn mức kỳ vọng khi độc lập; giá trị nhỏ hơn 1 phản ánh liên kết âm. 

***

### Slide 100 — Ví dụ: Dữ liệu giao dịch

**Confidence cao nhưng luật không tốt**

Trong 10.000 hóa đơn:

| Nội dung | Số hóa đơn | Tỷ lệ |
|---|---:|---:|
| Có trò chơi điện tử | 6.000 | 60% |
| Có video | 7.500 | 75% |
| Có cả trò chơi điện tử và video | 4.000 | 40% |

Xét luật:

\[
\{\text{Trò chơi điện tử}\} \rightarrow \{\text{Video}\}
\]

**Câu hỏi**

> Liệu có nên khuyến mãi video cho khách mua trò chơi điện tử?

Luật này có support tương đối cao, nhưng cần đặt confidence của luật trong tương quan với tỷ lệ mua video chung của toàn bộ khách hàng. 

***

### Slide 101 — Tính các chỉ số

**Bước 1 — Support**

\[
\text{support} =
\frac{4.000}{10.000}
=
40\%
\]

**Bước 2 — Confidence**

\[
\text{confidence} =
\frac{4.000}{6.000}
=
66,7\%
\]

**Bước 3 — Lift**

\[
\text{lift} =
\frac{0,40}{0,60 \times 0,75}
=
0,89
\]

Có thể diễn giải trực tiếp:

\[
\text{lift} =
\frac{66,7\%}{75\%}
=
0,89
\]

> Trong nhóm mua trò chơi điện tử, tỷ lệ mua video là 66,7%; trong toàn bộ dữ liệu, tỷ lệ này là 75%.

Support, confidence và lift đều được tính từ tỷ lệ đồng xuất hiện, tỷ lệ có điều kiện và tỷ lệ xuất hiện cơ sở của các mặt hàng. 

***

### Slide 102 — Kết luận từ ví dụ

| Chỉ số | Giá trị | Nhận xét |
|---|---:|---|
| Support | 40% | Cao; luật có độ bao phủ lớn |
| Confidence | 66,7% | Có vẻ tốt nếu xem riêng lẻ |
| Lift | 0,89 | Nhỏ hơn 1; liên kết âm |

**Diễn giải quản trị**

- 75% khách hàng nói chung mua video.
- Chỉ 66,7% khách mua trò chơi điện tử mua video.
- Mua trò chơi điện tử không làm khả năng mua video tăng lên.
- Khuyến mãi chéo video cho nhóm này không có cơ sở từ luật trên.
- Doanh nghiệp nên tìm luật có lift lớn hơn 1 và có khả năng tạo lợi nhuận.

**Thông điệp chốt**

> Confidence cao không đồng nghĩa với cơ hội bán chéo tốt; luôn so sánh confidence với tỷ lệ xuất hiện chung của sản phẩm ở vế phải.

Khi lift nhỏ hơn 1, xác suất đồng xuất hiện quan sát được thấp hơn mức kỳ vọng nếu hai sản phẩm độc lập, nên luật không thể hiện quan hệ hỗ trợ tích cực cho khuyến mãi chéo. 

***

### Slide 103 — Ma trận theo Support và Lift

**Đánh giá nhanh luật kết hợp theo quy mô và liên kết thực**

|  | **Lift > 1**: liên kết dương | **Lift \(\leq\) 1**: độc lập/liên kết âm |
|---|---|---|
| **Support cao** | **Ưu tiên phân tích và thử nghiệm.** Có độ bao phủ lớn, phù hợp xem xét combo, gợi ý mua kèm hoặc thay đổi trưng bày. | **Không dùng làm căn cứ khuyến mãi chéo.** Luật có thể phổ biến do từng sản phẩm đều phổ biến, không phải vì chúng hỗ trợ nhau. |
| **Support thấp** | **Đánh giá theo giá trị.** Có thể phù hợp với sản phẩm biên lợi nhuận cao hoặc phân khúc khách hàng giá trị cao. | **Thường không ưu tiên.** Vừa ít phổ biến, vừa không có liên kết tích cực. |

**Nguyên tắc ưu tiên**

- Support cao + lift cao: ứng viên tốt để thử nghiệm.
- Support cao + lift thấp: phổ biến nhưng không đồng nghĩa có ích.
- Support thấp + lift cao: cân nhắc nếu giá trị kinh tế cao.
- Support thấp + lift thấp: thường loại bỏ.

Việc đánh giá luật không thể chỉ dựa trên mức độ phổ biến; một luật hiếm nhưng tạo giá trị cao có thể đáng quan tâm hơn luật phổ biến nhưng không có liên kết tích cực hoặc không thể triển khai. 