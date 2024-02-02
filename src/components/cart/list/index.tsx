type listProps = {
  items: any;
  title: string;
  description?: string;
};

const Item = ({ title, description }: any) => {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{description}</h4>
    </div>
  );
};

export const ChartList = ({ items, title, description }: listProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
      {items.map((item: any) => {
        return <Item title={item.title} description={item.description} />;
      })}
    </div>
  );
};
