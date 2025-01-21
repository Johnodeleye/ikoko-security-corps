const SectionHeader = ({
    title,
    eyebrow,
    description,
  }: {
    title: string;
    eyebrow?: string;
    description?: string;
  }) => {
    return (
      <div className="text-center mb-12">
        {eyebrow && (
          <p className="text-rose-500 uppercase font-semibold tracking-wide text-sm">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl font-bold text-red-500">{title}</h1>
        {description && (
          <p className="text-gray-400 mt-2 max-w-lg mx-auto">{description}</p>
        )}
        <div className="w-20 h-1 bg-rose-500 mx-auto mt-4"></div>
      </div>
    );
  };
  
  export default SectionHeader;
  