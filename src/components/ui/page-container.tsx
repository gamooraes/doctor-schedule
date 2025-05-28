export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-full w-full space-y-6 p-10">{children}</div>;
};

export const PageHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full items-center justify-between">{children}</div>
  );
};

export const PageHeeaderContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <h1 className="w-full space-y-1">{children}</h1>;
};

export const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-2xl font-bold">{children}</p>;
};

export const PageDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <p className="text-muted-foreground text-sm">{children}</p>;
};

export const PageActions = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center gap-2">{children}</div>;
};

export const PageContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-6">{children}</div>;
};
