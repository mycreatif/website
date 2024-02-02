import { PromoCard } from "../../components";

export const CategoryPage = () => {
  return (
    <div className="section-fixed centered-row">
      <PromoCard
        title="Pack 1"
        description="Incluye hasta 5 stickers"
        price={1500}
      />
      <PromoCard
        title="Pack 1"
        description="Incluye hasta 5 stickers"
        price={1500}
      />
      <PromoCard
        title="Pack 1"
        description="Incluye hasta 5 stickers"
        price={1500}
      />
    </div>
  );
};
