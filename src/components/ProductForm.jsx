
import '../index.css';

export default function ProductForm() {
  return (
    <form
      dir="rtl"
      className="w-[70rem] font-(--font-yekan-bakh) font-bold text-(--color-primary-text-light) dark:text-(--color-primary-text-dark)"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* نام */}
        <div className="md:col-span-2">
          <label className="label justify-between">
            <span className="label-text">نام</span>
            <span className="label-text-alt text-error">*</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="نام محصول را وارد نمایید"
            className="input input-bordered w-full bg-(--color-input-light) dark:bg-(--color-input-dark) dark:text-(--color-primary-text-dark)"
            required
          />
        </div>

        {/* قیمت */}
        <div>
          <label className="label">
            <span className="label-text">قیمت</span>
          </label>
          <input
            name="price"
            type="number"
            min="0"
            step="1000"
            placeholder="قیمت محصول را وارد نمایید"
            className="input input-bordered w-full bg-(--color-input-light) dark:bg-(--color-input-dark) dark:text-(--color-primary-text-dark)"
          />
        </div>

        {/* برند */}
        <div>
          <label className="label">
            <span className="label-text">برند</span>
          </label>
          <input
            name="brand"
            type="text"
            placeholder="برند محصول را وارد نمایید"
            className="input input-bordered w-full bg-(--color-input-light) dark:bg-(--color-input-dark) dark:text-(--color-primary-text-dark)"
          />
        </div>

        {/* توضیحات  */}
        <div className="md:col-span-2">
          <label className="label">
            <span className="label-text">توضیحات</span>
          </label>
          <textarea
            name="description"
            rows={4}
            placeholder="توضیحات محصول را وارد نمایید"
            className="textarea textarea-bordered w-full resize-none bg-(--color-input-light) dark:bg-(--color-input-dark) dark:text-(--color-primary-text-dark)"
          />
        </div>

        {/* موجودی */}
        <div>
          <label className="label">
            <span className="label-text">موجودی</span>
          </label>
          <select
            name="stock_status"
            className="select select-bordered w-full bg-(--color-input-light) dark:bg-(--color-input-dark) dark:text-(--color-primary-text-dark)"
          >
            <option value="in_stock">موجود</option>
            <option value="out_of_stock">ناموجود</option>
          </select>
        </div>

        {/* تعداد قابل خرید */}
        <div>
          <label className="label">
            <span className="label-text">تعداد قابل خرید</span>
          </label>
          <input
            name="max_purchase"
            type="number"
            min="1"
            placeholder="تعداد قابل خرید را وارد نمایید"
            className="input input-bordered w-full bg-(--color-input-light) dark:bg-(--color-input-dark) dark:text-(--color-primary-text-dark)"
          />
        </div>

        {/* دکمه ثبت  */}
        <div className="md:col-span-2 flex justify-start">
          <button
            type="submit"
            className="btn bg-(--color-primary-main) border-0 dark:bg-(--color-primary-dark)"
          >
            ساخت محصول جدید
          </button>
        </div>
      </div>
    </form>
  );
}
