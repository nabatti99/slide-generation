import { SlideGenerator } from "../slide-generator.ts";

import "./slides/Giới thiệu.ts";
import "./slides/5.1 Tổng quan về khai phá luật kết hợp/Mở đầu.ts";
import "./slides/5.1 Tổng quan về khai phá luật kết hợp/5.1.1. Khái niệm cơ bản.ts";
import "./slides/5.1 Tổng quan về khai phá luật kết hợp/5.1.2. Phân loại luật kết hợp.ts";
import "./slides/5.2 Biểu diễn luật kết hợp/Mở đầu.ts";
import "./slides/5.2 Biểu diễn luật kết hợp/5.2.1. Thước đo 1.ts";
import "./slides/5.2 Biểu diễn luật kết hợp/5.2.2. Thước đo 2.ts";
import "./slides/5.2 Biểu diễn luật kết hợp/5.2.3. Thước đo 3.ts";
import "./slides/5.2 Biểu diễn luật kết hợp/5.2.4. Đọc nhiều chỉ số cùng lúc.ts";
import "./slides/5.2 Biểu diễn luật kết hợp/5.2.5. Bài tập.ts";
import "./slides/5.2 Biểu diễn luật kết hợp/5.2.6. Lưu ý.ts";
import "./slides/5.2 Biểu diễn luật kết hợp/5.2.7. Ví dụ.ts";
import "./slides/5.3 Giải thuật Apriori/Mở đầu.ts";
import "./slides/5.3 Giải thuật Apriori/5.3.1. Apriori.ts";
import "./slides/5.3 Giải thuật Apriori/5.3.2. Ưu - Nhược điểm.ts";
import "./slides/5.3 Giải thuật Apriori/5.3.3. Demo.ts";
import "./slides/5.4 Giải thuật FP-Growth/Mở đầu.ts";
import "./slides/5.4 Giải thuật FP-Growth/5.4.1. Xây dựng và khai phá FP-tree.ts";
import "./slides/5.4 Giải thuật FP-Growth/5.4.2. Apriori và FP-Growth.ts";
import "./slides/5.4 Giải thuật FP-Growth/5.4.3. Lựa chọn thuật toán.ts";
import "./slides/5.4 Giải thuật FP-Growth/5.4.4. Demo.ts";
import "./slides/5.5 Đánh giá và xác nhận luật kết hợp/Mở đầu.ts";
import "./slides/5.5 Đánh giá và xác nhận luật kết hợp/5.5.1. Từ luật mạnh đến luật đáng hành động.ts";
import "./slides/5.5 Đánh giá và xác nhận luật kết hợp/5.5.2. Luật gây hiểu nhầm, hiển nhiên và dư thừa.ts";
import "./slides/5.5 Đánh giá và xác nhận luật kết hợp/5.5.3. Đánh giá tính hữu ích nghiệp vụ.ts";
import "./slides/5.5 Đánh giá và xác nhận luật kết hợp/5.5.4. Kiểm định trên tập dữ liệu kiểm tra.ts";
import "./slides/5.5 Đánh giá và xác nhận luật kết hợp/5.5.5. Demo đánh giá ngoài mẫu.ts";
import "./slides/5.6 Tóm tắt và bài tập/5.6.1. Tóm tắt.ts";
import "./slides/5.6 Tóm tắt và bài tập/5.6.2. Bài tập.ts";

// Always import the END slide at the end of the presentation
import "./slides/Kết thúc.ts";

try { SlideGenerator.save("Chương 5 - Luật kết hợp.pptx"); } catch (e) {}
try { SlideGenerator.save("Chương 5 - Luật kết hợp (MỚI NHẤT).pptx"); } catch (e) {}
SlideGenerator.save("Chương 5 - Luật kết hợp (vFinal).pptx");
