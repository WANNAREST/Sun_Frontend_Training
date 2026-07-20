### `git fetch` (Tải về nhưng "để đó nhìn")

**`git fetch`** sẽ kết nối với remote repository, tải toàn bộ các commit, file, và thông tin nhánh (branch) mới nhất về máy của bạn, nhưng nó **KHÔNG** làm thay đổi code trong thư mục bạn đang làm việc (working directory).

* **Đặc điểm:** Rất an toàn. Nó giống như việc bạn ra hòm thư lấy thư về để trên bàn, nhưng chưa mở ra đọc hay cất vào tủ hồ sơ.
* **Cách sử dụng:**
```bash
# Lấy toàn bộ thông tin mới từ remote (thường là 'origin')
git fetch origin

# Lấy thông tin mới từ một nhánh cụ thể
git fetch origin main

```


* **Sau khi fetch?** Có thể dùng lệnh `git log` hoặc `git diff` để so sánh xem trên remote có gì mới so với code hiện tại của bạn, trước khi quyết định gộp chúng vào.

### `git pull` (Tải về và "nhập vào luôn")

**`git pull`** thực chất là sự kết hợp của 2 lệnh: **`git fetch`** (tải dữ liệu về) và sau đó ngay lập tức chạy **`git merge`** (gộp dữ liệu đó vào nhánh bạn đang làm việc).

* **Đặc điểm:** Nhanh gọn và tiện lợi, nhưng có rủi ro. Nếu code trên remote và code ở máy của bạn cùng sửa trên một file, nó có thể gây ra **Conflict** (xung đột code), và bạn sẽ phải sửa lỗi xung đột này bằng tay.
* **Công thức:** `git pull` = `git fetch` + `git merge`
* **Cách sử dụng:**
```bash
# Tải và gộp code từ nhánh hiện tại trên remote vào nhánh hiện tại ở local
git pull

# Tải và gộp code từ nhánh 'main' trên remote 'origin'
git pull origin main

```



---

### Bảng so sánh nhanh

| Tiêu chí | `git fetch` | `git pull` |
| --- | --- | --- |
| **Bản chất** | Chỉ tải dữ liệu về máy | Tải dữ liệu về + Gộp vào code hiện tại |
| **Ảnh hưởng code** | Không thay đổi code bạn đang viết | Có thể làm thay đổi code bạn đang viết |
| **Độ an toàn** | Rất an toàn | Có thể gây ra xung đột (conflict) |
| **Lệnh tương đương** | - | `git fetch` + `git merge` |

