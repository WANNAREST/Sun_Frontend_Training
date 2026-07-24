# CSS Selector

CSS Selector được sử dụng để **tìm** hoặc **chọn** các phần tử HTML mà chúng ta muốn áp dụng kiểu hiển thị.

Có thể chia CSS Selector thành ba nhóm chính:

* **DOM Selector**: chọn phần tử dựa trên tên thẻ, `id`, `class` hoặc thuộc tính.
* **Combinator Selector**: chọn phần tử dựa trên mối quan hệ giữa các phần tử.
* **Pseudo Selector**: chọn phần tử dựa trên một trạng thái hoặc vị trí nhất định.


## 1. Element Selector

Element Selector chọn các phần tử HTML dựa trên **tên thẻ**.

Ví dụ dưới đây chọn tất cả các thẻ `<p>` trên trang, căn giữa nội dung và đặt màu chữ thành đỏ:

```css
p {
    text-align: center;
    color: red;
}
```

Trong đó:

* `p` là tên thẻ cần chọn.
* `text-align: center` dùng để căn giữa nội dung.
* `color: red` dùng để đặt màu chữ thành đỏ.



## 2. ID Selector

ID Selector sử dụng thuộc tính `id` của phần tử HTML để chọn một phần tử cụ thể.

Để chọn một phần tử theo `id`, ta viết ký tự `#`, sau đó là tên của `id`.

Ví dụ HTML:

```html
<p id="para1">Đây là một đoạn văn.</p>
```

CSS:

```css
#para1 {
    text-align: center;
    color: red;
}
```

Quy tắc CSS trên chỉ được áp dụng cho phần tử có:

```html
id="para1"
```

Thông thường, một giá trị `id` chỉ nên được sử dụng cho **một phần tử duy nhất** trên một trang HTML.


## 3. Class Selector

Class Selector chọn các phần tử HTML có cùng một thuộc tính `class`.

Để chọn phần tử theo `class`, ta viết dấu chấm `.`, sau đó là tên class.

Ví dụ HTML:

```html
<h1 class="center">Tiêu đề</h1>
<p class="center">Đoạn văn bản.</p>
```

CSS:

```css
.center {
    text-align: center;
    color: red;
}
```

Quy tắc trên được áp dụng cho tất cả các phần tử có:

```html
class="center"
```

Khác với `id`, một `class` có thể được sử dụng cho nhiều phần tử.



# CSS Combinators

Một CSS Selector có thể chứa nhiều selector đơn giản.

Giữa các selector, chúng ta có thể sử dụng **combinator** để biểu diễn mối quan hệ giữa các phần tử HTML.

CSS có bốn combinator phổ biến:

1. Descendant Selector — dấu cách
2. Child Selector — `>`
3. Adjacent Sibling Selector — `+`
4. General Sibling Selector — `~`


## 4. Descendant Selector

Descendant Selector chọn tất cả các phần tử nằm bên trong một phần tử khác, không quan trọng chúng nằm trực tiếp hay nằm sâu ở nhiều cấp.

Cú pháp:

```css
parent descendant {
    property: value;
}
```

Ví dụ:

```css
div p {
    background-color: yellow;
}
```

Quy tắc trên chọn tất cả các thẻ `<p>` nằm bên trong thẻ `<div>`.

Ví dụ HTML:

```html
<div>
    <p>Đoạn văn thứ nhất.</p>

    <section>
        <p>Đoạn văn thứ hai.</p>
    </section>
</div>
```

Cả hai thẻ `<p>` đều được chọn vì chúng đều là phần tử con cháu của `<div>`.

## 5. Child Selector

Child Selector chọn các phần tử là **con trực tiếp** của một phần tử khác.

Cú pháp:

```css
parent > child {
    property: value;
}
```

Ví dụ:

```css
div > p {
    background-color: yellow;
}
```

Ví dụ HTML:

```html
<div>
    <p>Đoạn văn trực tiếp bên trong div.</p>

    <section>
        <p>Đoạn văn nằm bên trong section.</p>
    </section>
</div>
```

Trong ví dụ này, chỉ thẻ `<p>` đầu tiên được chọn vì nó là con trực tiếp của `<div>`.

Thẻ `<p>` bên trong `<section>` không được chọn.


## 6. Adjacent Sibling Selector

Adjacent Sibling Selector chọn phần tử nằm **ngay sau** một phần tử khác.

Hai phần tử phải:

* Có cùng phần tử cha.
* Đứng liền nhau.
* Phần tử được chọn phải nằm ngay sau phần tử phía trước.

Cú pháp:

```css
element1 + element2 {
    property: value;
}
```

Ví dụ:

```css
div + p {
    background-color: yellow;
}
```

Ví dụ HTML:

```html
<div>Nội dung trong div.</div>

<p>Đoạn văn ngay sau div.</p>

<p>Đoạn văn thứ hai.</p>
```

Chỉ thẻ `<p>` đầu tiên được chọn vì nó nằm ngay sau thẻ `<div>`.


## 7. General Sibling Selector

General Sibling Selector chọn tất cả các phần tử cùng cấp nằm sau một phần tử được chỉ định.

Các phần tử phải có cùng phần tử cha, nhưng không cần phải đứng liền nhau.

Cú pháp:

```css
element1 ~ element2 {
    property: value;
}
```

Ví dụ:

```css
div ~ p {
    background-color: yellow;
}
```

Ví dụ HTML:

```html
<div>Nội dung trong div.</div>

<h2>Tiêu đề ở giữa.</h2>

<p>Đoạn văn thứ nhất.</p>

<span>Nội dung khác.</span>

<p>Đoạn văn thứ hai.</p>
```

Cả hai thẻ `<p>` đều được chọn vì chúng:

* Có cùng phần tử cha với `<div>`.
* Nằm sau `<div>`.

 

# So sánh các CSS Combinator

| Selector  | Ý nghĩa                                | Ví dụ                        |
| --------- | -------------------------------------- | ---------------------------- |
| `div p`   | Chọn tất cả `p` nằm bên trong `div`    | Con trực tiếp hoặc con cháu  |
| `div > p` | Chọn `p` là con trực tiếp của `div`    | Chỉ một cấp                  |
| `div + p` | Chọn `p` nằm ngay sau `div`            | Chỉ phần tử liền kề đầu tiên |
| `div ~ p` | Chọn tất cả `p` cùng cấp nằm sau `div` | Không cần đứng liền nhau     |



# Ví dụ tổng hợp

HTML:

```html
<div class="container">
    <p>Đoạn văn 1</p>

    <section>
        <p>Đoạn văn 2</p>
    </section>
</div>

<p>Đoạn văn 3</p>
<p>Đoạn văn 4</p>
```

CSS:

```css
/* Chọn mọi thẻ p bên trong div */
div p {
    color: blue;
}

/* Chỉ chọn thẻ p là con trực tiếp của div */
div > p {
    font-weight: bold;
}

/* Chọn thẻ p đầu tiên nằm ngay sau div */
div + p {
    background-color: yellow;
}

/* Chọn tất cả thẻ p cùng cấp nằm sau div */
div ~ p {
    text-align: center;
}
```

Kết quả:

* `Đoạn văn 1`: màu xanh và chữ đậm.
* `Đoạn văn 2`: màu xanh nhưng không đậm.
* `Đoạn văn 3`: nền vàng và căn giữa.
* `Đoạn văn 4`: căn giữa nhưng không có nền vàng.
