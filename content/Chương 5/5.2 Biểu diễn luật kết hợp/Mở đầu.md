Dưới đây là phần mở đầu của **Mục 5.2**, gồm **3 slide đầu tiên**: slide section, slide cơ sở dữ liệu giao dịch và slide cấu trúc luật. Phần các thước đo support, confidence, lift nên triển khai tiếp sau ba slide này.

## Slide 19 — SECTION

**Tiêu đề**

> **5.2. BIỂU DIỄN LUẬT KẾT HỢP**

**Câu hỏi dẫn nhập**

> **Làm thế nào để chuyển phát hiện “bánh mì thường đi cùng sữa” thành một luật có thể tính toán, so sánh và ra quyết định?**

**Mục tiêu học tập**

Sau phần này, học viên có thể:

- Biểu diễn dữ liệu dưới dạng cơ sở dữ liệu giao dịch.
- Xác định tập mục, giao dịch và số lượng giao dịch trong dữ liệu.
- Mô tả một luật theo cấu trúc \(X \rightarrow Y\).
- Phân biệt vế trái, vế phải và tập mục đầy đủ của luật.
- Hiểu vì sao cần các thước đo định lượng để đánh giá một luật.

**Mạch nội dung**

```text
Dữ liệu giao dịch
        ↓
Tập mục X và Y
        ↓
Luật X → Y
        ↓
Support – Confidence – Lift
        ↓
Diễn giải và ra quyết định
```

**Thông điệp chốt**

> Một phát hiện trực giác chỉ trở thành kết quả khai phá dữ liệu khi được biểu diễn bằng dữ liệu, công thức và các chỉ số đánh giá rõ ràng.

Trong khai phá luật kết hợp, dữ liệu được tổ chức thành các transaction chứa các item; từ các tập mục xuất hiện trong transaction, ta sinh và đánh giá các luật dạng \(X \rightarrow Y\). 

***

## Slide 20 — CONTENT

**Tiêu đề**

> **CƠ SỞ DỮ LIỆU GIAO DỊCH**

**Biểu diễn hình thức**

Gọi:

\[
I=\{i_1,i_2,\ldots,i_m\}
\]

là **tập tất cả các mục** (*items*) cần phân tích.

Gọi:

\[
D=\{T_1,T_2,\ldots,T_N\}
\]

là **cơ sở dữ liệu giao dịch** (*transaction database*).

Mỗi giao dịch \(T_j\) là một tập con của tập mục \(I\):

\[
T_j\subseteq I
\]

Trong đó:

- \(I\): Tập các sản phẩm, sự kiện hoặc đặc trưng có thể xuất hiện.
- \(T_j\): Giao dịch thứ \(j\), ví dụ một hóa đơn mua hàng.
- \(N\): Tổng số giao dịch trong cơ sở dữ liệu.
- Mỗi giao dịch thường có một mã định danh riêng, gọi là `transaction_id` hoặc `TID`.

**Dữ liệu minh họa dùng xuyên suốt**

| Mã giao dịch | Các mục xuất hiện trong giao dịch |
|---|---|
| T1 | Bánh mì, Sữa, Trứng |
| T2 | Bánh mì, Sữa |
| T3 | Sữa, Cà phê |
| T4 | Bánh mì, Trứng |
| T5 | Bánh mì, Sữa, Trứng |

**Suy ra từ bảng dữ liệu**

\[
I=\{Bánh\ mì,\ Sữa,\ Trứng,\ Cà\ phê\}
\]

\[
D=\{T_1,T_2,T_3,T_4,T_5\}
\]

\[
N=5
\]

Ví dụ:

\[
T_1=\{Bánh\ mì,\ Sữa,\ Trứng\}
\]

\[
T_3=\{Sữa,\ Cà\ phê\}
\]

**Ký hiệu “chứa”**

Một giao dịch \(T\) được nói là **chứa** tập mục \(A\) nếu:

\[
A\subseteq T
\]

Ví dụ:

\[
\{Bánh\ mì,\ Sữa\}\subseteq T_1
\]

và:

\[
\{Bánh\ mì,\ Sữa\}\subseteq T_2
\]

Nhưng:

\[
\{Bánh\ mì,\ Sữa,\ Trứng\}\nsubseteq T_2
\]

vì giao dịch T2 không có trứng.

**Liên hệ với các lĩnh vực khác**

| Bối cảnh | Transaction có thể là | Item có thể là |
|---|---|---|
| Bán lẻ | Một hóa đơn | Sản phẩm mua |
| Thương mại điện tử | Một đơn hàng hoặc phiên mua sắm | Sản phẩm xem, thêm giỏ, mua |
| Ngân hàng | Một khách hàng trong một kỳ hoặc một phiên giao dịch | Dùng thẻ, dùng app, gửi tiết kiệm |
| Giáo dục | Hồ sơ học tập của một học viên | Hoàn thành Excel, thống kê, Python |
| Giao dịch thẻ | Một giao dịch đã được rời rạc hóa | Giao dịch đêm, giá trị cao, mua trực tuyến |

**Gợi ý giảng viên nhấn mạnh**

> “Giao dịch” không nhất thiết luôn là hóa đơn. Đơn vị transaction phải được xác định dựa trên câu hỏi nghiệp vụ.

Trong mô hình giao dịch, mỗi transaction là một tập mục không rỗng và được gắn một định danh; một transaction chứa itemset \(A\) khi mọi mục thuộc \(A\) đều xuất hiện trong transaction đó. 

***

## Slide 21 — CONTENT

**Tiêu đề**

> **TỪ BẢNG GIAO DỊCH ĐẾN ITEMSET**

**Câu hỏi đặt ra**

> Từ năm hóa đơn trên, những tập mục nào có thể được xem xét để tạo luật?

**Một số itemset xuất hiện trong dữ liệu**

| Itemset | Kích thước | Giao dịch chứa itemset |
|---|---:|---|
| \(\{Bánh\ mì\}\) | 1-itemset | T1, T2, T4, T5 |
| \(\{Sữa\}\) | 1-itemset | T1, T2, T3, T5 |
| \(\{Trứng\}\) | 1-itemset | T1, T4, T5 |
| \(\{Bánh\ mì,\ Sữa\}\) | 2-itemset | T1, T2, T5 |
| \(\{Bánh\ mì,\ Trứng\}\) | 2-itemset | T1, T4, T5 |
| \(\{Sữa,\ Trứng\}\) | 2-itemset | T1, T5 |
| \(\{Bánh\ mì,\ Sữa,\ Trứng\}\) | 3-itemset | T1, T5 |

**Minh họa trực quan**

```text
T1: {Bánh mì, Sữa, Trứng}
      ├── {Bánh mì}
      ├── {Sữa}
      ├── {Trứng}
      ├── {Bánh mì, Sữa}
      ├── {Bánh mì, Trứng}
      ├── {Sữa, Trứng}
      └── {Bánh mì, Sữa, Trứng}
```

**Lưu ý quan trọng**

- Từ một giao dịch, ta có thể tạo ra nhiều itemset con.
- Không phải tất cả itemset đều đủ phổ biến hoặc đủ hữu ích để hình thành luật.
- Phần tiếp theo sẽ dùng support để xác định itemset nào xuất hiện đủ nhiều.
- Từ cùng một itemset có thể tạo ra nhiều luật có hướng khác nhau.

Ví dụ, từ itemset:

\[
\{Bánh\ mì,\ Sữa,\ Trứng\}
\]

có thể tạo các luật:

\[
\{Bánh\ mì,\ Sữa\}\rightarrow\{Trứng\}
\]

\[
\{Bánh\ mì,\ Trứng\}\rightarrow\{Sữa\}
\]

\[
\{Sữa,\ Trứng\}\rightarrow\{Bánh\ mì\}
\]

**Thông điệp chốt**

> Itemset chưa phải là luật. Itemset là nguyên liệu để tạo luật; luật xuất hiện khi ta phân chia itemset thành vế trái và vế phải.

Một itemset là tập các mục, còn \(k\)-itemset là itemset gồm \(k\) mục; từ một frequent itemset có thể sinh nhiều luật bằng cách chọn tập con không rỗng làm vế trái và phần còn lại làm vế phải. 

***

## Slide 22 — CONTENT

**Tiêu đề**

> **CẤU TRÚC MỘT LUẬT KẾT HỢP**

**Luật minh họa**

\[
\{Bánh\ mì,\ Sữa\}\rightarrow\{Trứng\}
\]

**Cấu trúc tổng quát**

\[
X\rightarrow Y
\]

Trong đó:

| Thành phần | Ký hiệu | Ý nghĩa | Trong ví dụ |
|---|---|---|---|
| Vế trái | \(X\) | Điều kiện đã quan sát, còn gọi là *antecedent* | \(\{Bánh\ mì,\ Sữa\}\) |
| Vế phải | \(Y\) | Mục hoặc tập mục đi kèm, còn gọi là *consequent* | \(\{Trứng\}\) |
| Điều kiện | \(X\cap Y=\varnothing\) | Hai vế không được có mục chung | Bánh mì, sữa và trứng không lặp lại |
| Tập mục đầy đủ | \(X\cup Y\) | Toàn bộ mục xuất hiện trong luật | \(\{Bánh\ mì,\ Sữa,\ Trứng\}\) |

**Cách đọc đúng**

> Trong các giao dịch có bánh mì và sữa, bao nhiêu giao dịch cũng có trứng?

Hoặc:

> Khi quan sát thấy bánh mì và sữa cùng xuất hiện trong một hóa đơn, trứng có xu hướng xuất hiện kèm theo ở mức nào?

**Cách đọc không đúng**

- “Bánh mì và sữa làm khách hàng mua trứng.”
- “Nếu khách mua bánh mì và sữa thì chắc chắn mua trứng.”
- “Bất kỳ hóa đơn nào có trứng đều phải có bánh mì và sữa.”

**Ý nghĩa của hướng luật**

Hai luật sau không giống nhau:

\[
\{Bánh\ mì,\ Sữa\}\rightarrow\{Trứng\}
\]

\[
\{Trứng\}\rightarrow\{Bánh\ mì,\ Sữa\}
\]

Dù cả hai cùng dựa trên tập mục:

\[
\{Bánh\ mì,\ Sữa,\ Trứng\}
\]

nhưng:

- Vế trái khác nhau.
- Câu hỏi nghiệp vụ khác nhau.
- Confidence thường khác nhau.
- Hành động kinh doanh có thể khác nhau.

**Ví dụ về câu hỏi nghiệp vụ tương ứng**

| Luật | Câu hỏi nghiệp vụ |
|---|---|
| \(\{Bánh\ mì,\ Sữa\}\rightarrow\{Trứng\}\) | Khi khách đã có bánh mì và sữa, có nên gợi ý thêm trứng? |
| \(\{Trứng\}\rightarrow\{Bánh\ mì,\ Sữa\}\) | Khi khách mua trứng, có nên giới thiệu combo bánh mì và sữa? |

**Gợi ý giảng viên nhấn mạnh**

> Luật kết hợp mô tả mối đồng xuất hiện có hướng để phục vụ dự đoán hoặc gợi ý. Nó không xác lập quan hệ nhân quả.

Luật kết hợp là một mệnh đề dạng \(A\rightarrow B\), trong đó \(A\) và \(B\) là các itemset không rỗng, không giao nhau; confidence của luật tương ứng với xác suất có điều kiện \(P(B\mid A)\). 