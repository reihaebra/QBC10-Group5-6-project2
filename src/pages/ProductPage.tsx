import { useState } from "react";
import ProductContainer from "../components/ProductContainer";
import UserDropdown from "../components/ui/UserDropdown";
import Sidebar from "../components/ui/Sidebar";
import SidebarLinks from "../components/SidebarLinks";
import RelatedProducts from "../components/RelatedProducts";
import CommentForm from "../components/CommentForm";
import CommentItem from "../components/CommentItem";

function ProductPage() {
  const [activeSection, setActiveSection] = useState("related");

  const [comments, setComments] = useState([
    {
      name: "علی موسوی",
      date: "1403/05/31",
      text: "متن پیام اینجا وارد میشود که میتواند یه متن بلند باشد برای مثال لورم ایپسوم یک متن ساختگی هست برای کارهای گرافیکی",
      rating: 4,
    },
  ]);

  const handleCommentSubmit = (newComment: {
    name: string;
    date: string;
    text: string;
    rating: number;
  }) => {
    setComments((prev) => [...prev, newComment]);
  };

  return (
    <>
      <Sidebar>
        <UserDropdown />
      </Sidebar>
      <div className="flex flex-col pr-32 py-20 bg-background-base-light dark:bg-[var(--color-background-primary-dark)] min-h-screen h-full">
        <ProductContainer />
        <div className="flex pt-16 gap-28 pr-20">
          <SidebarLinks
            activeSection={activeSection}
            onSelect={setActiveSection}
          />

          <div className="flex flex-1 flex-col">
            {activeSection === "related" && <RelatedProducts />}

            {activeSection === "add" && (
              <CommentForm onSubmit={handleCommentSubmit} />
            )}

            {activeSection === "view" && (
              <div className="flex flex-col gap-4">
                {comments.length === 0 ? (
                  <p>هیچ نظری ثبت نشده است.</p>
                ) : (
                  comments.map((c, index) => (
                    <CommentItem
                      key={index}
                      name={c.name}
                      date={c.date}
                      text={c.text}
                      rating={c.rating}
                    />
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
