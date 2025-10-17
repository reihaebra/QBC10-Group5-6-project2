import TextField from "./ui/TextField";

interface ProductFormProps {
  formData: {
    name: string;
    price: string;
    brand: string;
    description: string;
    max_purchase: string;
    stock_status: string;
  };
  image: string | null;
  onChange: (field: string, value: string) => void;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ProductForm = ({
  formData,
  image,
  onChange,
  onImageChange,
  onSubmit,
}: ProductFormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className="font-yekan-bakh font-bold w-full max-w-6xl mx-auto 
      text-primary-text-light dark:text-[var(--color-primary-text-dark)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2 flex flex-col items-center">
          <div className="w-full max-w-3xl rounded-lg">
            {image && (
              <img
                src={image}
                alt="عکس محصول"
                className="rounded-lg object-cover w-full max-h-96 mb-6"
              />
            )}
          </div>
          <div
            className="w-full h-32 rounded-lg border-2 border-dashed 
            bg-on-primary-light dark:bg-[var(--color-base-text-field-dark)]
            border-input-light dark:border-[var(--color-input-dark)]
            flex justify-center items-center"
          >
            <label
              htmlFor="image-upload-place"
              className="font-normal text-base leading-5 text-center
              text-secondary-light dark:text-[var(--color-secondary-dark)]
              cursor-pointer"
            >
              آپلود عکس
            </label>
            <input
              type="file"
              id="image-upload-place"
              accept="image/*"
              onChange={onImageChange}
              className="hidden"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <TextField
            type="text"
            inputLabel="نام"
            inputValue={formData.name}
            inputName="name"
            placeholder="نام محصول را وارد نمایید"
            onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange("name", e.target.value)
            }
          />
        </div>
        <TextField
          type="text"
          inputLabel="قیمت"
          inputValue={formData.price}
          inputName="price"
          placeholder="قیمت محصول را وارد نمایید"
          onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange("price", e.target.value)
          }
        />
        <TextField
          type="text"
          inputLabel="برند"
          inputValue={formData.brand}
          inputName="brand"
          placeholder="برند محصول را وارد نمایید"
          onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange("brand", e.target.value)
          }
        />
        <div className="md:col-span-2 flex flex-col gap-2">
          <label
            className="font-normal text-base
            text-primary-text-light dark:text-[var(--color-on-primary-light)]"
          >
            توضیحات
          </label>
          <textarea
            name="description"
            id="description"
            rows={4}
            value={formData.description}
            onChange={(e) => onChange("description", e.target.value)}
            placeholder="توضیحات محصول را وارد نمایید"
            className="w-full resize-none font-normal text-base
            text-primary-text-light pt-2.5 pr-2 
            bg-on-primary-light border border-input-light
            rounded-lg placeholder-secondary-light outline-none
            focus:border-input-active dark:text-[var(--color-on-primary-light)] dark:placeholder-[var(--color-secondary-dark)]
            dark:bg-[var(--color-base-text-field-dark)] dark:border-[var(--color-input-dark)]"
          />
        </div>
        <TextField
          type="text"
          inputLabel="تعداد قابل خرید"
          inputValue={formData.max_purchase}
          inputName="max_purchase"
          placeholder="تعداد قابل خرید را وارد نمایید"
          onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange("max_purchase", e.target.value)
          }
        />
        <div className="font-yekan-bakh flex flex-col items-start gap-2 w-full">
          <label
            className="font-normal text-base leading-6
            text-primary-text-light dark:text-[var(--color-on-primary-light)]"
          >
            موجودی
          </label>
          <select
            name="stock_status"
            value={formData.stock_status}
            onChange={(e) => onChange("stock_status", e.target.value)}
            className="font-normal px-2 py-2.5 w-full
            text-primary-text-light bg-on-primary-light
            border border-input-light rounded-lg
            placeholder-secondary-light outline-none
            focus:border-input-active dark:text-[var(--color-on-primary-light)] dark:bg-[var(--color-base-text-field-dark)]
            dark:border-[var(--color-input-dark)]"
          >
            <option value="in_stock">موجود</option>
            <option value="out_of_stock">ناموجود</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
