interface BreadCrumbsInterface {
  title: string;
  sub: string;
}

export default function BreadCrumbs({ title, sub }: BreadCrumbsInterface) {
  return (
    <header>
      <h1 className="text-2xl font-bold">
        {title}
        <span className="text-base font-light">
          /{sub}
          <span className="font-bold text-secondary">.</span>
        </span>
      </h1>
    </header>
  );
}
