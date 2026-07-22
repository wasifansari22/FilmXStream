const PageHeader = ({ title, subtitle, children, }) => {
    return (
        <div className="border-b border-gray-800 pb-6 mb-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                    <h1 className="text-4xl md:text-4xl font-bold">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-gray-400 mt-2">
                            {subtitle}
                        </p>
                    )}
                </div>

                {children && (
                    <div>
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PageHeader;