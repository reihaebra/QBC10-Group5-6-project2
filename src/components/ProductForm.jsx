import React from 'react';
import { useState } from 'react';
import TextField from './ui/TextField';
import ButtonPrimary from './ui/ButtonPrimary';

export default function ProductForm() {
  // دریافت دیتا
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
      className="w-[70rem] font-yekan-bakh font-bold text-primary-text-light dark:text-primary-text-dark"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* نام */}
        <div className="md:col-span-2">
          <TextField
            inputLabel="نام"
            inputValue={formData.name}
            onChangeInput={() =>
              handleChange(
                'name',
                (document.getElementById('text-field') as HTMLInputElement)
                  ?.value || ''
              )
            }
          />
        </div>

        {/* قیمت */}
        <TextField
          inputLabel="قیمت"
          inputValue={formData.name}
          onChangeInput={() =>
            handleChange(
              'price',
              (document.getElementById('text-field') as HTMLInputElement)
                ?.value || ''
            )
          }
        />

        {/* برند */}
        <TextField
          inputLabel="برند"
          inputValue={formData.name}
          onChangeInput={() =>
            handleChange(
              'brand',
              (document.getElementById('text-field') as HTMLInputElement)
                ?.value || ''
            )
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
            className="textarea textarea-bordered w-full resize-none bg-input-light dark:bg-input-dark dark:text-primary-text-dark"
          />
        </div>

        {/* موجودی */}
        <div>
          <label className="label">
            <span className="label-text">موجودی</span>
          </label>
          <select
            name="stock_status"
            value={formData.stock_status}
            onChange={(e) => handleChange('stock_status', e.target.value)}
            className="select select-bordered w-full bg-input-light dark:bg-input-dark dark:text-primary-text-dark"
          >
            <option value="in_stock">موجود</option>
            <option value="out_of_stock">ناموجود</option>
          </select>
        </div>

        {/* تعداد قابل خرید */}
        <TextField
          inputLabel="تعداد قابل خرید"
          inputValue={formData.name}
          onChangeInput={() =>
            handleChange(
              'max_purchase',
              (document.getElementById('text-field') as HTMLInputElement)
                ?.value || ''
            )
          }
        />
        {/* دکمه ثبت */}
        <div className="md:col-span-2 flex justify-start">
          <ButtonPrimary
            text="ساخت محصول جدید"
            handleClick={() => console.log('Product created:', formData)}
          />
        </div>
      </div>
    </form>
  );
}
