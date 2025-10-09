import React, { useState } from 'react';
import TextField from './ui/TextField';
import ButtonPrimary from './ui/ButtonPrimary';

export default function ProductForm() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    brand: '',
    description: '',
    stock_status: 'in_stock',
    max_purchase: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[70rem] mx-auto font-yekan-bakh font-bold text-primary-text-light dark:text-primary-text-dark bg-background-base-light dark:bg-background-primary-dark p-8 rounded-xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="input input-bordered w-full px-2 py-2.5 text-primary-text-light bg-on-primary-light border border-input-light rounded-lg placeholder-secondary-light outline-none focus:outline-primary-main dark:bg-base-text-field-dark dark:text-on-primary-light dark:placeholder-secondary-dark dark:border-input-dark"
            required
          />
        </div>

        {/* قیمت */}
        <TextField
          inputLabel="قیمت"
          inputId="price-field"
          inputValue={formData.price}
          onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange('price', e.target.value)
          }
        />

        {/* برند */}
        <TextField
          inputLabel="برند"
          inputId="brand-field"
          inputValue={formData.brand}
          onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange('brand', e.target.value)
          }
        />

        {/* توضیحات */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="font-normal text-base text-primary-text-light dark:text-on-primary-light">
            توضیحات
          </label>
          <textarea
            name="description"
            rows={4}
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            placeholder="توضیحات محصول را وارد نمایید"
            className="textarea textarea-bordered w-full resize-none font-normal text-base text-primary-text-light bg-on-primary-light border border-input-light rounded-lg placeholder-secondary-light outline-none disabled:bg-input-light focus:border-input-active dark:disabled:bg-input-dark dark:text-on-primary-light dark:placeholder-secondary-dark dark:bg-base-text-field-dark dark:border-input-dark focus:outline-primary-main"
          />
        </div>

        {/* تعداد قابل خرید */}
        <TextField
          inputLabel="تعداد قابل خرید"
          inputId="max-purchase-field"
          inputValue={formData.max_purchase}
          onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange('max_purchase', e.target.value)
          }
        />

        {/* موجودی */}
        <div className="font-yekan-bakh flex flex-col items-start gap-2 max-w-[531px]">
          <label className="font-normal text-base leading-6 text-primary-text-light dark:text-on-primary-light">
            موجودی
          </label>
          <select
            name="stock_status"
            value={formData.stock_status}
            onChange={(e) => handleChange('stock_status', e.target.value)}
            className="font-normal px-2 py-2.5 w-full max-h-11
               text-primary-text-light bg-on-primary-light
               border border-input-light rounded-lg
               placeholder-secondary-light outline-none
               focus:border-input-active focus:outline-primary-main
               dark:text-on-primary-light dark:bg-base-text-field-dark
               dark:border-input-dark"
          >
            <option value="in_stock">موجود</option>
            <option value="out_of_stock">ناموجود</option>
          </select>
        </div>
        {/* دکمه ثبت */}
        <div className="md:col-span-2 flex justify-start mt-4">
          <ButtonPrimary
            text="ساخت محصول جدید"
            handleClick={() => console.log('Product created:', formData)}
          />
        </div>
      </div>
    </form>
  );
}
