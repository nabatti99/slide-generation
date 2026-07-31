import { SlideGenerator } from "../slide-generator.ts";
import path from "path";

async function main() {
  console.log("🚀 Bắt đầu tạo bộ Slide Hướng dẫn Dự án Cuối kỳ...");

  // Import all slide modules sequentially
  await import("./slides/1. Tổng quan & Quy định.ts");
  await import("./slides/2. Chi tiết 05 Đề tài.ts");
  await import("./slides/3. Cấu trúc nộp bài & Đánh giá.ts");

  const outputPath = path.join(process.cwd(), "output", "Bài tập cuối kỳ - Hướng dẫn dự án và 05 đề tài.pptx");
  
  await SlideGenerator.pptx.writeFile({ fileName: outputPath });
  console.log(`✅ Slide Dự án Cuối kỳ đã được tạo thành công tại: ${outputPath}`);

  const copyPath = path.join(process.cwd(), "output", "Cuối Kỳ - Hướng dẫn dự án cuối kỳ.pptx");
  await SlideGenerator.pptx.writeFile({ fileName: copyPath });
  console.log(`✅ Lưu tệp đồng bộ tại: ${copyPath}`);
}

main().catch((err) => {
  console.error("❌ Lỗi trong quá trình tạo slide Dự án Cuối kỳ:", err);
  process.exit(1);
});
