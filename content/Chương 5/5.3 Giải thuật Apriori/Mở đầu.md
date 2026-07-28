## Slide 52 — SECTION

**Tiêu đề**

> **5.3. GIẢI THUẬT APRIORI**

**Phụ đề**

> *Tìm tập mục thường xuyên hiệu quả bằng cách loại bỏ sớm các tổ hợp không có triển vọng*

**Câu hỏi dẫn nhập**

> Nếu siêu thị có 10.000 sản phẩm, có nên thử tất cả các tổ hợp sản phẩm để tìm những nhóm hàng thường được mua cùng nhau?

**Nội dung trình bày**

Hãy hình dung một siêu thị có hàng nghìn mặt hàng: thực phẩm, đồ uống, hóa mỹ phẩm, đồ gia dụng, thiết bị điện tử, v.v. Khi phân tích giỏ hàng, doanh nghiệp có thể muốn tìm các nhóm sản phẩm như:

\[
\{Cà\ phê,\ Bánh\ quy\}
\]

hoặc:

\[
\{Bánh\ mì,\ Sữa,\ Trứng\}
\]

Tuy nhiên, nếu thử tất cả các nhóm sản phẩm có thể có, số lượng tổ hợp sẽ tăng cực nhanh khi số sản phẩm tăng.

```text
Nhiều sản phẩm
        ↓
Rất nhiều tổ hợp có thể có
        ↓
Không thể kiểm tra toàn bộ
        ↓
Cần loại bỏ sớm các tổ hợp không triển vọng
        ↓
Giải thuật Apriori
```

**Thông điệp**

> Apriori không cố gắng thử mọi tổ hợp. Thuật toán chỉ tiếp tục mở rộng các tập mục đã cho thấy khả năng xuất hiện thường xuyên trong dữ liệu.

**Gợi ý giảng dạy**

- Hỏi học viên trả lời nhanh: “Có nên thử toàn bộ không?”
- Sau câu trả lời “Không”, hỏi tiếp: “Ta dựa vào đâu để bỏ qua một tổ hợp mà không sợ bỏ sót kết quả quan trọng?”
- Dẫn vào ý tưởng: một tập mục hiếm thì các tập lớn hơn chứa nó cũng không thể phổ biến.

Apriori khai phá tập mục thường xuyên theo từng mức và dùng tri thức về tính chất của support để thu hẹp không gian tìm kiếm. 

***

## Slide 53 — CONTENT

**Tiêu đề**

> **BÀI TOÁN BÙNG NỔ TỔ HỢP**

Giả sử có \(m\) sản phẩm khác nhau trong danh mục.

Với mỗi sản phẩm, khi tạo một tập mục, ta có hai lựa chọn:

| Khả năng | Ý nghĩa |
|---|---|
| Có chọn sản phẩm | Sản phẩm thuộc tập mục đang xét |
| Không chọn sản phẩm | Sản phẩm không thuộc tập mục đang xét |

Vì mỗi trong \(m\) sản phẩm có hai trạng thái, tổng số tập con có thể tạo ra là:

\[
2^m
\]

Trong đó, tập rỗng \(\varnothing\) không có ý nghĩa trong phân tích giỏ hàng. Do đó, số tập mục khác rỗng cần xem xét là:

\[
2^m-1
\]

**Ví dụ với ba sản phẩm**

Giả sử có ba sản phẩm:

\[
\{Bánh\ mì,\ Sữa,\ Trứng\}
\]

Các tập mục khác rỗng gồm:

\[
\{Bánh\ mì\},\ \{Sữa\},\ \{Trứng\}
\]

\[
\{Bánh\ mì,\ Sữa\},\ \{Bánh\ mì,\ Trứng\},\ \{Sữa,\ Trứng\}
\]

\[
\{Bánh\ mì,\ Sữa,\ Trứng\}
\]

Như vậy:

\[
2^3-1=7
\]

**Cách hiểu đơn giản**

> Mỗi khi thêm một sản phẩm vào danh mục, số tập mục có thể xét gần như tăng gấp đôi.

Một tập mục là một nhóm sản phẩm cùng được xét trong dữ liệu giao dịch; tập mục thường xuyên là tập đạt ngưỡng support tối thiểu do người phân tích quy định. 

***

## Slide 54 — CONTENT

**Tiêu đề**

> **SỐ TỔ HỢP TĂNG NHANH NHƯ THẾ NÀO?**

| Số sản phẩm \(m\) | Số tập mục khác rỗng \(2^m-1\) | Ý nghĩa thực tế |
|---:|---:|---|
| 3 | 7 | Có thể liệt kê đầy đủ bằng tay |
| 5 | 31 | Phù hợp để minh họa trong lớp |
| 10 | 1.023 | Đã khó kiểm tra thủ công |
| 20 | 1.048.575 | Hơn một triệu tập mục |
| 30 | 1.073.741.823 | Hơn một tỷ tập mục |
| 100 | \(2^{100}-1\) | Không thể duyệt toàn bộ trong thực tế |
| 10.000 | \(2^{10.000}-1\) | Không gian tìm kiếm cực lớn |

**Điểm cần lưu ý**

Số sản phẩm tăng theo tuyến tính, nhưng số tổ hợp tăng theo cấp số nhân:

\[
m \uparrow
\quad \Rightarrow \quad
2^m-1 \uparrow\uparrow\uparrow
\]

Ví dụ, tăng từ 20 lên 30 sản phẩm, tức chỉ thêm 10 sản phẩm, làm số tập mục tăng từ khoảng 1 triệu lên hơn 1 tỷ.

**Gợi ý giảng dạy**

- Yêu cầu học viên đọc to chênh lệch giữa 20 và 30 sản phẩm.
- Nhấn mạnh: siêu thị thực tế không chỉ có 20 hay 30 sản phẩm mà có thể có hàng chục nghìn SKU.
- Giải thích thêm: khó khăn không chỉ là tạo ra tập mục; thuật toán còn phải kiểm tra tập mục đó xuất hiện trong bao nhiêu hóa đơn để tính support.
- Khi số giao dịch lớn, chi phí đếm support cho hàng triệu hoặc hàng tỷ tập mục là không khả thi.

Apriori được thiết kế để hạn chế số tập ứng viên cần kiểm tra, bởi việc sinh và đếm support cho toàn bộ tổ hợp sẽ gây chi phí tính toán rất lớn. 

***

## Slide 55 — CONTENT

**Tiêu đề**

> **VÌ SAO KHÔNG THỂ THỬ TẤT CẢ TỔ HỢP?**

**Cách làm ngây thơ**

```text
Bước 1. Sinh mọi tập mục có thể có
        ↓
Bước 2. Quét tất cả hóa đơn
        ↓
Bước 3. Đếm support của từng tập mục
        ↓
Bước 4. Giữ các tập đạt minsup
        ↓
Bước 5. Sinh luật kết hợp
```

**Các vấn đề phát sinh**

| Hoạt động | Vấn đề khi dữ liệu lớn |
|---|---|
| Sinh tập mục | Số tổ hợp tăng theo cấp số nhân |
| Lưu tập ứng viên | Có thể vượt giới hạn bộ nhớ |
| Đếm support | Phải so sánh nhiều tập mục với rất nhiều hóa đơn |
| Quét dữ liệu | Có thể phải đọc cơ sở dữ liệu nhiều lần |
| Sinh luật | Một tập mục dài có thể tạo ra nhiều luật khác nhau |
| Đọc kết quả | Quá nhiều luật làm khó chọn ra luật hữu ích |

**Ví dụ trực giác**

Giả sử:

\[
minsup\ count=500
\]

Tập mục:

\[
\{Sữa,\ Trứng\}
\]

chỉ xuất hiện trong 100 hóa đơn. Vì \(100<500\), tập này không thường xuyên.

Khi đó, các tập lớn hơn như:

\[
\{Bánh\ mì,\ Sữa,\ Trứng\}
\]

hoặc:

\[
\{Cà\ phê,\ Sữa,\ Trứng\}
\]

không thể xuất hiện quá 100 lần. Chúng chắc chắn cũng không đạt `minsup = 500`.

**Thông điệp**

> Nếu biết một tập mục nhỏ đã không đạt support tối thiểu, ta không cần tốn chi phí kiểm tra bất kỳ tập lớn hơn nào chứa nó.

Tính chất support của tập cha không thể lớn hơn support của tập con là nền tảng để Apriori thực hiện cắt tỉa không gian tìm kiếm. 

***

## Slide 56 — CONTENT

**Tiêu đề**

> **MỤC TIÊU CỦA APRIORI**

**Apriori trả lời câu hỏi**

> Làm thế nào để tìm các tập sản phẩm thường xuất hiện cùng nhau mà không phải đếm support cho mọi tổ hợp có thể có?

**Nguyên tắc hoạt động**

```text
Chỉ xét tập mục có khả năng thường xuyên
        ↓
Nếu một tập mục không thường xuyên
        ↓
Không mở rộng tập mục đó
        ↓
Loại toàn bộ các tập lớn hơn chứa nó
```

**So sánh hai cách tiếp cận**

| Cách tiếp cận | Cách tìm kiếm | Hệ quả |
|---|---|---|
| Duyệt toàn bộ | Sinh tất cả tổ hợp rồi mới kiểm tra support | Rất nhiều tổ hợp không cần thiết |
| Apriori | Kiểm tra theo từng mức và loại sớm tập không thường xuyên | Giảm đáng kể số ứng viên cần đếm |

**Ví dụ**

Nếu:

\[
\{Sữa,\ Trứng\}
\]

không thường xuyên, Apriori không xét tiếp:

\[
\{Bánh\ mì,\ Sữa,\ Trứng\}
\]

\[
\{Cà\ phê,\ Sữa,\ Trứng\}
\]

\[
\{Bánh\ mì,\ Cà\ phê,\ Sữa,\ Trứng\}
\]

**Kết nối phần tiếp theo**

> Vậy, tại sao việc một tập mục nhỏ không thường xuyên lại cho phép loại bỏ mọi tập mục lớn hơn chứa nó? Câu trả lời nằm ở **tính chất Apriori**.

Apriori sử dụng tính chất rằng mọi tập con khác rỗng của một tập mục thường xuyên đều phải thường xuyên; đây là cơ sở để sinh ứng viên và cắt tỉa ứng viên theo từng mức. 